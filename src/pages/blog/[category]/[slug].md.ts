import type { APIRoute } from 'astro'
import { getPublishedPostBySlug } from '../../../lib/db'

export const prerender = false

export const GET: APIRoute = async ({ params, locals }) => {
  const { DB } = locals.runtime.env
  const post = params.slug ? await getPublishedPostBySlug(DB, params.slug) : null
  if (!post || post.category_slug !== params.category) {
    return new Response('Not found', { status: 404 })
  }

  const body = `# ${post.title}

${post.subtitle ? `> ${post.subtitle}\n\n` : ''}${post.description}

---

${post.body_md}
`
  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
