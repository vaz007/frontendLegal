'use client';

export default function DemoVideo() {
  // TODO: Replace with your actual YouTube video ID
  const youtubeVideoId = 'dQw4w9WgXcQ';

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See Indy Law in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch a quick demonstration of how our AI-powered legal research platform works
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`}
              title="Indy Law Demo"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            {/* TODO: Update with actual video description */}
            Discover how to leverage AI for comprehensive legal research in minutes
          </p>
        </div>
      </div>
    </section>
  );
}
