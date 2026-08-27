import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Advocate Gumede'
const SITE_URL = 'https://advocategumede.co.za'

export default function SEO({
  title,
  description,
  path = '/',
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME

  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <Helmet>
      {/* Page title */}
      <title>{fullTitle}</title>

      {/* Search engine description */}
      <meta
        name="description"
        content={description}
      />

      {/* Search engine indexing */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:locale"
        content="en_ZA"
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />
    </Helmet>
  )
}