export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
      <div className="container-max mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Privacy Policy</h1>
        <p className="text-lg text-slate-700 mb-6">
          At <strong>Indy Law</strong> we are committed to protecting the privacy of our users and the confidentiality of the legal data you share with us. This policy explains how we collect, use, store, and protect your information when you use our platform.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Data we collect</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>Contact details you provide in the demo request form (name, email, organization, phone).</li>
          <li>Usage data such as queries, timestamps, and interaction logs to improve the AI‑assisted research engine.</li>
          <li>Cookies and session identifiers for authentication and personalized experience.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">How we use your data</h2>
        <p className="text-slate-700 mb-6">
          Your data is used solely to deliver the legal research service, send confirmation emails, and help us enhance the product. We never sell your information to third parties.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Data security</h2>
        <p className="text-slate-700 mb-6">
          All communications are encrypted via TLS. We store data in isolated, encrypted databases and follow industry‑standard security practices.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Your rights</h2>
        <p className="text-slate-700 mb-6">
          You may request access, correction, or deletion of your personal data by contacting us at <a href="mailto:admin@indylaw.in" className="text-[#1A237E] underline">admin@indylaw.in</a>.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="/" className="btn-primary">Home</a>
          <a href="/terms" className="btn-secondary">Terms &amp; Conditions</a>
          <a href="/contact" className="btn-secondary">Contact</a>
        </div>
      </div>
    </main>
  );
}
