import type { AstroCookies } from 'astro'

export const VISITOR_COOKIE = 'visitor_id'
const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export function getOrSetVisitorId(cookies: AstroCookies): string {
  const existing = cookies.get(VISITOR_COOKIE)?.value
  if (existing) return existing

  const id = crypto.randomUUID()
  cookies.set(VISITOR_COOKIE, id, {
    path: '/',
    maxAge: VISITOR_COOKIE_MAX_AGE,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })
  return id
}
