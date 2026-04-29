## Goal

Pull the site closer to Ant Design's structural language while keeping the dark editorial mood, swap the abstract video thumbnails for real frames pulled from each MP4, and rewrite the copy in a lively, friendly, 6th-grader-clear voice — no jargon, no corporate BS.

---

## 1. Design tokens — Ant-inspired, dark, Polar Green accent

Update `src/index.css` and `tailwind.config.ts`:

- **Accent → Polar Green** (Ant ramp). New tokens:
  - `--accent: 100 61% 45%` (Polar Green 6, ~`#52C41A`) as the primary action color
  - `--accent-soft` (Polar Green 3) for hover tints
  - `--accent-deep` (Polar Green 8) for pressed/active
  - Keep variable name `--accent-sage` aliased to the new green so we don't have to touch every component at once; rename the Tailwind `sage` token to point at the new value (the class `bg-sage`/`text-sage` keeps working).
- **Surfaces** — shift from warm charcoal to Ant's neutral dark grays:
  - `--background: 0 0% 7%`, `--elevated: 0 0% 10%`, `--elevated-2: 0 0% 14%`
  - `--hairline: 0 0% 18%`, `--hairline-strong: 0 0% 26%`
- **Ink** — neutral off-white instead of warm cream: `--ink: 0 0% 98%`, `--ink-muted: 0 0% 65%`, `--ink-subtle: 0 0% 45%`.
- **Radii** — Ant-tight: `--radius: 6px`; add `--radius-sm: 4px`, `--radius-lg: 8px`. Round-pill buttons drop to `rounded-md`.
- **Typography** — keep Fraunces for display headings (editorial mood per chosen direction), but tighten body to Ant's stack feel with Inter at `text-[15px]` base line-height 1.6.
- Add Ant-style component utilities in `@layer components`:
  - `.btn-primary`, `.btn-default`, `.btn-ghost` (Ant button shapes: 32px h, 6px radius, 1px border, subtle hover lift via background tint not transform)
  - `.tag` (small uppercase chip with 1px border and tinted background)
  - `.input` (32px, 6px radius, focus ring = 2px Polar Green @ 20%)

## 2. Real video thumbnails

- Add `thumbnailUrl?: string` to `WatchItem` in `src/content/watchContent.ts`.
- Run a one-time ffmpeg pass over `public/videos/*.mp4`:
  - Seek to ~10% of duration, grab one frame, scale to 1280×720, save JPEG q=82 to `public/thumbs/<id>.jpg`.
  - Files generated: `spotify-product-world.jpg`, `airbnb-product-world.jpg`, `youtube-music-product-world.jpg`, `revolut-product-world.jpg`, `spotify-vs-youtube-music.jpg`.
- Wire each video item's `thumbnailUrl` to its generated file.
- For audio Deep Dives: reuse the matching brand's video frame, dimmed + Polar Green wash overlay so the cover still reads as "audio episode" (Headphones badge stays on top).
- Update `WatchCard` and `Watch.tsx` hero to render `<img src={thumbnailUrl}>` when present, with `loading="lazy"`, `decoding="async"`, and the existing play/headphones overlay on top. `AbstractThumb` becomes the fallback only when `thumbnailUrl` is missing.
- `MediaModal` video preview keeps the native player; we just remove the `AbstractThumb` from the audio modal header and use the same brand thumbnail there.

## 3. Component pass — Ant shapes

Touch only what's needed to feel Ant-like; no full shadcn rewrite.

