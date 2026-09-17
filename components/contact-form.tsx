'use client';

import { useState, type FormEvent } from 'react';
import { Button, Input, Label, Stack, Text, Textarea } from '@/components/blurise';
import { sendContactEmail } from '@/lib/emailjs';

export type ContactFormCopy = {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  goal?: string;
  timeline?: string;
  budget?: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  intent: 'hiring' | 'project';
  idPrefix: string;
};

export function ContactForm({ copy, intent, idPrefix }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const brief = Boolean(copy.goal);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const goal = String(data.get('goal') ?? '').trim();
    const timeline = String(data.get('timeline') ?? '').trim();
    const budget = String(data.get('budget') ?? '').trim();

    if (!name || !email || !message) return;
    if (brief && !goal) return;

    const parts = [
      goal ? `Goal: ${goal}` : '',
      timeline ? `Timeline: ${timeline}` : '',
      budget ? `Budget: ${budget}` : '',
      message,
    ].filter(Boolean);

    setPending(true);
    setStatus('idle');
    try {
      await sendContactEmail({
        name,
        email,
        message: parts.join('\n'),
        intent,
      });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <Stack gap={4}>
        <Stack gap={2}>
          <Label htmlFor={`${idPrefix}-name`}>{copy.name}</Label>
          <Input id={`${idPrefix}-name`} name="name" autoComplete="name" required />
        </Stack>
        <Stack gap={2}>
          <Label htmlFor={`${idPrefix}-email`}>{copy.email}</Label>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Stack>
        {copy.goal ? (
          <Stack gap={2}>
            <Label htmlFor={`${idPrefix}-goal`}>{copy.goal}</Label>
            <Textarea id={`${idPrefix}-goal`} name="goal" rows={3} required />
          </Stack>
        ) : null}
        {copy.timeline ? (
          <Stack gap={2}>
            <Label htmlFor={`${idPrefix}-timeline`}>{copy.timeline}</Label>
            <Input id={`${idPrefix}-timeline`} name="timeline" />
          </Stack>
        ) : null}
        {copy.budget ? (
          <Stack gap={2}>
            <Label htmlFor={`${idPrefix}-budget`}>{copy.budget}</Label>
            <Input id={`${idPrefix}-budget`} name="budget" />
          </Stack>
        ) : null}
        <Stack gap={2}>
          <Label htmlFor={`${idPrefix}-message`}>{copy.message}</Label>
          <Textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={brief ? 4 : 6}
            required
          />
        </Stack>
        {status === 'success' ? (
          <Text size="sm" role="status">
            {copy.success}
          </Text>
        ) : null}
        {status === 'error' ? (
          <Text size="sm" role="alert">
            {copy.error}
          </Text>
        ) : null}
        <Button type="submit" loading={pending}>
          {pending ? copy.sending : copy.submit}
        </Button>
      </Stack>
    </form>
  );
}
