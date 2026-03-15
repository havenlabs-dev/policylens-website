import { useScrollReveal } from '../hooks/useScrollReveal'

const industries = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 16V7l7-5 7 5v9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="6" y="10" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    label: 'Government & Defense',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5v8M5 9h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    label: 'Healthcare',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 5.5v1M9 11.5v1M6.5 7.5C6.5 6.5 7.5 6 9 6s2.5.8 2.5 2c0 1.5-2.5 1.8-2.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: 'Financial Services',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 2h10v14H4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6.5 6.5h5M6.5 9h5M6.5 11.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Legal & Compliance',
  },
]

export default function IndustriesBand() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="relative py-10 border-y border-white/5 bg-navy-950/70"
      aria-label="Industries served"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="animate-on-scroll text-xs font-medium text-white/25 uppercase tracking-widest whitespace-nowrap flex-shrink-0">
            Built for regulated industries
          </p>
          <div className="hidden md:block w-px h-5 bg-white/10 flex-shrink-0" aria-hidden="true" />
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-10 gap-y-4">
            {industries.map((industry, i) => (
              <div
                key={industry.label}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} flex items-center gap-2.5 text-white/35 hover:text-white/55 transition-colors duration-200`}
              >
                {industry.icon}
                <span className="text-sm font-medium">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
