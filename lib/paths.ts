export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const siteUrl = 'https://margaritasyd.github.io';

export type Section = 'home' | 'candidate' | 'freelance';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function sectionFromPath(pathname: string): Section {
  if (pathname.includes('candidata') || pathname.includes('candidate')) {
    return 'candidate';
  }
  if (pathname.includes('freelance')) {
    return 'freelance';
  }
  return 'home';
}

export function pathFor(locale: Locale, section: Section): string {
  if (section === 'home') return `/${locale}/`;
  if (section === 'freelance') return `/${locale}/freelance/`;
  return locale === 'es' ? '/es/candidata/' : '/en/candidate/';
}

export function swapLocale(pathname: string, next: Locale): string {
  return pathFor(next, sectionFromPath(pathname));
}

export function absUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}
