import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomeView } from '@/components/home-view';
import { JsonLd } from '@/components/json-ld';
import { links } from '@/content/links';
import { getMessages } from '@/messages';
import { absUrl, isLocale, pathFor, defaultLocale } from '@/lib/paths';
import { ogImage, twitterCard } from '@/lib/seo';

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  const path = pathFor(locale);

  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    alternates: {
      canonical: path,
      languages: {
        es: pathFor('es'),
        en: pathFor('en'),
        'x-default': pathFor(defaultLocale),
      },
    },
    openGraph: {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      url: path,
      images: [ogImage],
    },
    twitter: twitterCard,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Margarita Syddall',
          url: absUrl(pathFor(locale)),
          worksFor: {
            '@type': 'Organization',
            name: 'Santander Consumer',
          },
          jobTitle: 'Frontend developer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Buenos Aires',
            addressCountry: 'AR',
          },
          knowsLanguage: ['es', 'en'],
          sameAs: [links.linkedin, links.github],
          knowsAbout: ['React', 'TypeScript', 'Next.js', 'Design systems', 'Micro frontends'],
        }}
      />
      <HomeView locale={locale} />
    </>
  );
}
