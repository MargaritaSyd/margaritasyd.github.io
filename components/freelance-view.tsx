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
import { getFreelanceCopy } from '@/content/freelance';
import { links } from '@/content/links';
import { pageContainerSize } from '@/lib/layout';
import type { Locale } from '@/lib/paths';

type FreelanceViewProps = {
  locale: Locale;
};

export function FreelanceView({ locale }: FreelanceViewProps) {
  const t = getFreelanceCopy(locale);

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
          </Stack>
        </BlurRise>

        <BlurFade inView>
          <Separator />
        </BlurFade>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.services.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="grid gap-4 md:grid-cols-3">
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
          </Stagger>
        </Stack>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.fit.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="grid gap-4 sm:grid-cols-2">
            <Card rise inView>
              <Heading as="h3" size="lg">
                {t.fit.forTitle}
              </Heading>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                {t.fit.forItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card rise inView>
              <Heading as="h3" size="lg">
                {t.fit.notTitle}
              </Heading>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[length:var(--br-font-size-sm)] text-muted">
                {t.fit.notItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          </Stagger>
        </Stack>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.process.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="flex flex-col gap-4">
            {t.process.steps.map((step) => (
              <Card key={step.name} rise inView>
                <Text as="strong">{step.name}</Text>
                <Text tone="muted" size="sm" className="mt-2">
                  {step.body}
                </Text>
              </Card>
            ))}
          </Stagger>
        </Stack>

        <Stack gap={4}>
          <BlurRise inView>
            <Heading as="h2" size="xl">
              {t.proof.title}
            </Heading>
          </BlurRise>
          <Stagger gap={70} className="flex flex-col gap-4">
            {t.proof.items.map((item) => (
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

        <BlurRise inView>
          <Stack gap={4}>
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
        </BlurRise>

        <BlurRise inView>
          <Stack gap={4}>
            <Heading as="h2" size="xl">
              {t.contact.title}
            </Heading>
            <Text tone="muted">{t.contact.lede}</Text>
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
        </BlurRise>
      </Stack>
    </Container>
  );
}
