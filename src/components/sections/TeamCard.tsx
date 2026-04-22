"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  bio?: string;
  expertise: string[];
  linkedInUrl?: string;
  avatarPlaceholder?: string;
  isFeatured?: boolean;
  imageUrl?: string;
}

export default function TeamCard({
  name,
  title,
  bio,
  expertise,
  linkedInUrl,
  avatarPlaceholder,
  isFeatured = false,
  imageUrl,
}: TeamCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-[#1A237E]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full max-w-[500px]"
      >
        {/* Compact Avatar */}
        <div className="shrink-0 relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A237E] to-[#00897B] flex items-center justify-center shadow-sm overflow-hidden border-2 border-white ring-1 ring-slate-100">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
                <span className="text-xl font-bold text-white tracking-wider">
                  {avatarPlaceholder || name.charAt(0)}
                </span>
              </>
            )}
          </div>
          {linkedInUrl && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-md shadow-sm border border-slate-100 flex items-center justify-center text-[#1A237E]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-lg font-semibold text-slate-900 truncate">
              {name}
            </h3>
            {isFeatured && (
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#1A237E]/60">
                Core Team
              </span>
            )}
          </div>
          
          <div className="mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium border border-blue-100">
              {title}
            </span>
          </div>

          {bio && (
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 font-light">
              {bio}
            </p>
          )}

          {/* Suble Tags */}
          <div className="flex flex-wrap gap-2">
            {expertise.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-500 rounded border border-slate-200/50"
              >
                {skill}
              </span>
            ))}
            {expertise.length > 2 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{expertise.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Avatar Area */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 pb-4">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A237E] to-[#00897B] flex items-center justify-center shadow-inner overflow-hidden relative">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white tracking-widest leading-none">
                        {avatarPlaceholder || name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
                    <p className="text-[#1A237E] font-medium text-sm">{title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Bio in full */}
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-base font-light whitespace-pre-line">
                  {bio}
                </p>
              </div>
            </div>

            {/* Expertise Area */}
            <div className="p-8 pt-4 border-t border-slate-100">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Full Expertise</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-lg border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {linkedInUrl && (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1A237E] text-white rounded-xl text-sm font-semibold hover:bg-[#151b63] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                )}
                <button
                   onClick={() => setIsOpen(false)}
                   className="flex-1 px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
