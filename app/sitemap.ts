import type { MetadataRoute } from 'next';
import { absUrl, pathFor } from '@/lib/paths';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absUrl(pathFor('es')),
      lastModified,
      alternates: { languages: { es: absUrl(pathFor('es')), en: absUrl(pathFor('en')) } },
    },
    {
      url: absUrl(pathFor('en')),
      lastModified,
      alternates: { languages: { es: absUrl(pathFor('es')), en: absUrl(pathFor('en')) } },
    },
  ];
}
