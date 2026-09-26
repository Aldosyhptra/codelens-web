import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan & Solusi", href: "/layanan" },
  { label: "Portofolio & Studi Kasus", href: "/portfolio" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak & Konsultasi", href: "/kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  const handleScroll = useCallback(() => {
    if (menuOpenRef.current) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white backdrop-blur-md border-b border-slate-100 transition-all shadow-sm ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-full px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/images/logo/logo2.png"
              alt="CodeLens"
              className="h-15 w-auto object-contain"
              width={100}
              height={100}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-bold"
                      : "hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/25 hover:shadow-lg transition-all"
            >
              <span>Jadwalkan Konsultasi</span>
            </Link>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col lg:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 transition-opacity duration-300 ease-in-out delay-100">
          <Link href="/" onClick={() => { closeMenu(); }} className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/logo2.png"
              alt="CodeLens"
              className="h-15 w-auto object-contain"
              width={100}
              height={100}
            />
          </Link>
          <button
            onClick={() => { closeMenu(); }}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-slate-700 text-xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 py-6 border-b border-slate-100 transition-opacity duration-500 ease-in-out delay-200">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => { closeMenu(); }}
                className={`block py-4 text-base font-semibold transition-colors border-b border-slate-50 last:border-0 cursor-pointer ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
                style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(12px)", transition: `opacity 0.3s ease ${0.15 + index * 0.06}s, transform 0.3s ease ${0.15 + index * 0.06}s` }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-6 pb-8 transition-opacity duration-500 ease-in-out delay-300">
          <Link
            href="/#kontak"
            onClick={() => { closeMenu(); }}
            className="block w-full text-center px-5 py-4 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all"
            style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(12px)", transition: `opacity 0.3s ease 0.4s, transform 0.3s ease 0.4s` }}
          >
            Jadwalkan Konsultasi
          </Link>
        </div>
      </div>
    </>
  );
}