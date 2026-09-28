export default function Footer() {
  const logoSrc = "/images/logo/logo2.png";
  return (
    <footer className="w-full bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Kolom Profil Perusahaan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <img               
                src="/images/logo/logo2.png"
                alt="CodeLens"
                className="h-15 w-auto object-contain"
                width={100}
                height={100} 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Perusahaan rekayasa perangkat lunak modern yang berfokus pada keandalan sistem, infrastruktur cloud berkinerja tinggi, dan solusi AI yang aman untuk bisnis Anda.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Semua Layanan Operasional &amp; Prima</span>
            </div>
          </div>

          {/* Kolom Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="/layanan" className="hover:text-white transition-colors">Layanan &amp; Solusi</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portofolio Klien</a></li>
              <li><a href="/tentang-kami" className="hover:text-white transition-colors">Tentang Tim Kami</a></li>
              <li><a href="/kontak" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Kolom Layanan Spesialis */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Layanan Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/layanan" className="hover:text-white transition-colors">Aplikasi Web &amp; Mobile</a></li>
              <li><a href="/layanan" className="hover:text-white transition-colors">Solusi Cloud &amp; Kubernetes</a></li>
              <li><a href="/layanan" className="hover:text-white transition-colors">Penerapan AI &amp; Otomasi</a></li>
              <li><a href="/layanan" className="hover:text-white transition-colors">Audit &amp; Keamanan Siber</a></li>
              <li><a href="/layanan" className="hover:text-white transition-colors">Konsultasi Arsitektur Digital</a></li>
            </ul>
          </div>

          {/* Kolom Kontak & Lokasi */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Informasi Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 text-base mt-0.5">&#9678;</span>
                <span>Jl. Jenderal Sudirman Kav. 52, SCBD, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-base">&#9993;</span>
                <span>halo@codelens.co.id</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-base">&#9742;</span>
                <span>+62 812-8900-1234</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500 text-base">&#9201;</span>
                <span>Senin - Jumat: 08:30 - 17:30 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta & Kebijakan */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2025 CodeLens. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Keamanan Sistem</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
