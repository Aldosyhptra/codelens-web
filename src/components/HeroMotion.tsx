"use client";

import { Fragment, type ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";

// Judul hero: kata naik satu per satu dari balik wadah overflow-hidden.
// Hanya dipakai di section hero tiap halaman. `accent` = frasa yang diberi warna lain.
export function HeroTitle({
  text,
  accent,
  accentClass = "text-blue-600",
  className,
}: {
  text: string;
  accent?: string;
  accentClass?: string;
  className?: string;
}) {
  const i = accent ? text.indexOf(accent) : -1;
  const segments =
    i < 0
      ? [{ t: text, c: "" }]
      : [
          { t: text.slice(0, i), c: "" },
          { t: accent!, c: accentClass },
          { t: text.slice(i + accent!.length), c: "" },
        ];

  let n = 0;
  return (
    <MotionConfig reducedMotion="user">
      <h1 className={className}>
        {segments.map((seg, si) =>
          seg.t
            .split(/\s+/)
            .filter(Boolean)
            .map((word) => {
              const delay = n++ * 0.07;
              return (
                <Fragment key={`${si}-${delay}`}>
                  <span className="inline-flex overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                    <motion.span
                      className={`inline-block ${seg.c}`}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay, ease: "easeOut" }}
                    >
                      {word}
                    </motion.span>
                  </span>{" "}
                </Fragment>
              );
            }),
        )}
      </h1>
    </MotionConfig>
  );
}

// Blok di hero (kartu status) yang naik sedikit setelah judul. Tanpa fade supaya tidak
// menyembunyikan konten; hanya geser.
export function HeroBlock({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
