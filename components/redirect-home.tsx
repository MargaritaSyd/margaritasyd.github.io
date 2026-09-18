'use client';

import { useEffect } from 'react';
import { getMessages } from '@/messages';
import { pathFor, type Locale } from '@/lib/paths';

type RedirectHomeProps = {
  locale: Locale;
};

export function RedirectHome({ locale }: RedirectHomeProps) {
  const href = pathFor(locale);
  const t = getMessages(locale);

  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(href)});`,
        }}
      />
      <p className="px-5 py-16 text-sm text-muted">
        <a href={href} className="br-link">
          {t.redirect.continue}
        </a>
      </p>
    </>
  );
}
