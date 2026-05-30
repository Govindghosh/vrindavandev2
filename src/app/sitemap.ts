import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://vrindavandev.in',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://vrindavandev.in/#services',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://vrindavandev.in/#projects',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://vrindavandev.in/#contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
