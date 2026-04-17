import TeamCard from "@/components/sections/TeamCard";

export default function AboutPage() {
  const founders = [
    {
      name: "TODO: Founder Name 1",
      title: "Co-Founder & CEO",
      bio: "Legal technology visionary with 10+ years of experience in law and AI.",
      expertise: ["AI/ML", "Legal Tech", "Product Strategy"],
      linkedInUrl: "https://linkedin.com/in/founder1", // TODO: Update with actual LinkedIn URL
      avatarPlaceholder: "F1",
    },
    {
      name: "TODO: Founder Name 2",
      title: "Co-Founder & CTO",
      bio: "Machine learning engineer focused on NLP for legal applications.",
      expertise: ["NLP", "Search", "Architecture"],
      linkedInUrl: "https://linkedin.com/in/founder2", // TODO: Update with actual LinkedIn URL
      avatarPlaceholder: "F2",
    },
    {
      name: "TODO: Founder Name 3",
      title: "Co-Founder & COO",
      bio: "Operations expert building sustainable growth in legal tech.",
      expertise: ["Operations", "Finance", "Partnerships"],
      linkedInUrl: "https://linkedin.com/in/founder3", // TODO: Update with actual LinkedIn URL
      avatarPlaceholder: "F3",
    },
  ];

  const teamMembers = [
    {
      name: "TODO: Team Member 1",
      title: "Lead Engineer",
      expertise: ["Backend", "Infrastructure"],
    },
    {
      name: "TODO: Team Member 2",
      title: "ML Researcher",
      expertise: ["Graph ML", "Search", "Optimization"],
    },
    {
      name: "TODO: Team Member 3",
      title: "Product Manager",
      expertise: ["Product", "UX", "Legal Domain"],
    },
    {
      name: "TODO: Team Member 4",
      title: "Legal Consultant",
      expertise: ["Indian Law", "Case Analysis"],
    },
    {
      name: "TODO: Team Member 5",
      title: "Full Stack Developer",
      expertise: ["Frontend", "API", "Integrations"],
    },
    {
      name: "TODO: Team Member 6",
      title: "Security Engineer",
      expertise: ["Security", "Compliance", "Encryption"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Indy Law</h1>
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

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Our Founders</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {founders.map((founder) => (
                <TeamCard
                  key={founder.name}
                  {...founder}
                  isFeatured={true}
                />
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.name}
                  {...member}
                  bio={undefined}
                />
              ))}
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
