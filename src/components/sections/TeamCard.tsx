interface TeamCardProps {
  name: string;
  title: string;
  bio?: string;
  expertise: string[];
  linkedInUrl?: string;
  avatarPlaceholder?: string;
  isFeatured?: boolean;
}

export default function TeamCard({
  name,
  title,
  bio,
  expertise,
  linkedInUrl,
  avatarPlaceholder,
  isFeatured = false,
}: TeamCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:border-[#1A237E]/20 hover:shadow-lg transition-all ${
        isFeatured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Avatar Section */}
      <div className="h-48 md:h-56 bg-gradient-to-br from-[#1A237E] to-[#00897B] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border-4 border-white/30">
          {/* TODO: Replace with actual avatar image */}
          <div className="text-4xl md:text-5xl font-bold text-white/70">
            {avatarPlaceholder || name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
          {name}
        </h3>
        <p className="text-[#1A237E] font-semibold mb-4">{title}</p>

        {bio && (
          <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
            {bio}
          </p>
        )}

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm font-medium bg-slate-100 text-slate-700 rounded-full hover:bg-[#1A237E]/10 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* LinkedIn Link */}
        {linkedInUrl && (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A237E] hover:text-[#151b63] transition-colors group/link"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            View Profile
          </a>
        )}
      </div>
    </div>
  );
}
