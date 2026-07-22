# Portfolio Website — Product Requirements Document & Technical Specification
**Subject:** Waleed Ali — Full Stack AI Engineer
**Prepared as:** PRD for design + engineering handoff
**Legend:** 🟦 = Fact from CV · 🟨 = Recommendation/assumption (clearly flagged)

---

## 1. Executive Summary

**Who I am** 🟦
Waleed Ali is a Full Stack AI Engineer based in Sialkot, Pakistan, open to remote work. He builds production-grade Generative AI systems: RAG pipelines, voice AI agents, real-time conversational applications, and intelligent automation workflows. Current role: Full Stack AI Engineer at Entropik Labs (Jan 2026–present). Prior: AI Engineer and AI Engineer Intern at GulzarSoft (Jun 2025–Jan 2026). BSCS from University of Gujrat (2021–2025, CGPA 3.37/4.0).

**Professional positioning** 🟨
Position Waleed not as a generic "AI/ML developer" but as a **Voice AI & Conversational Systems Engineer who ships end-to-end** — someone who takes an idea from model selection through FastAPI/WebSocket backend, vector DB retrieval, and GPU deployment, to a working production product. His differentiator versus typical LLM-wrapper developers is *breadth across the full voice+RAG stack* (STT → LLM/RAG → TTS → real-time transport → observability) demonstrated across 8 distinct shipped projects in under 18 months.

**Strengths** 🟦/🟨
- 🟦 Hands-on production deployment experience (GPU inference on Runpod, Vercel hosting, real client-facing systems).
- 🟦 Rare breadth in voice AI tooling: LiveKit, Vapi, ElevenLabs, Deepgram, Whisper, OpenAI Realtime API — most portfolios show one voice stack, his shows five.
- 🟦 Full-stack range: backend (FastAPI, Django, Flask), data (PostgreSQL, Redis, ChromaDB, Pinecone, FAISS), automation (n8n, webhooks), and classic ML/CV (YOLO, OpenCV).
- 🟦 Observability maturity uncommon at this career stage (Langfuse tracing/prompt evaluation on the LiveKit project).
- 🟨 Fast learning velocity — inferred from progressing intern → AI Engineer → Full Stack AI Engineer across ~13 months while shipping 8 projects.

**Target audience** 🟨
1. Recruiters/talent teams at AI-native startups and product companies hiring for GenAI/Voice AI roles.
2. Engineering hiring managers evaluating backend + AI systems capability.
3. Startup founders / agencies needing a contractor for RAG, voice agents, or automation (n8n/Vapi) builds.
4. Fellow AI engineers evaluating technical credibility (GitHub-driven traffic).

**Primary goals of the website** 🟨
1. Convert a recruiter's 30-second scan into a saved contact / interview request.
2. Prove production competence (not "tutorial projects") via architecture detail, metrics, and live demos.
3. Generate qualified freelance/contract leads for voice-AI and RAG builds.
4. Serve as the canonical, always-current source of truth linked from LinkedIn/GitHub/resume.

---

## 2. Information Architecture

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Single-scroll narrative: hook → proof → conversion. Primary landing page for all traffic sources. |
| About | `/about` | Deeper personal narrative, working philosophy, career trajectory, education, location/availability. |
| Experience | `/experience` | Full professional timeline (Entropik Labs, GulzarSoft x2) with responsibilities, tech, impact. |
| Projects | `/projects` | Grid/list of all 8 projects with filtering by domain (Voice AI, RAG, Automation, Computer Vision). |
| Project Detail | `/projects/[slug]` | Deep case-study page per project (problem → architecture → outcome). |
| Skills | `/skills` | Categorized, visually scannable skill inventory mapped to proficiency/usage context. |
| Education | `/education` (or section within About) | University of Gujrat BSCS, FYP highlight, linked to the Final Year Project case study. |
| Contact | `/contact` | Contact form + direct channels + availability status + resume download. |
| Resume Download | `/resume` (redirect to PDF, tracked) | One-click, ATS-friendly PDF; also embedded as a button across pages. |
| 404 | `/404` | On-brand recovery page redirecting to Home/Projects. |
| Blog 🟨 (optional, Phase 2) | `/blog` | Technical writing to build authority in RAG/Voice AI niche; strong SEO/backlink value. |
| Open Source 🟨 (optional) | `/open-source` | Only if public repos/PRs exist beyond the 8 listed projects; otherwise fold into GitHub link. |

**Note:** No dedicated "Certifications" page — none appear on the CV 🟦. See Section 19 (Content Gaps).

---

## 3. User Personas

