import { ui, defaultLang, type Lang } from './ui';

// Native display names for the language switcher. Keys match URL path segments.
export const languages: Record<Lang, string> = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
  zh: '简体中文',
};

// BCP-47 codes for the <html lang> attribute (zh path -> zh-Hans).
export const htmlLang: Record<Lang, string> = {
  en: 'en',
  ar: 'ar',
  de: 'de',
  es: 'es',
  fr: 'fr',
  ja: 'ja',
  ko: 'ko',
  zh: 'zh-Hans',
};

export const rtlLangs: Lang[] = ['ar'];

export function isRtl(lang: Lang): boolean {
  return rtlLangs.includes(lang);
}

/** First path segment, if it is a known non-default locale; else the default. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg && seg in ui && seg !== defaultLang) return seg as Lang;
  return defaultLang;
}

/** Build the path for `lang` that mirrors the current page (single-page site). */
export function localizedPath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** Translator bound to a locale, falling back to English for missing keys. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}