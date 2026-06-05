"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useI18n } from "@/lib/i18n";

const serviceImages = [
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=75",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=75",
  "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=75",
];

export default function FeaturedServices() {
  const { t } = useI18n();

  const items = [
    { tag: "RESIDENTIAL · C&I · UTILITY", tKey: "sv1t", dKey: "sv1d", img: serviceImages[0] },
    { tag: "PERIODIC · ON-SITE · REMOTE",  tKey: "sv2t", dKey: "sv2d", img: serviceImages[1] },
    { tag: "INDEPENDENT · INTL STD",        tKey: "sv3t", dKey: "sv3d", img: serviceImages[2] },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>{t("svcLbl")}</SectionLabel>
            <h2 className="text-[32px] sm:text-[40px] font-black text-gray-900 tracking-tight leading-tight">
              {t("svcTtl")}
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-green-700 hover:text-green-600 transition-colors"
          >
            {t("navServices")} <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ tag, tKey, dKey, img }) => (
            <div key={tKey} className="group relative rounded-2xl overflow-hidden border border-gray-100 card-hover bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={img}
                  alt={t(tKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[9px] font-bold tracking-widest text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                  {tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{t(tKey)}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">{t(dKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
