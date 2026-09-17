export const es = {
  meta: {
    homeTitle: 'Margarita Syddall — Frontend engineer',
    homeDescription:
      'Como frontend developer, me apasiona dar vida a interfaces que no solo se ven bien, sino que también se sienten naturales. Productos digitales claros, rápidos y accesibles.',
    candidateTitle: 'Perfil para equipos — Margarita Syddall',
    candidateDescription:
      'Frontend engineer con foco en React, TypeScript y design systems. Experiencia en producto y librerías de UI.',
    freelanceTitle: 'Frontend freelance — Margarita Syddall',
    freelanceDescription:
      'Landings, product UI y design systems en React. Motion cinematográfico con blurise. Remoto desde Argentina.',
  },
  nav: {
    home: 'Inicio',
    candidate: 'Candidata',
    freelance: 'Freelance',
    languageName: 'English',
    languageCode: 'EN',
  },
  home: {
    badge: 'Frontend · design systems · motion',
    heading: 'Del diseño a la interacción, convierto ideas en experiencias web',
    lede: 'Como frontend developer, me apasiona dar vida a interfaces que no solo se ven bien, sino que también se sienten naturales. Trabajo combinando creatividad y tecnología para construir productos digitales claros, rápidos y accesibles.',
    ctaCandidate: 'Buscás contratarme',
    ctaFreelance: 'Necesitás una frontend',
    proofBadge: 'Librería',
    proofTitle: 'blurise',
    proofBody:
      'Kit de React con tokens, primitivas de motion y componentes accesibles. Este sitio está construido con ella.',
    proofLink: 'blurise en npm',
    currentRole: 'Frontend en Santander Consumer',
  },
  stub: {
    candidateHeading: 'Perfil para equipos',
    candidateBody:
      'Acá va experiencia, trabajo seleccionado, skills y formación. Lo estamos armando.',
    freelanceHeading: 'Trabajemos juntas',
    freelanceBody:
      'Acá van servicios, proceso y cómo arrancar un proyecto. Lo estamos armando.',
    backHome: 'Volver al inicio',
  },
  footer: {
    builtWith: 'Hecho con blurise',
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Messages = DeepString<typeof es>;
