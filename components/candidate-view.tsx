import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  BlurRise,
  Card,
  Container,
  Heading,
  Separator,
  Stack,
  Text,
} from '@/components/blurise';
import { RecruiterForm } from '@/components/recruiter-form';
import { getCandidateCopy } from '@/content/candidate';
import { links } from '@/content/links';
import type { Locale } from '@/lib/paths';

type CandidateViewProps = {
  locale: Locale;
};

export function CandidateView({ locale }: CandidateViewProps) {
  const t = getCandidateCopy(locale);

  return (
    <Container size="lg" className="py-16 sm:py-24">
      <Stack gap={10}>
        <BlurRise>
          <Stack gap={5} className="max-w-2xl">
            <Badge variant="accent">{t.badge}</Badge>
            <Heading as="h1" size="2xl">
              {t.heading}
            </Heading>
            <Text tone="muted" size="lg">
              {t.lede}
            </Text>
            <Text size="sm">{t.openTo}</Text>
            <Stack direction="row" gap={3} wrap>
              <a
                href={links.linkedin}
                className="br-button br-button--primary br-button--md"
                target="_blank"
                rel="noreferrer"
              >
                {t.linkedin}
              </a>
              <a
                href={links.github}
                className="br-button br-button--ghost br-button--md"
                target="_blank"
                rel="noreferrer"
              >
                {t.github}
              </a>
            </Stack>
          </Stack>
        </BlurRise>

        <Separator />

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.experience.title}
          </Heading>
          <Card>
            <Stack gap={3}>
              <div>
                <Text as="strong">{t.experience.role}</Text>
                <Text tone="muted" size="sm">
                  <a
                    href={t.experience.companyHref}
                    className="br-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.experience.company}
                  </a>
                  {' · '}
                  {t.experience.period}
                </Text>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                {t.experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Stack>
          </Card>
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.work.title}
          </Heading>
          <Card rise grain inView>
            <Badge>{t.work.badge}</Badge>
            <Heading as="h3" size="lg" className="mt-4">
              {t.work.name}
            </Heading>
            <Stack gap={4} className="mt-4">
              <div>
                <Text as="strong" size="sm">
                  {t.work.problemLabel}
                </Text>
                <Text tone="muted" size="sm">
                  {t.work.problem}
                </Text>
              </div>
              <div>
                <Text as="strong" size="sm">
                  {t.work.approachLabel}
                </Text>
                <Text tone="muted" size="sm">
                  {t.work.approach}
                </Text>
              </div>
              <div>
                <Text as="strong" size="sm">
                  {t.work.outcomeLabel}
                </Text>
                <Text tone="muted" size="sm">
                  {t.work.outcome}
                </Text>
              </div>
              <a
                href={t.work.npmHref}
                className="br-link w-fit"
                target="_blank"
                rel="noreferrer"
              >
                {t.work.npm}
              </a>
            </Stack>
          </Card>
        </Stack>

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.skills.title}
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((group) => (
              <Card key={group.name}>
                <Text as="strong">{group.name}</Text>
                <ul className="mt-3 space-y-1 text-[length:var(--br-font-size-sm)] text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.education.title}
          </Heading>
          <Accordion type="single" defaultValue="edu-0">
            {t.education.items.map((item, index) => (
              <AccordionItem key={item.school} value={`edu-${index}`}>
                <AccordionTrigger>
                  <span className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
                    <span>{item.school}</span>
                    <span className="text-[length:var(--br-font-size-xs)] font-normal text-muted">
                      {item.period}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <Text tone="muted" size="sm">
                    {item.program}
                  </Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.writing.title}
          </Heading>
          <Card>
            <a href={t.writing.href} className="br-link" target="_blank" rel="noreferrer">
              {t.writing.articleTitle}
            </a>
            <Text tone="muted" size="sm" className="mt-2">
              {t.writing.source}
            </Text>
          </Card>
        </Stack>

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.contact.title}
          </Heading>
          <Text tone="muted" className="max-w-xl">
            {t.contact.lede}
          </Text>
          <RecruiterForm copy={t.contact} />
        </Stack>
      </Stack>
    </Container>
  );
}
