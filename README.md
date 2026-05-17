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

## Related repos

- [easterve/airothy](https://github.com/easterve/airothy) — source code (private)
- [easterve/airothy-releases](https://github.com/easterve/airothy-releases) — public release binaries + Sparkle appcast
