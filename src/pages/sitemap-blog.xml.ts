import type { APIRoute } from 'astro'
import { listPublishedPosts } from '../lib/db'
import { siteUrl } from '../data/seo-content'

export const prerender = false

export const GET: APIRoute = async ({ locals }) => {
  const { DB } = locals.runtime.env
  const posts = await listPublishedPosts(DB)

  const urls = posts
    .map(
      (post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    ${post.published_at ? `<lastmod>${post.published_at}</lastmod>` : ''}
  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
