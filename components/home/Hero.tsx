"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-[#f6f3ea]">
      {/* Organic blobs */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[34rem] h-[34rem] blob bg-green-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[30rem] h-[30rem] blob bg-amber-100/50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div
              className="fade-up inline-flex items-center gap-2 bg-white text-green-700 text-[11px] font-bold tracking-[0.16em] px-4 py-2 rounded-full clay-sm mb-8"
              style={{ animationDelay: "0ms" }}
            >
              <Leaf size={13} className="text-green-600" />
              {t("heroBadge")}
            </div>

            <h1
              className="fade-up text-[46px] sm:text-[62px] lg:text-[74px] font-black text-stone-800 leading-[0.98] tracking-[-0.035em]"
              style={{ animationDelay: "90ms" }}
            >
              {t("heroH1a")}
              <br />
              <span className="relative inline-block text-green-600">
                {t("heroH1b")}
                {/* hand-drawn underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12C60 4 130 4 180 9C220 13 270 11 297 5"
                    stroke="#84cc16"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="fade-up text-[17px] sm:text-[18px] text-stone-500 leading-relaxed max-w-md mt-9"
              style={{ animationDelay: "180ms" }}
            >
              {t("heroSub")}
            </p>

            <div
              className="fade-up flex flex-wrap gap-4 items-center mt-9"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-[15px] px-7 py-4 rounded-full transition-all clay-sm cursor-pointer"
              >
                {t("heroCta1")}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-stone-300 hover:border-green-500 text-stone-700 hover:text-green-700 font-semibold text-[15px] px-7 py-[14px] rounded-full transition-all cursor-pointer"
              >
                {t("heroCta2")}
              </Link>
            </div>
          </div>

          {/* Right — image + floating chips */}
          <div className="fade-up relative" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden clay">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80"
                alt="Solar panels field"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
