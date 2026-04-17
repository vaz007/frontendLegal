export default function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'Google for Startups',
      description: 'Under Review for Google for Startups verification',
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'ISO 27001 Certified Infrastructure & AES-256 Encryption',
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'Legal AI Certified',
      description: 'Verified Legal AI Platform with Compliance Standards',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trust and Verification
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Enterprise-grade security and compliance certifications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A237E] to-[#151b63] flex items-center justify-center mb-6 text-[#00897B]">
                {badge.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {badge.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1A237E]/5 to-[#00897B]/5 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-2">
                99.9%
              </div>
              <p className="text-slate-600">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-2">
                &lt;100ms
              </div>
              <p className="text-slate-600">Response Time</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-2">
                256-bit
              </div>
              <p className="text-slate-600">AES Encryption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
