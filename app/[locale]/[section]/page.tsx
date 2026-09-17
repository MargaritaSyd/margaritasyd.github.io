import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CandidateView } from '@/components/candidate-view';
import { FreelanceView } from '@/components/freelance-view';
import { JsonLd } from '@/components/json-ld';
import { links } from '@/content/links';
import { getMessages } from '@/messages';
import { absUrl, defaultLocale, isLocale, pathFor } from '@/lib/paths';
import { ogImage, twitterCard } from '@/lib/seo';

const sectionParams = [
  { locale: 'es', section: 'candidata' },
  { locale: 'es', section: 'freelance' },
  { locale: 'en', section: 'candidate' },
  { locale: 'en', section: 'freelance' },
] as const;

function isCandidateSection(section: string): boolean {
  return section === 'candidata' || section === 'candidate';
}

function isFreelanceSection(section: string): boolean {
  return section === 'freelance';
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
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);
  const isCandidate = isCandidateSection(section);
  const path = pathFor(locale, isCandidate ? 'candidate' : 'freelance');
  const title = isCandidate ? t.meta.candidateTitle : t.meta.freelanceTitle;
  const description = isCandidate
    ? t.meta.candidateDescription
    : t.meta.freelanceDescription;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        es: pathFor('es', isCandidate ? 'candidate' : 'freelance'),
        en: pathFor('en', isCandidate ? 'candidate' : 'freelance'),
        'x-default': pathFor(defaultLocale, isCandidate ? 'candidate' : 'freelance'),
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      url: path,
      images: [ogImage],
    },
    twitter: twitterCard,
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  if (!isCandidateSection(section) && !isFreelanceSection(section)) notFound();

  if (isCandidateSection(section)) {
    return (
      <>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Margarita Syddall',
            url: absUrl(pathFor(locale, 'candidate')),
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
        <CandidateView locale={locale} />
      </>
    );
  }

  const serviceName =
    locale === 'es'
      ? 'Margarita Syddall — Frontend freelance'
      : 'Margarita Syddall — Freelance frontend';

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: serviceName,
          url: absUrl(pathFor(locale, 'freelance')),
          areaServed: 'Worldwide',
          availableLanguage: ['en', 'es'],
          serviceType: [
            'Frontend development',
            'Design systems',
            'Product UI',
          ],
          provider: {
            '@type': 'Person',
            name: 'Margarita Syddall',
            url: absUrl(pathFor(locale, 'home')),
            sameAs: [links.linkedin, links.github],
          },
        }}
      />
      <FreelanceView locale={locale} />
    </>
  );
}
