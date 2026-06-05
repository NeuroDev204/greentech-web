"use client";

import { Sun, Cpu, BatteryCharging, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useI18n } from "@/lib/i18n";

export default function SystemConfigs() {
  const { t } = useI18n();

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
    <section className="py-20 px-6 lg:px-8 bg-gray-950 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="[&>div]:bg-green-400 [&>span]:text-green-400">
          {t("syLbl")}
        </SectionLabel>
        <h2 className="text-[32px] sm:text-[40px] font-black text-white tracking-tight leading-tight mb-3">
          {t("syTtl")}
        </h2>
        <p className="text-[15px] text-gray-400 max-w-2xl leading-relaxed mb-12">{t("syDsc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {configs.map(({ icon: Icon, title, dKey, tags, highlights, accentColor, featured }) => (
            <div
              key={title}
              className={`
                relative rounded-2xl overflow-hidden transition-all
                ${featured
                  ? "bg-green-600 shadow-2xl shadow-green-900/50 scale-[1.02]"
                  : "bg-gray-900 border border-gray-800 hover:border-gray-700"
                }
              `}
            >
              {featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-300" />
              )}
              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${featured ? "bg-white/20" : "bg-gray-800"}`}>
                  <Icon size={22} className={featured ? "text-white" : accentColor} />
                </div>

                <h3 className={`text-[16px] font-bold mb-3 ${featured ? "text-white" : "text-gray-100"}`}>
                  {title}
                </h3>
                <p className={`text-[13px] leading-relaxed mb-6 ${featured ? "text-green-100" : "text-gray-400"}`}>
                  {t(dKey)}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${featured ? "bg-white/30" : "bg-gray-800"}`}>
                        <Check size={10} className={featured ? "text-white" : accentColor} strokeWidth={3} />
                      </div>
                      <span className={`text-[12px] ${featured ? "text-green-100" : "text-gray-400"}`}>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full
                        ${featured ? "bg-white/20 text-green-100" : "bg-gray-800 text-gray-500"}
                      `}
                    >
                      {tag}
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
