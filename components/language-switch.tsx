'use client';

import { useEffect, useState } from 'react';
import { getMessages } from '@/messages';
import { pathFor, swapLocale, type Locale } from '@/lib/paths';

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const [hash, setHash] = useState('');
  const nextLocale: Locale = locale === 'es' ? 'en' : 'es';
  const t = getMessages(locale);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <a
      href={hash ? swapLocale(nextLocale, hash) : pathFor(nextLocale)}
      className="rounded-full border border-border px-3 py-1 text-xs tracking-wider text-muted no-underline hover:border-accent hover:text-foreground"
      hrefLang={nextLocale}
      lang={nextLocale}
    >
      {t.nav.languageCode}
      <span className="sr-only"> — {t.nav.languageName}</span>
    </a>
  );
}
