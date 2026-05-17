import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://airothy.com',
  compressHTML: true,
  adapter: cloudflare()
});