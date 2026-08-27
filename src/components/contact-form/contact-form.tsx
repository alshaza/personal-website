import { useEffect, useRef, useState } from 'react'
import { Alert, Button, Link, TextField, Typography } from '@mui/material'
import { FormContainer, HoneypotField } from './contact-form.styles'

declare global {
  interface Window {
    turnstile?: {
      reset: (container?: string | HTMLElement) => void
    }
  }
}

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
const TURNSTILE_SITE_KEY = (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined)?.trim()

const COOLDOWN_COOKIE = 'contact_last_sent'
const COOLDOWN_MS = 5 * 60 * 1000

function getCooldownRemainingMs(): number {
  const match = document.cookie.match(/(?:^|; )contact_last_sent=([^;]*)/)
  if (!match) return 0
  const remaining = Number(match[1]) + COOLDOWN_MS - Date.now()
  return remaining > 0 ? remaining : 0
}

function startCooldown() {
  document.cookie = `${COOLDOWN_COOKIE}=${Date.now()}; max-age=${COOLDOWN_MS / 1000}; path=/; samesite=lax`
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [cooldownRemainingMs, setCooldownRemainingMs] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setCooldownRemainingMs(getCooldownRemainingMs())

    if (!TURNSTILE_SITE_KEY) return
    if (document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT_SRC
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })
      const result = response.headers.get('content-type')?.includes('application/json')
        ? ((await response.json()) as { success: boolean; error?: string })
        : { success: false, error: 'Something went wrong. Please try again.' }

      if (result.success) {
        setStatus('success')
        formRef.current?.reset()
        startCooldown()
        setCooldownRemainingMs(COOLDOWN_MS)
      } else {
        setStatus('error')
        setError(result.error ?? 'Something went wrong. Please try again.')
        window.turnstile?.reset()
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
      window.turnstile?.reset()
    }
  }

  const cooldownMinutes = Math.ceil(cooldownRemainingMs / 60_000)
  const isCoolingDown = cooldownRemainingMs > 0
  const fieldsDisabled = status === 'submitting' || isCoolingDown

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      {status === 'success' && (
        <Alert severity="success">
          Thanks for reaching out — I'll get back to you soon. Want to talk sooner?{' '}
          <Link href="#calendar-booking" color="inherit">
            Book a free call
          </Link>
          .
        </Alert>
      )}

      {status !== 'success' && isCoolingDown && (
        <Alert severity="info">
          You already sent a message recently. You can send another in about {cooldownMinutes} minute
          {cooldownMinutes === 1 ? '' : 's'}, or{' '}
          <Link href="#calendar-booking" color="inherit">
            book a free call
          </Link>{' '}
          in the meantime.
        </Alert>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      <HoneypotField
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <TextField label="Name" name="name" required fullWidth disabled={fieldsDisabled} />
      <TextField label="Email" name="email" type="email" required fullWidth disabled={fieldsDisabled} />
      <TextField label="Message" name="message" required fullWidth multiline minRows={4} disabled={fieldsDisabled} />

      {TURNSTILE_SITE_KEY ? (
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-action="contact" />
      ) : (
        <Typography variant="body2" color="text.secondary">
          Contact form verification is not configured yet.
        </Typography>
      )}

      <Button type="submit" variant="contained" disabled={fieldsDisabled || !TURNSTILE_SITE_KEY}>
        {status === 'submitting' ? 'Sending…' : isCoolingDown ? `Try again in ~${cooldownMinutes}m` : 'Send message'}
      </Button>
    </FormContainer>
  )
}
