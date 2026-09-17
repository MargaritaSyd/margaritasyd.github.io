import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/paths';
import './globals.css';
import 'blurise/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Margarita Syddall — Frontend engineer',
  description:
    'Frontend engineer. UI systems with cinematic motion. Open to roles and freelance work.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
