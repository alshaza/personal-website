import type { APIRoute } from 'astro'
import { SESSION_COOKIE, hashSessionToken } from '../../../lib/auth'
import { deleteSession } from '../../../lib/db'

export const prerender = false

export const POST: APIRoute = async ({ cookies, locals, redirect }) => {
  const token = cookies.get(SESSION_COOKIE)?.value
  if (token) {
    await deleteSession(locals.runtime.env.DB, await hashSessionToken(token))
  }
  cookies.delete(SESSION_COOKIE, { path: '/' })
  return redirect('/admin/login')
}
