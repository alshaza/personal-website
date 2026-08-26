import type { APIRoute } from 'astro'
import sanitizeHtml from 'sanitize-html'
import { insertContactSubmission } from '../../lib/db'

export const prerender = false

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(input: string, maxLength: number): string {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim().slice(0, maxLength)
}

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const { DB, TURNSTILE_SECRET } = locals.runtime.env
  const form = await request.formData()

  // Honeypot: real visitors never fill this hidden field.
  if (String(form.get('company') ?? '').length > 0) {
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
  }

  const name = clean(String(form.get('name') ?? ''), 200)
  const email = clean(String(form.get('email') ?? ''), 320)
  const message = clean(String(form.get('message') ?? ''), 5000)
  const token = String(form.get('cf-turnstile-response') ?? '')

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ success: false, error: 'Please fill in all fields with a valid email.' }), {
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

  let turnstileOk = false
  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: clientAddress ?? '',
      }),
    })
    if (verifyRes.ok) {
      const result = (await verifyRes.json()) as { success: boolean }
      turnstileOk = result.success === true
    }
  } catch {
    turnstileOk = false
  }

  if (!turnstileOk) {
    return new Response(JSON.stringify({ success: false, error: 'Verification failed. Please try again.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  await insertContactSubmission(DB, {
    name,
    email,
    message,
    ip: clientAddress ?? null,
    user_agent: request.headers.get('user-agent'),
    turnstile_ok: true,
  })

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
}
