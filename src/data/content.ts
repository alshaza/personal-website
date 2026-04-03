import communicationImage from '../images/communication.svg'
import EQImage from '../images/EQ.svg'
import leadershipImage from '../images/leadership.svg'
import codaverse from '../images/codaverse.webp'
import community from '../images/community.webp'
import tippspiel from '../images/tippspiel.webp'
import type { AppPath } from './seo-content'

export interface NavigationItem {
  label: string
  path: AppPath
}

export const navigationItems: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about-me' },
  { label: 'Collaborate', path: '/collaborate' },
  { label: 'Contact', path: '/contact' },
]

export interface HeroContent {
  heading: string
  subheading: string
  body: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface TimelineEntry {
  year: string
  title: string
  company: string
  description: string
}

export interface SliderImage {
  src: string
  alt: string
  title: string
  description: string
}

export const heroContent: HeroContent = {
  heading: "Hi, I'm Rami",
  subheading: 'Improve Your Soft Skills',
  body: 'Mentored +50 Engineers, equipping you to stand out in your job or during your interviews using proven strategies.',
}

export interface AboutMeContent {
  heading: string
  intro: string
  paragraphs: string[]
}

export const aboutMeContent: AboutMeContent = {
  heading: 'About Me',
  intro: 'Senior Full Stack Engineer with a passion for people-first engineering.',
  paragraphs: [
    'I build scalable web products and help teams deliver quality software with strong collaboration.',
    'Alongside engineering, I mentor developers to improve communication, confidence, and interview readiness.',
  ],
}

export interface CollaborateContent {
  heading: string
  description: string
}

export const collaborateContent: CollaborateContent = {
  heading: 'Let us Collaborate',
  description: 'From coaching engineers to shipping product features, I can support your team with practical and high-impact collaboration.',
}

export interface ContactPageContent {
  heading: string
  description: string
}

export const contactPageContent: ContactPageContent = {
  heading: 'Contact',
  description: 'Choose the channel that works best for you. You can book a call or reach out through LinkedIn.',
}

const sharedTestimonials: Testimonial[] = [
  {
    name: 'Stefan Lang',
    role: 'Team Leader @ CHECK24',
    quote: `Rami is an exceptionally engaged and motivated engineer who consistently delivers high-quality work.`,
  },
  {
    name: 'Khaled Ayash',
    role: 'CEO @ Tessafold',
    quote: `Rami's dedication to his work, attention to detail, and problem-solving skills were truly impressive.`,
  },
  {
    name: 'William Turbayevsky',
    role: 'CTO and Co-Founder @ Livedata Limited',
    quote: "Rami is very passionate and has great vision for his work. His focus keeps everything moving smoothly.",
  },
]

export const testimonials: Testimonial[] = sharedTestimonials

export const timelineEntries: TimelineEntry[] = [
  {
    year: 'Aug 2022 - Present',
    title: 'Senior Full Stack Engineer',
    company: 'CHECK24 - Munich',
    description: 'Leading the development of advanced features in the Community product',
  },
  {
    year: 'Aug 2021 - Aug 2022',
    title: 'Backend Engineer',
    company: 'SDN One - Syria',
    description: 'Leading the company team with scrum software development methodology.',
  },
  {
    year: 'Aug 2021 - 2022',
    title: 'Mid-Level Full Stack Engineer',
    company: 'Tessafold - Remote (Berlin) - Part-time',
    description: 'Launched Running App for three German companies during the marathon in 2021',
  },
  {
    year: 'Sep 2020 - Aug 2021',
    title: 'Junior Full Stack Engineer',
    company: 'GLOBAL AL-MOTAKAMEL Co. - Syria',
    description: 'Collaborated with international teams to support and develop two e-commerce products.',
  },
]

export const sliderImages: SliderImage[] = [
  {
    src: community,
    alt: 'Community Project',
    title: 'Community',
    description: 'A social platform connecting Check24 customers with real-time interactions and content sharing.',
  },
  {
    src: tippspiel,
    alt: 'Tippspiel Project',
    title: 'Tippspiel Community',
    description: 'Leading the development of the Tippspiel community product. Serving millions of users.',
  },
  {
    src: codaverse,
    alt: 'Codaverse Project',
    title: 'And lot more...',
    description: 'From E-commerce to Social Media, I have worked on a wide range of projects.',
  },
]

export interface HelpItem {
  title: string
  description: string
  image: string
}

export const helpItems: HelpItem[] = [
  {
    title: 'Master the Art of Communication',
    description: 'Active listening techniques, Team collaboration, and Giving and receiving feedback.',
    image: communicationImage,
  },
  {
    title: 'Strengthen Your Emotional Intelligence',
    description: 'Develop self-awareness, empathy, and social skills to build stronger relationships and lead more effectively.',
    image: EQImage,
  },
  {
    title: 'Develop Strong Leadership Skills',
    description: 'Drive results with confidence, inspire and motivate teams, and navigate challenges with resilience.',
    image: leadershipImage,
  },
]

export interface LinkedInPost {
  embedHtml: string
}

export const linkedinPosts: LinkedInPost[] = [
  {
    embedHtml: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7424718608733388800?collapsed=1" height="250" width="750" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  },
  {
    embedHtml: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7395982345448816640?collapsed=1" height="250" width="750" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  },
  {
    embedHtml: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7420397102842920961?collapsed=1" height="250" width="750" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
  },
]

export interface CTAContent {
  calendarUrl: string
  linkedInUrl: string
}

export const ctaContent: CTAContent = {
  calendarUrl: 'https://calendar.app.google/my9YWe2TWbrTXEVo9',
  linkedInUrl: 'https://www.linkedin.com/in/rami-alshaza',
}
