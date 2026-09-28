# CodeLens

Situs web resmi CodeLens — solusi rekayasa perangkat lunak terpercaya.

## Deskripsi

CodeLens adalah perusahaan yang menyediakan layanan rekayasa perangkat lunak meliputi:
- Pengembangan Web & Aplikasi Modern
- Arsitektur Cloud & DevOps
- Integrasi Kecerdasan Buatan (AI)
- Keamanan Sistem & Pemeliharaan 24/7

## Teknologi

- **Next.js 16** — App Router
- **React 19** — UI Framework
- **Tailwind CSS v4** — Styling
- **AOS** — Animate On Scroll
- **TypeScript** — Type Safety

## Struktur Project

- `src/app/` — Halaman Next.js App Router (home, layanan, portfolio, kontak, tentang-kami)
- `src/components/` — Komponen reusable (Navbar, Footer, AosInitializer)
- `src/lib/` — Utility (imageCache.ts)
- `src/app/sitemap.ts`, `src/app/robots.ts` — SEO
- `next.config.ts` — Konfigurasi Next.js (remote image patterns)

## Install & Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```
