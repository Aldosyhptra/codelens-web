import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CodeLens - Solusi Rekayasa Perangkat Lunak & Sistem Digital Terpercaya",
  description:
    "Kami mendampingi bisnis dan perusahaan dalam merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi AI.",
  icons: {
    icon: "/images/logo/logo2.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${plusJakarta.variable} antialiased`}>
      <head>
                            <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary selection:text-white">{children}</body>
    </html>
  );
}
