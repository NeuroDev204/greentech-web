"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import ProductModal, { type Product } from "./ProductModal";
import { tagLabel } from "@/lib/tags";

const removalProducts: Product[] = [
  {
    abbr: "SWP",
    nameKey: "Solar Wash Protect",
    descKey: "c1d",
    tags: ["pH NEUTRAL", "ANTISTATIC", "BIODEGRADABLE", "18 PV APPROVED"],
    badge: "BESTSELLER",
    imgSrc: "https://images.prismic.io/chemitek-website/aLrQzmGNHVfTOspk_SWPNEWEN.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrQzmGNHVfTOspk_SWPNEWEN.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLm8uWGNHVfTOqj8_SWP.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLsCW2GNHVfTOtid_1.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLsCXmGNHVfTOtie_2.png?auto=format,compress",
    ],
    featured: true,
  },
  {
    abbr: "CRA",
    nameKey: "Cement Removal Agent",
    descKey: "c2d",
    tags: ["CEMENT", "LIME", "SAFE ON GLASS"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRa2GNHVfTOsqD_CRA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrRa2GNHVfTOsqD_CRA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLm8pWGNHVfTOqjv_CRA.png?auto=format,compress",
    ],
  },
  {
    abbr: "LRA",
    nameKey: "Lichen Removal Agent",
    descKey: "c3d",
    tags: ["LICHEN", "MOSS", "ARC SAFE"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRb2GNHVfTOsqI_LRA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrRb2GNHVfTOsqI_LRA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLm8smGNHVfTOqj2_LRA.png?auto=format,compress",
    ],
  },
  {
    abbr: "PRA",
    nameKey: "Paint Removal Agent",
    descKey: "c4d",
    tags: ["PAINT", "GENTLE", "COATING SAFE"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRdGGNHVfTOsqM_PRA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrRdGGNHVfTOsqM_PRA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/9d0a8da3-c850-4530-a8a3-c1b6e8ac4fc3_Before.jpg?auto=compress,format",
      "https://images.prismic.io/chemitek-website/20d4bd03-a99c-4587-9258-5b88c4193ff0_After.jpg?auto=compress,format",
    ],
  },
  {
    abbr: "MRA",
    nameKey: "Metal Oxides Removal Agent",
    descKey: "c5d",
    tags: ["METAL OXIDE", "INDUSTRIAL", "COASTAL"],
    imgSrc: "https://images.prismic.io/chemitek-website/aMGI3WGNHVfTO_oG_MRA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aMGI3WGNHVfTO_oG_MRA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aMGHKGGNHVfTO_mZ_MRA.png?auto=format,compress",
    ],
  },
  {
    abbr: "WSA",
    nameKey: "Water Softening Agent",
    descKey: "c6d",
    tags: ["HARD WATER", "SCALE", "MINERAL"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrRgWGNHVfTOsqc_WSA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrRgWGNHVfTOsqc_WSA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLm8vGGNHVfTOqj-_WSA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/e621f971-d604-4f9a-be52-c23ecd4a7aa4_22.png?auto=compress,format",
    ],
  },
];

const coatingProducts: Product[] = [
  {
    abbr: "ASA",
    nameKey: "Antistatic Solar Armor 2.0",
    descKey: "c7d",
    tags: ["TÜV SÜD", "ANTISTATIC", "LONG-LASTING", "NO-RINSE"],
    badge: "+5% ENERGY",
    imgSrc: "https://images.prismic.io/chemitek-website/aLrS4GGNHVfTOsrs_ASA.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrS4GGNHVfTOsrs_ASA.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/aLm8o2GNHVfTOqju_ASA2.0.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/1dd3de6c-0b82-4ab5-b38b-a80ac03b6e73_Untitled+design+%2843%29.png?auto=compress,format",
    ],
    featured: true,
  },
  {
    abbr: "DSD",
    nameKey: "D-Solar Defendor",
    descKey: "c8d",
    tags: ["HYDROPHOBIC", "SELF-CLEANING", "HIGH HUMIDITY"],
    imgSrc: "https://images.prismic.io/chemitek-website/aLrS22GNHVfTOsro_D-Solar.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aLrS22GNHVfTOsro_D-Solar.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/469970b4-c924-4367-bc90-c68ab792a884_8.png?auto=compress,format",
      "https://images.prismic.io/chemitek-website/5fe30e74-236d-47a3-aa4e-0565fdf6a4bb_9.png?auto=compress,format",
    ],
  },
  {
    abbr: "MTK",
    nameKey: "Mirtek — CSP Coating",
    descKey: "c9d",
    tags: ["CSP PLANT", "UTILITY SCALE", "REFLECTIVITY"],
    imgSrc: "https://images.prismic.io/chemitek-website/aMBTX2GNHVfTO2Fh_Bid%C3%B5essite-5-.png?auto=format,compress",
    gallery: [
      "https://images.prismic.io/chemitek-website/aMBTX2GNHVfTO2Fh_Bid%C3%B5essite-5-.png?auto=format,compress",
      "https://images.prismic.io/chemitek-website/8243e389-293a-444a-b73b-54e1a33b35fe_32.png?auto=compress,format",
      "https://images.prismic.io/chemitek-website/a3143b03-d0bf-4dab-8913-a46d996ab3d7_31.png?auto=compress,format",
    ],
  },
];

