export type AppPath = '/' | '/about-me' | '/collaborate' | '/find-your-path'

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
  '/about-me': {
    title: 'About Rami Alshaza | Engineer Career Growth Mentor',
    description:
      'Background in mentoring and product engineering, engineer stories, and how to book a free strategy call or reach out on LinkedIn.',
    keywords:
      'about rami alshaza, engineer career mentor, book career strategy call, contact software engineer coach, engineering leadership coaching',
    canonicalPath: '/about-me',
    ogType: 'profile',
  },
  '/collaborate': {
    title: 'Collaborate with Rami | Recruiters, Coaches, and Training',
    description:
      'Partner with Rami for recruiter introductions, fellow coach or podcast collaborations, and corporate soft-skills training for engineering teams.',
    keywords:
      'recruiter network engineer, corporate soft skills training developers, podcast guest career coach, coaching collaboration',
    canonicalPath: '/collaborate',
    ogType: 'website',
  },
  '/find-your-path': {
    title: 'Find Your Path | 3-Question Career Check-In',
    description:
      'Answer three short questions about your engineering career goals and get focused next steps plus a path to a free strategy call.',
    keywords:
      'engineer career help, job search software engineer, promotion advice developer, career check-in',
    canonicalPath: '/find-your-path',
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
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
  '/about-me': {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rami Alshaza',
    url: `${siteUrl}/about-me`,
    image: seoImageUrl,
    jobTitle: 'Engineer Career Growth Mentor',
    description: pageSeoMeta['/about-me'].description,
    knowsAbout: [
      'Software engineering',
      'Career development for engineers',
      'Communication and leadership skills',
      'Mentoring',
    ],
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
  '/collaborate': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional collaboration with Rami Alshaza',
    provider: {
      '@type': 'Person',
      name: 'Rami Alshaza',
      url: siteUrl,
    },
    url: `${siteUrl}/collaborate`,
    description: pageSeoMeta['/collaborate'].description,
    serviceType: 'Recruiter partnerships, media collaboration, and corporate training',
  },
  '/find-your-path': {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Find your path, career check-in',
    url: `${siteUrl}/find-your-path`,
    description: pageSeoMeta['/find-your-path'].description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Rami Alshaza',
      url: siteUrl,
    },
  },
}