| Persona | What they want to find | Time budget |
|---|---|---|
| **Recruiter (non-technical)** | Job title match, years of experience, remote availability, standout keywords (AI, LLM, RAG), a way to message/schedule quickly. | 15–30 sec |
| **Hiring Manager (technical)** | Real architecture decisions, tech-stack depth, evidence of production deployment (not just notebooks), how he communicates technical tradeoffs. | 2–5 min |
| **Startup Founder / Non-technical client** | "Can this person build the voice agent / chatbot I'm imagining?" — needs analogous project proof (Vapi sales agent, WhatsApp automation) and an easy way to describe their need. | 1–3 min |
| **Freelance/Agency client** | Availability, engagement model, past client-facing project outcomes, response time expectations. | 1–2 min |
| **Technical Interviewer** | Depth on a specific project before a call — architecture diagrams, challenges, and lessons learned to form interview questions. | 3–10 min |
| **Fellow Developer** | Code quality signals, GitHub activity, interesting technical write-ups, possible collaboration/OSS interest. | Variable |

---

## 4. User Journey

**Primary conversion path (all personas funnel through this):**

```
Landing (organic/LinkedIn/GitHub/referral)
  → Hero (identity + positioning, 3-sec clarity)
  → Proof bar (stats: years, projects shipped, stacks mastered)
  → Featured Projects (3 curated, highest-impact)
  → Experience highlights (current role callout)
  → Skills preview (categorized chips, not a wall of text)
  → Primary CTA: "Let's talk" / "View full project" / "Download résumé"
  → Contact
```

**Persona-specific shortcuts:**
- **Recruiter:** Hero → Stats bar → Resume Download (skips deep project detail). Nav must expose "Resume" and "Contact" persistently (sticky nav).
- **Hiring Manager:** Hero → Featured Projects → Project Detail (architecture) → Experience → Contact.
- **Founder/Client:** Hero → Projects filtered by relevance (e.g., "Voice AI") → Project Detail (Impact section) → Contact form.
- **Interviewer:** Direct-links to `/projects/[slug]` from a shared résumé link → reads Challenges/Lessons Learned → optionally Experience page.
- **Developer:** Hero → GitHub link (external) → possibly Blog.

Every homepage section therefore must **stand alone** (clear heading, scannable, no reliance on reading the prior section) since users enter mid-journey via shared deep links.

---

## 5. Homepage Specification

### 5.1 Hero
- **Purpose:** Establish identity + role + credibility in under 3 seconds; drive the two primary CTAs.
- **Content:** 🟦 "Waleed Ali — Full Stack AI Engineer." Subheadline 🟨: *"Building production-grade Voice AI, RAG, and conversational systems — from model to deployment."* Location badge: 🟦 "Sialkot, Pakistan · Open to Remote." Availability badge 🟨: "Available for freelance / full-time opportunities" (toggle-controlled, see Section 17).
- **Layout:** Split hero — left: name, title, one-line pitch, two CTA buttons; right: animated visual (see 7/16) or a subtle live-status widget (e.g., "Currently building voice agents at Entropik Labs" 🟦).
- **Components:** Primary CTA button ("View Projects"), secondary CTA button ("Download Résumé"), availability badge, social icon row (LinkedIn, GitHub, Email).
- **Animations:** Staggered fade/slide-up of headline → subheadline → CTAs on load (150ms stagger). Subtle looping micro-animation on the visual element (e.g., waveform pulse referencing voice AI work) — tasteful, not distracting.
- **Interactions:** CTA hover = scale 1.02 + shadow lift; social icons underline-reveal on hover.

### 5.2 Introduction / Positioning Strip
- **Purpose:** One-paragraph elevator pitch bridging Hero to Proof.
- **Content:** 🟦-grounded synthesis of the Professional Summary — Generative AI, RAG, Voice AI, LLMs, scalable backend systems, real-time conversational platforms.
- **Layout:** Centered, max-width 65ch text block for readability.

### 5.3 Proof / Statistics Bar
- **Purpose:** Quantify credibility instantly for skimmers (recruiters).
- **Content (derive only from verifiable CV facts, flag estimates):**
  - 🟨 "8 Production AI Projects Shipped" (count from CV project list)
  - 🟦 "3 Companies" (Entropik Labs, GulzarSoft — 2 roles)
  - 🟨 "5+ Voice AI Platforms Integrated" (LiveKit, Vapi, ElevenLabs, Deepgram, OpenAI Realtime)
  - 🟦 "BSCS, University of Gujrat"
- **Layout:** 4-column stat tiles, collapsing to 2x2 on tablet, stacked on mobile.
- **Animation:** Count-up number animation triggered on scroll-into-view (once only).

### 5.4 Featured Projects (curated 3)
- **Purpose:** Show the strongest, most differentiated work first — do not make visitors dig.
- **Recommended curation** 🟨: (1) LiveKit Doctor Receptionist (most production-mature: observability + real business use case), (2) Voilo (mobile-scale, adaptive learning, most "product-like"), (3) Urdu Voice-to-Voice RAG Agent (technical depth + novel language coverage).
- **Content per card:** Project name, one-line problem/solution, 3–4 tech chips, "View Case Study" link.
- **Layout:** 3-column card grid (desktop) → horizontal scroll carousel (mobile).
- **Interactions:** Card hover = lift + border glow; entire card clickable to `/projects/[slug]`.

