import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 4h14v1.5H4V4zm0 3.5h9v1.5H4V7.5zm0 3.5h12v1.5H4V11zm0 3.5h7v1.5H4V14.5z"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="17" cy="17" r="4" fill="currentColor" opacity="0.15" />
        <path
          d="M15.5 17h3M17 15.5v3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    heading: 'Policies are not searchable',
    body: 'Most organizations store policy documents as static PDFs in shared drives. Keyword search returns noise. Employees give up or guess.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <path
          d="M11 7v4.5l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    heading: 'Answers take too long to find',
    body: 'A question that should take thirty seconds takes twenty minutes — if the employee finds the right document at all. That overhead compounds across an organization.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 3l8 4.5v7L11 19l-8-4.5v-7L11 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.35"
        />
        <path
          d="M11 8v4M11 13.5v.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    heading: 'Compliance risk from misunderstanding',
    body: 'When employees cannot find authoritative answers, they improvise. Misunderstood policies create compliance exposure — and that exposure is rarely caught until it matters.',
  },
]

export default function Problem() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-950"
      aria-labelledby="problem-heading"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-8 right-8 section-divider" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">The problem</span>
          </div>
          <h2
            id="problem-heading"
            className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white leading-snug mb-4"
          >
            Policy documents exist.
            <br />
            <span className="text-white/50">Finding the right answer in them does not.</span>
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed">
            The problem is not that organizations lack documentation. It is that documentation
            written for filing is not built for answering questions under time pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={item.heading}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 2} group bg-navy-800/40 border border-white/6 rounded-xl p-6 hover:border-white/12 transition-colors`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/50 mb-4 group-hover:text-teal-400/70 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{item.heading}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
