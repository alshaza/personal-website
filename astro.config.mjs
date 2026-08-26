// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://alshaza.de',
  output: 'static',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  // Old routes consolidated into Home + Contact (preserve any inbound links / SEO equity).
  redirects: {
    '/collaborate': '/contact',
    '/about-me': '/contact',
    '/find-your-path': '/',
  },
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      // MUI + Emotion must be bundled (not externalized) for SSR to work.
      noExternal: [
        '@mui/material',
        '@mui/system',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/cache',
      ],
    },
  },
})
