"use client";

import { Eye, Target, Heart, ShieldCheck, Clock, Leaf } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useI18n } from "@/lib/i18n";

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
      <section className="py-20 px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>{t("mvLbl")}</SectionLabel>
              <h2
                className="text-[32px] sm:text-[42px] font-black text-gray-900 tracking-tight leading-tight mb-8"
                dangerouslySetInnerHTML={{ __html: t("mvTtl").replace("\n", "<br/>") }}
              />
              <div className="space-y-6">
                {mvItems.map(({ icon: Icon, lKey, tKey, color, bg }) => (
                  <div key={lKey} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Icon size={18} className={color} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                        {t(lKey)}
                      </div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{t(tKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div>
              <SectionLabel>{t("cvLbl")}</SectionLabel>
              <h2 className="text-[28px] font-black text-gray-900 tracking-tight leading-tight mb-8 sr-only">
                Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map(({ tKey, dKey }, i) => {
                  const Icon = valueIcons[i];
                  return (
                    <div
                      key={tKey}
                      className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-sm transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                        <Icon size={16} className="text-green-600" />
                      </div>
                      <h3 className="text-[14px] font-bold text-gray-900 mb-2">{t(tKey)}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{t(dKey)}</p>
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
