const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

type ContactIntent = 'hiring' | 'project';

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
  intent: ContactIntent;
}): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error('Missing NEXT_PUBLIC_WEB3FORMS_KEY');
  }

  const prefix = input.intent === 'hiring' ? '[Hiring]' : '[Project]';

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `${prefix} ${input.name}`,
      from_name: 'Portfolio',
      name: input.name,
      email: input.email,
      message: `${prefix}\n${input.message}`,
    }),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean;
  } | null;

  if (!response.ok || !payload?.success) {
    throw new Error(`Web3Forms ${response.status}`);
  }
}
