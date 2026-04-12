import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream, streamToPromise } from 'sitemap'

const hostname = 'https://alshaza.de'
const today = new Date().toISOString().split('T')[0]

const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about-me', changefreq: 'monthly', priority: 0.9 },
  { url: '/collaborate', changefreq: 'monthly', priority: 0.9 },
  { url: '/find-your-path', changefreq: 'monthly', priority: 0.95 },
]

async function generateSitemap() {
  const sitemapPath = resolve(process.cwd(), 'public/sitemap.xml')
  const sitemap = new SitemapStream({ hostname })
  const writeStream = createWriteStream(sitemapPath)

  sitemap.pipe(writeStream)
  for (const route of routes) {
    sitemap.write({ ...route, lastmod: today })
  }
  sitemap.end()

  await streamToPromise(sitemap)
}

await generateSitemap()
