import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const matterTypes = [
  'Criminal Law',
  'Civil Litigation',
  'Commercial & Contract',
  'Family Law',
  'Labour Matters',
  'Property Matters',
  'Other',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  matterType: matterTypes[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => {
    setForm((currentForm) => ({
      ...currentForm,
      [key]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSending(true)
    setSent(false)
    setError('')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Helpful production debugging
      console.log('EmailJS configuration:', {
        serviceId,
        templateId,
        publicKeyPresent: Boolean(publicKey),
      })

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Email service configuration is missing. Please contact the administrator.'
        )
      }

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        matter_type: form.matterType,
        message: form.message,
      }

      console.log('Sending enquiry:', templateParams)

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('EmailJS success:', response)

      setSent(true)
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      console.error('EmailJS status:', err?.status)
      console.error('EmailJS text:', err?.text)
      console.error('EmailJS message:', err?.message)

      setError(
        err?.text ||
          err?.message ||
          'We were unable to send your enquiry. Please try again or contact us directly by email.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section className="ct-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">
            Contact &amp; Enquiries
          </span>

          <h1 className="ct-hero__title">
            Get in touch with Councel.
          </h1>

          <p className="ct-hero__lede">
            Whether you are an instructing attorney or approaching chambers
            directly, send through the details of your matter and it will
            receive a prompt response.
          </p>
        </div>
      </section>

      <section className="section ct-body">
        <div className="container ct-grid">

          {/* Contact Information */}
          <aside className="ct-info">
            <div className="ct-info__plate">
              <span className="plate-mark eyebrow">Chambers</span>

              <h3>Advocate Gumede Chambers</h3>

              <p className="ct-info__addr">
                Abantu Group Of Advocates
                <br />
                45 Leeds Road
                <br />
                Umtata, Eastern Cape
                <br />
                5099, South Africa
              </p>
            </div>

            <dl className="ct-info__list">
              <div>
                <dt>Advocate</dt>
                <dd>
                  <a href="mailto:advgumede26@gmail.com">
                    advgumede26@gmail.com
                  </a>
                </dd>
              </div>

              <div>
                <dt>Cell</dt>
                <dd>
                  <a href="tel:+27829618609">
                    082 961 8609
                  </a>
                </dd>
              </div>

              <div>
                <dt>Reception</dt>
                <dd>
                  <a href="mailto:abantugroupofadvocatesuta@gmail.com">
                    abantugroupofadvocatesuta@gmail.com
                  </a>
                </dd>
              </div>

              <div>
                <dt>Consulting Hours</dt>
                <dd>
                  Monday – Friday, 08:00 – 16:30
                </dd>
              </div>
            </dl>

            <div className="ct-info__map">
              <iframe
                title="Gumede Chambers location — 45 Leeds Street, Umtata"
                src="https://www.google.com/maps?q=45+Leeds+Street,+Mthatha,+5099,+South+Africa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>

          {/* Contact Form */}
          <div className="ct-form-wrap">
            <span className="plate-mark eyebrow">
              Send an Enquiry
            </span>

            <h2>Tell us about your matter</h2>

            {sent && (
              <p
                className="ct-form__success"
                role="status"
              >
                Your enquiry has been sent successfully. We will get back to
                you as soon as possible.
              </p>
            )}

            {error && (
              <p
                className="ct-form__error"
                role="alert"
              >
                {error}{' '}
                <a href="mailto:advgumede26@gmail.com">
                  Email us directly
                </a>.
              </p>
            )}

            <form
              className="ct-form"
              onSubmit={handleSubmit}
            >
              <div className="ct-form__row">
                <label>
                  Full name

                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    disabled={sending}
                  />
                </label>

                <label>
                  Email address

                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    disabled={sending}
                  />
                </label>
              </div>

              <div className="ct-form__row">
                <label>
                  Phone number

                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="082 000 0000"
                    disabled={sending}
                  />
                </label>

                <label>
                  Matter type

                  <select
                    value={form.matterType}
                    onChange={update('matterType')}
                    disabled={sending}
                  >
                    {matterTypes.map((matter) => (
                      <option
                        key={matter}
                        value={matter}
                      >
                        {matter}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Tell us about your matter

                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Please provide a brief summary of your matter, including any relevant dates or case reference numbers."
                  disabled={sending}
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary ct-form__submit"
                disabled={sending}
              >
                {sending ? 'Sending Enquiry...' : 'Send Enquiry'}
              </button>

              <p className="ct-form__note">
                Your enquiry will be sent directly to Advocate Gumede Chambers.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
