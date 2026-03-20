import type { ViewerType } from '../context/viewer-context'

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
    subheading: 'Full Stack Senior Engineer',
    body: 'I build scalable, high-performance web applications with modern technologies. Passionate about clean architecture, developer experience, and shipping products that make an impact.',
  },
  recruiter: {
    heading: "Hi, I'm Rami",
    subheading: 'Full Stack Senior Engineer',
    body: 'A results-driven senior engineer with extensive experience delivering end-to-end solutions. I thrive in fast-paced environments and bring deep expertise across the full stack.',
  },
}

export const testimonials: Record<ViewerType, Testimonial[]> = {
  engineer: [
    {
      name: 'Alex Chen',
      role: 'Staff Engineer at TechCorp',
      quote: "Rami's code reviews are next-level. He consistently raises the bar for our entire team's engineering standards.",
    },
    {
      name: 'Sarah Kim',
      role: 'Frontend Lead at StartupX',
      quote: 'Working with Rami taught me more about system design in six months than I learned in years. A truly exceptional engineer.',
    },
    {
      name: 'James Rodriguez',
      role: 'CTO at DevStudio',
      quote: "Rami architected our entire platform migration. His technical depth and pragmatic approach saved us months of work.",
    },
  ],
  recruiter: [
    {
      name: 'Emily Watson',
      role: 'VP of Engineering at ScaleUp',
      quote: 'Rami is the kind of engineer every team needs — technically brilliant, a natural leader, and someone who elevates everyone around them.',
    },
    {
      name: 'Michael Torres',
      role: 'Engineering Director at FinFlow',
      quote: 'Hiring Rami was one of the best decisions we made. He delivered a critical project ahead of schedule and under budget.',
    },
    {
      name: 'Lisa Park',
      role: 'Head of Product at CloudBase',
      quote: 'Rami bridges the gap between engineering and product like no one else. He understands both the technical and business sides deeply.',
    },
  ],
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: '2024 - Present',
    title: 'Senior Full Stack Engineer',
    company: 'TechCorp',
    description: 'Leading architecture decisions for a high-traffic SaaS platform. Driving migration to microservices and mentoring junior engineers.',
  },
  {
    year: '2021 - 2024',
    title: 'Full Stack Engineer',
    company: 'StartupX',
    description: 'Built core product features from zero to one. Implemented CI/CD pipelines and established engineering best practices.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Engineer',
    company: 'DevStudio',
    description: 'Developed responsive web applications using React and TypeScript. Improved page load performance by 40%.',
  },
  {
    year: '2017 - 2019',
    title: 'Junior Developer',
    company: 'WebAgency',
    description: 'Started career building client websites and internal tools. Gained foundational skills in JavaScript, HTML, and CSS.',
  },
]

export const sliderImages: SliderImage[] = [
  { src: '/images/slide-1.jpg', alt: 'Project showcase 1' },
  { src: '/images/slide-2.jpg', alt: 'Project showcase 2' },
  { src: '/images/slide-3.jpg', alt: 'Project showcase 3' },
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
    image: '/images/help-code-review.jpg',
  },
  {
    title: 'Mentorship & Coaching',
    description: 'Level up your engineering career with personalized 1-on-1 guidance.',
    image: '/images/help-mentorship.jpg',
  },
  {
    title: 'Technical Consulting',
    description: "Need help choosing the right stack or scaling your product? Let's talk.",
    image: '/images/help-consulting.jpg',
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

export const calendarUrl = 'https://calendly.com/rami-alshaza'
