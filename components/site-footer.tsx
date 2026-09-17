import NextLink from 'next/link';
import { getMessages } from '@/messages';
import { type Locale } from '@/lib/paths';

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = getMessages(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[var(--br-container-lg)] items-center justify-between gap-4 px-5 py-6">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Margarita Syddall</p>
        <NextLink
          href="https://www.npmjs.com/package/blurise"
          className="text-sm text-muted no-underline hover:text-accent"
        >
          {t.footer.builtWith}
        </NextLink>
      </div>
    </footer>
  );
}
