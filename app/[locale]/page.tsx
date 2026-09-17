import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomeView } from '@/components/home-view';
import { getMessages } from '@/messages';
import { isLocale, pathFor, defaultLocale } from '@/lib/paths';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);

  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        es: '/es/',
        en: '/en/',
        'x-default': pathFor(defaultLocale, 'home'),
      },
    },
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <HomeView locale={locale} />;
}
