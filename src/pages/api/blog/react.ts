import type { APIRoute } from 'astro'
import { clearPostReaction, getPostReactionCounts, getPublishedPostBySlug, setPostReaction } from '../../../lib/db'
import { getOrSetVisitorId } from '../../../lib/visitor'

export const prerender = false

const VALID_REACTIONS = new Set(['fire'])

interface ReactBody {
  slug?: string
  reaction?: 'fire' | null
}

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const { DB } = locals.runtime.env
  const body = (await request.json().catch(() => null)) as ReactBody | null
  const slug = body?.slug
  const reaction = body?.reaction ?? null

  if (!slug || (reaction !== null && !VALID_REACTIONS.has(reaction))) {
    return new Response(JSON.stringify({ success: false, error: 'Invalid request.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const post = await getPublishedPostBySlug(DB, slug)
  if (!post) {
    return new Response(JSON.stringify({ success: false, error: 'Post not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const visitorId = getOrSetVisitorId(cookies)

  if (reaction === null) {
    await clearPostReaction(DB, post.id, visitorId)
  } else {
    await setPostReaction(DB, post.id, visitorId, reaction)
  }

  const counts = await getPostReactionCounts(DB, post.id)

  return new Response(JSON.stringify({ success: true, ...counts, userReaction: reaction }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
