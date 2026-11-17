import Image from "next/image";

export const metadata = {
  title: "Tentang Kami — CodeLens: Dedikasi & Integritas Sejak 2018",
  description:
    "Tentang CodeLens: didirikan oleh praktisi teknologi berpengalaman dengan komitmen menghadirkan perangkat lunak berkualitas tinggi, aman, dan mudah digunakan.",
};

export default function TentangKami() {
  return (
    <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full pt-16 pb-8 md:pt-24 md:pb-28 bg-[#F8FAFF] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Dedikasi &amp; Integritas Rekayasa Sejak 2018
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    Tentang CodeLens — <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-blue-600 to-sky-600">Membangun Teknologi dengan Hati &amp; Presisi.</span>
                  </h1>
                  <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                    Didirikan oleh para praktisi teknologi berpengalaman dengan komitmen menghadirkan perangkat lunak berkualitas tinggi, aman, dan mudah digunakan oleh siapa saja.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href="#nilai-utama" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/25">
                      Kenali Nilai Kami
                      <span className="material-symbols-outlined text-base">arrow_downward</span>
                    </a>
                    <a href="#tim-pimpinan" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                      Lihat Tim Pimpinan
                      <span className="material-symbols-outlined text-base">people</span>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-100 space-y-4" data-aos="zoom-in" data-aos-delay="300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600">verified</span>
                        <span className="font-semibold text-slate-800 text-sm">Keandalan Sistem</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Aktif 99.99%</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Insinyur &amp; Arsitek Senior</span>
                        <span className="font-bold text-slate-900">140+ Talenta</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-4/5" />
                      </div>
                      <div className="flex items-center justify-between text-sm pt-2">
                        <span className="text-slate-500">Klien Enterprise &amp; Startup</span>
                        <span className="font-bold text-slate-900">60+ Perusahaan</span>
                      </div>
                      <div className="flex items-center justify-between text-sm pt-1">
                        <span className="text-slate-500">Standar Keamanan</span>
                        <span className="font-semibold text-blue-600">SOC 2 Type II &amp; ISO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL BRIDGE: 3 KEY PILLARS */}
        <section className="py-20 bg-[#F8FAFF] border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex items-start gap-4" data-aos="zoom-in" data-aos-delay="100">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Pendekatan Humanis</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">Teknologi mutakhir harus melayani manusia dengan kehangatan dan kemudahan akses nyata.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex items-start gap-4" data-aos="zoom-in" data-aos-delay="200">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Arsitektur Teruji</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">Kekuatan fondasi sistem dirancang tahan uji beban tinggi dan minim gangguan teknis.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex items-start gap-4" data-aos="zoom-in" data-aos-delay="300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dukungan Responsif</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">Kolaborasi aktif dan komunikasi terbuka setiap hari bersama para pimpinan proyek.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NILAI UTAMA KAMI */}
        <section className="py-20 bg-[#F8FAFF]" id="nilai-utama">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
                  Fondasi Nilai Kami
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  Nilai Utama CodeLens
                </h2>
                <p className="text-slate-600 mt-3 text-base">
                  Prinsip dasar yang kami rawat bersama dalam setiap baris kode, diskusi strategi, hingga peluncuran sistem ke pengguna luas.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all" data-aos="zoom-in" data-aos-delay="100">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">verified_user</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-100">
                      Nilai #01
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    1. Kualitas Tanpa Kompromi
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Mengutamakan kode yang rapi, teruji, dan awet. Kami percaya bahwa keandalan jangka panjang berasal dari penulisan arsitektur yang cermat serta pengujian otomatis yang menyeluruh.
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Standar Cakupan Pengujian</span>
                    <span className="text-blue-600 font-bold">&ge; 92% Bebas Cacat</span>
                  </div>
                </div>
                <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all" data-aos="zoom-in" data-aos-delay="200">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">forum</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-semibold text-xs border border-sky-100">
                      Nilai #02
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    2. Komunikasi Terbuka
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Kolaborasi transparan dalam setiap tahap pengerjaan. Tidak ada dinding pemisah antara tim pengembang dan klien; proses terbuka memberikan rasa tenang dan kepastian hasil.
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Transparansi Proyek</span>
                    <span className="text-sky-600 font-bold">Akses Repositori &amp; Demo Harian</span>
                  </div>
                </div>
                <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all" data-aos="zoom-in" data-aos-delay="300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs border border-indigo-100">
                      Nilai #03
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    3. Pendekatan Berpusat pada Pengguna
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Solusi yang ramah dan intuitif bagi semua kalangan. Kami mendesain antarmuka serta pengalaman digital yang memudahkan alur kerja pengguna tanpa kompleksitas yang membingungkan.
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Orientasi Desain</span>
                    <span className="text-indigo-600 font-bold">Aksesibilitas &amp; Kemudahan</span>
                  </div>
                </div>
                <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all" data-aos="zoom-in" data-aos-delay="400">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">psychology</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-semibold text-xs border border-teal-100">
                      Nilai #04
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    4. Pembelajaran &amp; Inovasi Berkelanjutan
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Senantiasa memperbarui keahlian teknologi terkini. Kami secara konsisten melakukan riset algoritma baru, keamanan komputasi awan, dan adopsi kecerdasan buatan terapan yang relevan.
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Riset Internal Tim</span>
                    <span className="text-teal-700 font-bold">1 Hari Riset Mingguan (20%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIM PIMPINAN & ARSITEK UTAMA */}
        <section className="py-20 bg-[#F8FAFF]" id="tim-pimpinan">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                    Para Penggerak
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                    Tim Pimpinan &amp; Arsitek Utama
                  </h2>
                </div>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg">
                  Didukung oleh praktisi senior yang berpengalaman memimpin proyek teknologi berskala internasional dengan dedikasi penuh.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {/* Team Member 1 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group" data-aos="zoom-in" data-aos-delay="100">
                  <div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <Image
                        alt="Foto Elena Vance"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="/images/beranda/1.jpg"
                        width={400}
                        height={400}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-blue-600 shadow-sm">
                        ex-Stripe
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Elena Vance</h3>
                    <p className="text-xs font-bold text-blue-600 mt-0.5">Chief Technology Officer</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Memimpin arsitektur sistem terdistribusi bebas kendala, memastikan transaksi berskala masif berjalan stabil, aman, dan mulus.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Keahlian:</span>
                    <span className="font-semibold text-slate-800">Sistem Terdistribusi &amp; Rust</span>
                  </div>
                </div>
                {/* Team Member 2 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group" data-aos="zoom-in" data-aos-delay="200">
                  <div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <Image
                        alt="Foto Marcus Chen"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="/images/beranda/1.jpg"
                        width={400}
                        height={400}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-sky-600 shadow-sm">
                        ex-AWS
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Marcus Chen</h3>
                    <p className="text-xs font-bold text-sky-600 mt-0.5">VP Rekayasa Perangkat Lunak</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Mengorkestrasi infrastruktur cloud modern dan klaster Kubernetes agar dapat melayani jutaan permintaan tanpa jeda sedikit pun.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Keahlian:</span>
                    <span className="font-semibold text-slate-800">Cloud Orchestration &amp; eBPF</span>
                  </div>
                </div>
                {/* Team Member 3 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group" data-aos="zoom-in" data-aos-delay="300">
                  <div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <Image
                        alt="Foto Dr. Sarah Al-Mansoor"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="/images/beranda/1.jpg"
                        width={400}
                        height={400}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-indigo-600 shadow-sm">
                        PhD Stanford
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Dr. Sarah Al-Mansoor</h3>
                    <p className="text-xs font-bold text-indigo-600 mt-0.5">Kepala Inovasi AI</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Menghubungkan kecerdasan buatan terapan ke dalam operasional bisnis praktis, mulai dari pencarian semantik hingga model bahasa teroptimasi.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Keahlian:</span>
                    <span className="font-semibold text-slate-800">Applied AI &amp; Vector Index</span>
                  </div>
                </div>
                {/* Team Member 4 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group" data-aos="zoom-in" data-aos-delay="400">
                  <div>
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <Image
                        alt="Foto David Thorne"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="/images/beranda/1.jpg"
                        width={400}
                        height={400}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-emerald-700 shadow-sm">
                        CISSP Certified
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">David Thorne</h3>
                    <p className="text-xs font-bold text-emerald-700 mt-0.5">Kepala Keamanan Siber</p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Menjaga data klien dengan standar zero-trust, enkripsi menyeluruh, dan mitigasi proaktif terhadap potensi ancaman keamanan global.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">Keahlian:</span>
                    <span className="font-semibold text-slate-800">Zero-Trust &amp; DevSecOps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERJALANAN SINGKAT (MILESTONE) */}
        <section className="py-20 bg-[#F8FAFF]" id="perjalanan">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Jejak Langkah Kami
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  Perjalanan Singkat CodeLens
                </h2>
                <p className="text-slate-600 mt-3 text-base">
                  Melihat ke belakang dengan rasa syukur dan melangkah ke depan dengan optimisme serta semangat inovasi tanpa henti.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative" data-aos="zoom-in" data-aos-delay="100">
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-600">2018</div>
                    <div className="inline-block px-2.5 py-0.5 mt-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                      Awal Mula Pendirian
                    </div>
                    <h4 className="font-bold text-slate-900 mt-4 text-base">Lahirnya CodeLens</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Didirikan oleh empat praktisi senior dengan satu tujuan: menghasilkan perangkat lunak yang andal dan transparan bagi setiap mitra.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    4 Anggota Pendiri
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative" data-aos="zoom-in" data-aos-delay="200">
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <div>
                    <div className="text-2xl font-black text-sky-600">2020</div>
                    <div className="inline-block px-2.5 py-0.5 mt-1 rounded bg-sky-50 text-sky-700 text-xs font-semibold">
                      Pertumbuhan Pesat
                    </div>
                    <h4 className="font-bold text-slate-900 mt-4 text-base">10 Juta Transaksi/Hari</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Berhasil membangun infrastruktur transaksi perbankan digital dengan latensi rendah dan stabilitas layanan tanpa jeda down-time.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    32 Rekan Pengembang
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative" data-aos="zoom-in" data-aos-delay="300">
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <div>
                    <div className="text-2xl font-black text-indigo-600">2022</div>
                    <div className="inline-block px-2.5 py-0.5 mt-1 rounded bg-indigo-50 text-indigo-700 text-xs font-semibold">
                      Kolaborasi Global
                    </div>
                    <h4 className="font-bold text-slate-900 mt-4 text-base">Hub Zurich &amp; Singapura</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Membuka perwakilan internasional demi memberikan layanan bantuan 24 jam penuh di berbagai zona waktu bagi seluruh klien kami.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    85+ Talenta Global
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-blue-600/40 shadow-md shadow-blue-500/5 flex flex-col justify-between relative" data-aos="zoom-in" data-aos-delay="400">
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-600">Kini</div>
                    <div className="inline-block px-2.5 py-0.5 mt-1 rounded bg-blue-100/80 text-blue-800 text-xs font-bold">
                      Era Enterprise &amp; AI
                    </div>
                    <h4 className="font-bold text-slate-900 mt-4 text-base">140+ Ahli Terpadu</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Mendukung lebih dari 60 institusi ternama di bidang teknologi finansial, kesehatan digital, dan platform kecerdasan buatan terapan.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-blue-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Terus Bertumbuh Bersama
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: BUDAYA KERJA */}
        <section className="py-20 bg-[#F8FAFF]" id="budaya">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <div className="rounded-3xl bg-linear-to-r from-blue-700 via-blue-600 to-sky-600 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/20" data-aos="fade-up">
                <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-16 -top-16 w-72 h-72 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-semibold mb-4 border border-white/20">
                      <span className="material-symbols-outlined text-sm">sentiment_very_satisfied</span>
                      Budaya Kerja Inklusif &amp; Kolaboratif
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
                      Tumbuh dan Berkembang Bersama CodeLens
                    </h2>
                    <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                      Kami percaya bahwa inovasi hebat lahir dari lingkungan kerja yang suportif, saling menghargai, dan menjunjung keseimbangan hidup. Di sini, setiap suara didengar dan setiap kontribusi diapresiasi.
                    </p>
                    <div className="flex flex-wrap gap-2.5 mt-6">
                      <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-sky-200">check_circle</span>
                        Waktu Kerja Fleksibel &amp; WFH
                      </span>
                      <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-sky-200">check_circle</span>
                        Tunjangan Riset &amp; Sertifikasi
                      </span>
                      <span className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-sky-200">check_circle</span>
                        Asuransi Kesehatan Keluarga Lengkap
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                    <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-800 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center">
                      <span>Lihat Lowongan Terbuka</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 transition-all text-center">
                      <span>Buku Panduan Budaya Tim</span>
                      <span className="material-symbols-outlined text-base">auto_stories</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
