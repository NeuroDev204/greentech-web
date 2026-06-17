"use client";

import Link from "next/link";
import { Sun, Cpu, BatteryCharging, ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SolutionsPreview() {
  const { t, lang } = useI18n();

  const cards = [
    {
      icon: Sun,
      title: "Solar + Grid",
      tags: ["GRID-TIE", "NET METERING"],
      dKey: "sol1d",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
    },
    {
      icon: Cpu,
      title: "Solar + Grid + Genset",
      tags: ["HYBRID", "ATS", "FUEL SAVING"],
      dKey: "sol2d",
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50",
    },
    {
      icon: BatteryCharging,
      title: "Solar + Grid + BESS + Genset",
      tags: ["BESS", "PEAK SHAVING", "ISLANDING"],
      dKey: "sol3d",
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
      featured: true,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[26rem] h-[26rem] blob bg-green-50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>{t("solLbl")}</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 leading-[1.03] tracking-[-0.03em] mb-4">
              {t("solTtl")}
            </h2>
            <p className="text-[16px] text-stone-500 leading-relaxed">{t("solDsc")}</p>
          </div>
          <Link
            href="/solutions"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold text-green-700 hover:text-green-600 transition-colors cursor-pointer"
          >
            Xem tất cả
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {cards.map(({ icon: Icon, title, tags, dKey, featured }) => (
            <div
              key={title}
              className={`
                group relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:clay
                ${
                  featured
                    ? "bg-[#ece5d4] border-2 border-green-600 clay-sm"
                    : "bg-[#f8f6ef] border border-stone-300/70 hover:bg-[#ece5d4] hover:border-green-500"
                }
              `}
            >
              {featured && (
                <span className="inline-flex self-start items-center gap-1.5 text-[10px] font-bold tracking-widest text-green-900 bg-amber-300 px-3 py-1 rounded-full mb-5">
                  RECOMMENDED
                </span>
              )}

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 transition-colors group-hover:bg-green-600">
                <Icon size={24} className="text-green-700 transition-colors group-hover:text-white" strokeWidth={1.8} />
              </div>

              <h3 className="text-[19px] font-bold mb-3 leading-snug text-stone-800">
                {title}
              </h3>
              <p className="text-[14px] leading-relaxed mb-6 text-stone-500">
                {t(dKey)}
              </p>

              <ul className="mt-auto flex flex-col gap-2.5">
                {tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-green-100">
                      <Check size={11} strokeWidth={3} className="text-green-600" />
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-stone-600">
                      {tagLabel(tag, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
