import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/paths';
import { ogImage, twitterCard } from '@/lib/seo';
import './globals.css';
import 'blurise/styles.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Margarita Syddall — Frontend engineer',
  description:
    'Frontend engineer. UI systems with cinematic motion. Open to roles and freelance work.',
  openGraph: {
    type: 'website',
    siteName: 'Margarita Syddall',
    images: [ogImage],
  },
  twitter: twitterCard,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-br-theme="dark" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
