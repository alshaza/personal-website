import type { AstroCookies } from 'astro'

export const SEEN_POSTS_COOKIE = 'blog_seen_posts'
const SEEN_POSTS_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export function getSeenPostIds(cookies: AstroCookies): Set<number> {
  const value = cookies.get(SEEN_POSTS_COOKIE)?.value
  return new Set(value ? value.split(',').filter(Boolean).map(Number) : [])
}

/** Remembers this post was seen so its "New" badge won't show to this visitor again. */
export function markPostSeen(cookies: AstroCookies, postId: number) {
  const seen = getSeenPostIds(cookies)
  if (seen.has(postId)) return
  seen.add(postId)
  cookies.set(SEEN_POSTS_COOKIE, [...seen].join(','), {
    path: '/',
    maxAge: SEEN_POSTS_MAX_AGE,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })
}
