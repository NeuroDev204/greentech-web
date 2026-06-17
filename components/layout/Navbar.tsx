"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, toggle } = useI18n();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/",          key: "navHome" },
    { href: "/services",  key: "navServices" },
    { href: "/solutions", key: "navSolutions" },
    { href: "/about",     key: "navAbout" },
    { href: "/contact",   key: "navContact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#f6f3ea]/85 backdrop-blur-md border-b border-stone-200/70">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <Image
            src="/logo-mark.png"
            alt="GreenTech logo"
            width={44}
            height={44}
            priority
            className="w-11 h-11 rounded-lg object-contain"
          />
          <span className="text-[22px] font-bold text-stone-800 tracking-tight">
            Green<span className="text-green-600">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {links.map(({ href, key }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  relative px-4 py-2 text-[15px] font-medium rounded-full transition-colors
                  ${isActive(href)
                    ? "text-green-800 bg-green-100"
                    : "text-stone-500 hover:text-stone-800 hover:bg-white/70"
                  }
                `}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={toggle}
            className="hidden sm:flex items-center justify-center w-9 h-9 text-[11px] font-bold text-stone-500 border border-stone-300 rounded-full hover:border-green-500 hover:text-green-700 transition-colors cursor-pointer"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <Link
            href="/contact"
            className="group hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors clay-sm cursor-pointer"
          >
            {t("navCta")}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-200/70 bg-[#f6f3ea]">
          <div className="max-w-7xl mx-auto px-6 py-3 space-y-1">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-4 py-2.5 text-[14px] font-medium rounded-full transition-colors
                  ${isActive(href)
                    ? "text-green-800 bg-green-100"
                    : "text-stone-600 hover:text-stone-900 hover:bg-white/70"
                  }
                `}
              >
                {t(key)}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-stone-200/70 mt-2">
              <button
                onClick={toggle}
                className="flex items-center justify-center w-9 h-9 text-[11px] font-bold text-stone-500 border border-stone-300 rounded-full"
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center bg-green-600 text-white text-[13px] font-semibold px-4 py-2.5 rounded-full"
              >
                {t("navCta")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
