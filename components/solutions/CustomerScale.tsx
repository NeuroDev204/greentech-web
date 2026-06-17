"use client";

import Image from "next/image";
import { Home, Factory, SunMedium } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CustomerScale() {
  const { t, lang } = useI18n();

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
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -right-24 w-[26rem] h-[26rem] blob bg-green-50 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <SectionLabel>{t("scLbl")}</SectionLabel>
          <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-4">
            {t("scTtl")}
          </h2>
          <p className="text-[16px] text-stone-500 leading-relaxed">{t("scDsc")}</p>
        </div>

        <div className="space-y-6">
          {scales.map(({ icon: Icon, tKey, dKey, tags, img }) => (
            <div
              key={tKey}
              className="group flex flex-col md:flex-row gap-0 rounded-[2rem] overflow-hidden bg-[#f8f6ef] border border-stone-300/70 transition-all duration-300 hover:bg-[#ece5d4] hover:border-green-500 hover:-translate-y-1.5 hover:clay"
            >
              {/* Image */}
              <div className="relative md:w-80 h-56 md:h-auto flex-shrink-0 overflow-hidden">
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
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-green-600">
                    <Icon size={19} className="text-green-700 transition-colors group-hover:text-white" strokeWidth={1.9} />
                  </div>
                  <h3 className="text-[18px] font-bold text-stone-800">{t(tKey)}</h3>
                </div>
                <p className="text-[14px] text-stone-500 leading-relaxed mb-5 max-w-2xl">{t(dKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-green-800 bg-green-100 px-2.5 py-1 rounded-full"
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
