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
import { getFreelanceCopy } from '@/content/freelance';
import { links } from '@/content/links';
import type { Locale } from '@/lib/paths';

type FreelanceViewProps = {
  locale: Locale;
};

export function FreelanceView({ locale }: FreelanceViewProps) {
  const t = getFreelanceCopy(locale);

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
          </Stack>
        </BlurRise>

        <Separator />

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.services.title}
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((item) => (
              <Card key={item.name} rise grain inView>
                <Heading as="h3" size="lg">
                  {item.name}
                </Heading>
                <Text tone="muted" size="sm" className="mt-2">
                  {item.body}
                </Text>
              </Card>
            ))}
          </div>
        </Stack>

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.fit.title}
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <Heading as="h3" size="lg">
                {t.fit.forTitle}
              </Heading>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                {t.fit.forItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <Heading as="h3" size="lg">
                {t.fit.notTitle}
              </Heading>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                {t.fit.notItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.process.title}
          </Heading>
          <div className="grid gap-4">
            {t.process.steps.map((step) => (
              <Card key={step.name}>
                <Text as="strong">{step.name}</Text>
                <Text tone="muted" size="sm" className="mt-2">
                  {step.body}
                </Text>
              </Card>
            ))}
          </div>
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.proof.title}
          </Heading>
          {t.proof.items.map((item) => (
            <Card key={item.name} rise grain inView>
              <Badge>{item.badge}</Badge>
              <Heading as="h3" size="lg" className="mt-4">
                {item.name}
              </Heading>
              <Text tone="muted" size="sm" className="mt-2">
                {item.body}
              </Text>
              <a
                href={item.href}
                className="br-link mt-4 inline-block w-fit"
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel}
              </a>
            </Card>
          ))}
        </Stack>

        <Stack gap={4} className="max-w-2xl">
          <Heading as="h2" size="xl">
            {t.faq.title}
          </Heading>
          <Accordion type="single" defaultValue="faq-0">
            {t.faq.items.map((item, index) => (
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

        <Stack gap={4}>
          <Heading as="h2" size="xl">
            {t.contact.title}
          </Heading>
          <Text tone="muted" className="max-w-xl">
            {t.contact.lede}
          </Text>
          <a
            href={links.whatsapp}
            className="br-button br-button--ghost br-button--md w-fit"
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.whatsapp}
          </a>
          <ContactForm copy={t.contact} intent="project" idPrefix="project" />
        </Stack>
      </Stack>
    </Container>
  );
}
