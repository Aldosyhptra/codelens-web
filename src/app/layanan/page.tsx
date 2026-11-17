import Image from "next/image";

export const metadata = {
  title: "Layanan — CodeLens: Solusi Rekayasa Perangkat Lunak Terpercaya",
  description:
    "Layanan rekayasa perangkat lunak lengkap dari CodeLens: pengembangan web & mobile, arsitektur cloud, integrasi AI, dan keamanan sistem.",
};

export default function Layanan() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-surface font-sans text-on-surface">
      <main className="grow">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-8 md:pt-24 md:pb-28 bg-linear-to-b from-[#F8FAFC] via-white to-white overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-100/40 blur-3xl rounded-full pointer-events-none -z-10" />
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Mitra Teknologi Terpercaya &amp; Andal
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.2]">
              Layanan &amp; Solusi <span className="text-blue-600">Rekayasa Perangkat Lunak</span>
            </h1>
            <p className="mt-6 text-md sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Kami merancang, membangun, dan mengoptimalkan sistem digital yang andal, aman, dan mudah digunakan untuk pertumbuhan bisnis Anda.
            </p>
            <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 md:mt-12" data-aos="zoom-in" data-aos-delay="400">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-xl md:text-3xl font-extrabold text-blue-600 font-mono">99.9%</div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider mt-1">Jaminan Uptime</div>
                <div className="text-xs text-slate-500 mt-0.5">Sistem stabil tanpa henti</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-xl md:text-3xl font-extrabold text-blue-600 font-mono">&lt; 1 Detik</div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider mt-1">Kecepatan Muat</div>
                <div className="text-xs text-slate-500 mt-0.5">Pengalaman pengguna gesit</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-xl md:text-3xl font-extrabold text-blue-600 font-mono">100%</div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider mt-1">Hak Milik Penuh</div>
                <div className="text-xs text-slate-500 mt-0.5">Kode &amp; aset milik Anda</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-xl md:text-3xl font-extrabold text-blue-600 font-mono">24 / 7</div>
                <div className="text-sm font-semibold text-slate-800 uppercase tracking-wider mt-1">Dukungan Teknis</div>
                <div className="text-xs text-slate-500 mt-0.5">Pemantauan proaktif berkala</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: 4 CORE SERVICE AREAS */}
        <section className="w-full py-10 md:py-20 bg-slate-50 border-y border-slate-200/60" id="layanan">
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="w-full">
              <div className="text-center w-full max-w-2xl mb-16 mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-200">Solusi Komprehensif</span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">4 Layanan Utama CodeLens</h2>
                <p className="text-slate-600 mt-3 text-base">Dirancang khusus untuk membantu transformasi digital perusahaan dengan metode rekayasa modern yang teruji dan efisien.</p>
              </div>
              <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between" data-aos="zoom-in" data-aos-delay="100">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">devices</span>
                    </div>
                    <div className="inline-block text-xs font-semibold text-blue-600 tracking-wide uppercase mb-1">Modern, Responsif &amp; Cepat</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Pengembangan Aplikasi Web &amp; Mobile</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Membangun antarmuka modern yang nyaman dipakai oleh pelanggan maupun tim internal Anda. Desain responsif, performa cepat, dan bebas kendala teknis pada platform iOS, Android, maupun peramban web.</p>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Aplikasi Web interaktif berperforma tinggi (Next.js, React, Node.js)</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Aplikasi Mobile cross-platform mulus untuk Android &amp; iOS</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Pengalaman pengguna (UX/UI) yang intuitif dan mudah dipelajari</span></div>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 md:flex items-center justify-between border-t border-slate-50">
                    <span className="text-xs font-medium text-slate-500">Standar Aksesibilitas WCAG &amp; SEO Friendly</span>
                    <a href="/layanan" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"><span>Pelajari Detail</span><span className="material-symbols-outlined text-base">arrow_forward</span></a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between" data-aos="zoom-in" data-aos-delay="150">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">cloud_sync</span>
                    </div>
                    <div className="inline-block text-xs font-semibold text-blue-600 tracking-wide uppercase mb-1">Efisien, Skalabel &amp; Hemat Biaya</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Transformasi Cloud &amp; Modernisasi Sistem</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Memperbarui infrastruktur dan aplikasi lama agar berjalan di ekosistem cloud modern. Mengurangi biaya operasional server bulanan dan mencegah server down saat lonjakan pengunjung.</p>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Migrasi aman ke AWS, Google Cloud, atau Microsoft Azure</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Otomasi alur kerja rilis cepat (CI/CD) tanpa gangguan operasional</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Optimasi kapasitas server otomatis sesuai kebutuhan beban kerja nyata</span></div>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 md:flex items-center justify-between border-t border-slate-50">
                    <span className="text-xs font-medium text-slate-500">Efisiensi Biaya Server hingga 35-50%</span>
                    <a href="/layanan" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"><span>Pelajari Detail</span><span className="material-symbols-outlined text-base">arrow_forward</span></a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between" data-aos="zoom-in" data-aos-delay="200">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    </div>
                    <div className="inline-block text-xs font-semibold text-blue-600 tracking-wide uppercase mb-1">Otomasi Proses &amp; AI Praktis</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Solusi Kecerdasan Buatan &amp; Otomasi Data</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Mengintegrasikan kecerdasan buatan (AI) yang aplikatif ke dalam operasional bisnis Anda. Mempercepat pemrosesan data rutin, asisten pintar berbasis dokumen internal, dan analisis prediktif.</p>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Chatbot &amp; asisten virtual internal berbasis data perusahaan yang privat</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Otomasi ekstraksi dokumen, faktur, serta laporan bisnis otomatis</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Dashboard wawasan data real-time untuk pengambilan keputusan pimpinan</span></div>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-xs font-medium text-slate-500">Privasi Data Terenkripsi &amp; Nol Kebocoran</span>
                    <a href="/layanan" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"><span>Pelajari Detail</span><span className="material-symbols-outlined text-base">arrow_forward</span></a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between" data-aos="zoom-in" data-aos-delay="250">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <div className="inline-block text-xs font-semibold text-blue-600 tracking-wide uppercase mb-1">Perlindungan Data &amp; Audit Berkala</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Keamanan Sistem &amp; Pemeliharaan 24/7</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">Perlindungan menyeluruh terhadap ancaman siber dan kebocoran data. Tim kami memantau keandalan server setiap saat, melakukan update keamanan berkala, dan penanganan insiden cepat.</p>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Audit celah keamanan (Penetration Testing) dan kepatuhan data</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Pencadangan (Backup) data otomatis berkala dan pemulihan bencana cepat</span></div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-700"><span className="material-symbols-outlined text-blue-600 text-lg shrink-0 mt-0.5">check_circle</span><span>Pemantauan kinerja server dan penanganan kendala responsif 24 jam</span></div>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-xs font-medium text-slate-500">Standar Proteksi OWASP &amp; Kepatuhan UU PDP</span>
                    <a href="/layanan" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"><span>Pelajari Detail</span><span className="material-symbols-outlined text-base">arrow_forward</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: METODOLOGI KERJA 4 LANGKAH */}
        <section className="w-full py-10 md:py-20 bg-white">
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="w-full">
              <div className="text-center w-full max-w-2xl mb-16 mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-200">Alur Kolaborasi</span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">Metodologi Kerja yang Jelas &amp; Terbuka</h2>
                <p className="text-slate-600 mt-3 text-base">Setiap proyek dikelola dengan transparansi penuh dari awal hingga selesai, memastikan hasil selesai tepat waktu tanpa kejutan biaya.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="zoom-in">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative flex flex-col justify-between hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="100">
                  <div><div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm font-mono shadow-sm">01</div><h3 className="text-lg font-bold text-slate-900 mb-2">Konsultasi &amp; Analisis</h3><p className="text-slate-600 text-sm leading-relaxed">Kami mendengarkan target bisnis Anda, mengevaluasi sistem yang sedang berjalan, dan memetakan kebutuhan fitur yang paling esensial.</p></div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60"><span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Hasil Fase:</span><span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded inline-block">Dokumen Spesifikasi &amp; Timeline</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative flex flex-col justify-between hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="150">
                  <div><div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm font-mono shadow-sm">02</div><h3 className="text-lg font-bold text-slate-900 mb-2">Perancangan &amp; Prototipe</h3><p className="text-slate-600 text-sm leading-relaxed">Membuat desain antarmuka interaktif (UI/UX) dan blueprint struktur teknis yang dapat Anda uji sebelum penulisan kode dimulai.</p></div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60"><span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Hasil Fase:</span><span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded inline-block">Prototipe Desain &amp; Arsitektur</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative flex flex-col justify-between hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="200">
                  <div><div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm font-mono shadow-sm">03</div><h3 className="text-lg font-bold text-slate-900 mb-2">Pembangunan &amp; Pengujian</h3><p className="text-slate-600 text-sm leading-relaxed">Pengembangan perangkat lunak dengan update berkala setiap 2 minggu serta pengujian ketat fungsi dan keamanan sebelum perilisan.</p></div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60"><span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Hasil Fase:</span><span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded inline-block">Demo Rutin &amp; Laporan Uji QA</span></div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 relative flex flex-col justify-between hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="250">
                  <div><div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 text-sm font-mono shadow-sm">04</div><h3 className="text-lg font-bold text-slate-900 mb-2">Peluncuran &amp; Dukungan</h3><p className="text-slate-600 text-sm leading-relaxed">Peluncuran sistem ke lingkungan produksi tanpa gangguan, transfer dokumentasi lengkap ke tim Anda, serta garansi pemeliharaan berkala.</p></div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60"><span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Hasil Fase:</span><span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-1 rounded inline-block">Sistem Live &amp; Serah Terima IP</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PILIHAN KERJASAMA FLEKSIBEL */}
        <section className="w-full py-10 md:py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="w-full">
              <div className="text-center w-full max-w-2xl mb-16 mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-200">Model Kolaborasi</span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">Pilihan Kerjasama yang Fleksibel</h2>
                <p className="text-slate-600 mt-3 text-base">Sesuaikan skema kolaborasi dengan kebutuhan spesifik, ukuran tim internal, dan anggaran investasi digital perusahaan Anda.</p>
              </div>
              <div className="flex flex-wrap gap-8 items-center justify-center">
                <div className="max-w-sm lg:max-w-md bg-white rounded-2xl p-8 border-2 border-blue-600/30 shadow-lg relative flex flex-col justify-between hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="100">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm text-center">Pilihan Favorit</div>
                  <div>
                    <div className="text-blue-600 mb-4"><span className="material-symbols-outlined text-4xl">groups</span></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tim Dedikasi Penuh</h3>
                    <p className="text-slate-600 text-sm mb-6">Satu tim rekayasa software lengkap yang bekerja eksklusif untuk mengeksekusi visi produk digital jangka panjang perusahaan Anda.</p>
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Susunan Tim:</div>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" />1x Project Manager / Koordinator</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" />1x Lead Arsitek Perangkat Lunak</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" />3-5x Senior Web &amp; Mobile Engineer</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600" />1x Quality Assurance &amp; Tester</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Komitmen:</span><span className="font-semibold text-slate-800">3 - 12+ Bulan</span></div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Pembaruan:</span><span className="font-semibold text-slate-800">Sprint 2 Mingguan</span></div>
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Kepemilikan:</span><span className="font-semibold text-blue-600">100% Hak Milik Anda</span></div>
                    </div>
                  </div>
                  <div className="mt-8"><a href="/kontak#jadwal-cto" className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-all">Pilih Tim Dedikasi</a></div>
                </div>

                <div className="max-w-sm lg:max-w-md bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="150">
                  <div>
                    <div className="text-blue-600 mb-4"><span className="material-symbols-outlined text-4xl">task_alt</span></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Proyek Berbasis Milestone</h3>
                    <p className="text-slate-600 text-sm mb-6">Pembangunan sistem dengan ruang lingkup, anggaran biaya, serta target waktu penyelesaian yang disepakati pasti sejak awal.</p>
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Cocok Untuk:</div>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Peluncuran produk baru (MVP)</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Modernisasi sistem lama yang spesifik</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Integrasi API atau migrasi data</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Proyek dengan anggaran terdefinisi</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Durasi:</span><span className="font-semibold text-slate-800">1 - 4 Bulan</span></div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Pembayaran:</span><span className="font-semibold text-slate-800">Bertahap per Milestone</span></div>
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Garansi Bug:</span><span className="font-semibold text-blue-600">Termasuk 60 Hari</span></div>
                    </div>
                  </div>
                  <div className="mt-8"><a href="/kontak#jadwal-cto" className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-all">Mulai Proyek Spesifik</a></div>
                </div>

                <div className="max-w-sm lg:max-w-md bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:shadow-xl transition-shadow" data-aos="zoom-in" data-aos-delay="200">
                  <div>
                    <div className="text-blue-600 mb-4"><span className="material-symbols-outlined text-4xl">person_pin</span></div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Konsultasi Teknis &amp; Advisory</h3>
                    <p className="text-slate-600 text-sm mb-6">Dukungan tenaga ahli senior untuk memperkuat tim internal Anda, mengaudit keamanan kode, atau menentukan arah arsitektur software.</p>
                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Profil Tenaga Ahli:</div>
                      <ul className="text-xs text-slate-600 space-y-1.5">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Principal Software Architect</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Cloud &amp; DevOps Specialist</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Spesialis Keamanan Siber &amp; Audit</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Langsung bergabung dalam hitungan hari</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Skema:</span><span className="font-semibold text-slate-800">Retainer Bulanan Fleksibel</span></div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100"><span className="text-slate-400">Kolaborasi:</span><span className="font-semibold text-slate-800">Langsung di Slack/Teams Anda</span></div>
                      <div className="flex justify-between py-1.5"><span className="text-slate-400">Ramp-up:</span><span className="font-semibold text-blue-600">&lt; 5 Hari Kerja</span></div>
                    </div>
                  </div>
                  <div className="mt-8"><a href="/kontak#jadwal-cto" className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-all">Konsultasi Kebutuhan</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: JAMINAN KUALITAS & STANDAR LAYANAN */}
        <section className="w-full py-10 md:py-20 bg-white">
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="w-full">
              <div className="bg-linear-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl" data-aos="zoom-in">
                <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="w-full max-w-3xl relative z-10 mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-4"><span className="material-symbols-outlined text-sm">verified</span> Komitmen Kontraktual</div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">Jaminan Kualitas &amp; Standar Layanan</h2>
                  <p className="text-slate-300 mt-3 text-base leading-relaxed">Kami percaya bahwa kepercayaan bisnis dibangun di atas transparansi dan akuntabilitas. Setiap kerjasama dilindungi oleh perjanjian resmi yang mengikat.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-200 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">speed</span></div>
                    <h3 className="text-lg font-bold mb-2">Service Level Agreement (SLA)</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Jaminan ketersediaan sistem hingga 99.9% dan respons darurat teknis di bawah 1 jam untuk memastikan operasional bisnis berjalan normal.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-200 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">lock</span></div>
                    <h3 className="text-lg font-bold mb-2">Kepatuhan Keamanan Data</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Penerapan enkripsi standar industri, penandatanganan Perjanjian Kerahasiaan (NDA), dan kepatuhan terhadap regulasi perlindungan data pribadi.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/30 text-blue-200 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">key</span></div>
                    <h3 className="text-lg font-bold mb-2">100% Kepemilikan Kode Sumber</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Seluruh hak cipta kode program, aset desain, dan dokumentasi arsitektur sepenuhnya diserahkan menjadi aset sah perusahaan Anda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="w-full py-10 md:py-20 bg-slate-50 border-t border-slate-200/80" id="kontak">
          <div className="w-full px-4 md:px-8 flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col items-center" data-aos="zoom-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4"><span className="w-2 h-2 rounded-full bg-blue-600" />Siap Memulai Transformasi?</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Diskusikan Kebutuhan Digital Bisnis Anda Hari Ini</h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">Tim arsitek solusi kami siap mendengarkan rencana proyek Anda, memberikan estimasi transparan, dan membantu merancang peta jalan teknis yang efektif.</p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/kontak#jadwal-cto" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined text-xl">calendar_today</span><span>Jadwalkan Sesi Konsultasi</span></a>
                <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined text-xl">description</span><span>Minta Penawaran / Portofolio</span></a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-green-600 text-base">check</span><span>Tanpa Komitmen Awal</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-green-600 text-base">check</span><span>Respon Cepat 1x24 Jam</span></div>
                <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-green-600 text-base">check</span><span>Perjanjian Kerahasiaan (NDA)</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
