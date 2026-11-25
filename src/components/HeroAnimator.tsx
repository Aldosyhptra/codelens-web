"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

// Kartu status di hero beranda: fade + naik. Judul ditangani TitleReveal.
export default function HeroAnimator() {
  useEffect(() => {
    const root = document.querySelector("[data-hero-root]");
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("js-anim");
      return;
    }

    const card = root.querySelectorAll('[data-hero="fade"]');
    const tween = gsap.fromTo(
      card,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.35, ease: "power3.out" },
    );

    // Penanda untuk skrip di layout: kalau komponen ini tidak pernah jalan, skrip itu
    // melepas .js-anim setelah 3 detik supaya kartu tidak tersembunyi selamanya.
    document.documentElement.dataset.hero = "siap";

    return () => {
      tween.kill();
    };
  }, []);

  return null;
}
