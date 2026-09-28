import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AosInitializer from "@/components/AosInitializer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeLens - Solusi Rekayasa Perangkat Lunak & Sistem Digital Terpercaya",
    template: "%s | CodeLens",
  },
  description:
    "Kami mendampingi bisnis dan perusahaan dalam merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi AI.",
  keywords: ["rekayasa perangkat lunak", "aplikasi web", "cloud computing", "AI", "pengembangan software", "konsultasi teknologi"],
  authors: [{ name: "CodeLens" }],
  creator: "CodeLens",
  publisher: "CodeLens",
  metadataBase: new URL("https://codelens.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://codelens.id",
    siteName: "CodeLens",
    title: "CodeLens - Solusi Rekayasa Perangkat Lunak & Sistem Digital Terpercaya",
    description:
      "Kami mendampingi bisnis dan perusahaan dalam merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi AI.",
    images: [
      {
        url: "/images/logo/logo2.png",
        width: 200,
        height: 200,
        alt: "CodeLens Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeLens - Solusi Rekayasa Perangkat Lunak & Sistem Digital Terpercaya",
    description:
      "Kami mendampingi bisnis dan perusahaan dalam merancang, membangun, dan mengembangkan perangkat lunak modern, sistem cloud tangguh, serta solusi AI.",
    creator: "@codelens",
    site: "@codelens",
  },
  icons: {
    icon: "/images/logo/logo2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" dir="ltr" className={`${plusJakarta.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary selection:text-white">
              <AosInitializer />
              <Navbar />
              {children}
              <Footer />
            </body>
    </html>
  );
}
