import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://luislh.dev/sitemap.xml',
    host: 'https://luislh.dev',
  };
}
