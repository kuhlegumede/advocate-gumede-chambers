import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Practice Areas' },
  { to: '/contact', label: 'Contact & Enquiries' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__monogram">NG</span>
          <span className="nav__wordmark">
            <strong>Advocate Gumede Chambers</strong>
            <em>Advocate of the High Court</em>
          </span>
        </NavLink>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="tel:+27829618609" className="btn btn-primary nav__cta">
            082 961 8609
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
