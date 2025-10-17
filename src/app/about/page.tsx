export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About theParalegalAssist</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">We&apos;re focused on democratizing access to Indian legal knowledge through cutting-edge AI and a modern research experience.</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="p-8 rounded-2xl border border-slate-200 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              We&apos;re focused on democratizing access to Indian legal knowledge through cutting-edge AI and a modern research experience. 
              Our platform transforms how legal professionals discover, analyze, and apply case law, making comprehensive legal research 
              accessible to practitioners across India.
            </p>
          </section>

          <section className="p-8 rounded-2xl border border-slate-200 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">The Problem We Solve</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Traditional legal research is time-consuming, expensive, and often incomplete. Lawyers spend hours manually searching 
              through thousands of judgments, risking missed precedents and outdated information. Our AI-powered platform changes this 
              by providing instant, comprehensive, and contextually relevant legal insights.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">What We Deliver</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reduce research time from hours to minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Access 2M+ judgments and 5,000+ statutes instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Discover hidden case relationships through graph reasoning
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stay updated with real-time legal developments
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">Our Technology</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <strong>Semantic Search:</strong> Understands legal concepts, not just keywords
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <strong>Lexical Search:</strong> Lightning-fast text matching with advanced filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <strong>Graph Reasoning:</strong> Discovers case relationships and precedent chains
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-8 rounded-2xl border border-slate-200 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Team</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our diverse team combines deep legal expertise with cutting-edge technology:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1A237E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Legal professionals with decades of Indian law experience
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1A237E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI researchers specializing in natural language processing
                </li>
              </ul>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1A237E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Technology advisors from leading tech companies
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#1A237E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Data scientists focused on legal corpus analysis
                </li>
              </ul>
            </div>
          </section>

          <section className="p-8 rounded-2xl border border-slate-200 bg-white">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-slate-700 leading-relaxed">
              We&apos;re committed to maintaining the highest standards of accuracy, privacy, and security. Our platform is designed 
              with enterprise-grade security features, ensuring that sensitive legal research remains confidential while providing 
              powerful tools for legal professionals to serve their clients better.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
