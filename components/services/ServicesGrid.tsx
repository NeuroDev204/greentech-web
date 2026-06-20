"use client";

import {
  Wrench,
  Settings,
  ClipboardCheck,
  Zap,
  Droplets,
  FileText,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";
import SectionLabel from "@/components/ui/SectionLabel";

const icons = [Wrench, Settings, ClipboardCheck, Zap, Droplets, FileText];
const tags = [
  "RESIDENTIAL · C&I · UTILITY",
  "PERIODIC · ON-SITE · REMOTE",
  "INDEPENDENT · INTL STD",
  "SUPPLY · B2B · PROJECT",
  "CHEMITEK · AUTHORIZED",
  "CONSULTING · GRID · PERMIT",
];

export default function ServicesGrid() {
  const { t, lang } = useI18n();

  const items = [
    { tKey: "sv1t", dKey: "sv1d" },
    { tKey: "sv2t", dKey: "sv2d" },
    { tKey: "sv3t", dKey: "sv3d" },
    { tKey: "sv4t", dKey: "sv4d" },
    { tKey: "sv5t", dKey: "sv5d" },
    { tKey: "sv6t", dKey: "sv6d" },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 w-[26rem] h-[26rem] blob bg-green-50 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <SectionLabel>{t("svcLbl")}</SectionLabel>
          <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-4">
            {t("svcTtl")}
          </h2>
          <p className="text-[16px] text-stone-500 leading-relaxed">{t("svcDsc")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ tKey, dKey }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={tKey}
                className="group flex flex-col p-8 rounded-[2rem] bg-green-100 border border-green-400 shadow-[0_0_20px_rgba(22,163,74,0.2)] transition-all duration-300 hover:bg-[#ece5d4] hover:border-green-500 hover:-translate-y-1.5 hover:clay"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center mb-6 transition-colors group-hover:bg-green-600">
                  <Icon size={22} className="text-white transition-colors group-hover:text-white" strokeWidth={1.9} />
                </div>
                <h3 className="text-[17px] font-bold text-stone-800 mb-2.5 leading-snug">{t(tKey)}</h3>
                <p className="text-[13.5px] text-stone-500 leading-relaxed mb-6">{t(dKey)}</p>
                <span className="mt-auto inline-block self-start text-[9px] font-bold tracking-widest text-green-800 bg-green-100 px-2.5 py-1 rounded-full">
                  {tagLabel(tags[i], lang)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