### 5.5 Experience Highlights
- **Purpose:** Give hiring managers instant role/seniority context without leaving Home.
- **Content:** Condensed 2-entry timeline — Entropik Labs (current) and GulzarSoft (progression intern→engineer noted as one grouped entry) 🟦. Link out to full `/experience`.
- **Layout:** Vertical mini-timeline with company logos (see Content Gaps if logos unavailable) or monogram badges.

### 5.6 Skills Preview
- **Purpose:** Fast keyword-matching for ATS-minded recruiters and technical skimmers.
- **Content:** Top 12–15 chips prioritized by relevance to target roles: Python, FastAPI, LangChain, RAG, LLMs, WebSockets, PostgreSQL, LiveKit, Whisper, Pinecone/FAISS, n8n, TensorFlow.
- **Layout:** Wrapped chip cloud, grouped subtly by color per category (see Section 10). Link to full `/skills`.

### 5.7 Testimonials 🟨
- **Purpose:** Social proof — **not currently possible**, no testimonials exist on the CV. Recommend omitting this section at launch; see Section 19 for what to collect (manager/client quotes from Entropik Labs, GulzarSoft, or WhatsApp/Vapi client engagements).

### 5.8 Contact Section (homepage teaser)
- **Purpose:** Low-friction final conversion point before footer.
- **Content:** 🟨 "Have a project in mind, or hiring for a role like this?" + short-form contact form (name, email, message) + direct email/LinkedIn.
- **Layout:** Two-column — left: pitch + direct links; right: form.

### 5.9 Footer
- **Content:** Social links (LinkedIn, GitHub, Email) 🟦, quick nav links, copyright, "Built with [stack]" 🟨 credibility line, back-to-top control.

---

## 6. Content Specification

*(Representative content per page; all copy grounded in CV facts unless marked 🟨. Full copywriting for every micro-string is out of scope for this PRD but key strings are specified below as implementation guidance.)*

### Home
- H1: "Waleed Ali"
- H2: "Full Stack AI Engineer building Voice AI & RAG systems that ship." 🟨
- CTA primary: "View My Work"
- CTA secondary: "Download Résumé"
- Empty state (if projects fail to load): "Projects are warming up — refresh or reach out directly." 🟨
- Error state (contact form): "Something went wrong sending your message — email me directly at waleedali09az@gmail.com." 🟦 (fallback address)
- Success state (contact form): "Thanks — I'll get back to you within 24–48 hours." 🟨

### About
- H1: "About Waleed"
- Narrative paragraphs 🟨 built from: career start (AI Engineer Intern, GulzarSoft, Jun 2025) → promotion path → current role (Entropik Labs) → CS degree grounding (University of Gujrat).
- Pull-quote 🟨: reflect his summary line on taking "AI products from concept to deployment."

### Experience
- Section label: "Professional Experience"
- Entry format per role: Title · Company · Location · Dates · 3 bullet responsibilities (verbatim/lightly edited from CV) · Tech chips · "Impact" callout 🟨 (see Section 11 for the impact-inference guidance).

### Projects
- Filter labels 🟨: All, Voice AI, RAG, Automation, Computer Vision.
- Card CTA: "View Case Study" / "GitHub" / "Live Demo" (only show links that actually exist — see Content Gaps).
- Empty filter state: "No projects match this filter yet — check back soon." 🟨

### Skills
- Category headers as defined in Section 10.
- Tooltip pattern 🟨 on hover: brief context, e.g., "LiveKit — used to build a real-time AI receptionist handling appointment management."

### Contact
- H1: "Let's build something."
- Form labels: Name, Email, Message, [optional] Project Type dropdown (Full-time role / Freelance project / Just saying hi) 🟨.
- Success message: "Message sent — thanks for reaching out!" 🟨
- Error message: "Couldn't send that — please email waleedali09az@gmail.com directly." 🟦/🟨

### 404
- H1: "This page took a wrong turn." 🟨
- Body: "Let's get you back on track." + buttons to Home/Projects.

---

## 7. Visual Design Specification

