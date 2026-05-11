## Goal

Make the repo safe to push to a public GitHub repo and host on GitHub Pages — no API keys, no `.env`, no Supabase client code, no Supabase dependency. Media plays from local `public/` files instead.

## Context

Today only one thing in the app touches Supabase: `src/lib/media.ts` builds a public URL into the `media` storage bucket, and `src/content/watchContent.ts` uses it for 12 videos + audio clips. No database, no auth, no edge functions. The anon/publishable key in `.env` is technically safe to publish, but the cleanest answer to "no credentials in a public repo" is to remove Supabase altogether.

## Steps

### 1. Bring media into the repo

Download the 7 missing files from the `media` bucket in Lovable Cloud and commit them to `public/`:

```text
public/
  videos/
    wise-product-world.mp4          (new)
    revolut-vs-wise.mp4             (new)
    airbnb-product-world.mp4        (already there)
    revolut-product-world.mp4       (already there)
    spotify-product-world.mp4       (already there)
    spotify-vs-youtube-music.mp4    (already there)
    youtube-music-product-world.mp4 (already there)
  audio/
    spotify-deep-dive.m4a           (new)
    airbnb-deep-dive.m4a            (new)
    youtube-music-deep-dive.m4a     (new)
    revolut-deep-dive.m4a           (new)
    wise-deep-dive.m4a              (new)
```

I'll fetch them from the bucket's public URLs and write them into `public/`. (Note: the bucket folders are `video/` and `audio/`; the local convention in code is `videos/` and `audio/`. I'll standardise on `videos/` + `audio/` locally to match the existing code.)

### 2. Switch the URL helper to local paths

Replace `src/lib/media.ts`:

```ts
// Resolve media paths relative to the site root so GitHub Pages
// (and any subpath deployment) work correctly.
export const mediaUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
```

Using `import.meta.env.BASE_URL` (set via Vite's `base` config) future-proofs the GitHub Pages subpath case. No content changes needed in `src/content/watchContent.ts` — it keeps calling `mediaUrl("videos/...")` / `mediaUrl("audio/...")`.

### 3. Delete everything Supabase

- `src/integrations/supabase/` (entire folder: `client.ts`, `types.ts`)
- `supabase/` (config.toml)
- `.env` (only contained Supabase vars)
- Remove `@supabase/supabase-js` from `package.json`
- Verify nothing else imports `@/integrations/supabase/...` (already checked — nothing does)

### 4. GitHub Pages prep

- Add `base: "/<repo-name>/"` to `vite.config.ts` (only if the repo is published at `username.github.io/<repo-name>`; skip if using a custom domain or `username.github.io` root). I'll ask you for the repo name before flipping this.
- React Router note: GitHub Pages doesn't do SPA fallback. Add a `public/404.html` that redirects to `index.html` so deep links (e.g. `/watch`) survive refresh. Small standard snippet.

### 5. Final sweep

- `rg -n "supabase|VITE_SUPABASE|process.env|import.meta.env\.VITE_"` to confirm no stray references or secret reads remain.
- Build once to confirm no missing imports.

## What you can delete on the Lovable Cloud side afterwards

Once the local files are working, the `media` bucket and the Supabase project are no longer used by the app. You can leave them or delete them — won't affect the deployed site.

## What I need from you before implementing

1. Confirm the GitHub repo name (or that it'll be served from a custom domain / `username.github.io` root) so I set `vite.config.ts` `base` correctly.
2. Confirm it's OK that I commit ~7 media files into the repo (mp4 + m4a can add up; if size is a concern we could use Git LFS or keep them on a CDN — but those reintroduce a URL into the code).