'use client';

import { useLayoutEffect } from 'react';

type DocumentLangProps = {
  locale: string;
};

export function DocumentLang({ locale }: DocumentLangProps) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
