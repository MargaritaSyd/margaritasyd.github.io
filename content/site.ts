import { links } from '@/content/links';
import type { Locale } from '@/lib/paths';

export type ExperienceItem = {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  bullets: string[];
};

export type WorkItem = {
  badge: string;
  name: string;
  body: string;
  href: string;
  linkLabel: string;
  caseStudy?: {
    problemLabel: string;
    problem: string;
    approachLabel: string;
    approach: string;
    outcomeLabel: string;
    outcome: string;
  };
};

export type SiteCopy = {
  hero: {
    badge: string;
    heading: string;
    lede: string;
    availability: string;
    currentRole: string;
    ctaWork: string;
    ctaContact: string;
    cv: string;
    linkedin: string;
    github: string;
    location: string;
  };
  work: {
    title: string;
    items: WorkItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
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
  approach: {
    title: string;
    lede: string;
    items: { name: string; body: string }[];
    processTitle: string;
    steps: { name: string; body: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  contact: {
    title: string;
    lede: string;
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
    another: string;
    error: string;
  };
};

const en: SiteCopy = {
  hero: {
    badge: 'Frontend · design systems · motion',
    heading: 'From design to interaction, I turn ideas into web experiences',
    lede: "As a frontend developer, I'm passionate about bringing interfaces to life — not only how they look, but how natural they feel. I combine creativity and technology to build digital products that are clear, fast, and accessible.",
    availability: 'Open to freelance projects and product roles.',
    currentRole: 'Frontend at Santander Consumer',
    ctaWork: 'See work',
    ctaContact: 'Get in touch',
    cv: 'Download CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Buenos Aires · Spanish (native) · English (advanced)',
  },
  work: {
    title: 'Selected work',
    items: [
      {
        badge: 'Client',
        name: 'OllyGarden',
        body: 'Production website for OllyGarden, a telemetry-quality product for observability teams. Public marketing site — live at ollygarden.com.',
        href: links.ollygarden,
        linkLabel: 'ollygarden.com',
      },
      {
        badge: 'Library',
        name: 'blurise',
        body: 'A React kit with tokens, cinematic motion in CSS, and accessible components. This portfolio is built with it.',
        href: links.bluriseNpm,
        linkLabel: 'blurise on npm',
        caseStudy: {
          problemLabel: 'Problem',
          problem:
            'Most UI kits ignore motion, or they bolt on a JS animation runtime. I wanted a small React surface with a cinematic language that still respects reduced motion.',
          approachLabel: 'Approach',
          approach:
            'Design tokens (`--br-*`), CSS-first primitives (blur-rise, stagger, grain), and a core kit: actions, forms, overlays. Accessibility from day one — focus rings, dialogs, keyboard menus.',
          outcomeLabel: 'Outcome',
          outcome:
            'Published on npm. This site is the production consumer: Next.js App Router + blurise + Tailwind mapped to the same tokens.',
        },
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Frontend developer',
        company: 'Santander Consumer (via RHT)',
        companyHref: links.rht,
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
        companyHref: links.rht,
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
    ],
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
        items: ['Node.js', 'SQL', 'React Native', 'Docker', 'AWS'],
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
  approach: {
    title: 'How I work',
    lede: 'Product UI, design systems, and sites that should feel considered — on a team or as freelance.',
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
    processTitle: 'A typical collaboration',
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
    faqTitle: 'FAQ',
    faq: [
      {
        q: 'Where are you based?',
        a: 'Argentina. I work remotely, in English or Spanish, overlapping reasonably with US and EU hours.',
      },
      {
        q: 'How do we start?',
        a: 'Send a note below — a role, a project, or a question. If it looks like a fit, we talk.',
      },
      {
        q: 'Are you available?',
        a: 'I take on a small number of projects, and I am open to the right frontend role. Better a clear no than a slow maybe.',
      },
      {
        q: 'Do you invoice?',
        a: 'Yes. I issue AFIP-authorized electronic invoices in Argentina.',
      },
    ],
  },
  contact: {
    title: 'Let’s talk',
    lede: 'A frontend role or a project — a few lines is enough.',
    name: 'Name',
    email: 'Email',
    intent: 'What is this about? (optional)',
    intentRole: 'A role',
    intentProject: 'A project',
    intentOther: 'Something else',
    message: 'Tell me a bit more',
    submit: 'Send',
    sending: 'Sending',
    success: 'Got it. I’ll reply to this email.',
    another: 'Write another',
    error: 'Could not send. Try again or reach me on LinkedIn.',
  },
};

const es: SiteCopy = {
  hero: {
    badge: 'Frontend · design systems · motion',
    heading: 'Del diseño a la interacción, convierto ideas en experiencias web',
    lede: 'Como frontend developer, me apasiona dar vida a interfaces que no solo se ven bien, sino que también se sienten naturales. Trabajo combinando creatividad y tecnología para construir productos digitales claros, rápidos y accesibles.',
    availability: 'Abierta a proyectos freelance y a roles de producto.',
    currentRole: 'Frontend en Santander Consumer',
    ctaWork: 'Ver trabajo',
    ctaContact: 'Escribime',
    cv: 'Descargar CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Buenos Aires · Español (nativo) · Inglés (avanzado)',
  },
  work: {
    title: 'Trabajo seleccionado',
    items: [
      {
        badge: 'Cliente',
        name: 'OllyGarden',
        body: 'Sitio en producción de OllyGarden, un producto de calidad de telemetría para equipos de observability. Marketing site público — ollygarden.com.',
        href: links.ollygarden,
        linkLabel: 'ollygarden.com',
      },
      {
        badge: 'Librería',
        name: 'blurise',
        body: 'Kit de React con tokens, motion cinematográfico en CSS y componentes accesibles. Este portfolio está construido con ella.',
        href: links.bluriseNpm,
        linkLabel: 'blurise en npm',
        caseStudy: {
          problemLabel: 'Problema',
          problem:
            'La mayoría de los kits de UI ignoran el motion, o lo resuelven con un runtime de animación pesado. Quería una superficie chica en React, con lenguaje cinematográfico, que respetara reduced motion.',
          approachLabel: 'Enfoque',
          approach:
            'Tokens (`--br-*`), primitivas en CSS (blur-rise, stagger, grain) y un kit: acciones, forms, overlays. Accesibilidad desde el día uno — focus, dialogs, menús con teclado.',
          outcomeLabel: 'Resultado',
          outcome:
            'Publicada en npm. Este sitio es el consumidor en producción: Next.js App Router + blurise + Tailwind mapeado a los mismos tokens.',
        },
      },
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Frontend developer',
        company: 'Santander Consumer (vía RHT)',
        companyHref: links.rht,
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
        companyHref: links.rht,
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
    ],
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
        items: ['Node.js', 'SQL', 'React Native', 'Docker', 'AWS'],
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
  approach: {
    title: 'Cómo trabajo',
    lede: 'Product UI, design systems y sitios que se sientan pensados — en un equipo o como freelance.',
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
    processTitle: 'Una colaboración típica',
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
    faqTitle: 'FAQ',
    faq: [
      {
        q: '¿De dónde trabajás?',
        a: 'Argentina. Remoto, en español o inglés, con overlap razonable con US y Europa.',
      },
      {
        q: '¿Cómo arrancamos?',
        a: 'Escribime abajo: un rol, un proyecto o una pregunta. Si encaja, hablamos.',
      },
      {
        q: '¿Estás disponible?',
        a: 'Tomo pocos proyectos, y estoy abierta al rol de frontend que encaje. Mejor un no claro que un maybe lento.',
      },
      {
        q: '¿Hacés factura?',
        a: 'Sí. Factura electrónica homologada por AFIP, en Argentina.',
      },
    ],
  },
  contact: {
    title: 'Hablemos',
    lede: 'Un rol de frontend o un proyecto: con unas líneas alcanza.',
    name: 'Nombre',
    email: 'Email',
    intent: '¿De qué se trata? (opcional)',
    intentRole: 'Un rol',
    intentProject: 'Un proyecto',
    intentOther: 'Otra cosa',
    message: 'Contame un poco más',
    submit: 'Enviar',
    sending: 'Enviando',
    success: 'Recibido. Te respondo a este mail.',
    another: 'Escribir otro',
    error: 'No se pudo enviar. Probá de nuevo o escribilme por LinkedIn.',
  },
};

const catalog: Record<Locale, SiteCopy> = { en, es };

export function getSiteCopy(locale: Locale): SiteCopy {
  return catalog[locale];
}
