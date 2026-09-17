import { en } from './en';
import { es, type Messages } from './es';
import type { Locale } from '@/lib/paths';

const catalog: Record<Locale, Messages> = { es, en };

export function getMessages(locale: Locale): Messages {
  return catalog[locale];
}

export type { Messages };
