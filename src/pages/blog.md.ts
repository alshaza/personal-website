import type { APIRoute } from 'astro'
import { listPublishedPosts } from '../lib/db'
import { renderBlogIndexMarkdown } from '../lib/page-markdown'

export const prerender = false

export const GET: APIRoute = async ({ locals }) => {
  const { DB } = locals.runtime.env
  let posts: Awaited<ReturnType<typeof listPublishedPosts>> = []
  try {
    posts = await listPublishedPosts(DB)
  } catch (err) {
    console.error('listPublishedPosts failed:', err)
  }
  return new Response(renderBlogIndexMarkdown(posts), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
