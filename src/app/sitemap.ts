import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { vehicleBrands, getAllBrandServicePages } from '@/data/vehicles';
import { blogPosts } from '@/data/blog';

const BASE_URL = 'https://aledolocksmith.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  entries.push(
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/vehicles`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/service-areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  );

  // Service pages
  for (const service of services) {
    entries.push({
      url: `${BASE_URL}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // Brand + service pages
  const brandPages = getAllBrandServicePages();
  for (const page of brandPages) {
    entries.push({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Brand + model pages
  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      entries.push({
        url: `${BASE_URL}/${brand.slug}-${model.slug}-key-replacement-aledo`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Blog posts
  for (const post of blogPosts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
