"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";

/** Render the title, coloring the "GreenTech" brand word like the navbar logo. */
function renderBrandTitle(title: string) {
  const parts = title.split("GreenTech");
  if (parts.length === 1) return title;
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <span key={`brand-${i}`}>
            Green<span className="text-green-600">Tech</span>
          </span>,
          part,
        ]
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ea]">
      {/* Organic blobs */}
      <div className="pointer-events-none absolute -top-28 -right-24 w-[30rem] h-[30rem] blob bg-green-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-28 w-[26rem] h-[26rem] blob bg-amber-100/50 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className={`grid gap-12 lg:gap-16 items-center ${image ? "lg:grid-cols-2" : ""}`}>
          {/* Copy */}
          <div>
            <div className="fade-up inline-flex items-center gap-2 bg-white text-green-700 text-[11px] font-bold tracking-[0.16em] px-4 py-2 rounded-full clay-sm mb-7">
              <Leaf size={13} className="text-green-600" />
              {label}
            </div>
            <h1
              className="fade-up text-[40px] sm:text-[56px] lg:text-[64px] font-black text-stone-800 tracking-[-0.035em] leading-[0.98] max-w-2xl"
              style={{ animationDelay: "90ms" }}
            >
              {renderBrandTitle(title)}
            </h1>
            <p
              className="fade-up text-[16px] sm:text-[18px] text-stone-500 max-w-xl leading-relaxed mt-7"
              style={{ animationDelay: "180ms" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Image */}
          {image && (
            <div className="fade-up relative" style={{ animationDelay: "200ms" }}>
              <div className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden clay">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/25 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
