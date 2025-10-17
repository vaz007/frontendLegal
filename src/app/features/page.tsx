export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Powerful Features</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Three search engines, one perfect answer. Enterprise privacy. Graph reasoning. Advanced filtering. Conversational context.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#151b63] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Parallel Search Trio</h3>
            <p className="text-slate-600 leading-relaxed">Qdrant vector search, Meilisearch lexical matching, and Graph-R1 hypergraph reasoning work together for comprehensive results.</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFA000] to-[#FF8F00] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Enterprise Multi-Tenancy</h3>
            <p className="text-slate-600 leading-relaxed">Isolated databases for law firms with complete data separation, encrypted storage, and zero-knowledge architecture.</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00897B] to-[#00695C] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">BGE Reranking</h3>
            <p className="text-slate-600 leading-relaxed">Precision through cross-encoder scoring that improves answer relevance by 40% through intelligent result reranking.</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Multi-LLM Fallback</h3>
            <p className="text-slate-600 leading-relaxed">Intelligent routing between Groq, DeepSeek, and InLegalBERT for optimal speed, accuracy, and cost control.</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Filtering</h3>
            <p className="text-slate-600 leading-relaxed">Surgical precision with hard filters (court, date, judge) and soft filters (relevance, citation count) for targeted results.</p>
          </div>
          
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#047857] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Conversational State</h3>
            <p className="text-slate-600 leading-relaxed">Context-aware multi-turn interactions with memory, allowing you to refine queries and build on previous results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
