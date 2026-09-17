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
import { ContactForm } from '@/components/contact-form';
import { getCandidateCopy } from '@/content/candidate';
import { links } from '@/content/links';
import { pageContainerSize } from '@/lib/layout';
import type { Locale } from '@/lib/paths';

type CandidateViewProps = {
  locale: Locale;
};

export function CandidateView({ locale }: CandidateViewProps) {
  const t = getCandidateCopy(locale);

  return (
    <Container size={pageContainerSize} className="py-16 sm:py-24">
      <Stack gap={10}>
        <BlurRise>
          <Stack gap={5}>
            <Badge variant="accent">{t.badge}</Badge>
            <Heading as="h1" size="2xl">
              {t.heading}
            </Heading>
            <Text tone="muted" size="lg">
              {t.lede}
            </Text>
            <Text size="sm">{t.location}</Text>
            <Text size="sm">{t.openTo}</Text>
            <Stack direction="row" gap={3} wrap>
              <a href={links.cv} className="br-button br-button--primary br-button--md">
                {t.cv}
              </a>
              <a
                href={links.linkedin}
                className="br-button br-button--ghost br-button--md"
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

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.experience.title}
          </Heading>
          {t.experience.items.map((job) => (
            <Card key={`${job.company}-${job.period}`}>
              <Stack gap={3}>
                <div>
                  <Text as="strong">{job.role}</Text>
                  <Text tone="muted" size="sm">
                    {job.companyHref ? (
                      <a
                        href={job.companyHref}
                        className="br-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className="text-accent">{job.company}</span>
                    )}
                    {' · '}
                    {job.period}
                  </Text>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.work.title}
          </Heading>
          {t.work.items.map((item) => (
            <Card key={item.name} rise grain inView>
              <Stack gap={5}>
                <Badge>{item.badge}</Badge>
                <div>
                  <Heading as="h3" size="lg">
                    {item.name}
                  </Heading>
                  <Text tone="muted" size="sm" className="mt-2">
                    {item.body}
                  </Text>
                </div>
                {item.caseStudy ? (
                  <Stack gap={4}>
                    <div>
                      <Text as="strong" size="sm">
                        {item.caseStudy.problemLabel}
                      </Text>
                      <Text tone="muted" size="sm">
                        {item.caseStudy.problem}
                      </Text>
                    </div>
                    <div>
                      <Text as="strong" size="sm">
                        {item.caseStudy.approachLabel}
                      </Text>
                      <Text tone="muted" size="sm">
                        {item.caseStudy.approach}
                      </Text>
                    </div>
                    <div>
                      <Text as="strong" size="sm">
                        {item.caseStudy.outcomeLabel}
                      </Text>
                      <Text tone="muted" size="sm">
                        {item.caseStudy.outcome}
                      </Text>
                    </div>
                  </Stack>
                ) : null}
                <a
                  href={item.href}
                  className="br-link w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.linkLabel}
                </a>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.skills.title}
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2">
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

        <Stack gap={4}>
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

        <Stack gap={4}>
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
          <Text tone="muted">{t.contact.lede}</Text>
          <ContactForm copy={t.contact} intent="hiring" idPrefix="recruiter" />
        </Stack>
      </Stack>
    </Container>
  );
}
