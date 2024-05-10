import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow:['/politica-de-privacidade']
      },
    ],
    sitemap: 'https://uxgroup.com.br/sitemap.xml',
  }
}
