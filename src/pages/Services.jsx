import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    title: 'Criminal Law',
    text: 'Representation in the Magistrates\u2019 and High Courts, including bail applications, trial defence, and appeals. Matters are prepared with close attention to the record, the charge sheet, and the client\u2019s instructions.',
    points: ['Bail applications', 'Trial representation', 'Appeals and reviews', 'Sentencing proceedings'],
  },
  {
    title: 'Civil Litigation',
    text: 'Contested civil disputes heard on trial and motion rolls, from pleadings through to judgment, including urgent applications where circumstances require it.',
    points: ['Motion court applications', 'Trial actions', 'Urgent applications', 'Damages claims'],
  },
  {
    title: 'Commercial & Contract Disputes',
    text: 'Disputes arising out of business agreements, partnerships and commercial dealings, where a matter has moved beyond negotiation and requires formal resolution.',
    points: ['Breach of contract', 'Business partnership disputes', 'Debt recovery matters', 'Commercial agreements'],
  },
  {
    title: 'Family Law',
    text: 'Divorce and related domestic matters, handled with the discretion the subject matter demands, including disputes over maintenance and care of children.',
    points: ['Divorce proceedings', 'Maintenance applications', 'Care and contact disputes', 'Domestic violence matters'],
  },
  {
    title: 'Labour Matters',
    text: 'Disputes arising from the employment relationship, including unfair dismissal and disciplinary matters referred for formal resolution.',
    points: ['Unfair dismissal disputes', 'Disciplinary hearings', 'CCMA-related matters', 'Employment contract disputes'],
  },
  {
    title: 'Property & Contractual Matters',
    text: 'Disputes concerning immovable property, leases and agreements of sale, along with the general contractual work that surrounds them.',
    points: ['Lease disputes', 'Sale of property disputes', 'Eviction matters', 'General contractual advice'],
  },
]

export default function Services() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">Practice Areas</span>
          <h1 className="svc-hero__title">Matters we are briefed to handle.</h1>
          <p className="svc-hero__lede">
            Advocate Gumede Chambers takes instructions across a broad range of criminal, labour related and civil matters.
            Below is an overview of the areas most regularly handled — if your matter falls
            outside these, chambers can still be approached for an opinion on the appropriate
            way forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-list">
            {services.map((s, i) => (
              <article className="svc-row" key={s.title}>
                <div className="svc-row__mark">{String(i + 1).padStart(2, '0')}</div>
                <div className="svc-row__body">
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section--oxblood svc-cta">
        <div className="container svc-cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">Not sure where your matter fits?</span>
            <h2>Send chambers the details — we will advise on the way forward.</h2>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
