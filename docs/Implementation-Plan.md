# Portfolio Website — Implementation Plan
**Companion to:** `Portfolio-PRD-Specification.md` (same folder) — this document translates that 20-section PRD into a concrete, phased build plan.

## Locked-In Stack Decisions

| Decision | Choice | Why |
|---|---|---|
| Hosting | **Vercel** (Hobby/free tier), custom domain `waleed.codes` | Full Next.js feature support (server actions, dynamic OG images, ISR) at the same cost and DNS effort as GitHub Pages — no feature downgrades. |
| Content | **MDX + local TypeScript files** in the repo | Content volume (8 projects, 2 jobs) doesn't justify a headless CMS's extra setup/account for a solo developer. |
| Contact form email | **Resend**, via a Next.js server action | First-class Next.js integration, simple API, generous free tier. |

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | MDX via `next-mdx-remote` + `gray-matter` (frontmatter), typed `.ts` data for experience/skills |
| Hosting/CI | Vercel, Git-based CI/CD, preview deploys per PR |
| Domain | `waleed.codes` → Vercel via DNS |
| Email | Resend (server action) |
| Analytics | Vercel Analytics |
| SEO | Next.js Metadata API, `next-sitemap`, JSON-LD (Person + per-project CreativeWork/SoftwareApplication schema) |
| Images/Fonts | `next/image` (WebP/AVIF), `next/font` (self-hosted, subsetted) |

---

## Phase 0 — Scaffolding & Tooling
**Deliverables:** Next.js + TypeScript + Tailwind project initialized; ESLint/Prettier configured; strict `tsconfig`; MDX pipeline wired (no real content yet); folder skeleton created; git repo initialized → pushed to a new GitHub repo → connected to a new Vercel project (no production deploy yet).

**Key paths:** `app/layout.tsx`, `app/page.tsx`, `tailwind.config.ts`, `next.config.mjs` (MDX config), `content/{projects,experience}/` (empty), `lib/`, `types/`, `.eslintrc`, `package.json`.

**Not yet:** No CMS, no test framework, no Storybook, no monorepo — single Next.js app only.

---

## Phase 1 — Design System & Base Components
**Deliverables:** Tailwind theme tokens for color/spacing/radius/typography per PRD §7 (dark-mode-first: deep near-black base, off-white light mode, single accent color, 8px spacing unit, 8–12px radius); `next/font` self-hosted sans + monospace; theme provider + toggle (persisted, respects `prefers-color-scheme`).

**Key paths:** `components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`, `Tooltip.tsx`, `components/theme/ThemeProvider.tsx`, `ThemeToggle.tsx`, `lib/utils.ts` (`cn` class helper), `styles/globals.css`.

**Not yet:** Modal, Toast, Loading Skeletons, Filter Tabs, Stat Tile — build these in Phase 2 when the page that needs them is built, not speculatively now.

---

## Phase 2 — Static Pages with Placeholder Content
**Deliverables:** All Information Architecture routes from PRD §2 rendering with placeholder copy/images, using the section/component layout from PRD §5 (Home) and §8 (component library).

**Key paths:**
- Routes: `app/page.tsx` (Home), `app/about/page.tsx`, `app/experience/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx` (×8 content entries), `app/skills/page.tsx`, `app/contact/page.tsx`, `app/not-found.tsx`
- Nav/footer: `components/nav/Navbar.tsx`, `Footer.tsx`
- Home sections: `components/sections/Hero.tsx`, `StatCounter.tsx`, `FeaturedProjects.tsx`, `ExperienceTimeline.tsx`, `SkillsPreview.tsx`, `ContactTeaser.tsx`
- Project components: `components/project/ProjectCard.tsx`, `FilterTabs.tsx`
- Content: `content/projects/*.mdx` (8 stub files — one per project, frontmatter schema defined: title, tagline, stack, links, category), `content/experience.ts` (typed array: Entropik Labs, GulzarSoft × 2 roles)
- Data layer: `lib/content.ts` (MDX loader/query helpers), `types/project.ts`, `types/experience.ts`

**Not yet:** No Blog or Open Source page (PRD §20 future scope), no real screenshots/photos, no email wiring, no analytics.

---

## Phase 3 — Real Content Population
**Deliverables:** Replace placeholders with real CV/PRD-derived copy across Home, About, Experience, Skills. Populate each project's MDX with the parts fully derivable from the CV: Header, Problem, Solution, Tech Stack (with justification), Timeline.

