import type { APIRoute } from 'astro'
import { insertNewsletterSubscriber } from '../../lib/db'
import { cleanInput, EMAIL_RE } from '../../lib/form-validation'
import { verifyTurnstileToken } from '../../lib/turnstile-server'

export const prerender = false

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const { DB, TURNSTILE_SECRET } = locals.runtime.env
  const form = await request.formData()

  // Honeypot: real visitors never fill this hidden field.
  if (String(form.get('company') ?? '').length > 0) {
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
  }

  const email = cleanInput(String(form.get('email') ?? ''), 320)
  const token = String(form.get('cf-turnstile-response') ?? '')

  if (!email || !EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ success: false, error: 'Please enter a valid email.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  if (!token || token.length > 2048) {
    return new Response(JSON.stringify({ success: false, error: 'Verification failed. Please try again.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const turnstileOk = await verifyTurnstileToken(token, TURNSTILE_SECRET, clientAddress ?? null)

  if (!turnstileOk) {
    return new Response(JSON.stringify({ success: false, error: 'Verification failed. Please try again.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Duplicate emails are just ignored (not reported as an error) so the
  // response never reveals whether an address is already on file.
  await insertNewsletterSubscriber(DB, {
    email,
    ip: clientAddress ?? null,
    user_agent: request.headers.get('user-agent'),
    turnstile_ok: true,
  })

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
}
