"use client";

import { Sun, Cpu, BatteryCharging, Check } from "lucide-react";
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
    <section className="py-20 px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight leading-tight mb-3">
          {t("syTtl")}
        </h2>
        <p className="text-[15px] text-gray-500 max-w-2xl leading-relaxed mb-12">{t("syDsc")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {configs.map(({ icon: Icon, title, dKey, tags, highlights, accentColor, bgColor, borderColor, featured }) => (
            <div
              key={title}
              className={`
                relative rounded-2xl overflow-hidden transition-all card-hover
                ${featured
                  ? "bg-green-600 border-green-400 shadow-2xl shadow-green-200/70 scale-[1.02]"
                  : `bg-white border-2 ${borderColor} hover:shadow-lg hover:shadow-green-50 shadow-md`
                }
              `}
            >
              {/* Top accent band */}
              {!featured && (
                <div className={`h-1.5 w-full ${bgColor}`} />
              )}

              <div className="p-7">
                {featured && (
                  <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-green-100 bg-white/20 px-2.5 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}

                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5 shadow-sm
                  ${featured ? "bg-white/25" : `${bgColor} border border-white`}`}>
                  <Icon size={22} className={featured ? "text-white" : accentColor} strokeWidth={1.8} />
                </div>

                <h3 className={`text-[16px] font-bold mb-3 ${featured ? "text-white" : "text-gray-900"}`}>
                  {title}
                </h3>
                <p className={`text-[13px] leading-relaxed mb-6 ${featured ? "text-green-100" : "text-gray-500"}`}>
                  {t(dKey)}
                </p>

                <div className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
                        ${featured ? "bg-white/30" : `${bgColor}`}`}>
                        <Check size={10} className={featured ? "text-white" : accentColor} strokeWidth={3} />
                      </div>
                      <span className={`text-[12px] ${featured ? "text-green-100" : "text-gray-600"}`}>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full
                        ${featured ? "bg-white/20 text-green-100" : "bg-gray-100 text-gray-600 border border-gray-200"}
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
