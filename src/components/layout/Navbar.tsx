import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/logo.png" alt="theParalegalAssist logo" width={60} height={18} className="transition-transform group-hover:scale-105" />
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
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
