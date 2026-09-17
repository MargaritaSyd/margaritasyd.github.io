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
import { getMessages } from '@/messages';
import { pathFor, type Locale } from '@/lib/paths';

type HomeViewProps = {
  locale: Locale;
};

export function HomeView({ locale }: HomeViewProps) {
  const t = getMessages(locale);

  return (
    <Container size="lg" className="py-16 sm:py-24">
      <Stagger gap={80}>
        <Stack gap={8}>
          <BlurRise>
            <Stack gap={5} className="max-w-xl">
              <Badge variant="accent">{t.home.badge}</Badge>
              <Heading as="h1">{t.home.heading}</Heading>
              <Text tone="muted" size="lg">
                {t.home.lede}
              </Text>
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

          <Card rise grain inView className="max-w-xl">
            <Badge>{t.home.proofBadge}</Badge>
            <Heading as="h2" size="lg" className="mt-4">
              {t.home.proofTitle}
            </Heading>
            <Text tone="muted" size="sm" className="mt-2">
              {t.home.proofBody}
            </Text>
            <Text size="sm" className="mt-4">
              {t.home.currentRole}
            </Text>
          </Card>
        </Stack>
      </Stagger>
    </Container>
  );
}
