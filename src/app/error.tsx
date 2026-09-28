"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface p-8">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
        Terjadi Kesalahan
      </h1>
      <p className="text-slate-600 mb-8 text-center max-w-md">
        Maaf, something went wrong. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
