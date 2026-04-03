export type AppPath = '/' | '/about-me' | '/collaborate' | '/contact'

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
    title: 'Rami Alshaza | Engineering Mentorship and Soft Skills',
    description: 'Senior Full Stack Engineer mentoring engineers to improve communication, confidence, and interview readiness.',
    keywords: 'engineering mentorship, soft skills for engineers, career coaching, senior full stack engineer',
    canonicalPath: '/',
    ogType: 'website',
  },
  '/about-me': {
    title: 'About Rami Alshaza | Senior Full Stack Engineer',
    description: 'Learn about Rami Alshaza, a Senior Full Stack Engineer focused on scalable products, team collaboration, and developer growth.',
    keywords: 'about rami alshaza, senior full stack engineer, software leadership, developer mentorship',
    canonicalPath: '/about-me',
    ogType: 'profile',
  },
  '/collaborate': {
    title: 'Collaborate with Rami | Engineering and Mentorship',
    description: 'Explore how to collaborate with Rami on product engineering, mentoring developers, and improving team communication.',
    keywords: 'engineering consultant, collaborate with software engineer, developer coaching, team enablement',
    canonicalPath: '/collaborate',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Rami Alshaza | Book a Call',
    description: 'Contact Rami Alshaza to discuss mentorship, collaboration, or engineering support. Book a call or connect on LinkedIn.',
    keywords: 'contact rami alshaza, book engineering call, software mentorship contact',
    canonicalPath: '/contact',
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
    serviceType: 'Engineering Mentorship and Soft Skills Coaching',
    areaServed: 'Worldwide',
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
  '/about-me': {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rami Alshaza',
    url: `${siteUrl}/about-me`,
    image: seoImageUrl,
    jobTitle: 'Senior Full Stack Engineer',
    description: pageSeoMeta['/about-me'].description,
    knowsAbout: ['Full Stack Engineering', 'Software Architecture', 'Mentorship', 'Communication Skills'],
    sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
  },
  '/collaborate': {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Engineering Collaboration with Rami Alshaza',
    provider: {
      '@type': 'Person',
      name: 'Rami Alshaza',
      url: siteUrl,
    },
    url: `${siteUrl}/collaborate`,
    description: pageSeoMeta['/collaborate'].description,
    serviceType: 'Engineering Consulting and Mentorship',
  },
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rami Alshaza',
    url: `${siteUrl}/contact`,
    description: pageSeoMeta['/contact'].description,
    mainEntity: {
      '@type': 'Person',
      name: 'Rami Alshaza',
      sameAs: ['https://www.linkedin.com/in/rami-alshaza'],
    },
  },
}
