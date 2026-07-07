import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://digitalcraftstudio.in',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://digitalcraftstudio.in/#services',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://digitalcraftstudio.in/#results',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://digitalcraftstudio.in/#contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
