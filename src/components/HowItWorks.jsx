import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    label: 'Upload your documents',
    description:
      'Connect your policy PDFs and Word documents through the admin interface. PolicyLens indexes each document, preserving section headings and page numbers for citation accuracy.',
    detail: 'Supports PDF and DOCX. Documents are encrypted at rest immediately on upload.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
        <path
          d="M19 3l4 4v14a1.5 1.5 0 01-1.5 1.5H9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M14 13v7M11 17l3-4 3 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'Ask in plain language',
    description:
      'Employees type their question as they would ask a colleague. No query syntax, no boolean operators. PolicyLens understands the intent and retrieves the most relevant policy content.',
    detail: 'Natural language queries. No training required for end users.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M5 7h18v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.3"
        />
        <path
          d="M5 7l9 7 9-7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="8" r="4" fill="#14B8A6" opacity="0.85" />
        <path
          d="M18.5 8h3M20 6.5v3"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'Get cited answers',
    description:
      'PolicyLens returns a concise answer drawn directly from your documents, with a citation identifying the exact document, section, and page number. Nothing is invented.',
    detail: 'Every answer names its source. Low-confidence results are labeled as such.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
        <path
          d="M8 10h12M8 14h8M8 18h5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M17 17l5 5"
          stroke="#14B8A6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="3.5" stroke="#14B8A6" strokeWidth="1.4" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">How it works</span>
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
          </div>
          <h2
            id="how-heading"
            className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            From document to answer in three steps
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed">
            PolicyLens is designed for the people asking questions, not the engineers who built it.
            Setup is straightforward. Day-to-day use requires no training.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only, fixed with arbitrary values */}
          <div
            className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(20,184,166,0.2) 20%, rgba(20,184,166,0.2) 80%, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 2} relative flex flex-col items-center text-center lg:items-start lg:text-left`}
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-navy-800/60 border border-white/8 flex flex-col items-center justify-center gap-1.5 text-teal-400">
                    {step.icon}
                    <span className="text-xs font-bold text-teal-500/70 tracking-widest">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">{step.label}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{step.description}</p>
                <div className="inline-flex items-start gap-2 bg-teal-500/5 border border-teal-500/15 rounded-lg px-3 py-2 text-left">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" stroke="#14B8A6" strokeWidth="1.2" />
                    <path d="M6 5v3M6 3.5v.5" stroke="#14B8A6" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs text-teal-400/70">{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
