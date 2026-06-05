"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function AboutHero() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=1400&q=75"
          alt="GreenTech team"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-[40px] sm:text-[56px] font-black text-white tracking-tight leading-tight mb-4">
          {t("abH")}
        </h1>
        <p className="text-[16px] text-gray-400 max-w-2xl leading-relaxed">{t("abP")}</p>
      </div>
    </section>
  );
}
