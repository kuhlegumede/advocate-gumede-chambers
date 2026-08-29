import { Link } from 'react-router-dom'
import logo from '../assets/adv-gumede-logo.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">

        <div className="footer__brand">
          <img
            src={logo}
            alt="Adv Gumede Chambers"
            className="footer__logo"
          />

          <div>
            <strong>Adv Gumede Chambers</strong>
            <p>Advocate of the High Court of South Africa</p>
          </div>
        </div>

        <div className="footer__col">
          <span className="eyebrow eyebrow--light">Chambers</span>
          <p>
            Abantu Group Of Advocates
            <br />
            45 Leeds Road
            <br />
            Umtata, Eastern Cape
            <br />
            5099, South Africa
          </p>
        </div>

        <div className="footer__col">
          <span className="eyebrow eyebrow--light">Direct Contact</span>
          <p>
            <a href="tel:+27827687765">082 961 8609</a>
            <br />
            <a href="mailto:advgumede26@gmail.com">
              advgumede26@gmail.com
            </a>
          </p>
        </div>

        <div className="footer__col">
          <span className="eyebrow eyebrow--light">Chambers</span>

          <nav className="footer__nav">
            <Link to="/">Home</Link>
            <Link to="/services">Practice Areas</Link>
            <Link to="/contact">Contact &amp; Enquiries</Link>
          </nav>
        </div>
      </div>

      <div className="footer__base">
        <div className="container footer__base-inner">
          <p>
            &copy; {year} Adv Gumede Chambers. All rights reserved.
          </p>

          <p className="footer-engineered">
            This website is engineered by Qwabe Solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}