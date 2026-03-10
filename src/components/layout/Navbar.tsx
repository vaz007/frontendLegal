"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-[1000] w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container-max">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="indylaw logo"
                  width={60}
                  height={18}
                  priority
                  className="transition-transform group-hover:scale-105 h-auto"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-[#1A237E] font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A237E] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                {siteConfig.ctas.primary}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[10001] bg-white overflow-y-auto">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src="/images/logo.png" alt="indylaw logo" width={60} height={18} className="h-auto" />
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xl font-semibold text-slate-800 hover:text-[#1A237E] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                className="btn-primary w-full text-center block py-4 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {siteConfig.ctas.primary}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
