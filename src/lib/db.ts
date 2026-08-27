import { slugify } from './slugify'

export interface Post {
  id: number
  slug: string
  title: string
  subtitle: string
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

export interface PostWithEngagement extends Post {
  views: number
  fire_count: number
  water_count: number
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

export async function listAllPosts(db: D1Database): Promise<PostWithEngagement[]> {
  const { results } = await db
    .prepare(
      `SELECT p.*,
        (SELECT COUNT(*) FROM post_views v WHERE v.post_id = p.id) AS views,
        (SELECT COUNT(*) FROM post_reactions r WHERE r.post_id = p.id AND r.reaction = 'fire') AS fire_count,
        (SELECT COUNT(*) FROM post_reactions r WHERE r.post_id = p.id AND r.reaction = 'water') AS water_count
       FROM posts p
       ORDER BY p.updated_at DESC`,
    )
    .all<PostWithEngagement>()
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

export async function generateUniqueSlug(db: D1Database, base: string, excludeId?: number): Promise<string> {
  const baseSlug = slugify(base) || 'post'
  let candidate = baseSlug
  let suffix = 2
  while (await isSlugTaken(db, candidate, excludeId)) {
    candidate = `${baseSlug}-${suffix}`
    suffix++
  }
  return candidate
}

export interface PostInput {
  slug: string
  title: string
  subtitle: string
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
      `INSERT INTO posts (slug, title, subtitle, description, body_md, body_html, status, published_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      input.slug,
      input.title,
      input.subtitle,
      input.description,
      input.body_md,
      input.body_html,
      input.status,
      publishedAt,
      now,
      now,
    )
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
       SET slug = ?, title = ?, subtitle = ?, description = ?, body_md = ?, body_html = ?, status = ?, published_at = ?, updated_at = ?
       WHERE id = ?`,
    )
    .bind(
      input.slug,
      input.title,
      input.subtitle,
      input.description,
      input.body_md,
      input.body_html,
      input.status,
      publishedAt,
      now,
      id,
    )
    .run()
}

export async function deletePost(db: D1Database, id: number): Promise<void> {
  await db.batch([
    db.prepare(`DELETE FROM post_reactions WHERE post_id = ?`).bind(id),
    db.prepare(`DELETE FROM post_views WHERE post_id = ?`).bind(id),
    db.prepare(`DELETE FROM posts WHERE id = ?`).bind(id),
  ])
}

// --- Post engagement (views + reactions) ---

export interface PostEngagement {
  views: number
  fire: number
  water: number
  userReaction: 'fire' | 'water' | null
}

function countFromResult(result: D1Result<{ count: number }>): number {
  return result.results[0]?.count ?? 0
}

export async function recordViewAndGetEngagement(
  db: D1Database,
  postId: number,
  visitorId: string,
): Promise<PostEngagement> {
  const [, viewsResult, fireResult, waterResult, reactionResult] = await db.batch<
    { count: number } | { reaction: 'fire' | 'water' }
  >([
    db.prepare(`INSERT OR IGNORE INTO post_views (post_id, visitor_id) VALUES (?, ?)`).bind(postId, visitorId),
    db.prepare(`SELECT COUNT(*) as count FROM post_views WHERE post_id = ?`).bind(postId),
    db.prepare(`SELECT COUNT(*) as count FROM post_reactions WHERE post_id = ? AND reaction = 'fire'`).bind(postId),
    db.prepare(`SELECT COUNT(*) as count FROM post_reactions WHERE post_id = ? AND reaction = 'water'`).bind(postId),
    db.prepare(`SELECT reaction FROM post_reactions WHERE post_id = ? AND visitor_id = ?`).bind(postId, visitorId),
  ])

  return {
    views: countFromResult(viewsResult as D1Result<{ count: number }>),
    fire: countFromResult(fireResult as D1Result<{ count: number }>),
    water: countFromResult(waterResult as D1Result<{ count: number }>),
    userReaction: (reactionResult.results[0] as { reaction: 'fire' | 'water' } | undefined)?.reaction ?? null,
  }
}

export async function setPostReaction(
  db: D1Database,
  postId: number,
  visitorId: string,
  reaction: 'fire' | 'water',
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO post_reactions (post_id, visitor_id, reaction) VALUES (?, ?, ?)
       ON CONFLICT (post_id, visitor_id) DO UPDATE SET reaction = excluded.reaction, created_at = CURRENT_TIMESTAMP`,
    )
    .bind(postId, visitorId, reaction)
    .run()
}

export async function clearPostReaction(db: D1Database, postId: number, visitorId: string): Promise<void> {
  await db.prepare(`DELETE FROM post_reactions WHERE post_id = ? AND visitor_id = ?`).bind(postId, visitorId).run()
}

export async function getPostReactionCounts(db: D1Database, postId: number): Promise<{ fire: number; water: number }> {
  const [fireResult, waterResult] = await db.batch<{ count: number }>([
    db.prepare(`SELECT COUNT(*) as count FROM post_reactions WHERE post_id = ? AND reaction = 'fire'`).bind(postId),
    db.prepare(`SELECT COUNT(*) as count FROM post_reactions WHERE post_id = ? AND reaction = 'water'`).bind(postId),
  ])
  return { fire: countFromResult(fireResult), water: countFromResult(waterResult) }
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

export interface ContactSubmission {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export async function listContactSubmissions(db: D1Database): Promise<ContactSubmission[]> {
  const { results } = await db
    .prepare(`SELECT id, name, email, message, created_at FROM contact_submissions ORDER BY created_at DESC`)
    .all<ContactSubmission>()
  return results
}

export async function deleteContactSubmission(db: D1Database, id: number): Promise<void> {
  await db.prepare(`DELETE FROM contact_submissions WHERE id = ?`).bind(id).run()
}
