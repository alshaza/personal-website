import type { APIRoute } from 'astro'
import { renderContactMarkdown } from '../lib/page-markdown'

export const GET: APIRoute = () =>
  new Response(renderContactMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
