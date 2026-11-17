"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "novaPay",
    category: "keuangan",
    isFeatured: true,
    tag: "Keuangan & Perbankan Digital",
    badge: "Studi Kasus Unggulan",
    title: "NovaPay - Transformasi Sistem Pembayaran Digital Skala Besar",
    desc: "Sebelumnya NovaPay menghadapi kendala transaksi yang tersendat saat lonjakan promosi belanja online. CodeLens merancang ulang arsitektur pemrosesan pembayaran menjadi terdistribusi, aman, dan tanpa hambatan dengan latensi super rendah di setiap transaksi.",
    metrics: [
      { value: "4x Lipat", label: "Kecepatan Transaksi", sub: "Kapasitas naik pesat" },
      { value: "99.99%", label: "Uptime Terjamin", sub: "Tanpa henti saat flash sale" },
      { value: "38% Lebih Hemat", label: "Biaya Operasional", sub: "Optimalisasi infrastruktur" },
    ],
    clientQuote: "CodeLens berhasil menyulap sistem pembayaran kami menjadi jauh lebih tangguh.",
    clientName: "Marcus Vance - Kepala Arsitektur Pembayaran NovaPay",
    systemSteps: [
      { icon: "touch_app", label: "Transaksi Masuk Pengguna", status: "< 10 ms", statusColor: "text-emerald-600" },
      { icon: "sync_saved_locally", label: "Validasi Enkripsi", status: "Terenkripsi", statusColor: "text-emerald-600" },
      { icon: "task_alt", label: "Penyelesaian Saldo", status: "Instan", statusColor: "text-primary text-blue-600" },
    ],
    image: "/images/beranda/1.jpg",
  },
  {
    id: "aegisHealth",
    category: "kesehatan",
    tag: "Kesehatan",
    title: "Aegis Health - Sistem Rekam Medis Digital Terenkripsi",
    desc: "Platform rekam medis digital terenkripsi lengkap dengan asisten AI pintar untuk membantu tenaga medis mendokumentasikan diagnosis lebih cepat.",
    metrics: [
      { value: "-70%", label: "Waktu Pencatatan Dokter", sub: "Dokumentasi lebih cepat" },
      { value: "100%", label: "Kepatuhan Privasi Data", sub: "Standar tertinggi" },
    ],
    tags: ["Enkripsi End-to-End", "AI Retrieval", "Cloud Terpadu"],
    image: "/images/beranda/1.jpg",
  },
  {
    id: "omniFlow",
    category: "logistik",
    tag: "Logistik",
    title: "OmniFlow - Pelacakan Logistik Real-Time",
    desc: "Sistem pemantauan armada pintar untuk melacak 140.000 titik transportasi darat dan maritim.",
    metrics: [
      { value: "2.4 Juta", label: "Sinyal GPS", sub: "Telemetri real-time" },
      { value: "0%", label: "Data Hilang", sub: "Zero data loss" },
    ],
    tags: ["IoT Streaming", "Peta Interaktif"],
    image: "/images/beranda/1.jpg",
  },
  {
    id: "mitraRetail",
    category: "ecommerce",
    tag: "E-Commerce",
    title: "MitraRetail - Platform E-Commerce Cepat",
    desc: "Pengembangan ulang toko daring multi-cabang dengan kecepatan muat halaman kurang dari 1 detik.",
    metrics: [
      { value: "< 0.8 dtk", label: "Kecepatan Muat", sub: "Performa optimal" },
      { value: "+45%", label: "Kenaikan Penjualan", sub: "Konversi meningkat" },
    ],
    tags: ["Headless Commerce", "Auto-Scale Cloud"],
    image: "/images/beranda/1.jpg",
  },
];

/**
 * Daftar kategori filter untuk studi kasus.
 * @type {Array<{label: string, filter: string}>}
 */
const filterCategories = [
  { label: "Semua Proyek", filter: "all" },
  { label: "Keuangan & Perbankan", filter: "keuangan" },
  { label: "Kesehatan", filter: "kesehatan" },
  { label: "Logistik & Transportasi", filter: "logistik" },
  { label: "E-Commerce", filter: "ecommerce" },
];

