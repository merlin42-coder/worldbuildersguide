
# World Builders Guide — v1 Website

A premium, editorial marketing site for a product strategy studio. Dark-first, minimal, calm, high-trust. Five routes (Home + Watch + Use Cases + Method + Work With Us), fully responsive, desktop-first. All content static so it's easy to edit later; ready for video embeds, gating, and email capture in a future pass.

---

## Design system

**Theme:** Dark-first.
- Background: near-black charcoal (`#0E0F0D` range) with a subtler "elevated" surface for cards.
- Text: warm off-white for body, pure off-white for headings, muted warm-grey for meta.
- Accent: muted sage / pistachio (`#B8C9A8` range) — used sparingly for CTAs, key underlines, hover states, and badges.
- Borders: hairline, low-contrast warm grey for that gallery/editorial feel.

**Typography:**
- Headings: a modern editorial serif-adjacent sans (e.g. Fraunces or Instrument Serif for display headlines, paired with Inter for UI). Large sizes, tight tracking, generous leading.
- Body: Inter, comfortable measure (~65ch), warm-white at ~80% opacity.
- Numbers / meta / labels: small caps tracking-wider for section eyebrows ("METHOD", "WATCH").

**Spacing & layout:** Generous whitespace, 1280px max content width, 8-pt spacing scale, sections separated by large vertical rhythm (96–160px desktop).

**Motion (subtle only):**
- Fade-in + slight rise on scroll (IntersectionObserver).
- Hover lift on cards (translateY -2px + soft shadow + sage border tint).
- Smooth tab crossfades on Watch.
- Hero floating tiles drift gently (slow, low amplitude — never gimmicky).

**Iconography:** Lucide, thin stroke.

**No stock photos.** All visuals are abstract: product diagrams, card grids, mono-line illustrations, and CSS-rendered "product world" tiles.

---

## Site structure

```
/                  Home
/watch             Content library
/use-cases         Scenarios + deeper explanations
/method            Interactive framework explainer
/work-with-us      Services + contact form
```

**Sticky top nav** on every page: logo wordmark left ("World Builders Guide" in editorial serif), links center (Watch, Use Cases, Method, Work With Us), primary sage CTA right ("Watch Free Breakdown"). Mobile: slide-in sheet.

**Footer** on every page: thin wordmark, link column, © line.

---

## Homepage sections

1. **Hero** — Display headline "Build products that feel coherent." Subhead, two CTAs (sage primary + ghost secondary). Right side: an animated grid of 4 product-world tiles (Spotify, Airbnb, Revolut, YouTube Music) — abstract card mockups with product-name labels, gently floating with staggered offsets. Desktop: split layout. Mobile: stacked, tiles become a 2×2 grid.
2. **Trust strip** — One-line statement + a row of 5–6 monochrome placeholder logo marks (rendered as text/SVG, not images) at low opacity.
3. **Watch Preview** — Section title, three tabs (Product Worlds / Breakdowns / Head to Head), 6 cards in a 3-col grid. Each card: 16:9 abstract thumbnail, title, meta line ("12 min · Spotify"), duration chip, FREE or LOCKED badge. First card visually featured (spans 2 cols on desktop, sage outline, "FREE" badge). Tabs filter the grid with a smooth crossfade.
4. **Use Cases** — Title + 6 cards in a 3×2 grid, each with a small lucide icon, the scenario line, and a short hover-revealed sub-line. Closing italic line below the grid.
5. **Method** — "Products Are Worlds" title + subtitle. 5 vertical pillar cards (Goals, Rules, Feedback, Progress, Beliefs), each with a glyph, name, one-line description. On desktop: 5 columns with a faint connecting line; on mobile: stacked. CTA "Explore Method" → `/method`.
6. **Work With Us** — Title + 3 service cards (Product Clarity Sprint, Feature Coherence Audit, Team Alignment Workshop). Each card has a number (01/02/03), name, one-sentence description, and a subtle hover lift. CTA "Start a Conversation" scrolls to the inline contact form (Name, Email, Company, "What are you building?" textarea, sage submit button, zod-validated, success toast — no backend yet, just client-side).
7. **Final CTA** — Centered large headline "Great products feel obvious after they are built right." Two buttons.
8. **Footer.**

