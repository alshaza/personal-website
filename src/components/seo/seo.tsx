import { Helmet } from 'react-helmet-async'
import { type AppPath, pageSeoMeta, pageStructuredData, seoImageUrl, siteUrl } from '../../data/seo-content'

interface SeoProps {
  path: AppPath
}

export function Seo({ path }: SeoProps) {
  const seo = pageSeoMeta[path]
  const canonicalUrl = `${siteUrl}${seo.canonicalPath}`
  const structuredData = pageStructuredData[path]

  return (
    <Helmet prioritizeSeoTags>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={seoImageUrl} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seoImageUrl} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
