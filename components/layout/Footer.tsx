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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

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
              <a href="tel:+840337642691" className="flex items-center gap-2.5 text-[13px] hover:text-green-400 transition-colors">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                033 764 2691
              </a>
              <div className="flex items-center gap-2.5 text-[13px]">
                <MapPin size={14} className="text-green-500 flex-shrink-0" />
                Số 1B, Đường số 30, KP 27, P. An Khánh, TP.HCM
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