- **Design philosophy** 🟨: Modern technical minimalism with restrained "AI-native" accents — dark-mode-first (matches the audience of engineers/recruiters reviewing portfolios late at night or via LinkedIn on mobile), clean typographic hierarchy, generous whitespace over decoration. Avoid generic "purple gradient SaaS" clichés and avoid overt neon "AI hype" styling (holographic gradients, glowing chatbot bubbles) — credibility over trend-chasing.
- **Color palette** 🟨: Deep near-black base (`#0B0E14`-ish) for dark mode, off-white (`#F7F8FA`-ish) for light mode; single confident accent color — a signal-blue or teal (nod to voice/waveform themes) used sparingly for CTAs, links, and chart accents; neutral grays for text hierarchy. Category-coded skill chips use a small, consistent categorical palette (see `dataviz` skill palette conventions if charts/skill-graphs are built) — never more than 6–8 distinct hues.
- **Typography** 🟨: One geometric/humanist sans for UI and headings (e.g., Inter/Geist-class), optionally a monospace face for code snippets, tech-stack labels, and terminal-style accents (reinforces "engineer" identity). Clear scale: H1 ~48–64px desktop, body ~16–18px, generous line-height (1.6) for readability.
- **Spacing & grid** 🟨: 8px base spacing unit; 12-column responsive grid; consistent max content width (~1200–1280px) with wide breakout allowed for hero/visual elements.
- **Border radius** 🟨: Medium rounding (8–12px) on cards/buttons — soft but not overly playful.
- **Shadows** 🟨: Subtle, low-opacity elevation shadows in light mode; in dark mode prefer border/glow separation over shadow (shadows read poorly on dark backgrounds).
- **Icons** 🟨: Consistent single icon set (e.g., Lucide/Phosphor) — line-style, matches minimalist direction.
- **Illustration style** 🟨: Avoid illustration; prefer abstract technical motifs (waveform lines, node/graph patterns referencing RAG/embedding-space, subtle circuit-like linework) as background texture, not literal AI clip-art.
- **Photography style** 🟨: One professional headshot (currently missing — see Section 19) styled with consistent, subtle duotone treatment matching the accent color to unify with dark mode.
- **Dark / Light mode:** Both required, dark as default given audience/positioning; instant toggle in nav, persisted via local storage, respects `prefers-color-scheme` on first visit.
- **Aesthetic direction:** Minimalism with **restrained** glass/blur accents only on floating elements (nav bar on scroll, modals) — not full glassmorphism throughout, to keep the look "premium engineer" rather than "trendy landing page."
- **Motion principles:** See Section 16 — motion should clarify hierarchy and reward scrolling, never block content or exceed ~400ms for primary transitions.
- **Professional branding:** Consistent name/title lockup (e.g., simple wordmark "WA" monogram) reused across favicon, resume header, and OG image for recognizability across LinkedIn/GitHub/email signature.

---

## 8. Component Library

| Component | Purpose | Variants | States | Interactions | Accessibility |
|---|---|---|---|---|---|
| **Navbar** | Global nav + theme toggle + resume CTA | Sticky-transparent → sticky-solid on scroll | Default, scrolled, mobile-open | Scroll-triggered background blur/solidify; hamburger on mobile | Skip-to-content link; keyboard-focusable menu; `aria-expanded` on toggle |
| **Buttons** | Primary/secondary actions | Primary (filled), secondary (outline), ghost/text | Default, hover, focus, active, disabled, loading | Scale/lift on hover; spinner on loading (form submit) | Min 44x44px tap target; visible focus ring; disabled state announced |
| **Cards (generic)** | Container for grouped content | Elevated, bordered, interactive (clickable) | Default, hover, focus | Lift + border-glow on hover | Entire card as single tab-stop when clickable; not nested interactive elements |
| **Project Card** | Summarize a project in the grid | Featured (large), standard (grid) | Default, hover | Click → project detail; tech chips truncate with "+N more" | Alt text on any thumbnail/screenshot |
| **Timeline (Experience)** | Chronological role display | Vertical (desktop), condensed (mobile) | Default, expanded (bullet detail) | Expand/collapse per entry (mobile) | Semantic `<ol>` list; date announced via visually-hidden text if icon-only |
| **Skill Badge/Chip** | Represent one skill | Category-colored, size-variant (preview vs full page) | Default, hover (tooltip) | Tooltip on hover/focus showing project context | Tooltip accessible via focus, not hover-only; `aria-describedby` |
| **Experience Card** | Detail one role | Full (Experience page), condensed (Home) | Default, expanded | — | Heading hierarchy correct (role as h3 under company h2) |
| **Technology Chip** | Tag a tech in project detail | Static (non-interactive) or linked (filters Projects by tech) | Default, hover if linked | Optional click-through to filtered project list | Sufficient contrast at small size |
| **Code Block** 🟨 | Show illustrative snippets in case studies (optional) | Syntax-highlighted, copy button | Default, copied-confirmation | Click-to-copy | Copy action announced via `aria-live` region |
| **Contact Form** | Lead capture | Full (Contact page), compact (Home teaser) | Default, validating, error, submitting, success | Inline validation on blur; submit disables button + shows spinner | Labels programmatically associated; error messages linked via `aria-describedby`; success announced via `aria-live="polite"` |
| **Footer** | Site-wide close + secondary nav | — | — | — | Landmark `<footer>` role |
| **Social Links** | External profile links | Icon-only, icon+label | Default, hover, focus | Opens in new tab (`rel="noopener noreferrer"`) | Accessible name via `aria-label` (icon-only) |
| **Modal** 🟨 | Project image lightbox / quick-view | Centered, full-bleed image viewer | Open, closing, closed | Esc to close, click-outside to close, focus-trapped | Focus returns to trigger on close; `role="dialog"`, `aria-modal` |
| **Toast** | Ephemeral feedback (form success/error) | Success, error, info | Entering, visible, exiting | Auto-dismiss (5s) + manual close | `aria-live="polite"` (or "assertive" for errors) |
| **Theme Switcher** | Light/dark toggle | Icon toggle | Light, dark, (system, optional) | Instant switch, animated icon transition | Keyboard operable; state reflected via `aria-pressed` |
| **Loading Skeletons** | Perceived-performance placeholder | Card skeleton, text-line skeleton | Loading → resolved | Fade-out on content load | `aria-busy="true"` on container while loading |
| **Availability Badge** | Signal current status (open to work / freelance) | Available, limited, unavailable | — | — | Not color-only — includes text label |
| **Stat Tile / Count-up** | Homepage proof bar | Numeric with count-up animation | Idle, animating, settled | Triggers once on scroll-into-view | Respect `prefers-reduced-motion` (show final number immediately) |
| **Filter Tabs (Projects)** | Filter project grid by domain | Pill tabs | Default, active | Click to filter; animate grid reflow | `role="tablist"`/`role="tab"` with `aria-selected` |

