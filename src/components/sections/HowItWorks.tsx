export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Enter Your Legal Question',
      description: 'Ask Indy Law anything about Indian law, case law, or legal procedures. Use natural language—no special syntax required.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'AI Processes Your Query',
      description: 'Our hybrid search engine combines semantic understanding, lexical matching, and graph-based reasoning to find the most relevant results.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Get Actionable Insights',
      description: 'Receive comprehensive results with cited precedents, case relationships, and contextual analysis to strengthen your legal arguments.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Indy Law Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to transform your legal research workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-r from-[#1A237E] to-[#1A237E]/30 -z-10" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A237E] to-[#151b63] flex items-center justify-center mb-6 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1A237E] to-[#151b63] opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                  <span className="relative text-white text-2xl font-bold">{step.icon}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
