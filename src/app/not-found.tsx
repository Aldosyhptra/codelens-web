import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface p-8">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-2">Halaman Tidak Ditemukan</p>
      <p className="text-slate-500 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
