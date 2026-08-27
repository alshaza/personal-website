import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ params, locals }) => {
  const { IMAGES } = locals.runtime.env
  const key = params.key

  if (!key) {
    return new Response('Not found', { status: 404 })
  }

  const object = await IMAGES.get(key)
  if (!object) {
    return new Response('Not found', { status: 404 })
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
