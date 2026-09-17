import type { Metadata } from 'next';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import { Heading, Stack, Text } from '@/components/blurise';
import { getMessages } from '@/messages';
import { isLocale, pathFor, defaultLocale } from '@/lib/paths';

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
    },
  };
}

export default async function SectionPage({ params }: PageProps) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  if (!isCandidateSection(section) && !isFreelanceSection(section)) notFound();

  const t = getMessages(locale);
  const isCandidate = isCandidateSection(section);

  return (
    <section className="mx-auto max-w-[var(--br-container-lg)] px-5 py-16 sm:py-24">
      <Stack gap={5} className="max-w-xl">
        <Heading as="h1" size="2xl">
          {isCandidate ? t.stub.candidateHeading : t.stub.freelanceHeading}
        </Heading>
        <Text tone="muted" size="lg">
          {isCandidate ? t.stub.candidateBody : t.stub.freelanceBody}
        </Text>
        <NextLink href={pathFor(locale, 'home')} className="br-link w-fit">
          {t.stub.backHome}
        </NextLink>
      </Stack>
    </section>
  );
}
