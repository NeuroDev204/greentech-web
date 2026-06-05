"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt="Solar panels field"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
      </div>

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-950/60 border border-green-800/60 text-green-400 text-[10px] font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t("heroBadge")}
          </div>

          {/* Headline */}
          <h1 className="text-[56px] sm:text-[72px] lg:text-[88px] font-black text-white leading-[0.95] tracking-[-0.04em] mb-6">
            {t("heroH1a")}<br />
            <span className="text-green-400">{t("heroH1b")}</span>
          </h1>

          {/* Subtext */}
          <p className="text-[16px] sm:text-[18px] text-gray-400 leading-relaxed max-w-lg mb-10">
            {t("heroSub")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-green-900/40"
            >
              {t("heroCta1")}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-[14px] px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all"
            >
              {t("heroCta2")}
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
            {(
              [
                ["stat1n", "stat1l"],
                ["stat2n", "stat2l"],
                ["stat3n", "stat3l"],
                ["stat4n", "stat4l"],
              ] as [string, string][]
            ).map(([nk, lk]) => (
              <div key={nk} className="flex flex-col">
                <span className="text-[28px] font-black text-green-400 leading-none">{t(nk)}</span>
                <span className="text-[12px] text-gray-500 mt-1 leading-tight">{t(lk)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
