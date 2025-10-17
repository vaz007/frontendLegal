import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-4xl font-semibold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-[#1A237E] text-white px-4 py-2 text-sm font-medium hover:bg-[#151b63]">
        Go Home
      </Link>
    </div>
  );
}
