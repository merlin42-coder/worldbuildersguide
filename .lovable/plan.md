## Goal

Make the repo safe to push to GitHub Pages while keeping Lovable Cloud + the Supabase client fully working, and keep videos/audio loading from Lovable Cloud.

## Current state

- `.gitignore` already ignores `.env` and `.env.*` ✓
- `.env` contains only frontend-safe public values: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (anon JWT), `VITE_SUPABASE_PROJECT_ID` ✓ (no service role)
- `src/integrations/supabase/client.ts` only reads the publishable key — no service role anywhere in `src/` ✓
- Media is served via `mediaUrl()` from `public/videos` and `public/audio`, bundled into the `dist/` build → works on GitHub Pages ✓
- No `.env.example` exists ✗

## Changes

### 1. Create `.env.example`
Placeholder-only, committed to git so contributors know which vars to set:
```
VITE_SUPABASE_URL="https://YOUR_PROJECT_REF.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-publishable-key"
VITE_SUPABASE_PROJECT_ID="your-project-ref"
```

### 2. Tighten `.gitignore`
Add explicit entries (currently only `.env` + `.env.*` are listed; add common variants and keep the example tracked):
```
# Local env files (keep .env.example tracked)
.env
.env.local
.env.*.local
.env.development
.env.production
!.env.example
```

### 3. Verify nothing else leaks
- Re-grep `src/` for `SERVICE_ROLE`, `SUPABASE_SERVICE`, hardcoded JWTs, and any private key patterns. Already clean — will re-confirm post-edit.
- Confirm no edge-function source under a tracked path imports private secrets into the frontend.

### 4. GitHub Pages note (no code change)
For the deployed site on GitHub Pages to talk to Lovable Cloud, the GitHub Actions build step needs the same `VITE_SUPABASE_*` values injected at build time (Vite inlines `VITE_*` vars at build). Two options — I'll recommend the first:

- **Option A (recommended):** Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` as GitHub Actions repo variables (Settings → Secrets and variables → Actions → Variables). Then update `.github/workflows/deploy.yml` build step to expose them:
  ```yaml
  - name: Build
    env:
      VITE_SUPABASE_URL: ${{ vars.VITE_SUPABASE_URL }}
      VITE_SUPABASE_PUBLISHABLE_KEY: ${{ vars.VITE_SUPABASE_PUBLISHABLE_KEY }}
    run: npm run build
  ```
  These are publishable values, so storing them as Variables (not Secrets) is fine.
- **Option B:** Hardcode the publishable values in `src/integrations/supabase/client.ts` as fallbacks. Simpler but Lovable will overwrite the file on regeneration, so Option A is cleaner.

I'll apply Option A to the workflow.

### 5. What I will NOT touch
- `src/integrations/supabase/client.ts`, `src/integrations/supabase/types.ts`, `supabase/config.toml` — Lovable-managed, required by Cloud.
- `.env` itself — already gitignored; values stay as-is locally.
- Any media file or `src/lib/media.ts` — already correct for GitHub Pages via `BASE_URL`.

## Verification after build mode

1. `git check-ignore .env` → confirms `.env` is ignored.
2. `rg -n "service_role|SERVICE_ROLE" src` → empty.
3. Build locally; preview still loads videos/audio and the Supabase client initializes.