**⚠️ Blocked pending Waleed's input (per PRD §19) — do not fabricate:**
- [ ] Professional photo (blocks Hero/About polish and OG image branding)
- [ ] Project screenshots / demo videos (blocks each project's Screenshots/Demo section)
- [ ] Confirmed live-demo/GitHub links per project — note: WhatsApp Automation Agent may be client-confidential and unlinkable
- [ ] Quantified metrics/impact per project (CV bullets are activity-based, not outcome-based)
- [ ] Challenges + Lessons-Learned narratives per project (not in the CV — needs Waleed's first-hand account)
- [ ] Company logos (Entropik Labs, GulzarSoft)
- [ ] Architecture diagrams per project

**Interim rule:** where blocked content is missing, omit the section or mark it "coming soon" — never invent metrics, quotes, or stories.

---

## Phase 4 — Contact Form & Email
**Deliverables:** Contact form with inline validation (on-blur), submitting/success/error states with `aria-live` announcements, honeypot spam field, wired to Resend via a server action.

**Key paths:** `app/contact/page.tsx` (real submit handler), `app/actions/sendContactEmail.ts`, `lib/resend.ts`, `.env.local` (`RESEND_API_KEY`, destination inbox).

**Not yet:** No hCaptcha at launch — honeypot is sufficient unless spam becomes a real problem later.

---

## Phase 5 — SEO / Accessibility / Performance Hardening
**Deliverables:**
- SEO (PRD §13): Metadata API per route with title template `{{Page}} — Waleed Ali | Full Stack AI Engineer`, JSON-LD `Person` schema + per-project `CreativeWork`/`SoftwareApplication` schema, `next-sitemap` config, canonical URLs, dynamic OG images via `opengraph-image.tsx` per project.
- Accessibility (PRD §14, WCAG 2.2 AA): full keyboard navigation + visible focus rings, 4.5:1 contrast in both themes, `prefers-reduced-motion` guards on all animations (StatCounter, scroll reveals), ARIA only where semantic HTML is insufficient.
- Performance (PRD §15): targets LCP ≤2.0s, INP ≤200ms, CLS ≤0.1, Lighthouse ≥95 desktop / ≥90 mobile — via `next/image`, route-level code splitting, ISR for content pages, self-hosted subsetted fonts.
- Resume download click tracking; Vercel Analytics wired.

**Key paths:** `app/sitemap.ts` or `next-sitemap.config.js`, `lib/seo.ts` (metadata + Person schema helpers), `app/projects/[slug]/opengraph-image.tsx`, `lib/analytics.ts`.

**Not yet:** Skip optional extras (syntax-highlighted code blocks, cursor effects, command palette) unless explicitly requested later — nice-to-have, not launch-blocking.

---

## Phase 6 — Deployment & Domain
**Deliverables:** GitHub repo finalized, Vercel project connected with preview deploys per PR, environment variables set in the Vercel dashboard, `waleed.codes` DNS pointed at Vercel, production deploy, post-launch Lighthouse + axe accessibility check.

**Key paths:** `.github/workflows/` (optional lint/typecheck CI), `vercel.json` (only if custom redirects/headers are needed).

**Not yet:** No separate staging environment — Vercel's per-PR preview deploys cover QA for a solo developer.

---

## Explicitly Deferred (PRD §20 — not part of this build)
Blog, AI chatbot, project search/filtering beyond basic category tabs, command palette (⌘K), Urdu-language i18n version, CMS migration, analytics dashboard, theme/accent customization. Revisit only if/when content volume or specific requests justify the added complexity.

---

## Verification
- After each phase, run `npm run build` / `next lint` / `tsc --noEmit` to confirm the app builds cleanly.
- Phase 2 checkpoint: every IA route from PRD §2 loads without error, responsive at all breakpoints from PRD §18.
- Phase 4 checkpoint: submit a real test message through the contact form and confirm delivery to the destination inbox.
- Phase 5 checkpoint: run Lighthouse (desktop + mobile) and an axe accessibility scan against the deployed preview; confirm scores meet PRD §15 targets before promoting to production.
- Phase 6 checkpoint: confirm `waleed.codes` resolves to the production Vercel deployment over HTTPS, and that a fresh PR triggers a working preview deploy.
