"use client";

import { ShieldCheck, Scale, RefreshCw, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionLabel from "@/components/ui/SectionLabel";

const icons = [ShieldCheck, Scale, RefreshCw, Clock];

export default function WhyUs() {
  const { t } = useI18n();

  const items = [
    { num: "01", tKey: "why1t", dKey: "why1d" },
    { num: "02", tKey: "why2t", dKey: "why2d" },
    { num: "03", tKey: "why3t", dKey: "why3d" },
    { num: "04", tKey: "why4t", dKey: "why4d" },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      {/* leaf-tone blob */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[26rem] h-[26rem] blob bg-green-50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <SectionLabel>{t("whyLbl")}</SectionLabel>
          <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 leading-[1.03] tracking-[-0.03em] mb-4">
            {t("whyTtl")}
          </h2>
          <p className="text-[16px] text-stone-500 leading-relaxed">{t("whyDsc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ num, tKey, dKey }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={num}
                className="group relative flex flex-col bg-[#f8f6ef] border border-stone-300/70 rounded-[2rem] p-7 transition-all duration-300 hover:bg-[#ece5d4] hover:border-green-500 hover:-translate-y-1.5 hover:clay"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center transition-colors group-hover:bg-green-600">
                    <Icon size={22} className="text-green-700 transition-colors group-hover:text-white" strokeWidth={1.9} />
                  </div>
                  <span className="text-[30px] font-black text-stone-400/80 select-none leading-none">{num}</span>
                </div>
                <h3 className="text-[17px] font-bold text-stone-800 mb-2 leading-snug">{t(tKey)}</h3>
                <p className="text-[13.5px] text-stone-500 leading-relaxed">{t(dKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
