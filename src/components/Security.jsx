import { useScrollReveal } from '../hooks/useScrollReveal'

const properties = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 3l7 3.5v5c0 4-3 7-7 8.5C4 18.5 1 15.5 1 11.5v-5L11 3z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Encrypted at rest',
    body: 'All document content and embeddings are encrypted at the storage layer. Encryption keys are managed per tenant.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M4 11C4 7.13 7.13 4 11 4s7 3.13 7 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M4 11c0 3.87 3.13 7 7 7s7-3.13 7-7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M7 8l2 1.5L7 11M15 8l-2 1.5L15 11"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Encrypted in transit',
    body: 'All API communication uses TLS. No policy content is transmitted in cleartext at any point in the request pipeline.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
        <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    title: 'Strict tenant isolation',
    body: 'Tenant boundaries are enforced at the API layer, database, vector store, and file storage. No query can cross a tenant boundary by design — not by configuration.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 3C6.58 3 3 6.58 3 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.3"
        />
        <path
          d="M8 11h6M8 8h6M8 14h4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path d="M16 16l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
        <line x1="16" y1="16" x2="16" y2="16" strokeWidth="2" />
      </svg>
    ),
    title: 'Data never used for training',
    body: 'PolicyLens does not retain, aggregate, or use your document content or query data for model training. Your policies remain private.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
        <path
          d="M11 7v4.5l3 2.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: 'Full audit trail',
    body: 'Every user action, document event, and administrative change is logged with timestamp and actor identity. Audit logs are immutable and exportable.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
        <path d="M7 11h8M11 8v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
        <path d="M3 9h2M17 9h2M3 13h2M17 13h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
        <circle cx="11" cy="5" r="2.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10.2 4.5l.8.8.8-.8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Optional local LLM',
    body: 'For air-gapped deployments, PolicyLens uses a local Ollama instance for inference. No data is sent to external AI APIs. Inference happens entirely on your hardware.',
  },
]

export default function Security() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="security"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-navy-950"
      aria-labelledby="security-heading"
    >
      <div className="absolute top-0 left-8 right-8 section-divider" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
              <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">Security</span>
            </div>
            <h2
              id="security-heading"
              className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug"
            >
              Security is a first-class
              <br />
              <span className="text-white/50">requirement, not an afterthought</span>
            </h2>
            <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed mb-6">
              PolicyLens was designed from the ground up for environments where security is not
              negotiable. The architecture enforces isolation, auditability, and data control at
              every layer — not as optional add-ons, but as structural properties.
            </p>
            <p className="animate-on-scroll animate-on-scroll-delay-3 text-white/45 text-sm leading-relaxed">
              Government clients, healthcare organizations, and financial institutions have specific
              requirements around data residency and connectivity. PolicyLens Private Cloud and
              Offline tiers are designed to satisfy those requirements without custom builds or
              contractual exceptions.
            </p>

            {/* Auth extensibility note */}
            <div className="animate-on-scroll animate-on-scroll-delay-4 mt-8 bg-white/3 border border-white/8 rounded-xl p-5">
              <h3 className="text-white font-semibold text-sm mb-2">Identity and access</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                PolicyLens uses JWT-based authentication with role-based access control. The auth
                layer is architected to support SAML and OIDC integration without a rewrite — a
                requirement for enterprise and government single sign-on environments.
              </p>
            </div>
          </div>

          {/* Right: property grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {properties.map((prop, i) => (
              <div
                key={prop.title}
                className={`animate-on-scroll animate-on-scroll-delay-${(i % 3) + 2} bg-navy-800/35 border border-white/6 rounded-xl p-4 hover:border-white/12 transition-colors group`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-white/40 group-hover:text-teal-400 transition-colors mb-3">
                  {prop.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{prop.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
