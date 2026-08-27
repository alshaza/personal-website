import type { APIRoute } from 'astro'
import { isAdminAuthenticated } from '../../../lib/auth'

export const prerender = false

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = new Set(['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg+xml'])
const EXTENSION_BY_TYPE: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
}

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ success: false, error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const { DB, IMAGES } = locals.runtime.env

  if (!(await isAdminAuthenticated(cookies, DB))) {
    return jsonError('Unauthorized.', 401)
  }

  const form = await request.formData()
  const file = form.get('image')

  if (!(file instanceof File)) {
    return jsonError('No image uploaded.', 400)
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return jsonError('Unsupported image type.', 400)
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return jsonError('Image is too large (max 5MB).', 400)
  }

  const extension = EXTENSION_BY_TYPE[file.type]
  const key = `${crypto.randomUUID()}.${extension}`

  await IMAGES.put(key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  })

  return new Response(JSON.stringify({ success: true, url: `/api/blog-images/${key}` }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
