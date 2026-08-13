import type { APIRoute } from 'astro'
import { SITE_URL } from '@/lib/site'

/** Crawlers explicitly welcomed, including the major LLM agents. */
const ALLOWED_AGENTS = [
  '*',
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Applebot-Extended',
  'CCBot',
]

export const GET: APIRoute = () => {
  const body = [
    ...ALLOWED_AGENTS.map((agent) => `User-agent: ${agent}\nAllow: /`),
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    `# LLM-readable summary: ${SITE_URL}/llms.txt`,
  ].join('\n\n')

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
