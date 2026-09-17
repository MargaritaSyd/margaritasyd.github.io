import { links } from '@/content/links';
import type { Locale } from '@/lib/paths';

export type ExperienceItem = {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  bullets: string[];
};

export type CandidateCopy = {
  badge: string;
  heading: string;
  lede: string;
  location: string;
  openTo: string;
  linkedin: string;
  github: string;
  cv: string;
  experience: {
    title: string;
    items: ExperienceItem[];
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
  lede: 'React, Next.js, and TypeScript. I build scalable UI — including micro frontends and component libraries. Currently frontend at Santander Consumer. Building blurise on the side.',
  location: 'Buenos Aires · Spanish (native) · English (advanced)',
  openTo: 'Open to frontend roles where design systems, product UI, or web platform work matter.',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'Download CV',
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Frontend developer',
        company: 'Santander Consumer (via RHT)',
        period: '2026 — present',
        bullets: [
          'Loan simulator: dummy frontend that consumes backend JSON and renders simulation flows dynamically.',
          'Designed a custom component library so UI stayed consistent across the project.',
          'Loan-request dashboard for online applications — usability, responsive layout, backend integration.',
        ],
      },
      {
        role: 'Software developer',
        company: 'Santander Technology (via RHT)',
        period: 'May 2025 — Feb 2026',
        bullets: [
          'Internal banking tools and digital solutions with cross-functional teams.',
          'Secure, scalable frontend aligned with Santander’s technology standards.',
        ],
      },
      {
        role: 'Frontend developer',
        company: 'Flux IT',
        companyHref: links.fluxIt,
        period: 'Jul 2022 — May 2025',
        bullets: [
          'Production apps in React, Next.js, and TypeScript.',
          'Micro frontends and performance work that cut load times by 30%.',
          'Product work across a social network, leadership tools, and an AI bot.',
        ],
      },
      {
        role: 'Full stack developer',
        company: 'Palermo Magazine',
        period: 'Feb 2022 — Jul 2022',
        bullets: [
          'Backend data work and frontend maintenance for a digital magazine serving Argentina’s equestrian community.',
        ],
      },
      {
        role: 'Freelance full stack developer',
        company: 'Independent',
        period: 'Apr 2020 — Feb 2022',
        bullets: [
          'E-commerce for organizations in Buenos Aires — React on the frontend, Node.js and MySQL on the backend.',
        ],
      },
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
        items: ['React', 'TypeScript', 'Next.js', 'Redux', 'RTK Query'],
      },
      {
        name: 'Systems',
        items: ['Micro frontends', 'Storybook', 'Component libraries', 'Webpack'],
      },
      {
        name: 'Craft',
        items: ['Tailwind', 'Sass', 'SEO', 'Accessibility'],
      },
      {
        name: 'Also',
        items: ['Node.js', 'SQL', 'React Native', 'Docker'],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        school: 'UTN',
        program: 'Software development technician',
        period: 'In progress',
      },
      {
        school: 'Udemy',
        program: 'React Pro',
        period: '2024',
      },
      {
        school: 'Coderhouse',
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
    lede: 'Hiring for a frontend role? Send a note, or grab the CV above.',
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
  lede: 'React, Next.js y TypeScript. Armo UI escalable — micro-frontends y librerías de componentes incluidas. Hoy frontend en Santander Consumer. blurise, en paralelo.',
  location: 'Buenos Aires · Español (nativo) · Inglés (avanzado)',
  openTo: 'Abierta a roles de frontend donde importen design systems, product UI o plataforma web.',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'Descargar CV',
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Frontend developer',
        company: 'Santander Consumer (vía RHT)',
        period: '2026 — actualidad',
        bullets: [
          'Simulador de préstamos: frontend que consume JSON del backend y renderiza los flujos de simulación en forma dinámica.',
          'Librería de componentes propia para unificar la UI del proyecto.',
          'Dashboard de solicitud de préstamos online: usabilidad, responsive e integración con backend.',
        ],
      },
      {
        role: 'Software developer',
        company: 'Santander Technology (vía RHT)',
        period: 'May 2025 — Feb 2026',
        bullets: [
          'Herramientas internas y soluciones digitales de banca, con equipos transversales.',
          'Frontend seguro y escalable, alineado a los estándares de Santander.',
        ],
      },
      {
        role: 'Frontend developer',
        company: 'Flux IT',
        companyHref: links.fluxIt,
        period: 'Jul 2022 — May 2025',
        bullets: [
          'Aplicaciones de producto en React, Next.js y TypeScript.',
          'Micro-frontends y performance: −30% en tiempos de carga.',
          'Red social, herramientas para líderes y un bot de AI, entre otros.',
        ],
      },
      {
        role: 'Full stack developer',
        company: 'Revista Palermo',
        period: 'Feb 2022 — Jul 2022',
        bullets: [
          'Backend de datos y mantenimiento frontend de una revista digital para la comunidad hípica argentina.',
        ],
      },
      {
        role: 'Freelance full stack',
        company: 'Independiente',
        period: 'Abr 2020 — Feb 2022',
        bullets: [
          'E-commerce para organizaciones en Buenos Aires: React en el frontend, Node.js y MySQL en el backend.',
        ],
      },
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
        items: ['React', 'TypeScript', 'Next.js', 'Redux', 'RTK Query'],
      },
      {
        name: 'Sistemas',
        items: ['Micro-frontends', 'Storybook', 'Component libraries', 'Webpack'],
      },
      {
        name: 'Craft',
        items: ['Tailwind', 'Sass', 'SEO', 'Accesibilidad'],
      },
      {
        name: 'También',
        items: ['Node.js', 'SQL', 'React Native', 'Docker'],
      },
    ],
  },
  education: {
    title: 'Formación',
    items: [
      {
        school: 'UTN',
        program: 'Tecnicatura en desarrollo de software',
        period: 'En curso',
      },
      {
        school: 'Udemy',
        program: 'React Pro',
        period: '2024',
      },
      {
        school: 'Coderhouse',
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
    lede: '¿Están contratando frontend? Escribime, o bajá el CV arriba.',
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
