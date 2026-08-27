import { defineMiddleware } from 'astro/middleware'
import { isAdminAuthenticated } from './lib/auth'

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url
  const isAdminRoute = pathname.startsWith('/admin') && pathname !== '/admin/login'

  if (!isAdminRoute) return next()

  const { DB } = context.locals.runtime.env
  const valid = await isAdminAuthenticated(context.cookies, DB)

  if (!valid) {
    return context.redirect('/admin/login')
  }

  return next()
})
