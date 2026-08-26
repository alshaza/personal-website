export type AppPath = '/' | '/contact' | '/blog'

export const siteUrl = 'https://alshaza.de'
export const seoImageUrl = `${siteUrl}/main-image.webp`

export interface PageSeoMeta {
  title: string
  description: string
  keywords: string
  canonicalPath: AppPath
  ogType: 'website' | 'profile'
}

export const pageSeoMeta: Record<AppPath, PageSeoMeta> = {
  '/': {
    title: 'Rami Alshaza | Engineer Career Growth Mentor',
    description:
      'Technical skills get you hired; soft skills get you promoted. Mentoring for software engineers on communication, leadership visibility, and promotion-aligned growth.',
    keywords:
      'engineer career coach, software engineer mentorship, promotion skills for developers, negotiation for engineers, leadership visibility engineering',
    canonicalPath: '/',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact & Collaborate with Rami | Book a Free Strategy Call',
    description:
      'Book a free strategy call, reach out on LinkedIn, or partner with Rami for recruiter introductions, coach and podcast collaborations, and corporate soft-skills training for engineering teams.',
    keywords:
      'contact engineer career coach, book career strategy call, recruiter network engineer, corporate soft skills training developers, podcast guest career coach, coaching collaboration',
    canonicalPath: '/contact',
    ogType: 'website',
  },
  '/blog': {
    title: 'Blog | Rami Alshaza',
    description:
      'Articles on engineering career growth, communication, leadership visibility, and getting promoted as a software engineer.',
    keywords:
      'engineer career blog, software engineer growth, promotion advice developers, leadership visibility engineering',
    canonicalPath: '/blog',
    ogType: 'website',
  },
}

export const pageStructuredData: Record<AppPath, Record<string, unknown>> = {
  '/': {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rami Alshaza',
    url: siteUrl,
    image: seoImageUrl,
    description: pageSeoMeta['/'].description,
    serviceType: 'Engineer career growth mentoring and soft skills coaching',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Software engineering',
      'Career development for engineers',
      'Communication and leadership skills',
      'Mentoring',
    ],
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional collaboration with Rami Alshaza',
    provider: {
      '@type': 'Person',
      name: 'Rami Alshaza',
      url: siteUrl,
    },
    url: `${siteUrl}/contact`,
    description: pageSeoMeta['/contact'].description,
    serviceType: 'Recruiter partnerships, media collaboration, and corporate training',
  },
  '/blog': {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Rami Alshaza Blog',
    url: `${siteUrl}/blog`,
    description: pageSeoMeta['/blog'].description,
    author: {
      '@type': 'Person',
      name: 'Rami Alshaza',
      url: siteUrl,
    },
  },
}
