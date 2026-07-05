import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://airothy.com',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    // App ships ar, de, en, es, fr, ja, ko, zh-Hans. zh-Hans is served under
    // the cleaner /zh/ segment via a locale object with codes.
    locales: [
      'en',
      'ar',
      'de',
      'es',
      'fr',
      'ja',
      'ko',
      { path: 'zh', codes: ['zh-Hans', 'zh-CN'] },
    ],
    routing: {
      // English stays canonical at "/" (no prefix) so existing links/SEO hold.
      prefixDefaultLocale: false,
    },
  },
});