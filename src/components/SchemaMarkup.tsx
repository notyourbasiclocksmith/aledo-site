import { business } from '@/data/business';

interface SchemaMarkupProps {
  pageType?: 'home' | 'service' | 'vehicle' | 'blog' | 'contact';
  serviceName?: string;
  faqItems?: { question: string; answer: string }[];
  articleTitle?: string;
  articleDate?: string;
  articleDescription?: string;
}

export default function SchemaMarkup({
  pageType = 'home',
  serviceName,
  faqItems,
  articleTitle,
  articleDate,
  articleDescription,
}: SchemaMarkupProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': business.website,
    name: business.name,
    description: business.description,
    url: business.website,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.6960',
      longitude: '-97.6022',
    },
    areaServed: business.serviceAreas.map((area) => ({
      '@type': 'City',
      name: `${area}, Texas`,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    image: `${business.website}/og-image.jpg`,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.website,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${business.website}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = serviceName
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        provider: {
          '@type': 'LocalBusiness',
          name: business.name,
          telephone: business.phone,
        },
        areaServed: {
          '@type': 'City',
          name: 'Aledo, Texas',
        },
        serviceType: 'Automotive Locksmith',
      }
    : null;

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const articleSchema =
    articleTitle && articleDate
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: articleTitle,
          datePublished: articleDate,
          description: articleDescription || '',
          author: {
            '@type': 'Organization',
            name: business.name,
          },
          publisher: {
            '@type': 'Organization',
            name: business.name,
            url: business.website,
          },
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {pageType === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
}
