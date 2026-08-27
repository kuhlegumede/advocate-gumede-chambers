import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://advocategumede.co.za/'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${SITE_URL}/#legalservice`,
        name: 'Advocate Gumede',
        url: SITE_URL,
        description:
          'Advocate M.N Gumede is an Advocate of the High Court of South Africa providing professional legal advocacy in criminal, civil and commercial litigation.',
        areaServed: {
          '@type': 'Country',
          name: 'South Africa',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Advocate Gumede',
        description:
          'Advocate M.N Gumede — Advocate of the High Court of South Africa.',
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