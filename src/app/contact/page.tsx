"use client";

import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  tier?: string;
  useCase?: string;
  preferredDate?: string;
  agreedToTerms: boolean;
};

function ContactForm() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({
    defaultValues: { agreedToTerms: false }
  });
  const params = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const tier = params.get("tier");
    if (tier) setValue("tier", tier);
  }, [params, setValue]);

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send request');
      }

      setSubmitStatus('success');
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
      console.error('Contact form error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Request a Demo</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get a personalized demonstration of Indy Law tailored to your practice area.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thanks! We've received your demo request. Check your email for confirmation.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  {errorMessage}
                </p>
              </div>
            )}

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
                  placeholder="Tell us about your legal research needs and how you plan to use Indy Law..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register("agreedToTerms", {
                    required: "You must agree to the terms and privacy policy"
                  })}
                  className="w-5 h-5 rounded border-slate-300 text-[#1A237E] focus:ring-2 focus:ring-[#1A237E] mt-1"
                />
                <label className="text-sm text-slate-600">
                  I agree to the{" "}
                  <a href="/privacy" className="text-[#1A237E] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-[#1A237E] hover:underline">
                    Terms of Service
                  </a>
                </label>
              </div>
              {errors.agreedToTerms && (
                <p className="text-red-600 text-sm">{errors.agreedToTerms.message}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Request Demo'
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
                <a href="mailto:admin@indylaw.in" className="hover:text-[#1A237E] transition-colors">
                  admin@indylaw.in
                </a>
                <span className="hidden sm:block">•</span>
                <a href="mailto:admin@indylaw.in" className="hover:text-[#1A237E] transition-colors">
                  admin@indylaw.in
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
