## Goal

Restructure the Watch library around the real catalog: 4 products × (Product World video + Deep Dive audio) + 1 Head to Head video. Drop Free/Premium entirely. Build native players for both video and audio. Rename "Breakdowns" → "Deep Dives" everywhere.

## Final catalog

| Product | Product World (video) | Deep Dive (audio podcast) |
|---|---|---|
| Airbnb | ✓ | ✓ |
| Spotify | ✓ | ✓ |
| YouTube Music | ✓ | ✓ |
| Revolut | ✓ | ✓ |
| Spotify vs YouTube Music | Head to Head video | — |

Total: **9 pieces** (5 videos + 4 audio deep dives).

## Categories (used in filters + cards)

- **Product Worlds** — 4 video breakdowns, one per product
- **Deep Dives** — 4 audio podcasts (m4a, 2-speaker, NotebookLM-generated)
- **Head to Head** — 1 video (Spotify vs YouTube Music)

"Breakdowns" is removed from the codebase entirely.

## Approach

### 1. Content model
Update `WatchItem` type:
- Drop `isFree`.
- Add `mediaType: "video" | "audio"`.
- Add required `mediaUrl: string` (replaces the optional `videoUrl`).
- Rename category `"Breakdowns"` → `"Deep Dives"`.
- Keep `variant` for the abstract thumbnail look (audio cards get a distinct visual treatment — see below).

### 2. Hosting
- Videos → `public/videos/*.mp4` (≤35MB each, totals ~150MB for 5 videos — acceptable for v1).
- Audio → `public/audio/*.m4a`.
- Add a `<lov-link>` at the end so you can drop the rest of the files in via the chat upload when ready; the 4 already-uploaded MP4s get wired in this pass.

### 3. Players (one component, two modes)
Single `MediaModal` component (Radix Dialog, dark backdrop, sage focus rings, closes on Esc / backdrop / X, pauses on close).

- **Video mode:** native `<video controls preload="metadata" playsInline>` in a 16:9 frame.
- **Audio mode:** abstract "podcast cover" visual on top (uses the card's `variant` thumbnail, larger), product name + "Deep Dive" label, then a native `<audio controls>` bar. Optional subtle waveform-style decoration (CSS only, no JS audio analysis).

### 4. Card visual differentiation
Both card types share the same shape and grid, but signal medium clearly:
- **Video cards:** existing thumbnail + a **play triangle** glyph in the corner badge area + duration ("7 min").
- **Audio cards:** same abstract thumbnail with a tinted overlay + **headphones glyph** + "Deep Dive · 18 min" label. Slightly different accent treatment so the two feel related but distinct at a glance.
- No FREE/PREMIUM badges anywhere.
- All cards are clickable; clicking opens `MediaModal` in the right mode.

### 5. Page structure changes

**`/watch`:**
- Hero featured = Spotify Product World video (most polished, sets the tone).
- Filter pills: `All` · `Product Worlds` · `Deep Dives` · `Head to Head` (Breakdowns removed).
- Search still works across title/brand/description.
- Library shows all 9 items in a responsive grid.
- Remove the "Premium breakdowns coming soon · Notify me" block entirely.
- Keep the `FinalCTA` at the bottom.

**`/` (Home) Watch preview:**
- Tabs updated: `Product Worlds` / `Deep Dives` / `Head to Head`.
- Remove FREE/LOCKED badges from preview cards.
- "Featured" first card = Spotify Product World.

**Nav:**
- CTA "Watch Free Breakdown" → "Watch the Spotify Breakdown" (links to `/watch` and could deep-link to open the modal — for v1 just route to `/watch`).

**Copy sweep:**
- Replace every instance of "Breakdown(s)" with "Deep Dive(s)" where it refers to the audio category. Where "breakdown" is used generically (e.g. "Watch the Spotify breakdown" referring to a video), keep it — it's still natural English.
- Specifically: filter labels, category labels, and the eyebrow on the Watch hero get the rename.

### 6. Files mapped to uploads

The 4 uploaded files become:
- `Spotify_s_Design_Philosophy.mp4` → Spotify Product World (hero featured)
- `The_Secret_Blueprint_of_Airbnb.mp4` → Airbnb Product World
- `Building_YouTube_Music.mp4` → YouTube Music Product World
- `Spotify_vs_YouTube_Music.mp4` → Head to Head

The 5 missing pieces (Revolut Product World + 4 audio Deep Dives) get entries in the content array with `mediaUrl` pointing to the expected path (`/videos/revolut-product-world.mp4`, `/audio/spotify-deep-dive.m4a`, etc.). When you upload them, drop them into `public/videos/` or `public/audio/` with the matching filename — no code change needed. Until then, those cards will render but the player will fail to load — so I'll **temporarily filter them out of the grid** with a `published: boolean` flag (default true; false for the 5 missing ones). Flip to true when files arrive.

## Files touched

- **New:** `src/components/site/MediaModal.tsx`
- **Edited:**
  - `src/content/watchContent.ts` — full rewrite around the new catalog
  - `src/components/site/WatchCard.tsx` — video/audio variants, drop badges, click → modal
  - `src/pages/Watch.tsx` — hero wired to modal, new filters, drop "Premium coming soon" block
  - `src/pages/Home.tsx` — preview cards drop badges, tab labels updated, click → modal
  - `src/components/site/Nav.tsx` — CTA copy
  - Any other reference to `isFree` / `Breakdowns` (swept with `rg`)

## Technical notes

- `preload="metadata"` keeps the page fast — only headers load until play is hit.
- Audio modal will look intentional, not like a bare `<audio>` tag floating on a page.
- No analytics, no gating, no view tracking — pure landing-page-style library.
- Future swap to cloud storage = change `mediaUrl` strings; nothing else.

## Out of scope

- Custom waveform visualization (audio gets a static decorative treatment instead).
- Transcripts (can add later as a `transcript?: string` field).
- Custom player chrome.
