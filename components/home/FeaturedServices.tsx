"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";
import SectionLabel from "@/components/ui/SectionLabel";

const serviceImages = [
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=75",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=75",
  "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=75",
];

export default function FeaturedServices() {
  const { t, lang } = useI18n();

  const items = [
    { tag: "RESIDENTIAL · C&I · UTILITY", tKey: "sv1t", dKey: "sv1d", img: serviceImages[0] },
    { tag: "PERIODIC · ON-SITE · REMOTE", tKey: "sv2t", dKey: "sv2d", img: serviceImages[1] },
    { tag: "INDEPENDENT · INTL STD", tKey: "sv3t", dKey: "sv3d", img: serviceImages[2] },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#f6f3ea] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] blob bg-amber-100/40 blur-2xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel>{t("svcLbl")}</SectionLabel>
            <h2 className="text-[34px] sm:text-[48px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03]">
              {t("svcTtl")}
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold text-green-700 hover:text-green-600 transition-colors cursor-pointer"
          >
            {t("navServices")}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {items.map(({ tag, tKey, dKey, img }) => (
            <Link
              key={tKey}
              href="/services"
              className="group relative flex flex-col bg-white rounded-[2rem] p-3 clay-sm transition-all duration-300 hover:-translate-y-1.5 hover:clay cursor-pointer"
            >
              <div className="relative h-52 rounded-[1.5rem] overflow-hidden">
                <Image
                  src={img}
                  alt={t(tKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 left-3 text-[9px] font-bold tracking-widest text-green-800 bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {tagLabel(tag, lang)}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-[18px] font-bold text-stone-800 mb-2 leading-snug">{t(tKey)}</h3>
                <p className="text-[13.5px] text-stone-500 leading-relaxed line-clamp-3 mb-5">{t(dKey)}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-green-700 transition-colors group-hover:text-green-600">
                  {t("navServices")}
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
