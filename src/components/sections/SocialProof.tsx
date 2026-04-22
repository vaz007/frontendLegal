'use client';

export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      quote: 'IndyLaw has fundamentally changed how we approach legal research. What used to take hours of manual effort is now done in minutes—with better accuracy.',
      author: 'Adv. Krushna Wankhade',
      title: 'Krushna Wankhade',
      // TODO: Add avatar image path if available
    },
    {
      id: 2,
      quote: 'The depth and precision of results are outstanding. We\'ve uncovered critical precedents that would have been nearly impossible to find manually.',
      author: 'Adv. Eesha Karnik',
      title: 'Karnik & Co',
      // TODO: Add avatar image path if available
    },
    {
      id: 3,
      quote: 'A rare combination of enterprise-grade security and an intuitive interface. It integrates seamlessly into our daily workflow.',
      author: 'Adv. Darpan Bhatia',
      title: 'Bhatia & Associates',
      // TODO: Add avatar image path if available
    },
  ];

  const logos = [
    { name: 'Law Firm A', placeholder: 'LF A' },
    { name: 'Law Firm B', placeholder: 'LF B' },
    { name: 'Law Firm C', placeholder: 'LF C' },
    { name: 'Law Firm D', placeholder: 'LF D' },
    { name: 'Law Firm E', placeholder: 'LF E' },
    { name: 'Law Firm F', placeholder: 'LF F' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Trusted By Section */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Law Firms
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              50+ law firms and legal organizations trust Indy Law for their research
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-24 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg border border-slate-200 hover:border-[#1A237E]/30 transition-colors"
              >
                <div className="text-center">
                  <div className="text-sm font-medium text-slate-500">{logo.placeholder}</div>
                  <div className="text-xs text-slate-400 mt-1">{logo.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              What Our Users Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:border-[#1A237E]/20 transition-colors"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
