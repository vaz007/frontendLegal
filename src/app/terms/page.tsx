export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12">
      <div className="container-max mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Terms &amp; Conditions</h1>
        <p className="text-lg text-slate-700 mb-6">
          By using <strong>Indy Law</strong> you agree to the following terms governing access to and use of our AI‑assisted legal research platform.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Service Use</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
          <li>You may request demos, submit queries, and receive generated research results through the platform.</li>
          <li>All content provided is for informational purposes only and does not constitute legal advice.</li>
          <li>Resend email service is used solely for sending confirmation and admin notifications; you must not misuse it for spam.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Intellectual Property</h2>
        <p className="text-slate-700 mb-6">
          The Indy Law brand, UI designs, and underlying AI models are proprietary. You may not copy, modify, or redistribute any part of the service without explicit permission.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Limitation of Liability</h2>
        <p className="text-slate-700 mb-6">
          Indy Law is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from use of the service.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Changes to Terms</h2>
        <p className="text-slate-700 mb-6">
          We may update these terms from time to time. Continued use of the platform after revisions constitutes acceptance of the new terms.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="/" className="btn-primary">Home</a>
          <a href="/privacy" className="btn-secondary">Privacy Policy</a>
          <a href="/contact" className="btn-secondary">Contact</a>
        </div>
      </div>
    </main>
  );
}
