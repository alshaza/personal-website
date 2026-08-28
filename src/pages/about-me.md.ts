import type { APIRoute } from 'astro'
import { renderAboutMarkdown } from '../lib/page-markdown'

export const GET: APIRoute = () =>
  new Response(renderAboutMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
