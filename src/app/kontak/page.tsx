"use client";

import { useState } from "react";
import Image from "next/image";

export default function KontakPage() {
  const [selectedProject, setSelectedProject] = useState<string>("app");
  const [selectedDuration, setSelectedDuration] = useState<string>("standar");

const projectTypes = [
    { type: "app", icon: "devices", title: "Aplikasi Baru", desc: "Mulai dari nol untuk aplikasi Web, iOS, atau Android modern.", rec: "3 - 5 Spesialis Engineer" },
    { type: "modernisasi", icon: "upgrade", title: "Peningkatan Sistem", desc: "Optimasi, restrukturisasi, & perbaikan sistem yang sudah ada.", rec: "2 - 4 Arsitek Cloud" },
    { type: "ai", icon: "smart_toy", title: "Integrasi AI & Otomasi", desc: "Implementasi bot cerdas, otomasi alur kerja, & model AI.", rec: "4 - 6 Machine Learning & Data Specialist" },
    { type: "audit", icon: "verified_user", title: "Konsultasi & Keamanan", desc: "Audit arsitektur, uji penetrasi, & kepatuhan keamanan digital.", rec: "2 Konsultan Keamanan Senior" },
  ];

const durations = [
    { key: "sprint", label: "1 - 3 Bulan", sub: "Cepat & MVP" },
    { key: "standar", label: "3 - 6 Bulan", sub: "Fase Lengkap" },
    { key: "panjang", label: "> 6 Bulan", sub: "Kapasitas Besar" },
  ];

  const selectedRec = projectTypes.find((p) => p.type === selectedProject)?.rec || "";

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-surface font-sans text-on-surface">
      <section className="w-full pt-28 pb-16 lg:pt-24 lg:pb-28 bg-[#F8FAFF] overflow-hidden">
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Respon Cepat Dalam 24 Jam
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-center max-w-3xl">
              Mari Diskusikan Ide &amp; <span className="text-blue-600">Kebutuhan Proyek</span> Anda
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-center max-w-2xl">
              Apakah Anda memiliki pertanyaan atau ingin estimasi awal? Tim konsultan kami siap membantu memberikan solusi terbaik secara gratis dan tanpa ikatan.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-10 lg:py-16 bg-[#F8FAFF]">
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <form
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-100 border border-slate-100"
                  data-aos="fade-up"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = {
                      jenisProyek: selectedProject,
                      targetWaktu: selectedDuration,
                      nama: e.currentTarget.namaLengkap.value,
                      email: e.currentTarget.emailBisnis.value,
                      perusahaan: e.currentTarget.perusahaan.value,
                      anggaran: e.currentTarget.anggaran.value,
                      detail: e.currentTarget.detailKebutuhan.value,
                    };
                    console.log("Data Form Siap Kirim:", formData);
                    alert("Terima kasih! Permintaan konsultasi Anda telah berhasil dikirim.");
                  }}
                >
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100" id="jadwal-cto" >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">calculate</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Kalkulator Estimasi Proyek</h2>
                        <p className="text-xs text-slate-500">Pilih kebutuhan Anda untuk mendapatkan gambaran awal</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Aktif
                    </span>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-slate-800 mb-3">1. Pilih Jenis Proyek Anda</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map((pt, i) => {
                        const isSelected = pt.type === selectedProject;
                        return (
                          <button key={pt.type} type="button" onClick={() => setSelectedProject(pt.type)} className={`project-card text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 group cursor-pointer ${isSelected ? "border-blue-500 bg-blue-100 text-blue-700 shadow-md shadow-blue-100/50" : "border-slate-100 hover:border-blue-200 hover:bg-slate-50/50"}`}>
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}>
                              <span className="material-symbols-outlined text-xl">{pt.icon}</span>
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-900">{pt.title}</h3>
                              <p className="text-xs text-slate-500 mt-0.5">{pt.desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-slate-800 mb-3">2. Estimasi Waktu Target Peluncuran</label>
                    <div className="grid grid-cols-3 gap-3">
                      {durations.map((d, i) => {
                        const isSelected = d.key === selectedDuration;
                        return (
                          <button key={d.key} type="button" onClick={() => setSelectedDuration(d.key)} className={`durasi-btn py-3 px-2 rounded-xl border-2 text-center transition-all cursor-pointer ${isSelected ? "border-blue-500 bg-blue-100" : "border-slate-100 hover:border-blue-200 hover:bg-slate-50/50"}`}>
                            <span className={`block text-sm font-bold ${isSelected ? "text-blue-700" : "text-slate-800"}`}>{d.label}</span>
                            <span className="text-[11px] text-slate-500">{d.sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Rekomendasi Tim Inti</span>
                      <span className="text-base font-bold text-blue-700">{selectedRec}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Waktu Mulai Riset</span>
                      <span className="text-base font-bold text-slate-800">Segera (3-5 Hari Kerja)</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Garansi Purna Jual</span>
                      <span className="text-base font-bold text-emerald-600">3 Bulan Penuh</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                    <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
                      Formulir Kontak Ringkas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Lengkap *</label>
                        <input name="namaLengkap" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all placeholder:text-slate-400" placeholder="Contoh: Budi Santoso" required type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Alamat Email Bisnis *</label>
                        <input name="emailBisnis" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all placeholder:text-slate-400" placeholder="budi@perusahaan.co.id" required type="email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Perusahaan / Organisasi</label>
                        <input name="perusahaan" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all placeholder:text-slate-400" placeholder="Contoh: PT Kreasi Solusi" type="text" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Perkiraan Anggaran</label>
                        <select name="anggaran" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all cursor-pointer">
                          <option value="fleksibel">Masih mencari saran / Diskusi Awal</option>
                          <option value="50-100">Rp 50 Juta - Rp 150 Juta</option>
                          <option value="150-300">Rp 150 Juta - Rp 400 Juta</option>
                          <option value="400+">&gt; Rp 400 Juta</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Ceritakan Singkat Kebutuhan Anda *</label>
                      <textarea name="detailKebutuhan" className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all placeholder:text-slate-400" placeholder="Tuliskan tujuan sistem, fitur yang diharapkan, atau kendala teknis yang sedang dihadapi..." required rows={3} />
                    </div>
                    <div className="pt-3">
                      <button className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
                        <span>Kirim Permintaan Konsultasi</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </button>
                      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">lock</span>
                        <span>Informasi Anda aman dan terlindungi oleh perjanjian kerahasiaan (NDA).</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full -mr-10 -mt-10 pointer-events-none" />
                  <div className="flex items-center gap-4 mb-4">
                    <Image alt="Elena Vance - CTO" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" src="/images/beranda/1.jpg" width={56} height={56} />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Elena Vance</h3>
                      <p className="text-xs text-blue-600 font-semibold">Chief Technology Officer (CTO)</p>
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        30 Menit Konsultasi Gratis
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">Punya ide spesifik dan ingin berdiskusi langsung secara teknis? Pilih slot jadwal yang paling cocok dengan agenda Anda.</p>
                  <div className="space-y-2 mb-4">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Pilihan Jadwal Terdekat</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { time: "Besok, 10:00 WIB", status: "Slot Tersedia" },
                        { time: "Besok, 14:30 WIB", status: "Slot Tersedia" },
                        { time: "Lusa, 11:00 WIB", status: "Slot Tersedia" },
                        { time: "Lusa, 15:00 WIB", status: "Slot Tersedia" },
                      ].map((slot, i) => (
                        <button key={i} className="p-2.5 rounded-xl border border-slate-200 text-left hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer" type="button" data-aos="fade-up" data-aos-delay={300 + i * 100}>
                          <span className="text-xs font-bold text-slate-800 block">{slot.time}</span>
                          <span className="text-[11px] text-blue-600 font-medium">{slot.status}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-2.5 px-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer" type="button" data-aos="fade-up" data-aos-delay="700">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    Buka Kalender Online Lengkap
                  </button>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-100 border border-slate-100" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600">contact_support</span>
                    Alamat Kantor &amp; Kontak Resmi
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">chat</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">WhatsApp &amp; Telepon</span>
                        <a className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors" href="https://wa.me/6281289001234" target="_blank">+62 812-8900-1234</a>
                        <p className="text-xs text-slate-500">Tersedia Senin - Jumat, 08:30 - 17:30 WIB</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">mail</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">Email Resmi</span>
                        <a className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors" href="mailto:halo@codelens.co.id">halo@codelens.co.id</a>
                        <p className="text-xs text-slate-500">Untuk proposal &amp; surat pengantar resmi</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-base">location_on</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">Alamat Kantor</span>
                        <p className="text-sm font-bold text-slate-800">Menara Sentra Digital Lantai 18</p>
                        <p className="text-xs text-slate-500">Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta 12190</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center mb-10" data-aos="fade-up">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Bantuan &amp; Transparansi</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Pertanyaan Umum (FAQ)</h2>
              <p className="text-sm text-slate-600 mt-2">Semua hal penting yang sering ditanyakan sebelum memulai kolaborasi proyek.</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "verified", iconBg: "bg-blue-50", iconColor: "text-blue-600", title: "Kepemilikan Hak Cipta (IP)", desc: "100% kode program (source code), desain grafis, basis data, dan dokumentasi menjadi hak milik penuh perusahaan Anda setelah serah terima selesai." },
                { icon: "health_and_safety", iconBg: "bg-emerald-50", iconColor: "text-emerald-600", title: "Garansi Setelah Rilis", desc: "Kami menyertakan garansi perbaikan bug dan pendampingan stabilitas server tanpa biaya tambahan hingga 3 bulan penuh pasca peluncuran resmi." },
                { icon: "sync_saved_locally", iconBg: "bg-amber-50", iconColor: "text-amber-600", title: "Proses Revisi & Pelaporan", desc: "Pengembangan dilakukan secara berkala (Agile/Sprint dua mingguan). Anda memiliki kontrol penuh untuk mengevaluasi dan mengajukan penyelarasan di setiap fase." },
              ].map((faq, i) => (
                <div key={faq.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={i * 150}>
                  <div className={`w-9 h-9 rounded-xl ${faq.iconBg} ${faq.iconColor} flex items-center justify-center mb-4`}>
                    <span className="material-symbols-outlined text-xl">{faq.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{faq.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

