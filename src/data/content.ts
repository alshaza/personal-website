import type { ViewerType } from '../context/viewer-context'
import communicationImage from '../images/communication.svg'
import EQImage from '../images/EQ.svg'
import leadershipImage from '../images/leadership.svg'
import codaverse from '../images/codaverse.png'
import community from '../images/community.png'
import tippspiel from '../images/tippspiel.png'



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
}

export const heroContent: Record<ViewerType, HeroContent> = {
  engineer: {
    heading: "Hi, I'm Rami",
    subheading: 'Helping You Improve Soft Skills',
    body: "Mentored +50 Engineers, equipping you to stand out in your job or during your interviews.",
  },
  recruiter: {
    heading: "Hi, I'm Rami",
    subheading: 'Senior Full Stack Engineer',
    body: 'Launched major projects reaching millions of customers. Main stack is PHP and ReactJs',
  },
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

export const testimonials: Record<ViewerType, Testimonial[]> = {
  engineer: sharedTestimonials,
  recruiter: sharedTestimonials,
}

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
    year: 'Sep 2022 - Aug 2021',
    title: 'Junior Full Stack Engineer',
    company: 'GLOBAL AL-MOTAKAMEL Co. - Syria',
    description: 'Collaborated with international teams to support and develop two e-commerce products.',
  },
]

export const sliderImages: SliderImage[] = [
  { src: community, alt: 'Community Project' },
  { src: tippspiel, alt: 'Tippspiel Project' },
  { src: codaverse, alt: 'Codaverse Project' },
]

export interface HelpItem {
  title: string
  description: string
  image: string
}

export const helpItems: HelpItem[] = [
  {
    title: 'Code Reviews & Architecture',
    description: 'Get expert feedback on your code, system design, and architecture decisions.',
    image: communicationImage,
  },
  {
    title: 'Mentorship & Coaching',
    description: 'Level up your engineering career with personalized 1-on-1 guidance.',
    image: leadershipImage,
  },
  {
    title: 'Technical Consulting',
    description: "Need help choosing the right stack or scaling your product? Let's talk.",
    image: EQImage,
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
}

export const ctaContent: Record<ViewerType, CTAContent> = {
  engineer: {
    calendarUrl: 'https://calendly.com/rami-alshaza',
  },
  recruiter: {
    calendarUrl: 'https://calendly.com/rami-alshaza',
  },
}
