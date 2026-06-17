"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { tagLabel } from "@/lib/tags";

export interface Product {
  abbr: string;
  nameKey: string;
  descKey: string;
  tags: string[];
  badge?: string;
  imgSrc: string;
  gallery: string[];
  featured?: boolean;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(0);

  // reset gallery selection whenever a new product opens
  useEffect(() => {
    setActive(0);
  }, [product]);

  // Esc to close + lock body scroll while open
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const images = product.gallery.length ? product.gallery : [product.imgSrc];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={product.nameKey}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-green-950/50 backdrop-blur-sm fade-up"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] clay fade-up">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-stone-600 hover:text-green-700 hover:bg-white transition-colors clay-sm cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Gallery */}
          <div className="p-5 sm:p-6">
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-[#f6f3ea]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[40px] font-black text-green-700/20">{product.abbr}</span>
              </div>
              <Image
                key={images[active]}
                src={images[active]}
                alt={`${product.nameKey} ${active + 1}`}
                fill
                className="object-contain z-10 p-5"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 z-20 text-[9px] font-bold tracking-wider text-white bg-green-600 px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2.5 mt-3">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActive(i)}
                    aria-label={`Ảnh ${i + 1}`}
                    className={`relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                      active === i ? "ring-2 ring-green-600" : "ring-1 ring-stone-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 sm:p-8 pt-2 md:pt-8">
            <div className="text-[11px] font-bold text-green-600 tracking-widest mb-1">{product.abbr}</div>
            <h3 className="text-[24px] font-black text-stone-800 leading-tight tracking-[-0.02em] mb-4">
              {product.nameKey}
            </h3>

            <div className="text-[10px] font-bold text-stone-400 tracking-[0.18em] uppercase mb-2">
              {t("chDetail")}
            </div>
            <p className="text-[14px] text-stone-600 leading-relaxed mb-6">{t(product.descKey)}</p>

            <ul className="flex flex-col gap-2.5 mb-7">
              {product.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 flex-shrink-0">
                    <Check size={11} strokeWidth={3} className="text-green-600" />
                  </span>
                  <span className="text-[12px] font-semibold tracking-wide text-stone-600">{tagLabel(tag, lang)}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={onClose}
              className="group mt-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-[14px] px-7 py-3.5 rounded-full transition-colors clay-sm cursor-pointer"
            >
              {t("chModalCta")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
