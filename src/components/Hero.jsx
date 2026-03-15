import { useEffect, useRef } from 'react'

// Animated document illustration — SVG-based, no image files
function DocumentIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none" aria-hidden="true">
      {/* Background glow */}
      <div className="absolute inset-0 bg-teal-500/5 rounded-2xl blur-3xl scale-110" />

      {/* Main card */}
      <div className="relative bg-navy-800/80 border border-white/8 rounded-xl p-6 shadow-2xl">
        {/* Document header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-teal-500/15 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h7l3 3v9H3V2z" stroke="#14B8A6" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M10 2v3h3" stroke="#14B8A6" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M5 7h6M5 9.5h6M5 12h4" stroke="#14B8A6" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-medium text-white/80">Employee Handbook v3.2</div>
            <div className="text-xs text-white/35 mt-0.5">Section 4 — Remote Work Policy</div>
          </div>
        </div>

        {/* Query chip */}
        <div className="bg-navy-700/60 border border-teal-500/20 rounded-lg px-4 py-2.5 mb-4">
          <div className="text-xs text-white/40 mb-1">Query</div>
          <div className="text-sm text-white/90">What is the policy on remote work equipment reimbursement?</div>
        </div>

        {/* Answer */}
        <div className="bg-teal-500/5 border border-teal-500/15 rounded-lg px-4 py-3 mb-3">
          <div className="text-xs text-teal-400 font-medium mb-1.5">Answer</div>
          <div className="text-sm text-white/80 leading-relaxed">
            Employees working remotely are eligible for up to $500 per year in equipment reimbursement, approved through their department manager.
          </div>
        </div>

        {/* Citation */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-full min-h-8 bg-teal-500/40 rounded-full flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-xs text-white/35">Source citation</div>
            <div className="text-xs text-teal-400/80 mt-0.5">Employee Handbook v3.2 — Section 4.3, Page 18</div>
          </div>
        </div>
      </div>

      {/* Floating confidence badge — pulses to draw the eye */}
      <div className="badge-pulse absolute -top-3 -right-3 bg-navy-700 border border-teal-500/30 rounded-full px-3 py-1 text-xs text-teal-400 font-medium shadow-lg">
        High confidence
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    // Stagger reveal on mount
    const elements = ref.current?.querySelectorAll('.hero-reveal')
    elements?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`
      el.classList.add('animate-fade-in-up')
    })
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <div className="hero-reveal opacity-0 inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-3.5 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" aria-hidden="true" />
              <span className="text-xs font-medium text-teal-400 tracking-wide uppercase">
                Secure AI document assistant
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="hero-reveal opacity-0 text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              See policy{' '}
              <span className="text-teal-400">clearly.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal opacity-0 text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Ask plain-language questions about your internal policies and compliance documents.
              Get direct answers with verifiable source citations — deployed securely in your
              environment.
            </p>

            {/* CTAs */}
            <div className="hero-reveal opacity-0 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-navy-900 font-semibold text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                Request Access
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Trust signals */}
            <div className="hero-reveal opacity-0 flex flex-wrap items-center gap-x-6 gap-y-2 mt-10">
              {[
                'Encrypted at rest and in transit',
                'Source-cited answers',
                'Air-gapped deployment available',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 7l3.5 3.5 5.5-6"
                      stroke="#14B8A6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-xs text-white/45">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration — desktop only */}
          <div className="hidden lg:block hero-reveal opacity-0">
            <DocumentIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
