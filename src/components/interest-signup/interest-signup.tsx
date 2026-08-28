import { useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Alert, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { keyframes } from '@mui/material/styles'
import { loadTurnstileScript } from '../../lib/turnstile-client'
import { HoneypotField } from '../contact-form/contact-form.styles'
import { InterestForm } from './interest-signup.styles'

const TURNSTILE_SITE_KEY = (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined)?.trim()

const pulse = keyframes({
  '0%, 100%': { boxShadow: '0 0 0 0 rgba(25, 118, 210, 0.35)' },
  '50%': { boxShadow: '0 0 0 8px rgba(25, 118, 210, 0)' },
})

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function InterestSignup() {
  const [expanded, setExpanded] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (expanded && TURNSTILE_SITE_KEY) loadTurnstileScript()
  }, [expanded])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setError(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })
      const result = response.headers.get('content-type')?.includes('application/json')
        ? ((await response.json()) as { success: boolean; error?: string })
        : { success: false, error: 'Something went wrong. Please try again.' }

      if (result.success) {
        setStatus('success')
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
    return (
      <Alert severity="success" sx={{ mt: 4 }}>
        I will inform you with updates as soon as I start. Thank you for your support!
      </Alert>
    )
  }

  return (
    <Box
      sx={{
        mt: 4,
        textAlign: 'center',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-blue)',
        padding: '40px 24px',
      }}
    >
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 700, mb: 2 }}>
        Interested in soft skill content?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        I'm considering more articles like this on Substack or Medium about soft
        skills in software engineering. Should I ping you when I start?
      </Typography>
      {!expanded ? (
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            setExpanded(true)
          }}
          sx={{
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 1.5,
            paddingBottom: 1.5,
            fontSize: '1rem',
            animation: `${pulse} 2s ease-in-out infinite`,
          }}
        >
          I'm interested
        </Button>
      ) : (
        <InterestForm ref={formRef} onSubmit={handleSubmit} sx={{ justifyContent: 'center' }}>
          <HoneypotField type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            size="small"
            autoFocus
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            disabled={status === 'submitting'}
          />
          {email.trim().length > 0 && (
            <IconButton type="submit" color="primary" disabled={status === 'submitting'} aria-label="Submit email">
              <SendIcon />
            </IconButton>
          )}
          {TURNSTILE_SITE_KEY ? (
            <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-action="subscribe" />
          ) : (
            <Typography variant="body2" color="text.secondary">
              Sign-up verification is not configured yet.
            </Typography>
          )}
        </InterestForm>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  )
}
