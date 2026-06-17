"use client";

import { Sun, Cpu, BatteryCharging, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SystemConfigs() {
  const { t, lang } = useI18n();

  const configs = [
    {
      icon: Sun,
      title: "Solar + Grid",
      dKey: "sy1d",
      tags: ["GRID-TIE", "NET METERING", "ROI NHANH"],
      highlights: ["Chi phí đầu tư thấp nhất", "ROI nhanh nhất", "Phù hợp lưới ổn định"],
      accentColor: "text-yellow-500",
      borderColor: "border-yellow-200",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Cpu,
      title: "Solar + Grid + Genset",
      dKey: "sy2d",
      tags: ["HYBRID", "ATS", "FUEL SAVING", "BACKUP POWER"],
      highlights: ["Không mất điện", "Tiết kiệm diesel", "ATS thông minh"],
      accentColor: "text-blue-500",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
    },
    {
      icon: BatteryCharging,
      title: "Solar + Grid + BESS + Genset",
      dKey: "sy3d",
      tags: ["BESS", "PEAK SHAVING", "TIME-OF-USE", "ISLANDING"],
      highlights: ["Peak shaving tối ưu", "Time-of-Use optimization", "Tự chủ năng lượng"],
      accentColor: "text-green-600",
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
      featured: true,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#f6f3ea] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-1/4 w-[26rem] h-[26rem] blob bg-amber-100/40 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <SectionLabel>{t("syLbl")}</SectionLabel>
          <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-4">
            {t("syTtl")}
          </h2>
          <p className="text-[16px] text-stone-500 leading-relaxed">{t("syDsc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {configs.map(({ icon: Icon, title, dKey, tags, highlights, featured }) => (
            <div
              key={title}
              className={`
                group relative flex flex-col rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:clay
                ${featured
                  ? "bg-[#ece5d4] border-2 border-green-600 clay-sm hover:border-green-600"
                  : "bg-[#f1ece0] border border-stone-300/70 hover:bg-[#ece5d4] hover:border-green-500"
                }
              `}
            >
              <div className="relative flex flex-col flex-1 p-8">
                {featured && (
                  <span className="inline-flex self-start items-center text-[10px] font-bold tracking-widest text-green-900 bg-amber-300 px-3 py-1 rounded-full mb-5">
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

                <div className="space-y-2.5 mb-6">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100">
                        <Check size={11} className="text-green-600" strokeWidth={3} />
                      </span>
                      <span className="text-[13px] text-stone-600">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-green-100 text-green-800"
                    >
                      {tagLabel(tag, lang)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
