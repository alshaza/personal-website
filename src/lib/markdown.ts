import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export function renderMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown, { async: false, breaks: true }) as string
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title'],
      a: ['href', 'name', 'target', 'rel'],
    },
  })
}

export function excerptFromMarkdown(markdown: string, maxLength = 160): string {
  const html = marked.parse(markdown, { async: false }) as string
  const text = sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= maxLength) return text

  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}
