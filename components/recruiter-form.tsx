'use client';

import { useState, type FormEvent } from 'react';
import { Button, Input, Label, Stack, Text, Textarea } from '@/components/blurise';
import type { CandidateCopy } from '@/content/candidate';
import { sendContactEmail } from '@/lib/emailjs';

type RecruiterFormProps = {
  copy: CandidateCopy['contact'];
};

export function RecruiterForm({ copy }: RecruiterFormProps) {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) return;

    setPending(true);
    setStatus('idle');
    try {
      await sendContactEmail({ name, email, message, intent: 'hiring' });
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
          <Label htmlFor="recruiter-name">{copy.name}</Label>
          <Input id="recruiter-name" name="name" autoComplete="name" required />
        </Stack>
        <Stack gap={2}>
          <Label htmlFor="recruiter-email">{copy.email}</Label>
          <Input
            id="recruiter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Stack>
        <Stack gap={2}>
          <Label htmlFor="recruiter-message">{copy.message}</Label>
          <Textarea id="recruiter-message" name="message" rows={6} required />
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
