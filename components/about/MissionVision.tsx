"use client";

import { Eye, Target, Heart, ShieldCheck, Clock, Leaf } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionLabel from "@/components/ui/SectionLabel";

const valueIcons = [ShieldCheck, Eye, Clock, Leaf];

export default function MissionVision() {
  const { t } = useI18n();

  const mvItems = [
    { icon: Eye,    lKey: "viL", tKey: "viT", color: "text-blue-500",  bg: "bg-blue-50" },
    { icon: Target, lKey: "msL", tKey: "msT", color: "text-green-600", bg: "bg-green-50" },
    { icon: Heart,  lKey: "cmL", tKey: "cmT", color: "text-rose-500",  bg: "bg-rose-50" },
  ];

  const coreValues = [
    { tKey: "v1t", dKey: "v1d" },
    { tKey: "v2t", dKey: "v2d" },
    { tKey: "v3t", dKey: "v3d" },
    { tKey: "v4t", dKey: "v4d" },
  ];

  return (
    <>
      {/* Mission / Vision */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
        <div className="pointer-events-none absolute top-10 -left-24 w-[24rem] h-[24rem] blob bg-green-50 blur-2xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <SectionLabel>{t("mvLbl")}</SectionLabel>
              <h2
                className="text-[34px] sm:text-[46px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-10"
                dangerouslySetInnerHTML={{ __html: t("mvTtl").replace("\n", "<br/>") }}
              />
              <div className="space-y-7">
                {mvItems.map(({ icon: Icon, lKey, tKey, color, bg }) => (
                  <div key={lKey} className="flex gap-4">
                    <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon size={19} className={color} strokeWidth={1.9} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-1.5">
                        {t(lKey)}
                      </div>
                      <p className="text-[15px] text-stone-600 leading-relaxed">{t(tKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div>
              <SectionLabel>{t("cvLbl")}</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                {coreValues.map(({ tKey, dKey }, i) => {
                  const Icon = valueIcons[i];
                  return (
                    <div
                      key={tKey}
                      className="group bg-green-100 border border-green-400 shadow-[0_0_20px_rgba(22,163,74,0.2)] rounded-[2rem] p-7 transition-all duration-300 hover:bg-[#ece5d4] hover:border-green-500 hover:-translate-y-1.5 hover:clay"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                        <Icon size={18} className="text-white transition-colors group-hover:text-white" strokeWidth={1.9} />
                      </div>
                      <h3 className="text-[15px] font-bold text-stone-800 mb-2">{t(tKey)}</h3>
                      <p className="text-[13.5px] text-stone-500 leading-relaxed">{t(dKey)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