---

## 9. Project Showcase Specification

Each project detail page (`/projects/[slug]`) uses a consistent template:

1. **Header:** Project name, one-line tagline, tech-stack chip row, links (GitHub / Live Demo — only if they exist, see Section 19).
2. **Problem:** What gap/need the project addressed. 🟨 (to be written per project — CV gives the "what," not the "why now"; Waleed should supply 1–2 sentences of original motivation per project).
3. **Solution:** Architecture-level explanation of what was built (drawn directly from CV bullet points, expanded).
4. **Tech Stack:** Full list with brief justification per major choice (e.g., "Runpod chosen for GPU cost-efficiency on inference workloads").
5. **Architecture:** 🟨 Recommend a simple diagram per project (e.g., for LiveKit Doctor Receptionist: Caller → LiveKit → Deepgram STT → Gemini reasoning → ElevenLabs TTS → Langfuse trace). Diagrams should be built (not currently in CV) — see Content Gaps.
6. **Challenges:** 🟨 To be authored by Waleed per project (CV doesn't capture obstacles) — this is the single highest-value addition for technical-interviewer persona credibility.
7. **Impact/Metrics:** 🟨 Where available, quantify (e.g., Voilo — "supports adaptive difficulty across N vocabulary items"; WhatsApp Agent — "routes across 4 specialized agent types"). Flag clearly as estimated where real metrics aren't available; avoid fabricating numbers.
8. **Screenshots/Demo:** Currently unavailable — required content gap (Section 19).
9. **Timeline:** Approximate build duration 🟨 (not on CV — optional, only include if Waleed supplies it).
10. **Lessons Learned:** 🟨 1–2 sentences per project — reinforces growth narrative for hiring managers.

**Per-project mapping (all 🟦 from CV, case-study depth is 🟨 to be authored):**
- Voilo — AI-Powered Voice Language Learning Platform
- Urdu Voice-to-Voice RAG Agent
- LiveKit Doctor Receptionist with Langfuse Traces
- WhatsApp Automation Agent (n8n + Unipile + Airtable)
- Voice AI Sales Agent (Vapi + Airtable)
- Final Year Project: AI-Powered Learning Assistant
- YouTube Video Q&A Chatbot
- Driver Drowsiness Detection (Computer Vision)

---

## 10. Skills Presentation

**Recommended categorization** (mapped directly from CV's "Skills & Technologies" section) 🟦:

| Category | Skills |
|---|---|
| Languages | Python, SQL, JavaScript, HTML, CSS |
| Generative AI | LLMs, RAG, AI Agents, Prompt Engineering, Conversational AI, Voice AI, Workflow Automation |
| ML / Deep Learning | Machine Learning, Deep Learning, NLP, Computer Vision, Transfer Learning |
| Frameworks & Libraries | FastAPI, Django, Flask, LangChain, LangGraph, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, FAISS |
| Speech & Voice | STT, TTS, Whisper, Real-Time Voice Pipelines, LiveKit, Vapi, ElevenLabs, Deepgram |
| Databases & Caching | PostgreSQL, Redis, ChromaDB, Pinecone |
| APIs & Real-Time | REST APIs, WebSockets, Asynchronous Processing, API Integration |
| Cloud & Deployment | Runpod, Vercel, Linux, GPU Deployment |
| Tools & Platforms | Git, GitHub, VS Code, Google Colab, Hugging Face, Streamlit, n8n, Webhooks, Airtable, Langfuse |

**Recommended visual representation** 🟨: Avoid arbitrary percentage/star-rating bars (common criticism — unverifiable and reads as unprofessional to technical reviewers). Instead:
- Categorized **chip/tag grid** grouped under clear headers (table above), each chip color-coded by category.
- Optional **"used in" tooltip or link** connecting each skill to the project(s) that demonstrate it — this is more credible than a numeric rating and directly supports the Hiring Manager and Interviewer personas.
- A **"core stack" vs "familiar with" visual distinction** 🟨 (e.g., bold/larger chips for FastAPI, LangChain, RAG, WebSockets, PostgreSQL vs. standard-weight for peripheral tools) so the strongest signal isn't diluted by the long tail.

---

## 11. Experience Timeline

Structured directly from CV 🟦, presented as a vertical timeline (newest first):

**Full Stack AI Engineer — Entropik Labs (Remote)** · Jan 2026 – Present
- Built and deployed production-grade Generative AI systems including RAG pipelines, voice AI agents, and real-time conversational applications.
- Developed FastAPI-based backend services and WebSocket communication systems integrated with LLM-powered workflows.
- Worked on GPU-based deployments and production AI systems including voice-to-voice RAG agents and conversational assistants.
- Tech: FastAPI, WebSockets, RAG, GPU deployment, LLMs.
- 🟨 Business impact (to be confirmed/authored by Waleed): frame around production reliability and real-time performance at scale.

**AI Engineer — GulzarSoft (Full-Time)** · Sep 2025 – Jan 2026
- Developed AI applications using LLMs, LangChain, and agent-based architectures for production-ready systems.
- Built automation workflows, embedding-based retrieval systems, and machine learning pipelines.
- Contributed to backend services and AI integration for multiple client-facing applications.
- Tech: LangChain, LLMs, agent architectures, embeddings.

**AI Engineer Intern — GulzarSoft (Full-Time)** · Jun 2025 – Aug 2025
- Worked on machine learning models, data preprocessing, and LangChain-based applications.
- Assisted in building RAG prototypes, embeddings workflows, and basic AI automation systems.
- Tech: ML, LangChain, RAG prototyping.

🟨 **Recommendation:** Group the two GulzarSoft entries visually (single company block, two role sub-entries) to visually communicate the internal promotion — this progression signal (intern → engineer in 3 months) is a strong, underused credibility point and should be called out explicitly, e.g., a small "Promoted" marker between the two GulzarSoft entries.

---

## 12. Technical Architecture

🟨 All recommendations below reflect current (2026) best practice and are suited to a content-driven, form-enabled, low-write-traffic personal site.

- **Framework:** Next.js (React, App Router) — SSG/ISR for project/blog content, enabling strong SEO and fast loads while still allowing the contact form's server action.
- **Language:** TypeScript throughout.
- **Styling:** Tailwind CSS + a small design-token layer for the color/typography system defined in Section 7.
- **Content management:** MDX or a lightweight headless CMS (e.g., Sanity/Contentlayer) for Projects/Experience/Blog content so updates don't require redeploy-by-code-edit as new projects ship.
- **Hosting:** Vercel 🟦 (already used in his own projects — familiar, zero-friction, excellent for Next.js).
- **Deployment:** Git-based CI/CD via Vercel (preview deployments per PR).
- **Analytics:** Privacy-respecting analytics (e.g., Vercel Analytics or Plausible) — avoid heavy GA if performance/privacy positioning matters to an engineering audience.
- **SEO tooling:** `next-seo` or native Next.js Metadata API; sitemap + robots via Next.js built-ins.
- **Forms:** Server action or a form service (e.g., Resend for transactional email, or Formspree/Web3Forms for zero-backend simplicity) — given Waleed's own FastAPI skill, a lightweight custom FastAPI endpoint is also a credible "dogfooding" choice worth highlighting in the footer ("contact form powered by a FastAPI microservice").
- **Email service:** Resend or SMTP via a transactional provider; auto-reply confirmation to sender.
- **Performance optimization:** Next/Image for optimized images, font subsetting/self-hosting (next/font), route-level code splitting (automatic in Next.js), edge caching for static content.
- **Image optimization:** WebP/AVIF via next/image, responsive `srcset`, lazy-loading below the fold.
- **Security:** HTTPS-only (default on Vercel), CSP headers, form input sanitization + rate-limiting on the contact endpoint, no exposed API keys client-side, honeypot/hCaptcha on the contact form to prevent spam.

---

## 13. SEO Specification

- **Title template:** `{{Page Title}} — Waleed Ali | Full Stack AI Engineer` 🟨
- **Meta description (home):** 🟨 "Waleed Ali is a Full Stack AI Engineer specializing in Voice AI, RAG, and production LLM systems — from FastAPI backends to real-time conversational agents."
- **Open Graph:** Custom OG image per page (name/title lockup + accent branding); `og:type=website` (home), `og:type=article` (blog/case studies).
- **Twitter Card:** `summary_large_image`, matching OG image.
- **Structured data (JSON-LD):** `Person` schema (name, jobTitle, url, sameAs: LinkedIn/GitHub), `WebSite` schema with `SearchAction` if search is added later, `CreativeWork`/`SoftwareApplication` schema per project case study.
- **Robots.txt:** Allow all; disallow any `/admin` or preview routes if a CMS is added.
- **Sitemap:** Auto-generated `sitemap.xml` via Next.js, including all project detail pages.
- **Canonical URLs:** Self-referencing canonical on every page; enforced trailing-slash/non-trailing-slash consistency.
- **Keywords (semantic focus, not stuffing):** 🟨 "Full Stack AI Engineer," "Voice AI developer," "RAG engineer," "LangChain developer," "FastAPI AI backend," "conversational AI engineer," "LiveKit developer," "Vapi voice agent developer." Tie these naturally into headings/body copy rather than a meta-keywords tag (deprecated/ignored by modern search engines).
- **Semantic HTML:** Single `<h1>` per page, logical heading order, `<main>`/`<nav>`/`<footer>` landmarks, project cards as `<article>` elements.

---

## 14. Accessibility (WCAG 2.2 AA target)

- **Keyboard navigation:** All interactive elements reachable and operable via Tab/Shift+Tab/Enter/Space/Esc; visible focus indicator (never `outline: none` without a replacement); logical tab order matching visual order.
- **Screen readers:** Semantic landmarks, descriptive link text (no bare "click here"), alt text on all meaningful images (screenshots, diagrams), decorative images marked `aria-hidden`.
- **ARIA:** Used only where semantic HTML is insufficient (e.g., custom tabs for project filters, toast live regions, modal dialogs) — avoid ARIA overuse on native elements.
- **Contrast:** Minimum 4.5:1 for body text, 3:1 for large text/UI components, in both light and dark themes — validate accent color against both backgrounds explicitly (a common failure point for "premium dark mode" designs).
- **Focus states:** Custom-styled but always visible focus ring consistent with brand accent color.
- **Reduced motion:** Full `prefers-reduced-motion` support — disable scroll-reveal/parallax/count-up animation, replace with instant-state equivalents.
- **Semantic HTML:** Correct heading hierarchy site-wide (this doubles as an SEO benefit), native `<button>`/`<a>` usage (never `<div onClick>`), form `<label>` associations.

---

## 15. Performance

**Targets (Core Web Vitals, all pages):**
- LCP (Largest Contentful Paint): ≤ 2.0s
- INP (Interaction to Next Paint): ≤ 200ms
- CLS (Cumulative Layout Shift): ≤ 0.1
- Lighthouse Performance score: ≥ 95 (desktop), ≥ 90 (mobile)

**How targets are met:**
- **Image loading:** Next/Image with explicit width/height (prevents CLS), lazy-load below-fold, modern formats (AVIF/WebP).
- **Code splitting:** Automatic per-route via Next.js; dynamic-import heavy/rare components (e.g., modal lightbox, chart library if added).
- **Caching:** Static-generate project/experience/skills pages (content changes infrequently); ISR revalidation window (e.g., 24h) if a CMS is used; CDN edge caching via Vercel.
- **Lazy loading:** Defer non-critical JS (analytics, chat widgets if added later) until after first interaction/idle.
- **Fonts:** Self-hosted via `next/font`, subsetted to used character sets, `font-display: swap`.
- **Bundle optimization:** Tree-shaking, avoid heavy UI libraries where a lightweight custom component suffices, audit bundle size in CI (e.g., `next build` output + a size-limit check).

---

## 16. Animations

🟨 All recommendations — keep restrained, purposeful, and fully disabled under `prefers-reduced-motion`.

- **Page transitions:** Subtle fade/slide (200–300ms) between routes; no full-page wipes or heavy transitions that delay content.
- **Hover effects:** Card lift (translateY -4px + shadow/border glow), button scale (1.02), link underline-reveal.
- **Scroll animations:** Section content fades/slides into view once per element (IntersectionObserver-driven), staggered children (e.g., stat tiles, project cards) with ~80–100ms offset.
- **Section reveals:** Headings reveal slightly ahead of body copy to guide reading order.
- **Loading animations:** Skeleton screens (not spinners) for project/content loading; spinner only inside buttons during form submission.
- **Micro-interactions:** Theme-toggle icon morph (sun↔moon), copy-to-clipboard checkmark confirmation on code/email copy, form field focus glow.
- **Cursor effects:** 🟨 Optional custom cursor (e.g., a small dot that scales near interactive elements) — only on desktop, only if it doesn't hinder precision; must be fully absent on touch devices. Given the "credible engineer" positioning, treat this as low-priority polish, not core.

---

## 17. Contact Experience

- **Contact form:** Name, Email, Message, optional "Reason" selector (Full-time role / Freelance project / Collaboration / Other) 🟨 — routing the message context helps Waleed triage quickly.
- **Validation:** Inline, on-blur validation (required fields, valid email format); submit button disabled until valid; clear inline error text (not just red borders — color-only errors fail accessibility and are unclear).
- **Success flow:** Toast/inline success message + optional auto-reply email to the sender confirming receipt.
- **Email integration:** Transactional email service (Resend/SMTP) delivering to waleedali09az@gmail.com 🟦, with spam protection (honeypot field + optional hCaptcha).
- **Social links:** LinkedIn 🟦, GitHub 🟦, Email 🟦 — displayed in Hero, Contact, and Footer consistently.
- **Location:** Sialkot, Pakistan 🟦, clearly paired with "Open to Remote" 🟦 to avoid geographic filtering by recruiters searching for on-site candidates.
- **Availability:** 🟨 Editable status badge — "Open to full-time roles," "Open to freelance," or "Not currently available" — should be a simple config value Waleed updates himself without a redeploy (CMS field or simple JSON config).
- **Resume download:** Prominent button in Nav + Hero + Contact, linking a versioned PDF (`resume-waleed-ali-v5.pdf` etc.), tracked via analytics event.
- **Calendar scheduling 🟨 (optional):** Cal.com/Calendly embed on Contact page for recruiters wanting to book a call directly — recommended addition given his fast-moving hiring pipeline (multiple companies in under 2 years suggests frequent interviewing).

---

## 18. Responsive Design

| Breakpoint | Layout behavior |
|---|---|
| **Mobile** (< 640px) | Single-column throughout; hero stacks text-over-visual; stat tiles 2x2; project cards horizontal-scroll carousel or stacked; nav collapses to hamburger; timeline becomes single vertical line with condensed entries (tap to expand bullets). |
| **Tablet** (640–1024px) | 2-column grids for projects/skills; hero split layout begins to appear; nav may remain full (space permitting) or stay collapsed depending on logo/CTA width. |
| **Laptop** (1024–1440px) | Full 3-column project grid; full split hero; sticky nav fully expanded; timeline in 2-column (date + content) layout. |
| **Desktop** (1440–1920px) | Content remains capped at ~1280px max-width with increased whitespace margins — avoid full-bleed text lines that hurt readability. |
| **Large monitors** (> 1920px) | Same capped content width; optionally increase background texture/visual breathing room only — never scale typography/line-length beyond comfortable reading measure (~75ch). |

Every section (Hero, Proof Bar, Featured Projects, Timeline, Skills, Contact) must be explicitly designed at each breakpoint above, not just "shrunk" — particularly the timeline and stat bar, which are the most common responsive failure points.

---

## 19. Portfolio Content Gaps

Information the CV does not provide that materially improves the portfolio's persuasiveness. Prioritized:

1. **Professional photo** — none available; required for About/Hero credibility and OG image branding.
2. **Project screenshots/demo GIFs or videos** — none available; critical for all 8 projects, especially voice-AI ones where a short demo video (or Loom-style walkthrough) does more persuasive work than any text.
3. **Live demo links / GitHub repo links per project** — CV doesn't specify which projects have public repos or live URLs; confirm which of the 8 can be linked (respecting any client confidentiality, e.g., WhatsApp Automation Agent may be client-owned/private).
4. **Case-study narrative detail** — Problem framing, Challenges, and Lessons Learned are not in the CV and must be authored by Waleed per project (Section 9).
5. **Testimonials/references** — none present; recommend requesting a short quote from an Entropik Labs or GulzarSoft manager, or from a client on the Vapi/WhatsApp automation projects.
6. **Quantified metrics/impact** — CV bullets are activity-based ("built," "developed") rather than outcome-based; wherever possible add numbers (latency improvements, user counts, cost savings, accuracy metrics) even if approximate/order-of-magnitude.
7. **Awards/publications** — none listed; not required, but any hackathon wins or technical writing would strengthen the Developer persona's trust.
8. **Company logos** — for Entropik Labs/GulzarSoft, needed for the experience timeline/homepage highlight; confirm usage rights before publishing.
9. **Certifications** — none on CV; if any exist (e.g., DeepLearning.AI, cloud certs) even informally completed, they're worth adding to a credibility strip.
10. **GitHub activity confirmation** — CV lists a GitHub link but portfolio should verify pinned repos are public/polished (README quality, not just code dumps) since technical personas will click through.

---

## 20. Future Enhancements

🟨 Recommended for post-launch phases, not required for MVP:

- **Blog:** Technical write-ups on RAG architecture decisions, voice AI latency optimization, LangGraph agent patterns — strong SEO/authority compounding for his niche.
- **AI chatbot:** A RAG-powered "ask about my experience" chat widget on the site — highly on-brand self-demo of his own skill set (dogfooding), doubles as a live portfolio piece.
- **Project filtering/search:** Expand the Section 5.4/9 filter tabs into full search-and-filter once project count grows beyond ~10–12.
- **Interactive architecture diagrams:** Clickable/animated system diagrams per project (vs. static images) for the Hiring Manager/Interviewer personas.
- **Command palette (⌘K):** Quick-jump navigation across projects/pages — a small but notable "this developer sweats details" signal for technical visitors.
- **Theme customization:** Beyond light/dark, an accent-color picker — low priority, purely delight-oriented.
- **Internationalization:** Urdu-language version 🟨 — thematically relevant given the Urdu Voice-to-Voice RAG Agent project, could double as a live demo of that exact skill.
- **CMS integration:** Move Projects/Experience/Blog content to a headless CMS once update frequency increases, so content edits don't require code deploys.
- **Analytics dashboard:** Private view of resume-download counts, contact-form submissions, and top-visited project pages to inform which case studies to expand next.

---

*End of specification. This document is intended for direct handoff to a UI/UX designer and development team; all 🟨-marked items represent recommendations requiring Waleed's confirmation or additional source material before implementation, particularly Section 19 (Content Gaps), which should be resolved before final visual design begins.*
