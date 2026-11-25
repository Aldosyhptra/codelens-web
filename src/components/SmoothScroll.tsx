"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Smooth scroll global. Dimatikan bila pengguna meminta reduced motion.
// Lenis mengubah posisi scroll window langsung, jadi AOS & Anchors Next tetap jalan.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
