# Rami Alshaza — personal website

Public site: [alshaza.de](https://alshaza.de)

## About Rami

Rami Alshaza is an **engineer career growth mentor** who still works in a **senior full-stack** role. He helps software engineers strengthen **communication**, **emotional intelligence**, and **leadership visibility** so they can earn trust, negotiate with confidence, and grow compensation—without burning out. The coaching stays tied to how real teams ship work and how promotion decisions actually get made, not generic career advice.

## What this website covers

The site is a single place to understand what Rami offers, explore a light self-serve path, and book time or connect.

- **Home** — Positioning (“technical skills get you hired; soft skills get you promoted”), audience segments by level, impact highlights, skills that support promotions, project highlights, testimonials, timeline, and paths to a **free 30-minute strategy call** or LinkedIn.
- **About** — Short bio, story-driven sections, and how to get in touch.
- **Find your path** — A short **three-question** check-in that branches on job search, promotion, or job change goals and returns practical next steps, with the same booking and LinkedIn options as elsewhere.
- **Collaborate** — For **recruiters**, **fellow coaches or podcast hosts**, and **companies** interested in soft-skills training for engineering teams: ways to work together and a clear call to book a discovery conversation.

Content and copy live mainly in `src/data/content.ts`, `src/data/career-wizard.ts`, and `src/data/seo-content.ts`. Analytics events are wired for key interactions (see `src/lib/analytics*.ts`).

## Stack and tooling

- **React 19**, **TypeScript**, **Vite**
- **MUI (Material UI)** for layout and components
- **React Router** for client-side routes
- **Embla Carousel** for select carousels
- **Cloudflare** (`wrangler`) for deploy and local preview of the production build

## Development

```bash
npm install
npm run dev          # local dev server
npm run lint         # ESLint
npm run build        # sitemap + typecheck + production bundle
npm run preview      # build then wrangler dev
npm run deploy       # build then wrangler deploy
```

Sitemap generation: `npm run generate:sitemap` (also runs as part of `build`).

---

Repository started from the Vite React + TypeScript template; project-specific ESLint and TypeScript settings live in `eslint.config.js` and the `tsconfig` files at the repo root.
