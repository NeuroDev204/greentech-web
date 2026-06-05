"use client";

import Link from "next/link";
import { Sun, Cpu, BatteryCharging, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useI18n } from "@/lib/i18n";

export default function SolutionsPreview() {
  const { t } = useI18n();

  const cards = [
    {
      icon: Sun,
      title: "Solar + Grid",
      tags: ["GRID-TIE", "NET METERING"],
      dKey: "sol1d",
      color: "from-yellow-50 to-green-50",
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-50",
    },
    {
      icon: Cpu,
      title: "Solar + Grid + Genset",
      tags: ["HYBRID", "ATS", "FUEL SAVING"],
      dKey: "sol2d",
      color: "from-blue-50 to-green-50",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      icon: BatteryCharging,
      title: "Solar + Grid + BESS + Genset",
      tags: ["BESS", "PEAK SHAVING", "ISLANDING"],
      dKey: "sol3d",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
      featured: true,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel className="text-green-500 [&>span]:text-green-400">
              {t("solLbl")}
            </SectionLabel>
            <h2 className="text-[32px] sm:text-[40px] font-black text-white leading-tight tracking-tight mb-3">
              {t("solTtl")}
            </h2>
            <p className="text-[15px] text-gray-400 max-w-lg leading-relaxed">
              {t("solDsc")}
            </p>
          </div>
          <Link
            href="/solutions"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] font-semibold text-green-400 hover:text-green-300 transition-colors"
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, tags, dKey, iconColor, iconBg, featured }) => (
            <div
              key={title}
              className={`
                relative rounded-2xl p-7 border transition-all card-hover
                ${featured
                  ? "bg-green-600 border-green-500 shadow-xl shadow-green-900/40"
                  : "bg-gray-900 border-gray-800 hover:border-gray-700"
                }
              `}
            >
              {featured && (
                <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-green-200 bg-green-700/60 px-2.5 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${featured ? "bg-white/20" : iconBg}`}>
                <Icon size={20} className={featured ? "text-white" : iconColor} />
              </div>
              <h3 className={`text-[15px] font-bold mb-3 ${featured ? "text-white" : "text-gray-100"}`}>
                {title}
              </h3>
              <p className={`text-[13px] leading-relaxed mb-5 ${featured ? "text-green-100" : "text-gray-400"}`}>
                {t(dKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full
                      ${featured ? "bg-white/20 text-green-100" : "bg-gray-800 text-gray-500 border border-gray-700"}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
