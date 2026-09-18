export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const siteUrl = 'https://margaritasyd.github.io';

export const siteHashes = ['work', 'experience', 'approach', 'contact'] as const;
export type SiteHash = (typeof siteHashes)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function pathFor(locale: Locale, hash?: SiteHash): string {
  return hash ? `/${locale}/#${hash}` : `/${locale}/`;
}

export function swapLocale(next: Locale, hash = ''): string {
  const suffix = hash
    ? hash.startsWith('#')
      ? hash
      : `#${hash}`
    : '';
  return `/${next}/${suffix}`;
}

export function absUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}
