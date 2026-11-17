import Image from "next/image";

export const metadata = {
  title: "Beranda — CodeLens: Solusi Rekayasa Perangkat Lunak Terpercaya",
  description:
    "CodeLens mendampingi bisnis dalam merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi AI dengan jaminan keamanan dan kinerja tinggi.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-surface font-sans text-on-surface">
      <main className="grow">
        {/* Hero Section */}
        <section className="relative w-full bg-linear-to-b from-[#F8FAFC] via-white to-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" data-aos="zoom-in">
              {/* Teks Hero */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6" >
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Mitra Rekayasa Perangkat Lunak Terpercaya
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                  Membangun Solusi Perangkat Lunak <span className="text-blue-600">Terpercaya</span> &amp; Skala Global
                </h1>
                <p className="text-md sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Kami mendampingi bisnis dan perusahaan Anda merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi kecerdasan buatan (AI) dengan jaminan keamanan dan kinerja tinggi.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="/kontak#jadwal-cto" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:scale-[1.01] transition-all">
                    <span>Konsultasi Gratis</span>
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </a>
                  <a href="#studi-kasus" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/40 font-semibold text-base transition-all shadow-sm">
                    <span className="material-symbols-outlined text-blue-600 text-xl">folder_open</span>
                    <span>Lihat Hasil Karya</span>
                  </a>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-200/70 flex flex-wrap justify-center items-center md:items-center gap-4 text-slate-600 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 text-lg">verified</span>
                    <span className="font-medium">Standar Kualitas Tertinggi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600 text-lg">speed</span>
                    <span className="font-medium">Performa Cepat &amp; Ringan</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <span className="material-symbols-outlined text-blue-600 text-lg">lock</span>
                    <span className="font-medium">Privasi &amp; Data Terlindungi</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100" data-aos="fade-left" data-aos-delay="300">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">insights</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">Status Sistem &amp; Layanan</h3>
                        <p className="text-xs text-slate-500">Pemantauan Waktu Nyata</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Aktif 100%
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                        <span>Kecepatan Respons Server</span>
                        <span className="text-blue-600 font-bold">12 ms (Sangat Cepat)</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full w-[94%]" />
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                        <span>Efisiensi Infrastruktur Cloud</span>
                        <span className="text-blue-600 font-bold">Optimal 98.4%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full w-[98%]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-blue-50 text-center">
                        <p className="text-xs font-semibold text-blue-700 mb-1">Skalabilitas</p>
                        <p className="text-lg font-bold text-slate-900">Otomatis</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-blue-50 text-center">
                        <p className="text-xs font-semibold text-blue-700 mb-1">Enkripsi Data</p>
                        <p className="text-lg font-bold text-slate-900">End-to-End</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-blue-600 text-sm">support_agent</span>
                      Dukungan Ahli 24/7
                    </span>
                    <span className="font-medium text-slate-700">Audit Arsitektur Lengkap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights & Metrik Utama */}
        <section className="w-full py-12 bg-[#F8FAFC] border-y border-slate-100">
          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: "verified", value: "99.9%", title: "Keandalan Sistem", desc: "Jaminan uptime tanpa kendala teknis" },
                { icon: "rocket_launch", value: "140+", title: "Proyek Sukses", desc: "Dirilis untuk UMKM hingga korporasi" },
                { icon: "workspace_premium", value: "10+ Tahun", title: "Pengalaman Industri", desc: "Praktik rekayasa digital berstandar" },
                { icon: "security", value: "100%", title: "Keamanan Terjamin", desc: "Sertifikasi &amp; kepatuhan privasi data" },
              ].map((item, i) => (
                <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left" data-aos="zoom-in" data-aos-delay={i * 150}>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <p className="text-xl lg:text-4xl font-extrabold text-blue-600 tracking-tight">{item.value}</p>
                  <p className="text-sm md:text-lg font-bold text-slate-900 mt-1">{item.title}</p>
                  <p className="text-xs md:text-md text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mitra & Kolaborator */}
        <section className="w-full py-10 bg-white">
          <div className="w-full justify-center px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Dipercaya oleh Perusahaan dan Inovator Teknologi Terkemuka</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70">
              {[
                { icon: "token", name: "VOLT DIGITAL" },
                { icon: "account_balance", name: "KINESIS PAY" },
                { icon: "database", name: "DATALIGHT ASIA" },
                { icon: "hub", name: "OCTANE SISTEM" },
                { icon: "cloud", name: "SYNAPSE CLOUD" },
              ].map((partner) => (
                <div key={partner.name} className="flex items-center gap-2 text-slate-700 font-bold text-md md:text-lg" data-aos="zoom-in">
                  <span className="material-symbols-outlined text-blue-600">{partner.icon}</span>
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan Unggulan */}
        <section className="w-full py-10 md:py-20 bg-[#F8FAFC]" id="layanan">
          <div className="w-full justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full flex justify-center mb-16">
              <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">Layanan Unggulan</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Solusi Rekayasa Digital Komprehensif</h2>
              <p className="text-slate-600 text-base sm:text-lg md:max-w-3/5 mt-4 mx-auto">Dari ide awal hingga implementasi produksi berskala besar, kami menghadirkan keahlian menyeluruh untuk mengakselerasi transformasi teknologi Anda.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "devices", title: "Pengembangan Web &amp; Aplikasi Modern", desc: "Membangun antarmuka web responsif, aplikasi mobile Android &amp; iOS berkinerja mulus dengan pengalaman pengguna yang ramah dan intuitif.", tags: ["Next.js, React, &amp; Flutter", "Desain Ramah Semua Usia"] },
                { icon: "cloud_sync", title: "Arsitektur Cloud &amp; DevOps", desc: "Infrastruktur awan otomatis, efisien biaya, dan berskala tinggi menggunakan Kubernetes, AWS, dan Google Cloud dengan waktu pemulihan instan.", tags: ["Otomasi CI/CD &amp; Docker", "Efisiensi Biaya Server hingga 40%"] },
                { icon: "psychology", title: "Integrasi Kecerdasan Buatan (AI)", desc: "Penerapan model bahasa cerdas (LLM), chatbot asisten pintar, otomasi dokumen, serta pemrosesan analitik prediktif untuk efisiensi tim Anda.", tags: ["Solusi AI Sesuai Kebutuhan Bisnis", "Otomasi Layanan Pelanggan Cerdas"] },
                { icon: "verified_user", title: "Keamanan Sistem &amp; Pemeliharaan", desc: "Audit keamanan menyeluruh, proteksi celah kerentanan data, serta pemeliharaan berkala untuk menjaga stabilitas sistem tetap 100% prima.", tags: ["Audit Celah &amp; Enkripsi Data", "Pemantauan Proaktif 24 Jam"] },
              ].map((service, i) => (
                <div key={service.title} className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group" data-aos="zoom-in" data-aos-delay={i * 200}>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify md:text-start">{service.desc}</p>
                  </div>
                  <ul className="text-xs text-slate-500 space-y-2 pt-4 border-t border-slate-100">
                    {service.tags.map((tag) => (
                      <li key={tag} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-base">check_circle</span>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studi Kasus Ringkas */}
        <section className="w-full py-20 bg-white" id="studi-kasus">
          <div className="w-full justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 md:mb-14">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Hasil Nyata</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">Studi Kasus &amp; Portofolio Unggulan</h2>
                              <p className="text-slate-600 text-base mt-2 max-w-xl">Lihat bagaimana kami mentransformasi sistem krusial klien menjadi solusi yang lebih cepat, aman, dan siap bertumbuh.</p>
              </div>
              <a href="/portfolio#studi-kasus" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors mt-4 md:mt-0 text-sm">
                <span>Pelajari Semua Studi Kasus</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:px-5">
              {[
                {
                  image: "/images/beranda/1.jpg",
                  tag: "Sektor Finansial &amp; Perbankan",
                  title: "Modernisasi Sistem Transaksi Real-Time untuk Layanan Finansial Nasional",
                  desc: "Kami merekayasa ulang sistem transaksi lama menjadi arsitektur microservices berbasis event-driven. Hasilnya, volume transaksi meningkat drastis tanpa risiko gangguan saat jam sibuk.",
                  metrics: [{ value: "+350%", label: "Kapasitas Proses" }, { value: "-60%", label: "Waktu Respons" }, { value: "0 Detik", label: "Downtime Migrasi" }],
                },
                {
                  image: "/images/beranda/1.jpg",
                  tag: "Teknologi Kesehatan (HealthTech)",
                  title: "Integrasi AI Otomatisasi Diagnostik Klinis dengan Keamanan Data Ketat",
                  desc: "Membangun platform analisis rekam medis terpadu menggunakan model AI cerdas yang berjalan langsung di jaringan privat rumah sakit guna menjaga kerahasiaan pasien secara mutlak.",
                  metrics: [{ value: "8.5 Detik", label: "Kecepatan Analisis" }, { value: "100%", label: "Privasi Terjaga" }, { value: "99.8%", label: "Akurasi Sistem" }],
                },
              ].map((caseStudy, i) => (
                <div key={caseStudy.title} className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 200}>
                  <div>
                    <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
                      <Image alt={caseStudy.title} className="w-full h-full object-cover" src={caseStudy.image} width={800} height={400} />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold shadow-sm">{caseStudy.tag}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">{caseStudy.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify md:text-start">{caseStudy.desc}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center p-4 rounded-xl bg-white border border-slate-200 text-center">
                    {caseStudy.metrics.map((m) => (
                      <div className="flex flex-col items-center" key={m.label}>
                        <p className="text-xl sm:text-2xl font-extrabold text-blue-600">{m.value}</p>
                        <p className="text-xs font-medium text-slate-500 mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimoni Klien */}
        <section className="w-full py-20 bg-[#F8FAFC]" id="tentang-kami">
          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl bg-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl flex flex-col md:flex-row items-center gap-8 lg:gap-12" data-aos="fade-up">
              <div className="flex-1">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" as string }}>star</span>
                  ))}
                  <span className="ml-2 text-xs font-bold text-blue-600 uppercase tracking-wider">Testimoni Klien Terverifikasi</span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed mb-6">&ldquo;CodeLens adalah mitra teknologi terbaik yang pernah kami ajak kerja sama. Komunikasi tim sangat ramah, transparan, dan sistem yang mereka bangun berjalan sangat stabil tanpa sekalipun mengalami kendala.&rdquo;</blockquote>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Dr. Alistair Vance</p>
                  <p className="text-sm font-medium text-blue-600">Chief Technology Officer &bull; Global Telemetry Corp</p>
                  <p className="text-xs text-slate-500 mt-0.5">Kerja sama skala enterprise sejak 2022</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white mb-3">
                  <Image alt="Foto Direktur Teknologi yang memberikan ulasan" className="w-full h-full object-cover" src="/images/beranda/1.jpg" width={200} height={200} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Mitra Resmi
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Ajakan Bertindak (CTA) */}
        <section className="w-full py-20 bg-white" id="kontak">
          <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl relative rounded-3xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-800 text-white p-10 sm:p-14 lg:p-16 shadow-2xl overflow-hidden text-center lg:text-left" data-aos="fade-up">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Konsultasi Tersedia Minggu Ini
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">Siap Membangun Sistem Digital yang Andal &amp; Aman?</h2>
                  <p className="text-blue-100 text-base sm:text-lg leading-relaxed">Diskusikan kebutuhan proyek Anda langsung dengan arsitek perangkat lunak senior kami. Kami siap memberikan masukan arsitektur teknis secara gratis tanpa komitmen apa pun.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                  <a href="/kontak#jadwal-cto" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 shadow-lg hover:scale-[1.02] transition-all">
                    <span>Jadwalkan Konsultasi Sekarang</span>
                    <span className="material-symbols-outlined text-xl">calendar_today</span>
                  </a>
                  <a href="/layanan" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-800/60 border border-white/20 text-white font-semibold text-base hover:bg-blue-800 transition-all">
                    <span>Lihat Layanan Kami</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
