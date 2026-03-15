import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13.5 13.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 9h5M9 6.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    title: 'Semantic search',
    description:
      'Retrieves relevant policy content based on meaning, not keyword matching. Synonyms, paraphrases, and related concepts return the right results.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 4h14v1.2H3V4zm0 3h9v1.2H3V7zm0 3h11v1.2H3V10zm0 3h6v1.2H3V13z" fill="currentColor" opacity="0.35" />
        <path d="M14 12l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
    title: 'Source citations',
    description:
      'Every answer names the document, section, and page it was drawn from. Employees can verify the source themselves. No black-box answers.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l6 3v5c0 3.5-2.5 6.5-6 7.5C4.5 16.5 2 13.5 2 10V5l6-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Multi-tenant isolation',
    description:
      "Each organization's documents and data are fully isolated at the database, vector store, and storage layer. No cross-tenant access is possible by design.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14.5 4.5l1 1-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: 'Role-based access control',
    description:
      'Admins manage users, documents, and permissions. End users see only the search interface. Access is enforced at the API layer on every request.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
        <path d="M6 7h8M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="16" cy="4" r="2.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    title: 'Audit logs',
    description:
      'Every query, document upload, and administrative action is recorded with timestamp and user identity. Supports compliance reporting and access reviews.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h5v12H4zM11 4h5v5h-5zM11 12h5v4h-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" opacity="0.35" />
        <circle cx="15.5" cy="4.5" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    title: 'Three deployment tiers',
    description:
      'PolicyLens Cloud, Private Cloud, and fully Offline deployments share a single codebase. Switch between tiers by changing environment configuration — not application code.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 3h7l4 4v10H5V3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.35" />
        <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" opacity="0.35" />
        <path d="M7 10h6M7 12.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M4 7h3v3H4z" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: 'PDF and DOCX support',
    description:
      'Upload PDFs and Word documents directly. PolicyLens extracts text, preserves structure, and indexes content ready for retrieval without manual formatting.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l1.5 5h5l-4 3 1.5 5-4-3-4 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" opacity="0.35" />
        <path d="M5 14l-2 3M15 14l2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: 'No hallucinated policy language',
    description:
      'Answers are grounded strictly in retrieved document content. PolicyLens will not invent policy that does not exist in your documents. Low-confidence queries are labeled plainly.',
  },
]

export default function Features() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-950"
      aria-labelledby="features-heading"
    >
      <div className="absolute top-0 left-8 right-8 section-divider" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">Features</span>
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
          </div>
          <h2
            id="features-heading"
            className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Built for clarity, security, and operational trust
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed">
            PolicyLens is a focused tool. Every capability serves one goal: giving employees and
            administrators accurate, traceable answers about policy.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 2} bg-navy-800/30 border border-white/6 rounded-xl p-5 hover:border-white/12 hover:bg-navy-800/50 transition-all group`}
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/45 group-hover:text-teal-400 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{feature.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
