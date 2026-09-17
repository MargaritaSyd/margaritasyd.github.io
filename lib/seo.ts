import type { Metadata } from 'next';

export const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Margarita Syddall — Frontend engineer',
} as const;

export const twitterCard: NonNullable<Metadata['twitter']> = {
  card: 'summary_large_image',
  images: [ogImage.url],
};
