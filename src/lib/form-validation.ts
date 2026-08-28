import sanitizeHtml from 'sanitize-html'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function cleanInput(input: string, maxLength: number): string {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim().slice(0, maxLength)
}
