"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const links = [
    { href: "/",          label: t("navHome") },
    { href: "/services",  label: t("navServices") },
    { href: "/solutions", label: t("navSolutions") },
    { href: "/about",     label: t("navAbout") },
    { href: "/contact",   label: t("navContact") },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[16px] font-bold text-white">
                Green<span className="text-green-500">Tech</span> Solution
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed max-w-xs text-gray-500 mb-6">
              {t("abP")}
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@greentech.vn" className="flex items-center gap-2.5 text-[13px] hover:text-green-400 transition-colors">
                <Mail size={14} className="text-green-500 flex-shrink-0" />
                info@greentech.vn
              </a>
              <a href="tel:+84xxxxxxxxx" className="flex items-center gap-2.5 text-[13px] hover:text-green-400 transition-colors">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                +84 (0) xxx xxx xxx
              </a>
              <div className="flex items-center gap-2.5 text-[13px]">
                <MapPin size={14} className="text-green-500 flex-shrink-0" />
                Topaz Home 2, Block 2, TP. Thủ Đức, TP.HCM
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 border border-green-800 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-[12px] font-bold text-green-400">TÜV SÜD</span>
              </div>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                {t("chIntro").split(".")[0]}.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[12px] text-gray-600">{t("ftCopy")}</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[12px] hover:text-green-400 transition-colors">
              {t("ftPriv")}
            </Link>
            <Link href="/terms" className="text-[12px] hover:text-green-400 transition-colors">
              {t("ftTerms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
