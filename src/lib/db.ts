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
