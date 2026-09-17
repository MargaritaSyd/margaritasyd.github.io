import type { Messages } from './es';

export const en = {
  meta: {
    homeTitle: 'Margarita Syddall — Frontend engineer',
    homeDescription:
      'Frontend engineer. I design UI systems with cinematic motion and use them to ship products. Open to roles and freelance work.',
    candidateTitle: 'Hire Margarita Syddall — Frontend engineer',
    candidateDescription:
      'Frontend engineer focused on React, TypeScript, and design systems. Product experience and UI libraries.',
    freelanceTitle: 'Freelance frontend — Margarita Syddall',
    freelanceDescription:
      'Landing pages, product UI, and design systems in React. Cinematic motion with blurise. Remote from Argentina.',
  },
  nav: {
    home: 'Home',
    candidate: 'Hire me',
    freelance: 'Freelance',
    languageName: 'Español',
    languageCode: 'ES',
  },
  home: {
    badge: 'Frontend · design systems · motion',
    heading: "Hi, I'm Margarita.",
    lede: 'I design UI systems with cinematic motion — and use them to build products.',
    ctaCandidate: "You're hiring",
    ctaFreelance: 'You need a frontend',
    proofBadge: 'Library',
    proofTitle: 'blurise',
    proofBody:
      'A React kit with tokens, motion primitives, and accessible components. This site is built with it.',
    currentRole: 'Frontend at Santander Consumer',
  },
  stub: {
    candidateHeading: 'For hiring teams',
    candidateBody:
      'Experience, selected work, skills, and education will live here. We are still building this path.',
    freelanceHeading: "Let's work together",
    freelanceBody:
      'Services, process, and how to start a project will live here. We are still building this path.',
    backHome: 'Back to home',
  },
  footer: {
    builtWith: 'Built with blurise',
  },
} satisfies Messages;
