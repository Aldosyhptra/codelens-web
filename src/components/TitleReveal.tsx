"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

// H1 halaman. Server render teks utuh (terlihat tanpa JS); setelah hidrasi kata dipecah
// dan naik satu per satu. useLayoutEffect berjalan sebelum paint, jadi tidak ada kedipan.
// Children statis (tidak re-render), jadi mutasi DOM ini aman.
export default function TitleReveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words: HTMLElement[] = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts: Text[] = [];
    while (walker.nextNode()) texts.push(walker.currentNode as Text);

    for (const t of texts) {
      const frag = document.createDocumentFragment();
      for (const part of (t.textContent ?? "").split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.append(part);
          continue;
        }
        const mask = document.createElement("span");
        mask.className = "inline-flex overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]";
        const word = document.createElement("span");
        word.className = "inline-block";
        word.textContent = part;
        mask.append(word);
        words.push(word);
        frag.append(mask);
      }
      t.replaceWith(frag);
    }

    const tween = gsap.fromTo(
      words,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.7, stagger: 0.07, ease: "power3.out" },
    );
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
