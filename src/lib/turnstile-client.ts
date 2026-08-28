export const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

declare global {
  interface Window {
    turnstile?: {
      reset: (_container?: string | HTMLElement) => void
    }
  }
}

export function loadTurnstileScript(): void {
  if (document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)) return
  const script = document.createElement('script')
  script.src = TURNSTILE_SCRIPT_SRC
  script.async = true
  script.defer = true
  document.head.appendChild(script)
}
