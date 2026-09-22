import { BrandMark } from '@/components/brand-mark';
import { HoverGlow, HoverLift } from '@/components/blurise';
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
    <header className="sticky top-0 z-40 border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-background/85 backdrop-blur-md"
      />
      <div
        className={`relative mx-auto flex w-full ${pageMaxWidthClass} items-center justify-between gap-4 px-5 py-4`}
      >
        <a
          href={`${pathFor(locale)}#top`}
          aria-label="Margarita Syddall"
          className="flex items-center gap-2.5 text-foreground no-underline"
        >
          <HoverLift>
            <HoverGlow>
              <BrandMark className="h-9 w-11 shrink-0 text-accent" />
            </HoverGlow>
          </HoverLift>
          <span className="text-sm font-medium tracking-[0.16em]">Margarita</span>
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-5" aria-label="Primary">
          <a
            href={pathFor(locale, 'work')}
            className="text-sm text-muted no-underline hover:text-foreground"
          >
            {t.nav.work}
          </a>
          <a
            href={pathFor(locale, 'experience')}
            className="text-sm text-muted no-underline hover:text-foreground"
          >
            {t.nav.experience}
          </a>
          <a
            href={pathFor(locale, 'contact')}
            className="text-sm text-muted no-underline hover:text-foreground"
          >
            {t.nav.contact}
          </a>
          <LanguageSwitch locale={locale} />
        </nav>
      </div>
    </header>
  );
}
