"use client";

import Link from "next/link";

interface CtaBannerProps {
  heading: string;
  subtext: string;
  buttonLabel: string;
  href?: string;
}

export default function CtaBanner({
  heading,
  subtext,
  buttonLabel,
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section className="cta-band-bg py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-[22px] font-bold text-white leading-snug mb-2">
            {heading}
          </h2>
          <p className="text-[14px] text-green-100/80 leading-relaxed">{subtext}</p>
        </div>
        <Link
          href={href}
          className="flex-shrink-0 bg-white text-green-700 hover:bg-green-50 font-bold text-[13px] px-6 py-3 rounded-xl transition-colors shadow-lg"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
