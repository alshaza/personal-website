export interface Post {
  id: number
  slug: string
  title: string
  description: string
  body_md: string
  body_html: string
  status: 'draft' | 'published'
  cover_image_url: string | null
  og_image_url: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export type PostSummary = Pick<
  Post,
  'slug' | 'title' | 'description' | 'cover_image_url' | 'published_at'
>

export async function listPublishedPosts(db: D1Database): Promise<PostSummary[]> {
  const { results } = await db
    .prepare(
      `SELECT slug, title, description, cover_image_url, published_at
       FROM posts
       WHERE status = 'published'
       ORDER BY published_at DESC`,
    )
    .all<PostSummary>()
  return results
}

export async function getPublishedPostBySlug(db: D1Database, slug: string): Promise<Post | null> {
  const post = await db
    .prepare(`SELECT * FROM posts WHERE slug = ? AND status = 'published'`)
    .bind(slug)
    .first<Post>()
  return post ?? null
}

// --- Admin (backoffice) ---

export async function listAllPosts(db: D1Database): Promise<Post[]> {
  const { results } = await db.prepare(`SELECT * FROM posts ORDER BY updated_at DESC`).all<Post>()
  return results
}

export async function getPostById(db: D1Database, id: number): Promise<Post | null> {
  const post = await db.prepare(`SELECT * FROM posts WHERE id = ?`).bind(id).first<Post>()
  return post ?? null
}

export async function isSlugTaken(db: D1Database, slug: string, excludeId?: number): Promise<boolean> {
  const row = await db
    .prepare(`SELECT id FROM posts WHERE slug = ? AND id != ?`)
    .bind(slug, excludeId ?? -1)
    .first<{ id: number }>()
  return row !== null
}

export interface PostInput {
  slug: string
  title: string
  description: string
  body_md: string
  body_html: string
  status: 'draft' | 'published'
}

export async function createPost(db: D1Database, input: PostInput): Promise<number> {
  const now = new Date().toISOString()
  const publishedAt = input.status === 'published' ? now : null
  const result = await db
    .prepare(
      `INSERT INTO posts (slug, title, description, body_md, body_html, status, published_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(input.slug, input.title, input.description, input.body_md, input.body_html, input.status, publishedAt, now, now)
    .run()
  return result.meta.last_row_id
}

export async function updatePost(db: D1Database, id: number, input: PostInput): Promise<void> {
  const existing = await getPostById(db, id)
  const now = new Date().toISOString()
  const publishedAt =
    input.status === 'published' ? (existing?.published_at ?? now) : existing?.published_at ?? null
  await db
    .prepare(
      `UPDATE posts
       SET slug = ?, title = ?, description = ?, body_md = ?, body_html = ?, status = ?, published_at = ?, updated_at = ?
       WHERE id = ?`,
    )
    .bind(input.slug, input.title, input.description, input.body_md, input.body_html, input.status, publishedAt, now, id)
    .run()
}

export async function deletePost(db: D1Database, id: number): Promise<void> {
  await db.prepare(`DELETE FROM posts WHERE id = ?`).bind(id).run()
}

// --- Sessions ---

export async function createSession(db: D1Database, tokenHash: string, ttlSeconds: number): Promise<void> {
  const expiresAt = new Date(Date.now() + ttlSeconds * 1000).toISOString()
  await db.prepare(`INSERT INTO sessions (id, expires_at) VALUES (?, ?)`).bind(tokenHash, expiresAt).run()
}

export async function isSessionValid(db: D1Database, tokenHash: string): Promise<boolean> {
  const session = await db
    .prepare(`SELECT expires_at FROM sessions WHERE id = ?`)
    .bind(tokenHash)
    .first<{ expires_at: string }>()
  if (!session) return false
  return new Date(session.expires_at).getTime() > Date.now()
}

export async function deleteSession(db: D1Database, tokenHash: string): Promise<void> {
  await db.prepare(`DELETE FROM sessions WHERE id = ?`).bind(tokenHash).run()
}

// --- Contact submissions ---

export interface ContactSubmissionInput {
  name: string
  email: string
  message: string
  ip: string | null
  user_agent: string | null
  turnstile_ok: boolean
}

export async function insertContactSubmission(db: D1Database, input: ContactSubmissionInput): Promise<void> {
  await db
    .prepare(
      `INSERT INTO contact_submissions (name, email, message, ip, user_agent, turnstile_ok)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .bind(input.name, input.email, input.message, input.ip, input.user_agent, input.turnstile_ok ? 1 : 0)
    .run()
}
