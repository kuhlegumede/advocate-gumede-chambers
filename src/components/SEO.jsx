import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://advocategumede.co.za'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}) {
  const canonicalUrl = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:locale"
        content="en_ZA"
      />

      <meta
        property="og:site_name"
        content="Advocate M.N. Gumede"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  )
}