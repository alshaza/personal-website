// Markdown mirrors of the main pages, built from the same data the .astro pages render.
// Keeps the /*.md endpoints in sync with page copy automatically — see content.ts.
import {
  heroContent,
  impactStatsContent,
  audienceSegmentsContent,
  howCanIHelpSectionContent,
  helpItems,
  testimonials,
  aboutMeContent,
  timelineEntries,
  bookingFunnelContent,
  contactFaqContent,
  ctaContent,
} from '../data/content'
import type { PostSummary } from './db'

export function renderHomeMarkdown(): string {
  return `# Rami Alshaza

> ${heroContent.subheading}

${heroContent.headingLines.join(' — ')}

${heroContent.body}

## Impact

${impactStatsContent.stats.map((s) => `- ${s.label}: ${s.value}${s.note ? ` (${s.note})` : ''}`).join('\n')}

## ${audienceSegmentsContent.heading}

${audienceSegmentsContent.intro}

${audienceSegmentsContent.segments
  .map((s) => `### ${s.level}: ${s.headline}\n\nPain: ${s.pain}\n\nFocus: ${s.focus}`)
  .join('\n\n')}

## ${howCanIHelpSectionContent.heading}

${howCanIHelpSectionContent.intro}

${helpItems.map((i) => `- **${i.title}** — ${i.description}`).join('\n')}

## What engineers say

${testimonials.map((t) => `- "${t.quote}" — ${t.name}, ${t.role}`).join('\n')}

## Get in touch

Book a free strategy call: ${ctaContent.calendarUrl}
`
}

export function renderAboutMarkdown(): string {
  return `# ${aboutMeContent.heading} Rami Alshaza

> ${aboutMeContent.intro}

${aboutMeContent.paragraphs.join('\n\n')}

## Career timeline

${timelineEntries
  .map((e) => `- **${e.year}** — ${e.title}, ${e.company}: ${e.description}`)
  .join('\n')}
`
}

export function renderContactMarkdown(): string {
  return `# How working together works

${bookingFunnelContent.contactOptions.map((o) => `## ${o.title}\n\n${o.description}`).join('\n\n')}

## Frequently asked questions

${contactFaqContent.items.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Links

- Book a strategy call: ${ctaContent.calendarUrl}
- LinkedIn: ${ctaContent.linkedInUrl}
`
}

export function renderBlogIndexMarkdown(posts: PostSummary[]): string {
  return `# Blog

Articles on engineering career growth, communication, and leadership visibility.

${posts.map((p) => `- [${p.title}](/blog/${p.category_slug}/${p.slug}.md): ${p.description}`).join('\n')}
`
}
