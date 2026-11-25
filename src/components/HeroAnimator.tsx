"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

// Timeline masuk hero beranda (GSAP core saja, tanpa plugin).
// Keadaan awal elemen [data-hero] diatur CSS `.js-anim` supaya tidak ada kedip:
// kelas itu dipasang skrip inline di layout hanya saat JS aktif dan reduced motion mati.
export default function HeroAnimator() {
  useEffect(() => {
    const root = document.querySelector("[data-hero-root]");
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("js-anim");
      return;
    }

    const targets = root.querySelectorAll("[data-hero]");
    if (!targets.length) return;

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return null;
}
