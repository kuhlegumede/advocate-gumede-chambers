import { Helmet } from 'react-helmet-async'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://advocategumede.co.za/#legalservice',
        name: 'Advocate Gumede Chambers',
        url: 'https://advocategumede.co.za/',
        description:
          'Legal services provided by Advocate M.N. Gumede, Advocate of the High Court of South Africa, in Mthatha (Umtata), Eastern Cape.',
        telephone: '+27 82 961 8609',

        address: {
          '@type': 'PostalAddress',
          streetAddress: '45 Leeds Road',
          addressLocality: 'Mthatha',
          addressRegion: 'Eastern Cape',
          postalCode: '5099',
          addressCountry: 'ZA',
        },

        areaServed: [
          {
            '@type': 'City',
            name: 'Mthatha',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Eastern Cape',
          },
        ],
      },

      {
        '@type': 'Person',
        '@id': 'https://advocategumede.co.za/#person',
        name: 'M.N. Gumede',
        jobTitle: 'Advocate',
        url: 'https://advocategumede.co.za/',
        worksFor: {
          '@id':
            'https://advocategumede.co.za/#legalservice',
        },
      },

      {
        '@type': 'WebSite',
        '@id': 'https://advocategumede.co.za/#website',
        url: 'https://advocategumede.co.za/',
        name: 'Advocate M.N. Gumede',
        description:
          'Legal services and information for Advocate M.N. Gumede in Mthatha, Eastern Cape.',
        inLanguage: 'en-ZA',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}