import type { Locale } from '@/lib/paths';
import { links } from '@/content/links';

export type FreelanceCopy = {
  badge: string;
  heading: string;
  lede: string;
  services: {
    title: string;
    items: { name: string; body: string }[];
  };
  fit: {
    title: string;
    forTitle: string;
    forItems: string[];
    notTitle: string;
    notItems: string[];
  };
  process: {
    title: string;
    steps: { name: string; body: string }[];
  };
  proof: {
    title: string;
    badge: string;
    name: string;
    body: string;
    npm: string;
    npmHref: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    lede: string;
    name: string;
    email: string;
    goal: string;
    timeline: string;
    budget: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    whatsapp: string;
  };
};

const en: FreelanceCopy = {
  badge: 'Freelance',
  heading: 'Frontend for products that need to feel considered.',
  lede: 'I take on a small number of React projects: product UI, design systems, and sites that should move like the brand, not like a template.',
  services: {
    title: 'Services',
    items: [
      {
        name: 'Product UI',
        body: 'Interfaces in React and TypeScript — new flows or a sharper frontend on a product that already exists.',
      },
      {
        name: 'Design systems',
        body: 'Tokens, components, Storybook, and a motion language the team can keep shipping. blurise is the public example.',
      },
      {
        name: 'Marketing / landing',
        body: 'Fast, accessible sites with a real visual system. Not a Bootstrap theme with your logo swapped in.',
      },
    ],
  },
  fit: {
    title: 'Fit',
    forTitle: 'A good fit',
    forItems: [
      'Founders or teams who already know they need a frontend, not a full agency.',
      'Products stuck on a UI that does not match the quality of the backend.',
      'Teams that want a system, not one-off screens.',
    ],
    notTitle: 'Not a fit',
    notItems: [
      'WordPress themes, no-code builds, or “make me an app like Uber”.',
      'Unscoped endless retainers with no decision-maker.',
      'Pure backend, mobile-native, or design-only work.',
    ],
  },
  process: {
    title: 'How we work',
    steps: [
      {
        name: '1. Discovery',
        body: 'A short call. Scope, constraints, and whether we should work together. If not, I will say so.',
      },
      {
        name: '2. Build',
        body: 'I ship in the open: React, TypeScript, and a clear component surface. You see progress, not a big reveal.',
      },
      {
        name: '3. Handoff',
        body: 'Code you can keep. Docs where they matter. No mystery animations locked in a tool you do not own.',
      },
    ],
  },
  proof: {
    title: 'How I actually work',
    badge: 'Library',
    name: 'blurise',
    body: 'This site is built with the kit I publish: tokens, cinematic motion in CSS, accessible controls. If you need a system with that kind of care, that is the work.',
    npm: 'blurise on npm',
    npmHref: links.bluriseNpm,
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Where are you based?',
        a: 'Argentina. I work remotely, in English or Spanish, overlapping reasonably with US and EU hours.',
      },
      {
        q: 'How do we start?',
        a: 'Send the brief below. If it looks like a fit, we book a discovery call. No deck required.',
      },
      {
        q: 'What about timeline and budget?',
        a: 'I quote after discovery. Typical work is a defined slice (a system, a set of flows, a site) — not an open-ended hourly blur.',
      },
      {
        q: 'Do you take every project?',
        a: 'No. Capacity is limited alongside my role at Santander Consumer. Better a clear no than a slow maybe.',
      },
    ],
  },
  contact: {
    title: 'Start a project',
    lede: 'A few lines on what you are building is enough. I reply with next steps or a polite no.',
    name: 'Name',
    email: 'Email',
    goal: 'What do you need built?',
    timeline: 'When does it need to ship?',
    budget: 'Budget range (optional)',
    message: 'Anything else I should know',
    submit: 'Send brief',
    sending: 'Sending',
    success: 'Received. I will get back to you.',
    error: 'Could not send. Try again or reach me on LinkedIn.',
    whatsapp: 'WhatsApp',
  },
};

