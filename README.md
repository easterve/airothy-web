# airothy-web

Marketing landing page for [Airothy](https://airothy.com) — the iOS ↔ macOS remote control system.

## Stack

- [Astro 5](https://astro.build) — static site generator
- Vanilla CSS with custom properties (no Tailwind, no JS framework)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com) with the custom domain `airothy.com`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Production build

```bash
npm run build
```

Outputs static HTML/CSS to `dist/`. Cloudflare Pages auto-runs this on every push to `main`.

## Deploy

- **Source of truth**: `main` branch in this repo.
- **Production URL**: https://airothy.com.
- **Hosting**: Cloudflare Pages auto-detects Astro and deploys on every push to `main`.
- **DNS / domain**: managed in Cloudflare (registrar + DNS + Pages all in one dashboard).

## Internationalization

The site ships in the same 8 languages as the apps: English, العربية, Deutsch,
Español, Français, 日本語, 한국어, 简体中文.

- Config: `i18n` block in `astro.config.mjs` (`prefixDefaultLocale: false`, so
  English stays at `/` and the rest are `/de/`, `/fr/`, `/ja/`, `/ko/`, `/es/`,
  `/ar/`, `/zh/`). `zh-Hans` is served under `/zh/`.
- All copy lives in `src/i18n/ui.ts`, one dictionary per locale. **English is
  the source of truth** and the fallback for any missing key — add new strings
  there first, then translate.
- `src/components/Landing.astro` renders the page from `t(key)`;
  `src/layouts/Base.astro` handles `<html lang/dir>`, hreflang alternates, and
  RTL (Arabic). `src/pages/index.astro` is English; `src/pages/[locale]/index.astro`
  generates the rest.
- No auto-redirect: visitors choose via the in-nav language switcher. Default
  `/` is canonical English.
- Non-English strings were machine-translated and welcome native review.

## Related repos

- [easterve/airothy](https://github.com/easterve/airothy) — source code (private)
- [easterve/airothy-releases](https://github.com/easterve/airothy-releases) — public release binaries + Sparkle appcast
