import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import StructuredData from './components/StructuredData.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function RouteSEO() {
  const { pathname } = useLocation()

  const seo = {
    '/': {
      title:
        'Advocate M.N. Gumede | Advocate in Mthatha, Eastern Cape',

      description:
        'Advocate M.N. Gumede is an Advocate of the High Court of South Africa providing legal services in Mthatha (Umtata), Eastern Cape.',

      canonical: '/',
    },

    '/services': {
      title:
        'Legal Services in Mthatha | Advocate M.N. Gumede',

      description:
        'Explore legal services provided by Advocate M.N. Gumede in Mthatha (Umtata), Eastern Cape, including criminal, civil, commercial, family, labour and property matters.',

      canonical: '/services',
    },

    '/contact': {
      title:
        'Contact an Advocate in Mthatha | Advocate M.N. Gumede',

      description:
        'Contact Advocate M.N. Gumede in Mthatha (Umtata), Eastern Cape, for legal enquiries and professional legal services.',

      canonical: '/contact',
    },
  }

  const currentSEO = seo[pathname] || seo['/']

  return (
    <SEO
      title={currentSEO.title}
      description={currentSEO.description}
      canonical={currentSEO.canonical}
    />
  )
}

export default function App() {
  return (
    <>
      <RouteSEO />

      <StructuredData />

      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  )
}