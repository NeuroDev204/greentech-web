"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <Image
            src="/logo-mark.png"
            alt="GreenTech logo"
            width={36}
            height={36}
            priority
            className="w-9 h-9 rounded-lg object-contain"
          />
          <span className="text-[15px] font-bold text-gray-900 tracking-tight">
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
                  relative px-3 py-2 text-[13px] font-medium rounded-md transition-colors
                  ${isActive(href)
                    ? "text-green-700 bg-green-50"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {t(key)}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-green-600 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={toggle}
            className="hidden sm:flex items-center justify-center w-9 h-9 text-[11px] font-bold text-gray-500 border border-gray-200 rounded-full hover:border-green-400 hover:text-green-700 transition-colors"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            {t("navCta")}
          </Link>
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-3 space-y-1">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors
                  ${isActive(href)
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {t(key)}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-2">
              <button
                onClick={toggle}
                className="flex items-center justify-center w-9 h-9 text-[11px] font-bold text-gray-500 border border-gray-200 rounded-full"
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center bg-green-600 text-white text-[13px] font-semibold px-4 py-2.5 rounded-lg"
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
