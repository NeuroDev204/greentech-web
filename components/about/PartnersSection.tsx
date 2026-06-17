"use client";

import { useI18n } from "@/lib/i18n";
import SectionLabel from "@/components/ui/SectionLabel";

const inverters = ["Huawei Solar", "SMA", "Sungrow", "Growatt", "Fronius", "GoodWe"];
const modules = ["JA Solar", "LONGi", "Jinko Solar", "Canadian Solar", "Trina Solar"];

export default function PartnersSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#f6f3ea] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] blob bg-green-100/50 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <SectionLabel>{t("ptLbl")}</SectionLabel>
          <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-4">
            {t("ptTtl")}
          </h2>
          <p className="text-[16px] text-stone-500 leading-relaxed">{t("ptDsc")}</p>
        </div>

        <div className="space-y-10">
          {/* Inverters */}
          <div>
            <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase mb-4">
              {t("pt1l")}
            </div>
            <div className="flex flex-wrap gap-3">
              {inverters.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-3 rounded-full bg-white text-[13px] font-semibold text-stone-600 clay-sm hover:text-green-700 hover:-translate-y-0.5 transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <div>
            <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase mb-4">
              {t("pt2l")}
            </div>
            <div className="flex flex-wrap gap-3">
              {modules.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-3 rounded-full bg-white text-[13px] font-semibold text-stone-600 clay-sm hover:text-green-700 hover:-translate-y-0.5 transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Chemicals */}
          <div>
            <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase mb-4">
              {t("pt3l")}
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-3 rounded-full bg-green-800 text-[13px] font-bold text-white clay-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-300" />
                {t("chemiPb")}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
