import { defineMiddleware } from 'astro/middleware'
import { SESSION_COOKIE, hashSessionToken } from './lib/auth'
import { isSessionValid } from './lib/db'

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  const isAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin/login'

  if (!isAdminRoute) return next()

  const token = context.cookies.get(SESSION_COOKIE)?.value
  const { DB } = context.locals.runtime.env
  const valid = token ? await isSessionValid(DB, await hashSessionToken(token)) : false

  if (!valid) {
    return context.redirect('/admin/login')
  }

  return next()
})