/**
 * Data perbandingan dampak sebelum dan sesudah CodeLens.
 * @type {Array<{icon: string, label: string, before: string, after: string, benefit: string}>}
 */
const comparisonData = [
  { icon: "rocket_launch", label: "Kecepatan Rilis Aplikasi", before: "2-3 minggu per pembaharuan", after: "Tiap hari dengan otomasi penuh", benefit: "8x Lebih Cepat Meluncur ke Pasar" },
  { icon: "check_circle", label: "Waktu Henti Server", before: "Sering tumbang saat trafik tinggi", after: "Berkurang drastis hingga 99.99%", benefit: "Bebas Gangguan Jam Sibuk" },
  { icon: "build_circle", label: "Kemudahan Pemeliharaan", before: "Struktur kode rumit", after: "Arsitektur modular dan rapi", benefit: "Biaya Perawatan Turun 40%" },
];

/**
 * Halaman Portfolio — CodeLens
 * @description Halaman portofolio dengan state client (useState).
 * @client Komponen client karena menggunakan useState.
 */
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredCaseStudies = caseStudies.filter((cs) => {
    if (activeFilter === "all") return true;
    if (cs.isFeatured) return true;
    return cs.category === activeFilter;
  });

  return (
    <div className="flex flex-col flex-1 items-center font-sans text-on-surface bg-[#F8FAFC] w-full overflow-x-hidden">
      <section className="relative w-full py-8 md:pt-14 md:pb-10 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-blue-100/40 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Rekam Jejak Solusi Nyata
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-[1.2]">
              Portofolio &amp; Studi Kasus <span className="text-blue-600">Nyata</span>
            </h1>
            <p className="mt-6 text-md sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Pelajari bagaimana kami membantu berbagai perusahaan menyelesaikan tantangan teknologi.
            </p>
            <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-12 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">50+</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Sistem Enterprise Selesai</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">99.99%</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Rata-rata Uptime Produksi</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">4x Lipat</div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Peningkatan Efisiensi Rata-rata</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4">
        <div className="w-full px-4 md:px-8 lg:px-16 flex justify-center">
          <div className="w-full md:w-md flex flex-wrap justify-center items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80" id="filter-container">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.filter;
              return (
                <button key={cat.filter} className={`w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${isActive ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-900 hover:bg-white/60"}`} data-filter={cat.filter} onClick={() => handleFilter(cat.filter)}>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {filteredCaseStudies.filter((cs) => cs.isFeatured).map((featured) => (
        <section key={featured.id} className="w-full py-10" data-aos="fade-up">
          <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center">
            <article className="w-full rounded-3xl bg-white border border-blue-100 p-6 sm:p-8 md:p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden transition-all" data-aos="zoom-in">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 md:w-72 md:h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center relative z-10">
                <div className="lg:col-span-7 w-full space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">{featured.badge}</span>
                    <span className="px-3 py-1 rounded-full text-blue-600 bg-blue-50 text-xs font-semibold whitespace-nowrap">{featured.tag}</span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">{featured.title}</h2>
                    <p className="text-base text-slate-600 leading-relaxed">{featured.desc}</p>
                  </div>
                  <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {featured.metrics.map((m, i) => (
                      <div key={m.label} className={`p-4 rounded-2xl border ${i === 0 ? "bg-blue-50/60 border-blue-100" : i === 1 ? "bg-sky-50/70 border-sky-100" : "bg-emerald-50/70 border-emerald-100"}`}>
                        <div className={`text-2xl font-extrabold ${i === 0 ? "text-blue-600" : i === 1 ? "text-sky-700" : "text-emerald-700"}`}>{m.value}</div>
                        <div className="text-xs font-bold text-slate-700 mt-1">{m.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                    <span className="material-symbols-outlined text-blue-600 text-2xl shrink-0 mt-0.5">format_quote</span>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-700 italic">&ldquo;{featured.clientQuote}&rdquo;</p>
                      <div className="text-xs font-semibold text-blue-600">{featured.clientName}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 w-full">
                  <div className="w-full bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-5">
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-700 truncate">Alur Sistem Pembayaran NovaPay</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shrink-0 whitespace-nowrap">Status Aktif</span>
                    </div>
                    <div className="w-full space-y-3 font-mono text-xs">
                      {featured.systemSteps?.map((step) => (
                        <div key={step.icon} className="w-full p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-2 shadow-sm">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="material-symbols-outlined text-blue-600 text-lg shrink-0">{step.icon}</span>
                            <span className="font-medium text-slate-800 truncate">{step.label}</span>
                          </div>
                          <span className={`font-semibold shrink-0 whitespace-nowrap ${step.statusColor}`}>{step.status}</span>
                        </div>
                      ))}
                      <div className="w-full flex justify-center text-slate-400">
                        <span className="material-symbols-outlined text-base">arrow_downward</span>
                      </div>
                    </div>
                    <div className="w-full pt-2 text-center">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
                        Telah diuji pada 50.000 transaksi bersamaan per detik
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}

      <section className="w-full py-10 bg-slate-50 border-slate-200/60" id="studi-kasus">
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Katalog Portofolio Pilihan</h3>
                <p className="text-slate-600 text-sm mt-1">Implementasi solusi modern yang teruji di berbagai sektor industri.</p>
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-6 items-center justify-center">
              {filteredCaseStudies.filter((cs) => !cs.isFeatured).map((cs, i) => (
                <article key={cs.id} className="max-w-md flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-6 hover:shadow-xl hover:border-blue-200 transition-all group" data-aos="zoom-in" data-aos-delay={i * 150}>
                  <div className="w-full space-y-5">
                    <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-100">
                      <Image alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={cs.image} width={800} height={400} />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold shadow-sm">{cs.tag}</span>
                    </div>
                    <div className="w-full space-y-2">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{cs.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.desc}</p>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-lg font-extrabold text-blue-700">{m.value}</div>
                          <div className="text-xs text-slate-600">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex flex-wrap gap-1.5 pt-1">
                      {cs.tags?.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Studi Kasus Teruji</span>
                    <a href="/portfolio#studi-kasus" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      Pelajari <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center">
          <div className="w-full max-w-7xl rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm space-y-6" data-aos="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Perbandingan Dampak Kerja Nyata</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Sebelum &amp; Sesudah Bersama CodeLens</h3>
                <p className="text-sm text-slate-600 mt-0.5">Perubahan terukur yang dialami oleh mitra teknologi kami.</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 self-start sm:self-auto">
                <span className="material-symbols-outlined text-base">assessment</span>
                Data Rata-Rata Seluruh Proyek
              </div>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="pb-3.5 font-bold">Fokus Kinerja</th>
                    <th className="pb-3.5 font-bold text-slate-500">Sebelum Bersama CodeLens</th>
                    <th className="pb-3.5 font-bold text-blue-600">Sesudah Bersama CodeLens</th>
                    <th className="pb-3.5 font-bold text-right text-emerald-700">Manfaat Langsung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row) => (
                    <tr key={row.label} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-2 font-bold text-slate-900 flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-lg">{row.icon}</span>
                        </span>
                        {row.label}
                      </td>
                      <td className="py-4 px-2 text-slate-500">{row.before}</td>
                      <td className="py-4 px-2 text-blue-600 font-semibold">{row.after}</td>
                      <td className="py-4 px-2 text-right font-bold text-emerald-600">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:pt-10 bg-transparent" id="kontak">
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center">
          <div className="w-full max-w-5xl rounded-3xl bg-linear-to-r from-blue-700 via-blue-800 to-indigo-800 p-6 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-xl" data-aos="zoom-in">
            <div className="w-full max-w-2xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                <span className="material-symbols-outlined text-sm">handshake</span>
                Kolaborasi Rekayasa Digital
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">Ingin membangun solusi serupa untuk bisnis Anda? Hubungi tim kami.</h2>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">Diskusikan kebutuhan aplikasi, platform, atau pembaruan infrastruktur Anda.</p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="/kontak#jadwal-cto" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-bold text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  Jadwalkan Konsultasi Gratis
                </a>
                <a href="#" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm text-center transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  Chat WhatsApp Tim Ahli
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

