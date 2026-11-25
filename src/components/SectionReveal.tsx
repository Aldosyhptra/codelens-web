"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Heading h2 tiap section naik saat masuk viewport (sekali). Kartu isi tetap dipegang AOS.
// Dipasang sekali di layout; tanpa JS atau dengan reduced motion, heading tampil biasa.
export default function SectionReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const heads = document.querySelectorAll<HTMLElement>("section h2");
    const tweens = Array.from(heads).map((h) =>
      gsap.fromTo(
        h,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: h, start: "top 88%", once: true },
        },
      ),
    );

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return null;
}
