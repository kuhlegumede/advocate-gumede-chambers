import { Link } from 'react-router-dom'
import podium from '../assets/adv-gumede-podium.jpg'
import portrait from '../assets/adv-gumede-portrait.jpg'
import './Home.css'
import SEO from '../components/SEO.jsx'

const stats = [
  { value: '2018', label: 'Admitted as an Advocate' },
  { value: 'WSU', label: 'Walter Sisulu University, Mthatha' },
  { value: 'HC', label: 'Right of Appearance, High Court' },
]

const practiceAreas = [
  {
    title: 'Criminal Law',
    text: 'Defence and prosecution-side representation across the Magistrates\u2019 and High Courts, from bail applications to trial.',
  },
  {
    title: 'Civil Litigation',
    text: 'Contested civil matters, damages claims, contractual disputes and applications heard on the High Court motion roll.',
  },
  {
    title: 'Commercial & Contract',
    text: 'Disputes arising from agreements, business partnerships and commercial arrangements.',
  },
  {
    title: 'Family Law',
    text: 'Divorce, maintenance, custody and related domestic matters handled with discretion.',
  },
]

export default function Home() {
  return (
    <>
    <SEO
       title="Advocate of the High Court"
       description="Advocate M.N Gumede is an Advocate of the High Court of South Africa based in Mthatha(Umtata), Eastern Cape, providing professional legal advocacy in criminal, civil and commercial litigation matters."
       path="/"
    />
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">Advocate Gumede Chambers &middot; Mthatha, Eastern Cape</span>
            <h1 className="hero__title">
              Advocacy built on
              <br />
              preparation, and <em>presence</em>.
            </h1>
            <p className="hero__lede">
               Nhlanhla Gumede is an Advocate of the High Court of South Africa, based in Mthatha (Umtata), Eastern Cape. Adv Gumede Chambers accepts instructions in criminal, civil, labour, commercial and related legal matters.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Consultation
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Practice Areas
              </Link>
            </div>
          </div>

          <div className="hero__figure">
            <div className="hero__frame">
              <img src={podium} alt="Advocate Nhlanhla Gumede addressing the court from the podium, in silk and jabot" />
            </div>
            <svg className="hero__scales" viewBox="0 0 120 120" aria-hidden="true">
              <line x1="60" y1="14" x2="60" y2="96" stroke="var(--brass-light)" strokeWidth="1" />
              <line x1="22" y1="30" x2="98" y2="30" stroke="var(--brass-light)" strokeWidth="1" />
              <path d="M22 30 L10 58 A16 16 0 0 0 34 58 Z" fill="none" stroke="var(--brass-light)" strokeWidth="1" />
              <path d="M98 30 L86 58 A16 16 0 0 0 110 58 Z" fill="none" stroke="var(--brass-light)" strokeWidth="1" />
              <circle cx="60" cy="14" r="3" fill="var(--brass-light)" />
              <rect x="46" y="96" width="28" height="6" fill="var(--brass-light)" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---------- Stats / credential strip ---------- */}
      <section className="credstrip">
        <div className="container credstrip__grid">
          {stats.map((s) => (
            <div className="credstrip__item" key={s.label}>
              <span className="credstrip__value">{s.value}</span>
              <span className="credstrip__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Practice areas preview ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="plate-mark eyebrow">What We Handle</div>
            <h2 className="section-head__title">Legal advocacy in criminal, civil, labour and commercial matters.</h2>
          </div>

          <div className="areas-grid">
            {practiceAreas.map((a) => (
              <div className="area-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>

          <div className="areas-more">
            <Link to="/services" className="btn btn-dark">
              See All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- About / portrait ---------- */}
      <section className="section section--dim about">
        <div className="container about__grid">
          <div className="about__frame">
            <img src={portrait} alt="Portrait of Advocate Nhlanhla Gumede in chambers robes" />
          </div>
          <div className="about__copy">
            <div className="plate-mark eyebrow">About Advocate Gumede</div>
            <h2>Grounded in the Eastern Cape, briefed across its courts.</h2>
            <p>
              Advocate Gumede Chambers, located at 45 Leeds Road, Mthatha,Eastern Cape and  accepts
              instructions in criminal, civil, labour, commercial, family and
              property-related matters. Advocate Gumede Chambers can be approached by instructing
              attorneys and, where appropriate, members of the public seeking
              professional legal representation.
            </p>
            <p>
              Every matter is approached with the same discipline: thorough preparation of the
              facts, careful reading of the law, and direct, honest communication with the
              instructing attorney and client throughout.
            </p>
            <Link to="/contact" className="about__link">
              Get in touch with chambers &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="section--oxblood cta">
        <div className="container cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">Enquiries Welcome</span>
            <h2 className="cta__title">Discuss your matter with Counsel.</h2>
          </div>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary">
              Enquire Now
            </Link>
            <a href="tel:+27829618609" className="btn btn-outline">
              Call 082 961 8609
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
