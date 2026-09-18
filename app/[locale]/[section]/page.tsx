import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RedirectHome } from '@/components/redirect-home';
import { defaultLocale, isLocale, pathFor } from '@/lib/paths';

const sectionParams = [
  { locale: 'es', section: 'candidata' },
  { locale: 'es', section: 'freelance' },
  { locale: 'en', section: 'candidate' },
  { locale: 'en', section: 'freelance' },
] as const;

function isLegacySection(section: string): boolean {
  return section === 'candidata' || section === 'candidate' || section === 'freelance';
}

export function generateStaticParams() {
  return sectionParams.map(({ locale, section }) => ({ locale, section }));
}

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ locale: string; section: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isLegacySection(section)) return {};
  const path = pathFor(locale);

  return {
    robots: { index: false, follow: true },
    alternates: {
      canonical: path,
      languages: {
        es: pathFor('es'),
        en: pathFor('en'),
        'x-default': pathFor(defaultLocale),
      },
    },
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isLegacySection(section)) notFound();

  return <RedirectHome locale={locale} />;
}
