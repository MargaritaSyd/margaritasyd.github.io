'use client';

import { useState, type FormEvent } from 'react';
import { Button, Input, Label, Stack, Text, Textarea } from '@/components/blurise';
import { sendContactEmail, type ContactIntent } from '@/lib/contact';

export type ContactFormCopy = {
  name: string;
  email: string;
  intent: string;
  intentRole: string;
  intentProject: string;
  intentOther: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  idPrefix: string;
};

function parseIntent(value: string): ContactIntent {
  if (value === 'role' || value === 'project') return value;
  return 'other';
}

export function ContactForm({ copy, idPrefix }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const intent = parseIntent(String(data.get('intent') ?? ''));

    if (!name || !email || !message) return;
    if (data.get('botcheck')) return;

    setPending(true);
    setStatus('idle');
    try {
      await sendContactEmail({ name, email, message, intent });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="hidden" aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>
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
        <Stack gap={2}>
          <Label htmlFor={`${idPrefix}-intent`}>{copy.intent}</Label>
          <select
            id={`${idPrefix}-intent`}
            name="intent"
            defaultValue=""
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          >
            <option value="" />
            <option value="role">{copy.intentRole}</option>
            <option value="project">{copy.intentProject}</option>
            <option value="other">{copy.intentOther}</option>
          </select>
        </Stack>
        <Stack gap={2}>
          <Label htmlFor={`${idPrefix}-message`}>{copy.message}</Label>
          <Textarea id={`${idPrefix}-message`} name="message" rows={6} required />
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
