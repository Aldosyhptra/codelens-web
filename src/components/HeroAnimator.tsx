"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

// Timeline masuk hero beranda (GSAP core saja, tanpa plugin).
// Judul hero dipecah per kata di page.tsx (span [data-word]); GSAP hanya mengangkatnya.
// Kata tidak memakai opacity 0 — elemen LCP tetap terlihat sejak paint pertama, hanya
// digeser dari dalam wadah overflow-hidden supaya animasinya tidak menahan LCP.
export default function HeroAnimator() {
  useEffect(() => {
    const root = document.querySelector("[data-hero-root]");
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("js-anim");
      return;
    }

    const words = root.querySelectorAll("[data-word]");
    const card = root.querySelectorAll('[data-hero="fade"]');

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (words.length) {
      // Posisi awal kata datang dari CSS (translateY 110%). GSAP hanya mengangkatnya ke 0 —
      // jangan pakai yPercent di sini: transform CSS sudah dalam piksel, jadi GSAP menghitung
      // nilai awalnya salah dan tween-nya berhenti di tempat.
      tl.to(words, { y: 0, duration: 0.7, stagger: 0.07 }, 0);
    }
    if (card.length) {
      tl.fromTo(card, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.35);
    }

    // Penanda untuk skrip di layout: kalau ini tidak pernah terpasang (chunk JS gagal),
    // skrip itu melepas .js-anim setelah 3 detik supaya judul tidak tersembunyi selamanya.
    document.documentElement.dataset.hero = "siap";

    return () => {
      tl.kill();
    };
  }, []);

  return null;
}
