"use client";

import Image from "next/image";
import { Home, Factory, SunMedium } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CustomerScale() {
  const { t } = useI18n();

  const scales = [
    {
      icon: Home,
      tKey: "sc1t",
      dKey: "sc1d",
      tags: ["3–20 kWp", "GRID-TIE", "EPC TRỌN GÓI"],
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    },
    {
      icon: Factory,
      tKey: "sc2t",
      dKey: "sc2d",
      tags: ["50 kWp – 5 MWp", "C&I", "EMS", "REMOTE MONITORING"],
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=75",
    },
    {
      icon: SunMedium,
      tKey: "sc3t",
      dKey: "sc3d",
      tags: [">5 MWp", "UTILITY", "EPC", "O&M CONTRACT"],
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight leading-tight mb-3">
          {t("scTtl")}
        </h2>
        <p className="text-[15px] text-gray-500 max-w-2xl leading-relaxed mb-12">{t("scDsc")}</p>

        <div className="space-y-5">
          {scales.map(({ icon: Icon, tKey, dKey, tags, img }) => (
            <div
              key={tKey}
              className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-green-200 hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="relative md:w-72 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={img}
                  alt={t(tKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-green-600" />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900">{t(tKey)}</h3>
                </div>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-4 max-w-2xl">{t(dKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full"
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
