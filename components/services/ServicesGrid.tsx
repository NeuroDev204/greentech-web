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
  const { t } = useI18n();

  const items = [
    { tKey: "sv1t", dKey: "sv1d" },
    { tKey: "sv2t", dKey: "sv2d" },
    { tKey: "sv3t", dKey: "sv3d" },
    { tKey: "sv4t", dKey: "sv4d" },
    { tKey: "sv5t", dKey: "sv5d" },
    { tKey: "sv6t", dKey: "sv6d" },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight leading-tight mb-3">
              {t("svcTtl")}
            </h2>
            <p className="text-[15px] text-gray-500 max-w-xl leading-relaxed">
              {t("svcDsc")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ tKey, dKey }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={tKey}
                className="group p-7 rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-md hover:shadow-green-50 transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
                  <Icon size={20} className="text-green-600" />
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{t(tKey)}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{t(dKey)}</p>
                <span className="inline-block text-[9px] font-bold tracking-widest text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                  {tags[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
