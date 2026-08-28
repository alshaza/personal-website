# CLAUDE.md

## Markdown mirrors for llms.txt

The Home, About, Contact, and Blog pages each have a `.md` twin for AI agents
(`/index.md`, `/about-me.md`, `/contact.md`, `/blog.md`, plus `/blog/<category>/<slug>.md`
per post), linked from `public/llms.txt` and advertised via `<link rel="alternate" type="text/markdown">`
in `SeoHead.astro`.

The static pages' `.md` output (`src/lib/page-markdown.ts`) is generated from
`src/data/content.ts`, so wording edits there stay in sync automatically. But
if you add a **new content section/component** to the Home, About, or Contact
page, update the matching `render*Markdown()` function in
`src/lib/page-markdown.ts` too, or the markdown mirror will silently fall
behind the real page. Blog posts need no extra work — their `.md` route
serves `body_md` straight from the DB, which is already the source of truth.
