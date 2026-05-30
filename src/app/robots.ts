import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://vrindavandev.in/sitemap.xml',
    host: 'https://vrindavandev.in',
  }
}
