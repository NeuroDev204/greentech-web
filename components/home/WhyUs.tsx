"use client";

import Image from "next/image";
import { ShieldCheck, Scale, RefreshCw, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [ShieldCheck, Scale, RefreshCw, Clock];

const itemImages = [
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=200&q=75",
  "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=200&q=75",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=200&q=75",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=75",
];

export default function WhyUs() {
  const { t } = useI18n();

  const items = [
    { num: "01", tKey: "why1t", dKey: "why1d" },
    { num: "02", tKey: "why2t", dKey: "why2d" },
    { num: "03", tKey: "why3t", dKey: "why3d" },
    { num: "04", tKey: "why4t", dKey: "why4d" },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 leading-tight tracking-tight mb-3">
              {t("whyTtl")}
            </h2>
            <p className="text-[15px] text-gray-500 max-w-lg leading-relaxed">
              {t("whyDsc")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ num, tKey, dKey }, i) => {
            const Icon = icons[i];
            return (
              <div
                key={num}
                className="flex flex-col p-5 rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-md hover:shadow-green-50 transition-all group"
              >
                {/* Small thumbnail */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 flex-shrink-0">
                  <Image
                    src={itemImages[i]}
                    alt={t(tKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Icon + number */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Icon size={16} className="text-green-600" />
                  </div>
                  <span className="text-[11px] font-black text-gray-200 select-none">{num}</span>
                </div>

                {/* Text */}
                <h3 className="text-[14px] font-bold text-gray-900 mb-1.5">{t(tKey)}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{t(dKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
