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
  { label: 'About', path: '/about-me' },
  { label: 'Find your path', path: '/find-your-path' },
  { label: 'Collaborate', path: '/collaborate' },
]

export interface HeroContent {
  headingLines: readonly [string, string]
  subheading: string
  body: string
  ctaLabel: string
  ctaMicroCopy: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface TransformationStory {
  before: string
  after: string
  attribution: string
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
  headingLines: ['Technical skills get you hired', 'Soft skills get you promoted'],
  subheading: 'Career growth mentoring for software engineers',
  body: 'I help engineers strengthen communication, influence, and leadership visibility so they can earn trust, negotiate confidently, and grow compensation.',
  ctaLabel: 'Book Free 1:1 Career Strategy Call',
  ctaMicroCopy: '30 minutes · No commitment · Walk away with a clear next-step plan',
}

export interface FunnelNarrativeContent {
  problemHeading: string
  problemBody: string
  impactHeading: string
  impactBullets: string[]
}

export const funnelNarrativeContent: FunnelNarrativeContent = {
  problemHeading: 'Great code is not enough',
  problemBody:
    'Many strong engineers stall because impact is invisible: unclear updates, weak stakeholder alignment, or hesitation in negotiation and self-advocacy. When promotion cycles arrive, decision-makers remember presence and trust as much as throughput.',
  impactHeading: 'What changes when soft skills compound',
  impactBullets: [
    'You are seen as someone who leads clarity not just tickets—across teams and leadership.',
    'You negotiate scope, timelines, and compensation from a place of credibility and options.',
    'You build a promotion narrative tied to business outcomes, not only technical depth.',
  ],
}

export interface AudienceSegment {
  level: string
  headline: string
  pain: string
  focus: string
}

export interface AudienceSegmentsContent {
  heading: string
  intro: string
  segments: AudienceSegment[]
}

export const audienceSegmentsContent: AudienceSegmentsContent = {
  heading: 'Where are you in your engineering career?',
  intro:
    'The same principles apply at every level. Here is how we typically focus promotion-aligned growth.',
  segments: [
    {
      level: 'Junior',
      headline: 'Shift From “doing tasks” to “earning trust”',
      pain:
        'You ship work but struggle to get visibility, feedback, or a clear path to the next level.',
      focus:
        'Readable updates, a steady rhythm with your manager on expectations, and ownership that make your impact easy for others to see and remember.',
    },
    {
      level: 'Mid-level',
      headline: 'From deep execution to cross-team trust',
      pain:
        'You handle complex work, yet promotions go to peers who seem more “senior” in rooms where decisions happen.',
      focus:
        'Stakeholder presence, driving alignment, feedback loops, and building a promotion case tied to ownership.',
    },
    {
      level: 'Senior',
      headline: 'From expert to leadership',
      pain:
        'You are expected to influence without authority, set direction, and represent engineering to leadership, but you feel like you are missing the right levers.',
      focus:
        'Executive communication, negotiation, delegation, and showing leverage that maps to staff-plus expectations.',
    },
  ],
}

export interface HowCanIHelpSectionContent {
  heading: string
  intro: string
}

export const howCanIHelpSectionContent: HowCanIHelpSectionContent = {
  heading: 'Skills that move promotions forward',
  intro:
    'We work practically on the behaviors that change how you are perceived, trusted, and compensated—always anchored to your real projects and stakeholders.',
}

export interface AboutMeContent {
  heading: string
  intro: string
  paragraphs: string[]
}

export const aboutMeContent: AboutMeContent = {
  heading: 'About',
  intro: 'Engineer career growth mentor with hands-on experience shipping products at scale.',
  paragraphs: [
    'I still build software in senior full-stack role, so the coaching stays grounded in how teams and promotions actually work—not generic advice.',
    'My focus is helping engineers communicate with clarity, build emotional intelligence, and lead with confidence so they can grow their careers and compensation.',
  ],
}

export interface CollaborateContent {
  heading: string
  description: string
}

export const collaborateContent: CollaborateContent = {
  heading: 'Collaborate',
  description:
    'I am open to partnerships with recruiters, fellow coaches, podcast hosts, and companies that want practical soft-skills training for engineering teams. If you want to connect professionals, co-create content, or upskill developers, let us start with a short conversation.',
}

export interface BookingProcessStep {
  title: string
  description: string
}

export interface BookingFunnelContent {
  primaryCtaLabel: string
  ctaMicroCopy: string
  processHeading: string
  processSteps: BookingProcessStep[]
  defaultFooterTitle: string
  defaultFooterDescription: string
}

export const bookingFunnelContent: BookingFunnelContent = {
  primaryCtaLabel: 'Book Free 1:1 Career Strategy Call',
  ctaMicroCopy: '30 minutes · No commitment · Get your next-step plan',
  processHeading: 'What happens after you click',
  processSteps: [
    {
      title: 'Open the scheduler',
      description: 'You will land on my calendar booking page in a new tab.',
    },
    {
      title: 'Choose a time',
      description: 'Pick a slot that fits your week. You will see confirmation details there.',
    },
    {
      title: 'Show up with context',
      description: 'Bring your goal (promotion, offer, visibility, or a tough stakeholder). We turn it into a focused plan.',
    },
  ],
  defaultFooterTitle: 'Ready for a focused strategy conversation?',
  defaultFooterDescription:
    'If you want clearer promotion leverage, stronger stakeholder presence, or a negotiation plan aligned to engineering reality, book a call and we will map practical next steps.',
}

export interface CollaborateSliderCtaContent {
  title: string
  description: string
  buttonLabel: string
  previewImageSrc: string
  previewImageAlt: string
}

export const collaborateSliderCtaContent: CollaborateSliderCtaContent = {
  title: 'Engineering or team collaboration',
  description:
    'Have a product, enablement, or mentoring need? Book a discovery call and we can outline a practical way to work together.',
  buttonLabel: 'Book a discovery call',
  previewImageSrc: '/logo.svg',
  previewImageAlt: 'Book a discovery call',
}

export interface PageFooterCtaContent {
  title: string
  description: string
}

export const collaboratePageFooterCta: PageFooterCtaContent = {
  title: 'Tell me what you have in mind',
  description:
    'Book a short call and share whether you are hiring, building a network, planning an episode, or scoping training. We can outline a simple next step together.',
}

export interface TestimonialSectionCopy {
  sectionTitle: string
  outcomesHeading: string
  leadersIntro: string
}

export const testimonialSectionCopy: TestimonialSectionCopy = {
  sectionTitle: 'What engineers say',
  outcomesHeading: 'Engineer outcomes',
  leadersIntro:
    'Notes from engineers I have mentored. Names are kept light to respect privacy.',
}

const sharedTestimonials: Testimonial[] = [
  {
    name: 'Engineer in Germany',
    role: 'Software developer',
    quote:
      'I came to Germany not knowing where to start looking for jobs. Rami helped me create a step-by-step plan to find a job.',
  },
  {
    name: 'Engineer, product team',
    role: 'Software developer',
    quote:
      'Rami sat down with me and worked on a daily plan for my job, found multiple mistakes in how I was approaching my work, and helped me fix them.',
  },
  {
    name: 'Engineer seeking growth',
    role: 'Software developer',
    quote:
      'I was too scared to talk in meetings and to my management. Rami showed me the correct way to approach my manager and ask for a raise that I did not imagine I could get.',
  },
]

export const testimonials: Testimonial[] = sharedTestimonials

export const transformationStories: TransformationStory[] = []

export const timelineSectionContent = {
  heading: 'Background in product engineering',
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
    title: 'Communication that increases your promotion surface area',
    description:
      'Active listening, crisp written updates, and constructive feedback so managers and cross-functional partners experience you as dependable and senior—before a promotion packet is written.',
    image: communicationImage,
  },
  {
    title: 'Emotional intelligence that protects your trajectory',
    description:
      'Self-awareness, empathy, and relationship skills that reduce friction, improve collaboration, and keep you effective under pressure—signals leaders weigh when scope and salary grow.',
    image: EQImage,
  },
  {
    title: 'Leadership presence that maps to higher scope',
    description:
      'Influence without authority, stakeholder alignment, and resilient execution so you are trusted with larger initiatives—the path many organizations use toward senior-plus roles and compensation bands.',
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

export interface ImpactStat {
  label: string
  value: string
  note?: string
}

export const impactStatsContent = {
  stats: [
    { label: 'Engineers coached', value: '80+', note: 'Hands-on mentoring and career conversations' },
    { label: 'Promotions supported', value: '10+', note: 'Engineers leveling up with clearer visibility and advocacy' },
    { label: 'Job offers landed', value: '20+', note: 'Offers secured after structured search and interview work' },
  ] satisfies ImpactStat[],
}

export interface CollaborateOpportunity {
  id: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
}

export const collaborateOpportunities: CollaborateOpportunity[] = [
  {
    id: 'recruiters_talent',
    title: 'Recruiters and talent partners',
    body:
      'If you want thoughtful introductions inside the engineering community—or a partner who understands how developers evaluate opportunities—I am happy to compare networks and explore win-win introductions.',
    ctaLabel: 'Book a short call',
    ctaHref: ctaContent.calendarUrl,
  },
  {
    id: 'coaches_podcasts',
    title: 'Fellow coaches, creators, and podcasts',
    body:
      'If you are building content for engineers—interviews, workshops, or co-hosted sessions—I enjoy thoughtful collaboration that respects both audiences and keeps advice practical.',
    ctaLabel: 'Propose a collaboration',
    ctaHref: ctaContent.calendarUrl,
  },
  {
    id: 'corporate_training',
    title: 'Companies and engineering orgs',
    body:
      'Soft skills training for developers: communication under pressure, feedback, stakeholder updates, and promotion readiness—grounded in how real teams ship software.',
    ctaLabel: 'Discuss training scope',
    ctaHref: ctaContent.calendarUrl,
  },
]