const es: FreelanceCopy = {
  badge: 'Freelance',
  heading: 'Frontend para productos que tienen que sentirse pensados.',
  lede: 'Tomo pocos proyectos de React: product UI, design systems y sitios que se muevan como la marca, no como un template.',
  services: {
    title: 'Servicios',
    items: [
      {
        name: 'Product UI',
        body: 'Interfaces en React y TypeScript: flujos nuevos o un frontend a la altura de un producto que ya existe.',
      },
      {
        name: 'Design systems',
        body: 'Tokens, componentes, Storybook y un lenguaje de motion que el equipo pueda seguir usando. blurise es el ejemplo público.',
      },
      {
        name: 'Marketing / landing',
        body: 'Sitios rápidos y accesibles, con un sistema visual de verdad. No un tema de Bootstrap con el logo cambiado.',
      },
    ],
  },
  fit: {
    title: 'Encaje',
    forTitle: 'Tiene sentido si',
    forItems: [
      'Ya sabés que necesitás una frontend, no una agencia entera.',
      'El producto está mejor atrás que en la UI.',
      'Querés un sistema, no pantallas sueltas.',
    ],
    notTitle: 'No es para',
    notItems: [
      'Temas de WordPress, no-code, o “haceme un Uber”.',
      'Retainers eternos sin alguien que decida.',
      'Solo backend, mobile nativo o solo diseño.',
    ],
  },
  process: {
    title: 'Cómo trabajamos',
    steps: [
      {
        name: '1. Discovery',
        body: 'Una llamada corta. Alcance, límites y si conviene trabajar juntas. Si no, lo digo.',
      },
      {
        name: '2. Build',
        body: 'Entrego en abierto: React, TypeScript y una superficie de componentes clara. Ves progreso, no un gran revelado.',
      },
      {
        name: '3. Handoff',
        body: 'Código que puedan mantener. Docs donde hacen falta. Sin animaciones encerradas en una herramienta que no es tuya.',
      },
    ],
  },
  proof: {
    title: 'Así trabajo de verdad',
    badge: 'Librería',
    name: 'blurise',
    body: 'Este sitio está hecho con el kit que publico: tokens, motion cinematográfico en CSS, controles accesibles. Si necesitás un sistema con ese nivel de cuidado, ese es el trabajo.',
    npm: 'blurise en npm',
    npmHref: links.bluriseNpm,
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: '¿De dónde trabajás?',
        a: 'Argentina. Remoto, en español o inglés, con overlap razonable con US y Europa.',
      },
      {
        q: '¿Cómo arrancamos?',
        a: 'Mandá el brief. Si encaja, agendamos discovery. No hace falta un deck.',
      },
      {
        q: '¿Plazos y presupuesto?',
        a: 'Cotizo después del discovery. Suele ser un recorte definido (un sistema, un set de flujos, un sitio), no horas abiertas.',
      },
      {
        q: '¿Tomás todos los proyectos?',
        a: 'No. La capacidad es limitada junto al rol en Santander Consumer. Mejor un no claro que un maybe lento.',
      },
    ],
  },
  contact: {
    title: 'Arranquemos un proyecto',
    lede: 'Con unas líneas sobre lo que estás armando alcanza. Respondo con próximos pasos o un no educado.',
    name: 'Nombre',
    email: 'Email',
    goal: '¿Qué hay que construir?',
    timeline: '¿Para cuándo tiene que salir?',
    budget: 'Rango de presupuesto (opcional)',
    message: 'Algo más que tenga que saber',
    submit: 'Enviar brief',
    sending: 'Enviando',
    success: 'Llegó. Te respondo a la brevedad.',
    error: 'No se pudo enviar. Probá de nuevo o escribilme por LinkedIn.',
    whatsapp: 'WhatsApp',
  },
};

const catalog: Record<Locale, FreelanceCopy> = { en, es };

export function getFreelanceCopy(locale: Locale): FreelanceCopy {
  return catalog[locale];
}
