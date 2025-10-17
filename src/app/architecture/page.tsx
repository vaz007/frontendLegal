import Image from "next/image";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">System Architecture</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Built on AWS with enterprise-grade scalability and security. Explore the high-level system architecture.</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <Image src="/diagrams/architecture-diagram.svg" alt="System Architecture Diagram" width={1200} height={700} className="w-full h-auto rounded-lg" />
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Frontend Layer</h3>
              <p className="text-slate-600 text-sm">React/Next.js web application with real-time query streaming and graph visualization.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Search Infrastructure</h3>
              <p className="text-slate-600 text-sm">Qdrant vector DB, Meilisearch lexical search, and Graph-R1 Neo4j reasoning engine.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">AWS Services</h3>
              <p className="text-slate-600 text-sm">ECS, EC2, S3, RDS PostgreSQL, CloudFront CDN, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
