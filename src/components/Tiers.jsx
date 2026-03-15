import { useScrollReveal } from '../hooks/useScrollReveal'

const tiers = [
  {
    name: 'PolicyLens Cloud',
    tag: 'Fully hosted',
    tagColor: 'bg-teal-500/15 text-teal-400 border border-teal-500/25',
    description:
      'Managed by HavenLabs on secure cloud infrastructure. Sign up, upload your documents, and start searching. No infrastructure work required from your team.',
    highlights: [
      'Operational in under one hour',
      'Automatic updates and maintenance',
      'Shared infrastructure, strict tenant isolation',
      'Encryption at rest and in transit',
      'SOC 2-aligned data handling',
      'Suitable for commercial and non-sensitive environments',
    ],
    bestFor: 'Teams that want to move immediately without an IT project.',
    borderClass: 'border-white/8',
    headerBg: 'bg-navy-800/40',
  },
  {
    name: 'PolicyLens Private Cloud',
    tag: 'Your infrastructure',
    tagColor: 'bg-teal-400/10 text-teal-300 border border-teal-400/20',
    description:
      'Deployed into your own AWS or Azure account using a provided Terraform module. Your team controls the infrastructure. HavenLabs provides support and updates.',
    highlights: [
      'Provisioned in your AWS or Azure account',
      'Terraform module and Docker Compose deployment',
      'No data leaves your cloud boundary',
      'Full infrastructure visibility and control',
      'Compatible with your existing security tooling',
      'Suitable for regulated industries and sensitive data',
    ],
    bestFor: 'Organizations with cloud infrastructure and compliance requirements.',
    borderClass: 'border-teal-500/30',
    headerBg: 'bg-teal-500/5',
    featured: true,
  },
  {
    name: 'PolicyLens Offline',
    tag: 'Air-gapped',
    tagColor: 'bg-white/5 text-white/50 border border-white/10',
    description:
      'A fully self-contained install bundle for restricted or classified networks. No external connectivity required. Local AI inference means no data ever leaves the premises.',
    highlights: [
      'No internet connection required after install',
      'Local LLM inference — no external AI API calls',
      'Self-contained Docker image bundle with install script',
      'Runs on standard on-premise hardware',
      'Suitable for classified, air-gapped, or restricted networks',
      'IT-installable without HavenLabs involvement',
    ],
    bestFor: 'Government, defense, and organizations with strict network controls.',
    borderClass: 'border-white/8',
    headerBg: 'bg-navy-800/40',
  },
]

export default function Tiers() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="deployment"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
      aria-labelledby="tiers-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">Deployment</span>
            <div className="w-6 h-px bg-teal-500/60" aria-hidden="true" />
          </div>
          <h2
            id="tiers-heading"
            className="animate-on-scroll animate-on-scroll-delay-1 text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Runs in your environment,
            <br />
            <span className="text-white/50">not just ours</span>
          </h2>
          <p className="animate-on-scroll animate-on-scroll-delay-2 text-white/55 text-base leading-relaxed">
            Three deployment tiers, one codebase. The same PolicyLens — with the same capabilities,
            security model, and feature set — runs wherever your organization needs it.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 2} relative flex flex-col rounded-xl border ${tier.borderClass} overflow-hidden ${tier.featured ? 'ring-1 ring-teal-500/30 shadow-xl shadow-teal-500/5' : ''}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent" aria-hidden="true" />
              )}

              {/* Card header */}
              <div className={`${tier.headerBg} px-6 pt-6 pb-5 border-b border-white/6`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight">{tier.name}</h3>
                  <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${tier.tagColor}`}>
                    {tier.tag}
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{tier.description}</p>
              </div>

              {/* Card body */}
              <div className="bg-navy-900/50 px-6 py-5 flex-1">
                <ul className="space-y-3" role="list" aria-label={`${tier.name} highlights`}>
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 mt-0.5 text-teal-500"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7l3.5 3.5 5.5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-white/65">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div className="bg-navy-900/70 border-t border-white/5 px-6 py-4">
                <div className="flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-white/30" aria-hidden="true">
                    <path d="M7 2a5 5 0 100 10A5 5 0 007 2zm0 2.5v2.75l1.75 1.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <p className="text-xs text-white/40 leading-relaxed">
                    <span className="text-white/60 font-medium">Best for: </span>
                    {tier.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="animate-on-scroll mt-10 text-center text-sm text-white/35">
          All three tiers run the same codebase. Switching tiers requires only environment configuration — not a new deployment project.
        </p>
      </div>
    </section>
  )
}
