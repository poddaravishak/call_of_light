# The Call of Light — Frontend

Next.js 14 (App Router) scaffold built from [`frontend-plan.md`](../frontend-plan.md).

## Setup

```bash
cd frontend
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key
npm run dev
```

Open http://localhost:3000.

## Environment

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key for read-only queries |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used for metadata + sitemap) |

**Demo mode:** without Supabase env vars the site renders against the bundled demo content in [lib/demo-data.ts](lib/demo-data.ts) — 4 authors, 8 posts, one site config. Set `NEXT_PUBLIC_SUPABASE_URL` to switch to live data.

## Asset TODO

- Drop a noise texture at `public/grain.png` (200×200, ~5% opacity). The CSS overlay references it.

## Structure

Routes match the plan: `(site)/`, `blog/`, `blog/[slug]/`, `authors/`, `authors/[slug]/`, `contact/`, `subscribe/`, plus `/api/subscribe` and `/api/contact` route handlers.

Components mirror the plan: `components/layout`, `components/home`, `components/blog`, `components/authors`, `components/shared`.

## Design System

All theme tokens are CSS variables in [`styles/globals.css`](styles/globals.css) and exposed to Tailwind via [`tailwind.config.ts`](tailwind.config.ts). Typography is loaded through `next/font/google` in [`lib/fonts.ts`](lib/fonts.ts).
