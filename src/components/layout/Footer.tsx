import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="container-max">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/logo.png" alt="logo" width={50} height={15} />
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">{siteConfig.tagline}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="bg-gradient-to-r from-[#FFA000] to-[#FF8F00] text-white px-2 py-1 rounded text-xs font-medium">AWS</span>
              <span>Powered by AWS</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-slate-600 hover:text-[#1A237E] transition-colors">Features</Link></li>
              <li><Link href="/architecture" className="text-slate-600 hover:text-[#1A237E] transition-colors">Architecture</Link></li>
              <li><Link href="/pricing" className="text-slate-600 hover:text-[#1A237E] transition-colors">Pricing</Link></li>
              <li><Link href="/use-cases" className="text-slate-600 hover:text-[#1A237E] transition-colors">Use Cases</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-600 hover:text-[#1A237E] transition-colors">About</Link></li>
              <li><Link href="/security" className="text-slate-600 hover:text-[#1A237E] transition-colors">Security</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-[#1A237E] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${siteConfig.emails.hello}`} className="text-slate-600 hover:text-[#1A237E] transition-colors">{siteConfig.emails.hello}</a></li>
              <li><a href={`mailto:${siteConfig.emails.support}`} className="text-slate-600 hover:text-[#1A237E] transition-colors">{siteConfig.emails.support}</a></li>
              <li><a href={`mailto:${siteConfig.emails.sales}`} className="text-slate-600 hover:text-[#1A237E] transition-colors">{siteConfig.emails.sales}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-[#1A237E] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1A237E] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
