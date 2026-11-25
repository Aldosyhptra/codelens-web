"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const NAVBAR_OFFSET = -80;

// Smooth scroll global. Dimatikan bila pengguna meminta reduced motion.
// Lenis menulis posisinya sendiri ke window tiap frame, jadi setiap pindah halaman
// posisinya harus direset paksa — kalau tidak, halaman baru mendarat di koordinat lama.
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: NAVBAR_OFFSET } });
    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Halaman baru selalu mulai dari atas, kecuali URL membawa hash (#jadwal-cto).
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const reset = () => {
      const hash = window.location.hash;
      const target = hash ? document.querySelector(hash) : null;
      lenis.resize();
      lenis.scrollTo(target ?? 0, {
        immediate: true,
        force: true,
        offset: target ? NAVBAR_OFFSET : 0,
      });
    };

    // Dua pass: setelah Next selesai scroll restoration, lalu sekali lagi setelah
    // gambar/font termuat — tata letak bergeser dan posisi target ikut bergerak.
    const id = requestAnimationFrame(reset);
    const timer = setTimeout(reset, 400);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
