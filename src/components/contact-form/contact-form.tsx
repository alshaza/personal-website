import { useEffect, useRef, useState } from 'react'
import { Alert, Button, TextField, Typography } from '@mui/material'
import { FormContainer, HoneypotField } from './contact-form.styles'

declare global {
  interface Window {
    turnstile?: {
      reset: (container?: string | HTMLElement) => void
    }
  }
}

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
const TURNSTILE_SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
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
      const result = (await response.json()) as { success: boolean; error?: string }

      if (result.success) {
        setStatus('success')
        formRef.current?.reset()
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

  if (status === 'success') {
    return <Alert severity="success">Thanks for reaching out — I'll get back to you soon.</Alert>
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      {error && <Alert severity="error">{error}</Alert>}

      <HoneypotField
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <TextField label="Name" name="name" required fullWidth />
      <TextField label="Email" name="email" type="email" required fullWidth />
      <TextField label="Message" name="message" required fullWidth multiline minRows={4} />

      {TURNSTILE_SITE_KEY ? (
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-action="contact" />
      ) : (
        <Typography variant="body2" color="text.secondary">
          Contact form verification is not configured yet.
        </Typography>
      )}

      <Button type="submit" variant="contained" disabled={status === 'submitting' || !TURNSTILE_SITE_KEY}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </FormContainer>
  )
}
