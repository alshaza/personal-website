import { aboutMeContent, contactFaqContent, timelineEntries } from './content'

export type AppPath = '/' | '/contact' | '/blog' | '/about-me'

export const siteUrl = 'https://alshaza.de'
export const seoImageUrl = `${siteUrl}/images/hero-image-1200.jpg`

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
  '/about-me': {
    title: 'About Rami Alshaza | Senior Engineer & Career Growth Mentor',
    description: `${aboutMeContent.intro} Background, current role, and the story behind the coaching.`,
    keywords:
      'about Rami Alshaza, engineer career coach background, senior software engineer mentor, software engineering career journey',
    canonicalPath: '/about-me',
    ogType: 'profile',
  },
}

export const pageStructuredData: Record<AppPath, Record<string, unknown> | Array<Record<string, unknown>>> = {
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
  '/contact': [
    {
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
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: contactFaqContent.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
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
  '/about-me': {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rami Alshaza',
    url: `${siteUrl}/about-me`,
    image: seoImageUrl,
    description: pageSeoMeta['/about-me'].description,
    jobTitle: timelineEntries[0]?.title,
    worksFor: timelineEntries[0] && {
      '@type': 'Organization',
      name: timelineEntries[0].company.split(' - ')[0],
    },
    knowsAbout: [
      'Software engineering',
      'Career development for engineers',
      'Communication and leadership skills',
      'Mentoring',
    ],
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
}
