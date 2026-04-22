import TeamCard from "@/components/sections/TeamCard";

export default function AboutPage() {
  const founders = [
    {
      name: "Ankur Vazirani",
      title: "Co-Founder & CEO",
      bio: "Ankur Vazirani is a technical co-founder with 6+ years of experience across platform engineering, backend systems, and cloud architecture. He has architected and built IndyLaw’s platform end-to-end, leading the design of its AI-driven legal research systems, infrastructure, and scalable retrieval architecture. He holds a Master of Computing (AI) from Australian National University and has previously led large-scale distributed systems, infrastructure migrations, and observability platforms in high-growth environments. His expertise lies in building reliable, scalable systems that enable fast, accurate, and efficient access to complex data.",
      expertise: ["AI/ML", "Legal Tech", "Product Strategy"],
      linkedInUrl: "https://www.linkedin.com/in/ankurvazirani/", // TODO: Update with actual LinkedIn URL
      avatarPlaceholder: "AV",
      imageUrl: "/team/AV.jpeg",
    },
    {
      name: "Adv. Devika Madekar",
      title: "Co-Founder & Head of Legal",
      bio: "An Advocate practicing before the Bombay High Court with 8+ years of experience in civil and commercial litigation. She has argued multiple matters before the Bombay High Court and has been actively involved in assisting on a substantial body of work comprising more than 30–40 reported and unreported judgments, reflecting consistent exposure to complex litigation and judicial processes. Her work is deeply rooted in legal research and strategic case preparation. Through her experience, she identified critical inefficiencies in traditional legal research, leading her to co-found IndyLaw—an AI-powered platform designed to help legal professionals quickly identify relevant precedents, extract key insights, and build stronger legal arguments. She believes AI should augment legal practice, enabling advocates to focus on strategy, advocacy, and client outcomes.",
      expertise: ["Legal Research", "Litigation", "Case Strategy"],
      linkedInUrl: "https://www.linkedin.com/in/devika-madekar-670125169/", // TODO: Update with actual LinkedIn URL
      avatarPlaceholder: "DM",
      imageUrl: "/team/DM.jpeg",
    },
    // {
    //   name: "TODO: Founder Name 3",
    //   title: "Co-Founder & COO",
    //   bio: "Operations expert building sustainable growth in legal tech.",
    //   expertise: ["Operations", "Finance", "Partnerships"],
    //   linkedInUrl: "https://linkedin.com/in/founder3", // TODO: Update with actual LinkedIn URL
    //   avatarPlaceholder: "F3",
    // },
  ];

  const teamMembers = [
    {
      name: "Arpika Agarwal",
      title: "CFO",
      expertise: ["Finance", "Strategy", "Operations"],
      imageUrl: "/team/AA.jpeg",
    },
    {
      name: "Ankit Nandu",
      title: "Software Developer",
      expertise: ["Backend", "Infrastructure"],
      imageUrl: "/team/AN.png",
    },
    // {
    //   name: "Veer Shah",
    //   title: "Software Developer",
    //   expertise: ["Software Developer"],
    //   imageUrl: "/team/VS.png",
    // },
    // {
    //   name: "TODO: Team Member 3",
    //   title: "Product Manager",
    //   expertise: ["Product", "UX", "Legal Domain"],
    // },
    // {
    //   name: "TODO: Team Member 4",
    //   title: "Legal Consultant",
    //   expertise: ["Indian Law", "Case Analysis"],
    // },
    // {
    //   name: "TODO: Team Member 5",
    //   title: "Full Stack Developer",
    //   expertise: ["Frontend", "API", "Integrations"],
    // },
    // {
    //   name: "TODO: Team Member 6",
    //   title: "Security Engineer",
    //   expertise: ["Security", "Compliance", "Encryption"],
    // },
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
