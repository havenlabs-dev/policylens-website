import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const sectionRef = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    const subject = encodeURIComponent('PolicyLens — Access Request')
    const body = encodeURIComponent(
      `Name/Organization: ${org || '(not provided)'}\n\nMessage:\n${message || '(none)'}\n\nReply to: ${email}`
    )
    window.location.href = `mailto:hello@havenlabs.io?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      {/* CTA section */}
      <section
        id="contact"
        ref={sectionRef}
        className="relative py-24 lg:py-32"
        aria-labelledby="cta-heading"
      >
        {/* Background treatment */}
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(20,184,166,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-8 right-8 section-divider" aria-hidden="true" />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">Get started</span>
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
          </div>

          <h2
            id="cta-heading"
            className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug"
          >
            Ready to make your policies searchable?
          </h2>

          <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed mb-10">
            Whether you need the managed cloud option or a fully air-gapped install, we can walk
            you through a deployment that fits your environment and security requirements.
          </p>

          {submitted ? (
            <div
              className="animate-on-scroll bg-teal-500/10 border border-teal-500/25 rounded-xl px-8 py-10"
              role="status"
              aria-live="polite"
            >
              <div className="w-12 h-12 rounded-full bg-teal-500/15 border border-teal-500/25 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10l5 5 7-8"
                    stroke="#14B8A6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg mb-2">Request sent</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Your email client should have opened with the request details. We will follow up
                directly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="animate-on-scroll animate-on-scroll-delay-3 bg-navy-800/50 border border-white/8 rounded-xl p-6 lg:p-8 text-left"
              aria-label="Request access to PolicyLens"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Email address
                    <span className="text-teal-500 ml-1" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError('') }}
                    placeholder="you@organization.gov"
                    className="w-full bg-navy-900/60 border border-white/10 hover:border-white/20 focus:border-teal-500 text-white placeholder-white/25 text-sm rounded-lg px-4 py-3 outline-none transition-colors focus:ring-1 focus:ring-teal-500/50"
                    aria-required="true"
                    aria-describedby={error ? 'email-error' : undefined}
                  />
                  {error && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Organization
                    <span className="text-white/30 text-xs font-normal ml-1">(optional)</span>
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    autoComplete="organization"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Department or company name"
                    className="w-full bg-navy-900/60 border border-white/10 hover:border-white/20 focus:border-teal-500 text-white placeholder-white/25 text-sm rounded-lg px-4 py-3 outline-none transition-colors focus:ring-1 focus:ring-teal-500/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-white/70 mb-1.5"
                  >
                    Tell us about your deployment needs
                    <span className="text-white/30 text-xs font-normal ml-1">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cloud, Private Cloud, or Offline? Rough document volume? Any compliance requirements?"
                    className="w-full bg-navy-900/60 border border-white/10 hover:border-white/20 focus:border-teal-500 text-white placeholder-white/25 text-sm rounded-lg px-4 py-3 outline-none transition-colors focus:ring-1 focus:ring-teal-500/50 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-navy-900 font-semibold text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800"
              >
                Request Access
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="mt-4 text-center text-xs text-white/30">
                This will open your email client. We respond within one business day.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Site footer */}
      <footer className="border-t border-white/5 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2h10v1.5H2V2zm0 3h7v1.5H2V5zm0 3h9v1.5H2V8zm0 3h5v1.5H2V11z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-white font-semibold text-sm">PolicyLens</span>
                <span className="text-white/25 text-sm mx-2" aria-hidden="true">·</span>
                <span className="text-white/35 text-sm">by HavenLabs</span>
              </div>
            </div>

            {/* Nav links */}
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Deployment', href: '#deployment' },
                { label: 'Security', href: '#security' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/35 hover:text-white/65 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs text-white/25 text-center sm:text-right">
              &copy; {new Date().getFullYear()} HavenLabs
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
