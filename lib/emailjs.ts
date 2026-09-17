export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_wpcxbrn',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_3frrdnp',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'H-9WirW9f8Z6TnjA7',
};

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
  intent: 'hiring' | 'project';
}): Promise<void> {
  const prefix = input.intent === 'hiring' ? '[Hiring]' : '[Project]';
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: emailjsConfig.serviceId,
      template_id: emailjsConfig.templateId,
      user_id: emailjsConfig.publicKey,
      template_params: {
        from_name: input.name,
        from_email: input.email,
        to_name: 'Margarita',
        message: `${prefix}\n${input.message}`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`EmailJS ${response.status}`);
  }
}
