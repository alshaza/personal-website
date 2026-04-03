/// <reference types="vite/client" />

interface Window {
  dataLayer: unknown[]
  // eslint-disable-next-line no-unused-vars
  gtag: (..._args: unknown[]) => void
}
