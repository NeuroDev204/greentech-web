"use client";

import { useI18n } from "@/lib/i18n";

const inverters = ["Huawei Solar", "SMA", "Sungrow", "Growatt", "Fronius", "GoodWe"];
const modules = ["JA Solar", "LONGi", "Jinko Solar", "Canadian Solar", "Trina Solar"];

export default function PartnersSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight leading-tight mb-3">
          {t("ptTtl")}
        </h2>
        <p className="text-[15px] text-gray-500 max-w-xl leading-relaxed mb-12">{t("ptDsc")}</p>

        <div className="space-y-10">
          {/* Inverters */}
          <div>
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
              {t("pt1l")}
            </div>
            <div className="flex flex-wrap gap-3">
              {inverters.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-3 rounded-xl border border-gray-200 bg-white text-[13px] font-semibold text-gray-600 hover:border-green-300 hover:text-green-700 hover:shadow-sm transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <div>
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
              {t("pt2l")}
            </div>
            <div className="flex flex-wrap gap-3">
              {modules.map((brand) => (
                <div
                  key={brand}
                  className="px-5 py-3 rounded-xl border border-gray-200 bg-white text-[13px] font-semibold text-gray-600 hover:border-green-300 hover:text-green-700 hover:shadow-sm transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Chemicals */}
          <div>
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
              {t("pt3l")}
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-3 rounded-xl border-2 border-green-500 bg-green-50 text-[13px] font-bold text-green-700 shadow-sm shadow-green-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {t("chemiPb")}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
          {[
            { num: "500+",    label: "Dự án hoàn thành" },
            { num: "10+",     label: "Năm kinh nghiệm" },
            { num: "50 MWp+", label: "Công suất lắp đặt" },
            { num: "18",      label: "PV manufacturers approved" },
          ].map(({ num, label }) => (
            <div key={num} className="text-center">
              <div className="text-[36px] font-black text-green-600 leading-none mb-1">{num}</div>
              <div className="text-[12px] text-gray-400 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