---

## Sub-pages

**`/watch`** — Netflix/Mobbin-inspired library.
- Hero featured free breakdown (large 16:9 abstract thumbnail, title, description, "Watch free" CTA).
- Sticky filter row: All / Product Worlds / Breakdowns / Head to Head + search input (filters client-side by title).
- Responsive grid of ~12 content cards with lock icons on premium ones. Cards are visually inert in v1 (no playback) but structured as a typed array so videos can be wired later.

**`/use-cases`** — Editorial long-form feel.
- Intro headline + subhead.
- 5 scenario blocks, each a two-column row: left = scenario title + 1-paragraph description + 3 bullet "what we do"; right = abstract diagram (CSS/SVG). Scenarios: Scaling startup with messy UX, Launching a second product line, Post-merger team alignment, Building a premium experience, Conference / event design as a world.
- Bottom CTA strip → Work With Us.

**`/method`** — Interactive single-page explainer.
- Hero: "Products Are Worlds" + intro paragraph.
- Five expandable accordion sections (Goals, Rules, Feedback, Progress, Beliefs). Each opens to show: definition, 2–3 example questions teams should answer, and a small abstract diagram.
- Below: "How we apply this" — 3-step process strip (Diagnose → Define → Align).
- Bottom CTA → Work With Us.

**`/work-with-us`** — Premium consulting landing.
- Short hero: "Sharper product clarity, on demand."
- Three detailed service cards (expanded versions of homepage cards: deliverables list, timeline, who it's for).
- Inline FAQ accordion (4–5 items).
- Contact form (same component as home).
- Trust line + footer.

---

## Content & data shape

All content lives in a single `src/content/` folder so it's trivially editable later:
- `watchContent.ts` — array of `{ id, title, category, duration, isFree, description, thumbnailVariant }`.
- `useCases.ts`, `methodPillars.ts`, `services.ts`, `scenarios.ts`.

Cards read from these arrays — adding new entries = one object. Thumbnails are CSS-generated variants (4–5 abstract patterns selected by `thumbnailVariant`), so no image assets needed for v1 and they look intentional and consistent.

---

## Future-ready hooks (built in, dormant in v1)

- Watch cards accept an optional `videoUrl` — when present, click opens a modal with a YouTube embed (modal component built but unused in v1).
- `isFree: false` cards already render a lock badge and a hover state hinting at gated content.
- Contact form is wrapped in a single `submitContact()` function — swap the in-memory handler for a Lovable Cloud insert later without touching the form.
- An `<EmailCapture />` component is built and placed in the footer area, validating with zod and currently showing a "Thanks" toast — wire to a table later.

---

## Technical notes

- React Router routes added in `App.tsx` for the 4 new pages.
- Design tokens defined as HSL CSS variables in `index.css`; Tailwind config extended with `bg-surface`, `bg-elevated`, `text-ink`, `text-ink-muted`, `border-hairline`, `accent-sage` semantic tokens. No hard-coded colors in components.
- Fonts loaded via Google Fonts `<link>` in `index.html` (Fraunces + Inter).
- Reusable components: `Nav`, `Footer`, `SectionEyebrow`, `WatchCard`, `UseCaseCard`, `PillarCard`, `ServiceCard`, `ContactForm`, `FloatingTiles` (hero animation), `RevealOnScroll` wrapper.
- Form validation with zod; toasts via existing sonner.
- No backend in v1 (per scope choice). Lovable Cloud can be enabled later for form storage + email capture without restructuring.
- Accessibility: semantic landmarks, focus rings in sage, keyboard-navigable tabs/accordions (radix primitives already in repo), reduced-motion respected for floating tiles and reveals.

---

## Out of scope for v1

- Real video playback / YouTube embeds wired to cards.
- Authentication or paid gating logic.
- Backend persistence for contact form / email capture.
- CMS UI (content edited in code for now, structured to be portable to a CMS later).
