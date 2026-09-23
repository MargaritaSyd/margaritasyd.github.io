import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  BlurFade,
  BlurRise,
  Card,
  Container,
  Heading,
  Separator,
  Stack,
  Stagger,
  Text,
} from '@/components/blurise';
import { ContactForm } from '@/components/contact-form';
import { getSiteCopy } from '@/content/site';
import { links } from '@/content/links';
import { pageContainerSize } from '@/lib/layout';
import type { Locale } from '@/lib/paths';

type HomeViewProps = {
  locale: Locale;
};

export function HomeView({ locale }: HomeViewProps) {
  const t = getSiteCopy(locale);

  return (
    <Container size={pageContainerSize} className="py-16 sm:py-24">
      <Stack gap={10}>
        <BlurRise>
          <Stack gap={5} id="top">
            <Badge variant="accent">{t.hero.badge}</Badge>
            <Heading as="h1" size="2xl">
              {t.hero.heading}
            </Heading>
            <Text tone="muted" size="lg">
              {t.hero.lede}
            </Text>
            <Text size="sm">{t.hero.availability}</Text>
            <Text size="sm">{t.hero.currentRole}</Text>
            <Text size="sm">{t.hero.location}</Text>
            <Stack direction="row" gap={3} wrap>
              <a href="#work" className="br-button br-button--primary br-button--md">
                {t.hero.ctaWork}
              </a>
              <a href="#contact" className="br-button br-button--ghost br-button--md">
                {t.hero.ctaContact}
              </a>
            </Stack>
            <Stack direction="row" gap={3} wrap>
              <a href={links.cv} className="br-button br-button--ghost br-button--md">
                {t.hero.cv}
              </a>
              <a
                href={links.linkedin}
                className="br-button br-button--ghost br-button--md"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.linkedin}
              </a>
              <a
                href={links.github}
                className="br-button br-button--ghost br-button--md"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.github}
              </a>
            </Stack>
          </Stack>
        </BlurRise>

        <BlurFade inView>
          <Separator />
        </BlurFade>

        <Stack gap={4} id="work" className="scroll-mt-32">
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.work.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="flex flex-col gap-4">
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
          </Stagger>
        </Stack>

        <BlurFade inView>
          <Separator />
        </BlurFade>

        <Stack gap={4} id="experience" className="scroll-mt-32">
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.experience.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="flex flex-col gap-4">
            {t.experience.items.map((job) => (
              <Card key={`${job.company}-${job.period}`} rise inView>
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
          </Stagger>
        </Stack>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.skills.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="grid gap-4 sm:grid-cols-2">
            {t.skills.groups.map((group) => (
              <Card key={group.name} rise inView>
                <Text as="strong">{group.name}</Text>
                <ul className="mt-3 space-y-1 text-[length:var(--br-font-size-sm)] text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </Stagger>
        </Stack>

        <BlurRise inView>
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
        </BlurRise>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.writing.title}
            </Heading>
          </BlurRise>
          <Card rise inView>
            <a href={t.writing.href} className="br-link" target="_blank" rel="noreferrer">
              {t.writing.articleTitle}
            </a>
            <Text tone="muted" size="sm" className="mt-2">
              {t.writing.source}
            </Text>
          </Card>
        </Stack>

        <BlurFade inView>
          <Separator />
        </BlurFade>

        <Stack gap={4} id="approach" className="scroll-mt-32">
          <BlurRise inView>
            <Stack gap={2}>
              <Heading as="h2" size="xl">
                {t.approach.title}
              </Heading>
              <Text tone="muted">{t.approach.lede}</Text>
            </Stack>
          </BlurRise>
          <Stagger gap={70} className="grid gap-4 md:grid-cols-3">
            {t.approach.items.map((item) => (
              <Card key={item.name} rise grain inView>
                <Heading as="h3" size="lg">
                  {item.name}
                </Heading>
                <Text tone="muted" size="sm" className="mt-2">
                  {item.body}
                </Text>
              </Card>
            ))}
          </Stagger>
        </Stack>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.approach.processTitle}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="flex flex-col gap-4">
            {t.approach.steps.map((step) => (
              <Card key={step.name} rise inView>
                <Text as="strong">{step.name}</Text>
                <Text tone="muted" size="sm" className="mt-2">
                  {step.body}
                </Text>
              </Card>
            ))}
          </Stagger>
        </Stack>

        <BlurRise inView>
          <Stack gap={4}>
            <Heading as="h2" size="xl">
              {t.approach.faqTitle}
            </Heading>
            <Accordion type="single" defaultValue="faq-0">
              {t.approach.faq.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>
                    <Text tone="muted" size="sm">
                      {item.a}
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </BlurRise>

        <BlurFade inView>
          <Separator />
        </BlurFade>

        <BlurRise inView>
          <Stack gap={4} id="contact" className="scroll-mt-32">
            <Heading as="h2" size="xl">
              {t.contact.title}
            </Heading>
            <Text tone="muted">{t.contact.lede}</Text>
            <ContactForm copy={t.contact} idPrefix="contact" />
          </Stack>
        </BlurRise>
      </Stack>
    </Container>
  );
}