- **Buttons** (Nav CTA, Hero CTAs, FinalCTA, Watch hero "Watch now"): switch from `rounded-full bg-sage` to Ant primary shape — `rounded-md` 6px, 1px border same as fill, height ~36px, background Polar Green 6, hover Polar Green 5, active Polar Green 7. Secondary becomes 1px hairline border on transparent with Polar Green border + text on hover.
- **Filter pills** on `/watch` and Home tabs: Ant segmented look — square 6px radius, 1px hairline, active = Polar Green border + faint Polar Green tint. Drop `rounded-full`.
- **Tags / eyebrows** on cards: replace pill chips with Ant tag (`.tag` utility) — uppercase still, but rectangular with subtle tinted background (`bg-sage/10 text-sage border-sage/30` for Deep Dive, neutral for Watch).
- **Inputs**: Search input on `/watch` and `ContactForm` fields — square 6px radius, 1px hairline, 2px Polar Green focus ring.
- **Cards**: `WatchCard` and the use-cases / pillars / services blocks — radius 8px (was effectively 0 / pill), border stays 1px hairline, hover swaps to `bg-elevated-2` and shifts border to Polar Green @ 30% (no Y-translate; Ant doesn't lift).
- **Nav**: Logo stays serif. CTA becomes Ant primary square button. Active link gets a 2px Polar Green underline instead of just color shift.

## 4. Copy rewrite — Lively, Friendly, Conversational, 6th-grade clear

Voice rules:
- Short sentences. Plain words. No "leverage", "coherence", "frictionless", "world model", "manufacture trust".
- Warm, a little playful, talks to one person not a boardroom.
- Keep the "Product Worlds" name — it's the brand — but explain it like a human would.

Files and rewrites:

- **`src/pages/Home.tsx`** — hero, trust line, watch intro, use-cases intro, method intro, work-with-us intro.
  - Hero H1 example: *"Make products people just get."*
  - Hero sub example: *"We pull apart how Spotify, Airbnb and Revolut feel so simple — then help you do the same."*
  - Trust line example: *"A way of looking at products through people, habits, and small design choices."*
- **`src/components/site/FinalCTA.tsx`** — rewrite the closer to something like *"Good products feel obvious. They almost never start that way."*
- **`src/content/watchContent.ts`** — rewrite each `description` (and a few titles that lean academic) into one warm sentence each. Examples:
  - Spotify Product World → *"Why opening Spotify feels like the app already knows what you want."*
  - Airbnb → *"The little wording and layout tricks that make a listing feel like a place, not a database row."*
  - Revolut → *"Why moving money in Revolut feels powerful — and how that feeling is designed."*
  - Head to Head → *"Two music apps, two completely different vibes. Here's why."*
- **`src/content/useCases.ts`** — soften titles and details. e.g. *"Your product feels messy after growth"* → *"Things got messy as you grew"* with detail *"Features piled up faster than the logic behind them. We help it click again."*
- **`src/content/services.ts`** — keep service names, rewrite `short` lines in plain English.
- **`src/content/pillars.ts`** — keep the five names (Goals / Rules / Feedback / Progress / Beliefs), rewrite each `oneLiner` and `definition` in everyday language.
- **`src/components/site/FloatingTiles.tsx`** — rewrite the four `meta` lines (e.g. *"feels like it knows you"*, *"feels like a place"*, *"feels like control"*, *"feels like a search box"*).
- **`src/components/site/Nav.tsx`** + Footer — CTA becomes *"Watch the videos"* (less brochure-y than "Watch the Library").

Pages I won't touch in this pass unless trivially affected: `Method.tsx`, `UseCases.tsx`, `WorkWithUs.tsx` long-form copy — flag them and ask if you want a second pass after seeing the home/watch tone.

## 5. Technical notes

- ffmpeg is available via `nix run nixpkgs#ffmpeg`. Single bash loop over the 5 MP4s, writes to `public/thumbs/`. Probed duration → seek to `duration*0.1`, `-frames:v 1`, `-q:v 3`.
- Token aliasing strategy means existing `bg-sage`, `text-sage`, `border-sage/40` classes across ~12 files keep working without find-and-replace; they just render Polar Green instead of sage.
- All color values stay in HSL CSS variables — no hardcoded hex in components.
- No new dependencies. No backend changes. No routing changes.

## 6. Out of scope (call out, don't do)

- Light theme version of the Ant tokens (dark-only stays).
- Replacing shadcn primitives (Dialog, Toast, etc.) with Ant React components — keeping shadcn, only restyling.
- Long-form copy on `/method`, `/use-cases`, `/work-with-us` deep pages.
