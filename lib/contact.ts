const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export type ContactIntent = 'role' | 'project' | 'other';

const intentLabel: Record<ContactIntent, string> = {
  role: 'A role',
  project: 'A project',
  other: 'Something else',
};

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
  intent: ContactIntent | null;
}): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error('Missing NEXT_PUBLIC_WEB3FORMS_KEY');
  }

  const about = input.intent ? intentLabel[input.intent] : null;

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: about ? `${about} — ${input.name}` : input.name,
      from_name: 'Portfolio',
      name: input.name,
      email: input.email,
      ...(about ? { 'What is this about': about } : {}),
      message: input.message,
    }),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean;
  } | null;

  if (!response.ok || !payload?.success) {
    throw new Error(`Web3Forms ${response.status}`);
  }
}
