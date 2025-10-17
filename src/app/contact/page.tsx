"use client";

import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

type FormValues = {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  tier?: string;
  useCase?: string;
  preferredDate?: string;
};

function ContactForm() {
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const params = useSearchParams();

  useEffect(() => {
    const tier = params.get("tier");
    if (tier) setValue("tier", tier);
  }, [params, setValue]);

  function onSubmit() {
    alert("Thanks! We'll get back to you shortly.");
    reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Request a Demo</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get a personalized demonstration of theParalegalAssist tailored to your practice area.</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                  <input 
                    {...register("name", { required: true })} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    {...register("email", { required: true })} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization</label>
                  <input 
                    {...register("organization")} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                    placeholder="Law firm or company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input 
                    {...register("phone")} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tier of Interest</label>
                  <select 
                    {...register("tier")} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors"
                  >
                    <option value="Free">Free</option>
                    <option value="Professional">Professional</option>
                    <option value="Premium">Premium</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Demo Date</label>
                  <input 
                    type="date" 
                    {...register("preferredDate")} 
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Use Case</label>
                <textarea 
                  {...register("useCase")} 
                  rows={4} 
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-colors" 
                  placeholder="Tell us about your legal research needs and how you plan to use theParalegalAssist..."
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary text-lg py-4"
              >
                Request Demo
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
                <a href="mailto:hello@theparalegalassist.co.in" className="hover:text-[#1A237E] transition-colors">
                  hello@theparalegalassist.co.in
                </a>
                <span className="hidden sm:block">•</span>
                <a href="mailto:sales@theparalegalassist.co.in" className="hover:text-[#1A237E] transition-colors">
                  sales@theparalegalassist.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="space-y-8"><h1 className="text-3xl font-semibold text-slate-900">Request a Demo</h1><p>Loading...</p></div>}>
      <ContactForm />
    </Suspense>
  );
}
