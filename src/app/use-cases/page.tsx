export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Use Cases</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">See how Indy Law transforms legal research across different practice areas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#151b63] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Litigation Research</h2>
            <p className="text-slate-600 mb-4">Find relevant precedents for complex cases in seconds, not hours.</p>
            <div className="text-sm text-slate-500">
              <strong>Before:</strong> 6+ hours manually searching through 100+ judgments<br />
              <strong>After:</strong> 15 seconds to find top 10 relevant Supreme Court judgments with citation networks
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFA000] to-[#FF8F00] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">M&A Due Diligence</h2>
            <p className="text-slate-600 mb-4">Check litigation history and risk across jurisdictions efficiently.</p>
            <div className="text-sm text-slate-500">
              <strong>Query:</strong> &quot;All cases involving [Company Name] in the last 10 years&quot;<br />
              <strong>Result:</strong> Comprehensive litigation timeline with risk assessment
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00897B] to-[#00695C] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Legal Drafting Assistance</h2>
            <p className="text-slate-600 mb-4">Extract ratios and build drafts based on precedent analysis.</p>
            <div className="text-sm text-slate-500">
              <strong>Workflow:</strong> Query → Review judgments → Extract ratios → Draft petition<br />
              <strong>Example:</strong> &quot;Grounds for anticipatory bail in IPC Section 420 cases&quot;
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#1A237E]/20 card-hover">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Compliance Tracking</h2>
            <p className="text-slate-600 mb-4">Monitor amendments and judicial interpretations in real-time.</p>
            <div className="text-sm text-slate-500">
              <strong>Setup:</strong> Professional account with alerts enabled<br />
              <strong>Benefits:</strong> Real-time notifications of new judgments and amendments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
