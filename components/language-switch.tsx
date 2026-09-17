'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { getMessages } from '@/messages';
import { swapLocale, type Locale } from '@/lib/paths';

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const pathname = usePathname() ?? `/${locale}/`;
  const nextLocale: Locale = locale === 'es' ? 'en' : 'es';
  const t = getMessages(locale);

  return (
    <NextLink
      href={swapLocale(pathname, nextLocale)}
      className="rounded-full border border-border px-3 py-1 text-xs tracking-wider text-muted no-underline hover:border-accent hover:text-foreground"
      hrefLang={nextLocale}
      lang={nextLocale}
    >
      {t.nav.languageCode}
      <span className="sr-only"> — {t.nav.languageName}</span>
    </NextLink>
  );
}
