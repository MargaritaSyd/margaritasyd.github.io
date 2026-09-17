import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/paths';

export default function RootPage() {
  redirect(`/${defaultLocale}/`);
}
