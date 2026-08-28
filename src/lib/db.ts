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
  category_id: number
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface PostWithEngagement extends Post {
  views: number
  fire_count: number
  water_count: number
  category_name: string | null
  category_slug: string | null
}

export interface Category {
  id: number
  name: string
  slug: string
  created_at: string
}

// Every post is required to have a category (enforced by the admin form), so
// public-facing queries use an INNER JOIN and expose category_slug as non-null.

export type PostSummary = Pick<
  Post,
  'slug' | 'title' | 'description' | 'cover_image_url' | 'published_at'
> & { category_slug: string; category_name: string; views: number }

export async function listPublishedPosts(db: D1Database): Promise<PostSummary[]> {
  const { results } = await db
    .prepare(
      `SELECT p.slug, p.title, p.description, p.cover_image_url, p.published_at, c.slug AS category_slug, c.name AS category_name,
        (SELECT COUNT(*) FROM post_views v WHERE v.post_id = p.id) AS views
       FROM posts p
       JOIN categories c ON c.id = p.category_id
       WHERE p.status = 'published'
       ORDER BY p.published_at DESC`,
    )
    .all<PostSummary>()
  return results
}

export async function getPublishedPostBySlug(
  db: D1Database,
  slug: string,
): Promise<(Post & { category_slug: string; category_name: string }) | null> {
  const post = await db
    .prepare(
      `SELECT p.*, c.slug AS category_slug, c.name AS category_name FROM posts p
       JOIN categories c ON c.id = p.category_id
       WHERE p.slug = ? AND p.status = 'published'`,
    )
    .bind(slug)
    .first<Post & { category_slug: string; category_name: string }>()
  return post ?? null
}

// --- Admin (backoffice) ---

export async function listAllPosts(db: D1Database): Promise<PostWithEngagement[]> {
  const { results } = await db
    .prepare(
      `SELECT p.*, c.name AS category_name, c.slug AS category_slug,
        (SELECT COUNT(*) FROM post_views v WHERE v.post_id = p.id) AS views,
        (SELECT COUNT(*) FROM post_reactions r WHERE r.post_id = p.id AND r.reaction = 'fire') AS fire_count,
        (SELECT COUNT(*) FROM post_reactions r WHERE r.post_id = p.id AND r.reaction = 'water') AS water_count
       FROM posts p
       LEFT JOIN categories c ON c.id = p.category_id
       ORDER BY p.updated_at DESC`,
    )
    .all<PostWithEngagement>()
  return results
}

export async function getPostById(
  db: D1Database,
  id: number,
): Promise<(Post & { category_name: string | null; category_slug: string | null }) | null> {
  const post = await db
    .prepare(
      `SELECT p.*, c.name AS category_name, c.slug AS category_slug
       FROM posts p LEFT JOIN categories c ON c.id = p.category_id WHERE p.id = ?`,
    )
    .bind(id)
    .first<Post & { category_name: string | null; category_slug: string | null }>()
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
  category_id: number
}

export async function createPost(db: D1Database, input: PostInput): Promise<number> {
  const now = new Date().toISOString()
  const publishedAt = input.status === 'published' ? now : null
  const result = await db
    .prepare(
      `INSERT INTO posts (slug, title, subtitle, description, body_md, body_html, status, category_id, published_at, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      input.slug,
      input.title,
      input.subtitle,
      input.description,
      input.body_md,
      input.body_html,
      input.status,
      input.category_id,
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
       SET slug = ?, title = ?, subtitle = ?, description = ?, body_md = ?, body_html = ?, status = ?, category_id = ?, published_at = ?, updated_at = ?
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
      input.category_id,
      publishedAt,
      now,
      id,
    )
    .run()
}

// --- Categories ---

export async function listCategories(db: D1Database): Promise<Category[]> {
  const { results } = await db.prepare(`SELECT * FROM categories ORDER BY name ASC`).all<Category>()
  return results
}

async function isCategorySlugTaken(db: D1Database, slug: string): Promise<boolean> {
  const row = await db.prepare(`SELECT id FROM categories WHERE slug = ?`).bind(slug).first<{ id: number }>()
  return row !== null
}

async function generateUniqueCategorySlug(db: D1Database, base: string): Promise<string> {
  const baseSlug = slugify(base) || 'category'
  let candidate = baseSlug
  let suffix = 2
  while (await isCategorySlugTaken(db, candidate)) {
    candidate = `${baseSlug}-${suffix}`
    suffix++
  }
  return candidate
}

export async function getCategoryByName(db: D1Database, name: string): Promise<Category | null> {
  const row = await db.prepare(`SELECT * FROM categories WHERE name = ? COLLATE NOCASE`).bind(name).first<Category>()
  return row ?? null
}

export async function createCategory(db: D1Database, name: string): Promise<number> {
  const slug = await generateUniqueCategorySlug(db, name)
  const result = await db.prepare(`INSERT INTO categories (name, slug) VALUES (?, ?)`).bind(name, slug).run()
  return result.meta.last_row_id
}

/** Looks up a category by name (case-insensitive), creating it if it doesn't exist yet. */
export async function findOrCreateCategory(db: D1Database, name: string): Promise<number | null> {
  const trimmed = name.trim()
  if (!trimmed) return null
  const existing = await getCategoryByName(db, trimmed)
  if (existing) return existing.id
  return createCategory(db, trimmed)
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

function isUniqueViolation(err: unknown): boolean {
  return err instanceof Error && err.message.includes('UNIQUE constraint failed')
}

export interface ContactSubmissionInput {
  name: string
  email: string
  message: string
  ip: string | null
  user_agent: string | null
  turnstile_ok: boolean
}

/** Returns false (and inserts nothing) if this email already submitted the contact form. */
export async function insertContactSubmission(db: D1Database, input: ContactSubmissionInput): Promise<boolean> {
  try {
    await db
      .prepare(
        `INSERT INTO contact_submissions (name, email, message, ip, user_agent, turnstile_ok)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .bind(input.name, input.email, input.message, input.ip, input.user_agent, input.turnstile_ok ? 1 : 0)
      .run()
    return true
  } catch (err) {
    if (isUniqueViolation(err)) return false
    throw err
  }
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

// --- Newsletter subscribers ---

export interface NewsletterSubscriberInput {
  email: string
  ip: string | null
  user_agent: string | null
  turnstile_ok: boolean
}

/** Returns false (and inserts nothing) if this email is already subscribed. */
export async function insertNewsletterSubscriber(db: D1Database, input: NewsletterSubscriberInput): Promise<boolean> {
  try {
    await db
      .prepare(`INSERT INTO newsletter_subscribers (email, ip, user_agent, turnstile_ok) VALUES (?, ?, ?, ?)`)
      .bind(input.email, input.ip, input.user_agent, input.turnstile_ok ? 1 : 0)
      .run()
    return true
  } catch (err) {
    if (isUniqueViolation(err)) return false
    throw err
  }
}
