import NextLink from 'next/link';
import {
  Badge,
  BlurRise,
  Card,
  Container,
  Heading,
  Stack,
  Stagger,
  Text,
} from '@/components/blurise';
import { pageContainerSize } from '@/lib/layout';
import { links } from '@/content/links';
import { getMessages } from '@/messages';
import { pathFor, type Locale } from '@/lib/paths';

type HomeViewProps = {
  locale: Locale;
};

export function HomeView({ locale }: HomeViewProps) {
  const t = getMessages(locale);

  return (
    <Container
      size={pageContainerSize}
      className="flex min-h-[calc(100dvh-9rem)] flex-col justify-center py-16 sm:py-24"
    >
      <Stagger gap={80}>
        <Stack gap={8}>
          <BlurRise>
            <Stack gap={5}>
              <Badge variant="accent">{t.home.badge}</Badge>
              <Heading as="h1" size="2xl">
                {t.home.heading}
              </Heading>
              <Text tone="muted" size="lg">
                {t.home.lede}
              </Text>
              <Text size="sm">{t.home.currentRole}</Text>
              <Stack direction="row" gap={3} wrap>
                <NextLink
                  href={pathFor(locale, 'candidate')}
                  className="br-button br-button--primary br-button--md"
                >
                  {t.home.ctaCandidate}
                </NextLink>
                <NextLink
                  href={pathFor(locale, 'freelance')}
                  className="br-button br-button--ghost br-button--md"
                >
                  {t.home.ctaFreelance}
                </NextLink>
              </Stack>
            </Stack>
          </BlurRise>

          <Card rise grain inView>
            <Stack gap={5}>
              <Badge>{t.home.proofBadge}</Badge>
              <div>
                <Heading as="h2" size="lg">
                  {t.home.proofTitle}
                </Heading>
                <Text tone="muted" size="sm" className="mt-2">
                  {t.home.proofBody}
                </Text>
              </div>
              <a
                href={links.bluriseNpm}
                className="br-link w-fit"
                target="_blank"
                rel="noreferrer"
              >
                {t.home.proofLink}
              </a>
            </Stack>
          </Card>
        </Stack>
      </Stagger>
    </Container>
  );
}
