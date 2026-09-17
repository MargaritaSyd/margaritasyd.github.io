import NextLink from 'next/link';
import { LanguageSwitch } from '@/components/language-switch';
import { pageMaxWidthClass } from '@/lib/layout';
import { getMessages } from '@/messages';
import { pathFor, type Locale } from '@/lib/paths';

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = getMessages(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div
        className={`mx-auto flex w-full ${pageMaxWidthClass} items-center justify-between gap-4 px-5 py-4`}
      >
        <NextLink
          href={pathFor(locale, 'home')}
          className="text-sm font-medium tracking-wide text-foreground no-underline"
        >
          Margarita Syddall
        </NextLink>
        <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-5" aria-label="Primary">
          <NextLink
            href={pathFor(locale, 'candidate')}
            className="text-sm text-muted no-underline hover:text-foreground"
          >
            {t.nav.candidate}
          </NextLink>
          <NextLink
            href={pathFor(locale, 'freelance')}
            className="text-sm text-muted no-underline hover:text-foreground"
          >
            {t.nav.freelance}
          </NextLink>
          <LanguageSwitch locale={locale} />
        </nav>
      </div>
    </header>
  );
}
