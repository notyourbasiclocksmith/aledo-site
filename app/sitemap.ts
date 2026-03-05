import { MetadataRoute } from 'next'
import { services } from '@/lib/services'

const baseUrl = 'https://aledolocksmith.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticEn: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/en/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/en/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/en/service-area/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/en/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const staticEs: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/es/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/es/servicios/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/es/area-de-servicio/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/es/acerca/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/contacto/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const serviceEn: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/en/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const serviceEs: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/es/servicios/${s.slugEs}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticEn, ...staticEs, ...serviceEn, ...serviceEs]
}