function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const { t, lang } = useI18n();
  const { abbr, nameKey, descKey, tags, badge, imgSrc, featured } = product;

  return (
    <button
      type="button"
      onClick={() => onOpen(product)}
      aria-label={nameKey}
      className={`
        group relative flex flex-col text-left rounded-[2rem] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:clay cursor-pointer
        ${featured ? "ring-2 ring-green-500 clay-sm" : "clay-sm"}
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

      <div className="flex flex-col flex-1 p-6">
        <div className="text-[10px] font-bold text-green-600 tracking-widest mb-1">{abbr}</div>
        <h4 className="text-[15px] font-bold text-stone-800 mb-2">{nameKey}</h4>
        <p className="text-[12.5px] text-stone-500 leading-relaxed mb-4 line-clamp-3">
          {t(descKey)}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium text-stone-500 bg-[#f6f3ea] px-2 py-0.5 rounded-full"
            >
              {tagLabel(tag, lang)}
            </span>
          ))}
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-green-700">
          {t("chDetail")}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </button>
  );
}

export default function ChemitekSection() {
  const { t } = useI18n();
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#f6f3ea] overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[26rem] h-[26rem] blob bg-amber-100/40 blur-2xl" />
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white text-[10px] font-bold tracking-[0.18em] px-4 py-2 rounded-full mb-5">
              <Award size={12} />
              {t("chBadge")}
            </div>
            <h2 className="text-[32px] sm:text-[46px] font-black text-stone-800 tracking-[-0.03em] leading-[1.03] mb-4">
              {t("chH")}
            </h2>
            <p className="text-[15px] text-stone-500 leading-relaxed">{t("chIntro")}</p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center">
            <div className="text-[10px] text-stone-400 tracking-widest uppercase mb-2">{t("certLbl")}</div>
            <div className="rounded-2xl px-7 py-3.5 text-[16px] font-black text-green-700 bg-white clay-sm">
              TÜV SÜD
            </div>
          </div>
        </div>

        {/* Removal Agents */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-stone-300/60" />
            <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase whitespace-nowrap">
              {t("rmLbl")}
            </span>
            <div className="h-px flex-1 bg-stone-300/60" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {removalProducts.map((p) => (
              <ProductCard key={p.abbr} product={p} onOpen={setActive} />
            ))}
          </div>
        </div>

        {/* Protective Coatings */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-stone-300/60" />
            <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase whitespace-nowrap">
              {t("ctLbl")}
            </span>
            <div className="h-px flex-1 bg-stone-300/60" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatingProducts.map((p) => (
              <ProductCard key={p.abbr} product={p} onOpen={setActive} />
            ))}
          </div>
        </div>

        {/* 2-step method note */}
        <div className="flex gap-4 bg-white rounded-[2rem] p-7 clay-sm">
          <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center mt-0.5">
            <Info size={16} className="text-green-700" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-stone-800 mb-1">Phương pháp 2 bước Chemitek</div>
            <p className="text-[13px] text-stone-500 leading-relaxed">{t("chNote")}</p>
          </div>
        </div>
      </div>

      {/* Product detail modal */}
      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
