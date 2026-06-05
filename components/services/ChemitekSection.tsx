"use client";

import Image from "next/image";
import { Award, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const removalProducts = [
  {
    abbr: "SWP",
    nameKey: "Solar Wash Protect",
    descKey: "c1d",
    tags: ["pH NEUTRAL", "ANTISTATIC", "BIODEGRADABLE", "18 PV APPROVED"],
    badge: "BESTSELLER",
    imgSrc: "https://images.prismic.io/chemitek-website/aLrQzmGNHVfTOspk_SWPNEWEN.png?auto=format,compress",
    featured: true,
  },
  {
    abbr: "CRA",
    nameKey: "Cement Removal Agent",
    descKey: "c2d",
    tags: ["CEMENT", "LIME", "SAFE ON GLASS"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRa2GNHVfTOsqD_CRA.png?auto=format,compress",
  },
  {
    abbr: "LRA",
    nameKey: "Lichen Removal Agent",
    descKey: "c3d",
    tags: ["LICHEN", "MOSS", "ARC SAFE"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRb2GNHVfTOsqI_LRA.png?auto=format,compress",
  },
  {
    abbr: "PRA",
    nameKey: "Paint Removal Agent",
    descKey: "c4d",
    tags: ["PAINT", "GENTLE", "COATING SAFE"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRdGGNHVfTOsqM_PRA.png?auto=format,compress",
  },
  {
    abbr: "MRA",
    nameKey: "Metal Oxides Removal Agent",
    descKey: "c5d",
    tags: ["METAL OXIDE", "INDUSTRIAL", "COASTAL"],
    imgSrc: "https://images.prismic.io/chemitek-website/aMGI3WGNHVfTO_oG_MRA.png?auto=format,compress",
  },
  {
    abbr: "WSA",
    nameKey: "Hard Water Scale Agent",
    descKey: "c6d",
    tags: ["HARD WATER", "SCALE", "MINERAL"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRgWGNHVfTOsqc_WSA.png?auto=format,compress",
  },
];

const coatingProducts = [
  {
    abbr: "ASA",
    nameKey: "Antistatic Solar Armor",
    descKey: "c7d",
    tags: ["TÜV SÜD", "ANTISTATIC", "LONG-LASTING", "NO-RINSE"],
    badge: "+5% ENERGY",
    imgSrc: "https://images.prismic.io/chemitek-website/aLrS4GGNHVfTOsrs_ASA.png?auto=format,compress",
    featured: true,
  },
  {
    abbr: "DSD",
    nameKey: "D-Solar Defendor",
    descKey: "c8d",
    tags: ["HYDROPHOBIC", "SELF-CLEANING", "HIGH HUMIDITY"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrS22GNHVfTOsro_D-Solar.png?auto=format,compress",
  },
  {
    abbr: "IGP",
    nameKey: "Mirtek / IGP Coating",
    descKey: "c9d",
    tags: ["CSP PLANT", "UTILITY SCALE", "UV RESISTANT"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrSC2GNHVfTOsrD_IGP-1-.png?auto=format,compress",
  },
];

function ProductCard({
  abbr,
  nameKey,
  descKey,
  tags,
  badge,
  imgSrc,
  featured,
}: (typeof removalProducts)[0]) {
  const { t } = useI18n();

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden border bg-white card-hover group
        ${featured ? "border-green-400 shadow-lg shadow-green-100" : "border-gray-100 shadow-sm"}
      `}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10 text-[9px] font-bold tracking-wider text-white bg-green-600 px-2.5 py-1 rounded-full shadow-sm">
          {badge}
        </div>
      )}

      {/* Product image */}
      <div className="relative h-52 overflow-hidden product-img-bg">
        {/* Fallback — sits behind the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[28px] font-black text-green-700 opacity-30">{abbr}</span>
        </div>
        <Image
          src={imgSrc}
          alt={nameKey}
          fill
          className="object-cover z-10 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      <div className="p-5">
        <div className="text-[10px] font-bold text-green-600 tracking-widest mb-1">{abbr}</div>
        <h4 className="text-[14px] font-bold text-gray-900 mb-2">{nameKey}</h4>
        <p className="text-[12px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {t(descKey)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChemitekSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full mb-4">
              <Award size={12} />
              {t("chBadge")}
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-black text-gray-900 tracking-tight leading-tight mb-3">
              {t("chH")}
            </h2>
            <p className="text-[14px] text-gray-500 leading-relaxed">{t("chIntro")}</p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center">
            <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-2">{t("certLbl")}</div>
            <div className="border-2 border-green-500 rounded-xl px-6 py-3 text-[15px] font-black text-green-700 shadow-sm shadow-green-100">
              TÜV SÜD
            </div>
          </div>
        </div>

        {/* Removal Agents */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap">
              {t("rmLbl")}
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {removalProducts.map((p) => (
              <ProductCard key={p.abbr} {...p} />
            ))}
          </div>
        </div>

        {/* Protective Coatings */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap">
              {t("ctLbl")}
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coatingProducts.map((p) => (
              <ProductCard key={p.abbr} {...p} />
            ))}
          </div>
        </div>

        {/* 2-step method note */}
        <div className="flex gap-4 bg-white border border-green-100 rounded-2xl p-6 shadow-sm">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mt-0.5">
            <Info size={16} className="text-green-600" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-gray-800 mb-1">Phương pháp 2 bước Chemitek</div>
            <p className="text-[13px] text-gray-500 leading-relaxed">{t("chNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
