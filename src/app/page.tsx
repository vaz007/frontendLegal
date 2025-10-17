import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Legal Research with{" "}
              <span className="gradient-text">AI-Powered Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Access decades of Indian legal precedents, statutes, and judgments with unprecedented accuracy—powered by hybrid search and graph-based reasoning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Request Demo
              </Link>
              <Link href="/architecture" className="btn-secondary text-lg px-8 py-4">
                View Architecture
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1A237E]">2M+</div>
                <div className="text-sm text-slate-600">Judgments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1A237E]">5K+</div>
                <div className="text-sm text-slate-600">Statutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1A237E]">95%</div>
                <div className="text-sm text-slate-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1A237E]">15s</div>
                <div className="text-sm text-slate-600">Avg Query</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose theParalegalAssist</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Three powerful technologies working together to deliver the most accurate legal research results.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#151b63] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Hybrid Search Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">Semantic, lexical, and graph-based reasoning combined to deliver precise results that understand legal concepts, not just keywords.</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFA000] to-[#FF8F00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enterprise Privacy</h3>
              <p className="text-slate-600 leading-relaxed">Isolated databases, AES-256 encryption, and strict access controls ensure your sensitive legal research remains confidential.</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00897B] to-[#00695C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Citation Networks</h3>
              <p className="text-slate-600 leading-relaxed">Visualize case relationships and precedent chains to understand how legal principles evolve over time.</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Filtering</h3>
              <p className="text-slate-600 leading-relaxed">Find the right case faster with hard filters (court, date, judge) and soft filters (relevance, citation count).</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-LLM Fallback</h3>
              <p className="text-slate-600 leading-relaxed">Intelligent routing between Groq, DeepSeek, and InLegalBERT for optimal speed, accuracy, and cost control.</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Conversational State</h3>
              <p className="text-slate-600 leading-relaxed">Context-aware multi-turn interactions with memory, allowing you to refine queries and build on previous results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#1A237E] to-[#151b63]">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Legal Research?</h2>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Join 50+ law firms already using theParalegalAssist to research faster, argue smarter, and never miss a critical precedent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1A237E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                Request Demo
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
