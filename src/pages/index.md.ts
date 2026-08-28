import type { APIRoute } from 'astro'
import { renderHomeMarkdown } from '../lib/page-markdown'

export const GET: APIRoute = () =>
  new Response(renderHomeMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
