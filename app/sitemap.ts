import type { MetadataRoute } from 'next';
import { absUrl, pathFor } from '@/lib/paths';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absUrl(pathFor('es', 'home')),
      lastModified,
      alternates: { languages: { es: absUrl(pathFor('es', 'home')), en: absUrl(pathFor('en', 'home')) } },
    },
    {
      url: absUrl(pathFor('en', 'home')),
      lastModified,
      alternates: { languages: { es: absUrl(pathFor('es', 'home')), en: absUrl(pathFor('en', 'home')) } },
    },
    {
      url: absUrl(pathFor('es', 'candidate')),
      lastModified,
      alternates: {
        languages: {
          es: absUrl(pathFor('es', 'candidate')),
          en: absUrl(pathFor('en', 'candidate')),
        },
      },
    },
    {
      url: absUrl(pathFor('en', 'candidate')),
      lastModified,
      alternates: {
        languages: {
          es: absUrl(pathFor('es', 'candidate')),
          en: absUrl(pathFor('en', 'candidate')),
        },
      },
    },
    {
      url: absUrl(pathFor('es', 'freelance')),
      lastModified,
      alternates: {
        languages: {
          es: absUrl(pathFor('es', 'freelance')),
          en: absUrl(pathFor('en', 'freelance')),
        },
      },
    },
    {
      url: absUrl(pathFor('en', 'freelance')),
      lastModified,
      alternates: {
        languages: {
          es: absUrl(pathFor('es', 'freelance')),
          en: absUrl(pathFor('en', 'freelance')),
        },
      },
    },
  ];
}
