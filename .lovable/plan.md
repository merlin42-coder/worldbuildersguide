# Landing Page Redesign — Light Mode

Convert `/` to a clean light-mode landing matching the mockup, with a serif hero, gold underline, globe illustration, and faint sketch diagrams behind the hero. Convert the rest of the page (Trust, Breakdowns, Use Cases, Method, Build your world, Final CTA, Footer) to the same light theme. Stays fully responsive.

## Assets

- Copy `user-uploads://WBG_Hero_1.0.png` → `src/assets/hero-globe.png` (right side of hero).
- Copy `user-uploads://WBG_Logo_0.1.png` → `src/assets/wbg-logo.png` (nav, dark teal book+globe icon).

## Design tokens (`src/index.css` + `tailwind.config.ts`)

Flip the root palette to light mode:

- `--background`: `0 0% 100%` (white)
- `--foreground` / `--ink`: `220 13% 18%` (dark grey ~ #2A2E36)
- `--ink-muted`: `220 9% 38%`
- `--ink-subtle`: `220 9% 55%`
- `--hairline`: `220 13% 91%`
- `--elevated`: `40 20% 98%` (warm off-white for cards)
- `--sage`: keep existing teal-green (`170 35% 30%`-ish) — matches logo
- `--gold`: `35 75% 42%` (dark gold for CTA + underline) — already close to current

Buttons:
- `.btn-primary` → gold bg (`hsl(var(--gold))`), white text, no border
- `.btn-default` → transparent bg, dark grey text, hairline border

## Component changes

### `src/components/site/Nav.tsx`
- Replace text wordmark with logo image (h-8 md:h-10) + stacked 3-line wordmark `WORLD / BUILDERS / GUIDE` (tiny tracked sans, dark grey), separated by a thin vertical hairline.
- Center nav links unchanged in labels.
- Right CTA stays "Watch breakdowns" but uses new gold `.btn-primary`.
- Remove dark-mode scrolled background; use `bg-white/85 backdrop-blur` when scrolled.

### `src/components/site/Hero.tsx` (new) — extracted from `Home.tsx`
Two-column layout (`lg:grid-cols-12`, 7/5 split):
- Left: serif headline (Fraunces) in 3 lines:
  - "Whatever you build"
  - "It's a little world"
  - "Make it make sense." — gold color + hand-drawn underline SVG
  - Existing subcopy + CTAs below.
- Right: `<img src={heroGlobe}>` centered vertically, `max-w-[520px]`, drop-shadow soft.

Background diagrams (absolute, behind hero, opacity 8–12%, dark grey strokes, `pointer-events-none`, `aria-hidden`):
- Top-left: PROBLEM box with 4 fake bullet lines
- Top-center: IDEA → DEFINE → BUILD → ITERATE flow with dashed LEARN loop
- Top-right: SYSTEM OVERVIEW (WIP) box with USERS/JOURNEY/OUTCOMES/SIGNALS/FEEDBACK nodes
- Mid-right: USER NEED venn (3 circles: Viable / Feasible / Meaningful → Sweet Spot)
- Bottom-left: USER JOURNEY (DRAFT) — 5 circles DISCOVER/DEFINE/BUILD/USE/EVOLVE + wireframe rectangle below
- Bottom-center: FLOW (DRAFT) Input→Process→Result + RISKS list with warning triangle
- Bottom-right: STRUCTURE (WORKING) tree + small "page is a work in progress" handwritten note

All diagrams as inline SVG in a single `<HeroDiagrams />` component with responsive positioning (hidden on `<md`, visible `md:block`). Use Inter for tiny labels, slight letter-spacing.

### `src/pages/Home.tsx`
- Replace `<FloatingTiles />` block with `<Hero />`.
- Update headline copy.
- Remove "A world-first product strategy studio" eyebrow (mockup omits it) — or keep small above headline; default: omit.

### Below the fold
All sections inherit new tokens automatically since they use `bg-background`, `text-ink`, etc. Verify:
- TRUST strip: hairlines visible on white; logos in dark grey.
- WATCH PREVIEW: tab pills (`.seg`) → light grey bg, active = dark ink. WatchCard shadows softened for white bg.
- USE CASES grid: hairline borders on white, hover = `--elevated`.
- METHOD grid: same.
- BUILD YOUR WORLD cards: `bg-elevated` (warm off-white) on white page reads as subtle card.
- FinalCTA + Footer: dark grey text on white.

### `src/components/site/WatchCard.tsx`, `FinalCTA.tsx`, `Footer.tsx`
Light-touch token swaps only — no structural changes. Replace any hardcoded dark colors with semantic tokens.

## Responsive behavior

- `<md`: single column hero, globe stacks below headline at `max-w-[320px]` centered, background diagrams hidden (too noisy on mobile).
- `md` to `lg`: 2-col hero, diagrams shown but trimmed (hide top-right + bottom-right via `hidden lg:block`).
- `lg+`: full diagram set as in mockup.

## Files touched

- new: `src/assets/hero-globe.png`, `src/assets/wbg-logo.png`, `src/components/site/Hero.tsx`, `src/components/site/HeroDiagrams.tsx`
- edited: `src/index.css`, `tailwind.config.ts`, `src/components/site/Nav.tsx`, `src/pages/Home.tsx`, `src/components/site/WatchCard.tsx`, `src/components/site/FinalCTA.tsx`, `src/components/site/Footer.tsx`

## Out of scope

- Other routes (`/watch`, `/use-cases`, `/method`, `/work-with-us`) — they'll inherit the light tokens automatically but I won't visually QA each one in this pass.
- New copy beyond the hero headline.
