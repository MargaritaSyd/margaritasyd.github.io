export const es = {
  meta: {
    homeTitle: 'Margarita Syddall — Frontend engineer',
    homeDescription:
      'Frontend engineer. React, design systems y motion. Abierta a proyectos freelance y a roles de producto.',
  },
  nav: {
    work: 'Trabajo',
    experience: 'Experiencia',
    contact: 'Contacto',
    languageName: 'English',
    languageCode: 'EN',
  },
  redirect: {
    continue: 'Ir al portfolio',
  },
  footer: {
    builtWith: 'Hecho con blurise',
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Messages = DeepString<typeof es>;
