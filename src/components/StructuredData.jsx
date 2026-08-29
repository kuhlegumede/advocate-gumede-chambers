import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://advocategumede.co.za/'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${SITE_URL}/#legalservice`,
        name: 'M.N Gumede Chambers',
        url: SITE_URL,
        description:
          'Advocate M.N Gumede is an Advocate of the High Court of South Africa based in Mthatha(Umtata), Eastern Cape, providing professional legal advocacy in criminal, civil and commercial litigation.',
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
        telephone: '+27829618609',
        email: 'advgumede26@gmail.com',
        image: 'https://advocategumede.co.za/favicon.svg',
        description:
          'Advocate M.N Gumede — Advocate of the High Court of South Africa based in Mthatha(Umtata), Eastern Cape.',
        inLanguage: 'en-ZA',
         address: {
      '@type': 'PostalAddress',
      streetAddress: '45 Leeds Road',
      addressLocality: 'Mthatha',
      addressRegion: 'Eastern Cape',
      postalCode: '5099',
      addressCountry: 'ZA',
    },
      },
    ],
     areaServed: [
      {
        '@type': 'City',
        name: 'Mthatha',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Eastern Cape',
      },
      {
        '@type': 'Country',
        name: 'South Africa',
      },
    ],

    founder: {
      '@type': 'Person',
      name: 'Nhlanhla Gumede',
      jobTitle: 'Advocate of the High Court of South Africa',
    },

    knowsAbout: [
      'Criminal Law',
      'Civil Litigation',
      'Commercial Law',
      'Contract Disputes',
      'Family Law',
      'Labour Law',
      'Property Law',
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