import { links } from '@/content/links';
import type { Locale } from '@/lib/paths';

export type CandidateCopy = {
  badge: string;
  heading: string;
  lede: string;
  openTo: string;
  linkedin: string;
  github: string;
  experience: {
    title: string;
    role: string;
    company: string;
    companyHref: string;
    period: string;
    bullets: string[];
  };
  work: {
    title: string;
    badge: string;
    name: string;
    problemLabel: string;
    problem: string;
    approachLabel: string;
    approach: string;
    outcomeLabel: string;
    outcome: string;
    npm: string;
    npmHref: string;
  };
  skills: {
    title: string;
    groups: { name: string; items: string[] }[];
  };
  education: {
    title: string;
    items: { school: string; program: string; period: string }[];
  };
  writing: {
    title: string;
    articleTitle: string;
    source: string;
    href: string;
  };
  contact: {
    title: string;
    lede: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
};

const en: CandidateCopy = {
  badge: 'For hiring teams',
  heading: 'Frontend engineer for product and design systems.',
  lede: 'React and TypeScript, with a bias toward tokens, accessible UI, and motion that stays in CSS. Currently at Flux IT. Building blurise on the side.',
  openTo: 'Open to frontend roles where design systems, product UI, or web platform work matter.',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  experience: {
    title: 'Experience',
    role: 'Frontend developer',
    company: 'Flux IT',
    companyHref: links.fluxIt,
    period: 'Present',
    bullets: [
      'Ship production React interfaces with TypeScript, Redux, and RTK Query.',
      'Work in product teams on responsive, scalable frontend — not throwaway landing pages.',
      'Write in public: micro-frontends piece for Flux IT Thoughts.',
    ],
  },
  work: {
    title: 'Selected work',
    badge: 'Library',
    name: 'blurise',
    problemLabel: 'Problem',
    problem:
      'Most UI kits ignore motion, or they bolt on a JS animation runtime. I wanted a small React surface with a cinematic language that still respects reduced motion.',
    approachLabel: 'Approach',
    approach:
      'Design tokens (`--br-*`), CSS-first primitives (blur-rise, stagger, grain), and a core kit: actions, forms, overlays. Accessibility from day one — focus rings, dialogs, keyboard menus.',
    outcomeLabel: 'Outcome',
    outcome:
      'Published on npm. This portfolio is the production consumer: Next.js App Router + blurise + Tailwind mapped to the same tokens.',
    npm: 'blurise on npm',
    npmHref: links.bluriseNpm,
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        name: 'Product',
        items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'RTK Query'],
      },
      {
        name: 'Systems',
        items: ['Design tokens', 'Storybook', 'Component libraries', 'Webpack'],
      },
      {
        name: 'Craft',
        items: ['Tailwind', 'Sass', 'Accessibility', 'Next.js'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        school: 'UTN',
        program: 'Software engineering',
        period: '2024 — present',
      },
      {
        school: 'Udemy',
        program: 'React Pro',
        period: '2024',
      },
      {
        school: 'Coder House',
        program: 'Mobile development',
        period: '2022',
      },
      {
        school: 'Digital House',
        program: 'Full stack web development',
        period: '2021',
      },
    ],
  },
  writing: {
    title: 'Writing',
    articleTitle: 'Micro-frontends: the future of modern web development',
    source: 'Flux IT Thoughts',
    href: links.mediumMicrofrontends,
  },
  contact: {
    title: 'Let’s talk',
    lede: 'Hiring for a frontend role? Send a note — CV on request.',
    name: 'Name',
    email: 'Work email',
    message: 'Role, team, and location (or remote)',
    submit: 'Send',
    sending: 'Sending',
    success: 'Sent. I’ll get back to you.',
    error: 'Could not send. Try again or reach me on LinkedIn.',
  },
};

const es: CandidateCopy = {
  badge: 'Para equipos que contratan',
  heading: 'Frontend engineer para producto y design systems.',
  lede: 'React y TypeScript, con sesgo a tokens, UI accesible y motion que vive en CSS. Hoy en Flux IT. blurise, en paralelo.',
  openTo: 'Abierta a roles de frontend donde importen design systems, product UI o plataforma web.',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  experience: {
    title: 'Experiencia',
    role: 'Frontend developer',
    company: 'Flux IT',
    companyHref: links.fluxIt,
    period: 'Actualidad',
    bullets: [
      'Interfaces de producto en React con TypeScript, Redux y RTK Query.',
      'Trabajo en equipos de producto sobre frontend responsive y escalable.',
      'Escritura pública: artículo de micro-frontends en Flux IT Thoughts.',
    ],
  },
  work: {
    title: 'Trabajo seleccionado',
    badge: 'Librería',
    name: 'blurise',
    problemLabel: 'Problema',
    problem:
      'La mayoría de los kits de UI ignoran el motion, o lo resuelven con un runtime de animación pesado. Quería una superficie chica en React, con lenguaje cinematográfico, que respetara reduced motion.',
    approachLabel: 'Enfoque',
    approach:
      'Tokens (`--br-*`), primitivas en CSS (blur-rise, stagger, grain) y un kit: acciones, forms, overlays. Accesibilidad desde el día uno — focus, dialogs, menús con teclado.',
    outcomeLabel: 'Resultado',
    outcome:
      'Publicada en npm. Este portfolio es el consumidor en producción: Next.js App Router + blurise + Tailwind mapeado a los mismos tokens.',
    npm: 'blurise en npm',
    npmHref: links.bluriseNpm,
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        name: 'Producto',
        items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'RTK Query'],
      },
      {
        name: 'Sistemas',
        items: ['Design tokens', 'Storybook', 'Component libraries', 'Webpack'],
      },
      {
        name: 'Craft',
        items: ['Tailwind', 'Sass', 'Accesibilidad', 'Next.js'],
      },
    ],
  },
  education: {
    title: 'Formación',
    items: [
      {
        school: 'UTN',
        program: 'Ingeniería en sistemas',
        period: '2024 — actualidad',
      },
      {
        school: 'Udemy',
        program: 'React Pro',
        period: '2024',
      },
      {
        school: 'Coder House',
        program: 'Desarrollo mobile',
        period: '2022',
      },
      {
        school: 'Digital House',
        program: 'Desarrollo web full stack',
        period: '2021',
      },
    ],
  },
  writing: {
    title: 'Escritura',
    articleTitle: 'Micro-frontends: the future of modern web development',
    source: 'Flux IT Thoughts',
    href: links.mediumMicrofrontends,
  },
  contact: {
    title: 'Hablemos',
    lede: '¿Están contratando frontend? Escribime — CV a pedido.',
    name: 'Nombre',
    email: 'Email de trabajo',
    message: 'Rol, equipo y ubicación (o remoto)',
    submit: 'Enviar',
    sending: 'Enviando',
    success: 'Enviado. Te respondo a la brevedad.',
    error: 'No se pudo enviar. Probá de nuevo o escribilme por LinkedIn.',
  },
};

const catalog: Record<Locale, CandidateCopy> = { en, es };

export function getCandidateCopy(locale: Locale): CandidateCopy {
  return catalog[locale];
}
