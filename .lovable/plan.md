## Goal

Make the landing hero match the attached mockup's coherent, book-like editorial vibe. Today the headline is oversized and wrapping, the globe isn't visibly anchored on the right, the sketch diagrams are too faint to read, the background is pure white, and the logo lacks the little book mark.

## Changes (frontend only — Hero, Nav, HeroDiagrams, index.css)

### 1. Background — warm paper

- `--background` from `0 0% 100%` (pure white) to a warm off-white (~`40 30% 98%`) so the page reads like book paper, matching the mockup.
- Keep `--elevated` / `--elevated-2` consistent; bump them ~1% if needed for contrast.

### 2. Headline sizing & layout (`Hero.tsx`)

- Reduce H1 scale so "Whatever you build" fits one line at the current viewport: `text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]` (down from the current 5xl→7xl→[5.25rem]).
- Tighten left column to `lg:col-span-6` (from 7) and globe to `lg:col-span-6` so the headline + image balance like the mockup.
- Keep Literata 600 / leading 1.12 / no negative tracking.

### 3. Globe image (`Hero.tsx`)

- Increase max width: `max-w-[420px] md:max-w-[560px] lg:max-w-[620px]`.
- Remove the `Reveal` wrapper around the image (it currently delays visibility and may be why the image isn't rendering above the fold) — or keep `Reveal` but ensure container has min-height so the column doesn't collapse.
- Add `lg:-mt-8` slight upward nudge so the globe overlaps the diagrams area like the mockup.

### 4. Diagrams — readable, not invisible (`HeroDiagrams.tsx`)

- Bump container opacity from `0.1` to `0.28` so the sketches read like real pencil notes.
- Increase stroke widths slightly (0.5 → 0.7, 0.6 → 0.8) so they survive at higher opacity without looking heavy.
- Add the sample text lines visible in the mockup to the PROBLEM card: "Too much complexity.", "Unclear choices.", "Teams misaligned.", "Outcome unknown." (replacing the generic horizontal lines).
- Add a small "missing link" arrow note + a tiny line-chart squiggle at bottom-center to match the mockup's bottom-of-globe details.

### 5. Logo lockup (`Nav.tsx`)

- No changes.

### 6. What we are NOT changing

- No new pages, routes, copy edits, color palette changes (gold + sage stay), or layout outside the hero.
- No business logic, data, or backend work.

## Verification

After edits: refresh preview, screenshot at 1239px width, confirm:

- "Whatever you build" sits on one line
- globe is visible top-right, comparable size to mockup
- diagrams readable but still subordinate
- background reads warm, not stark white  
  
This should also look good in Tablet and mobile mode