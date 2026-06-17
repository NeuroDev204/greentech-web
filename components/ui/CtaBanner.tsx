"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";

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
    <section className="px-6 lg:px-8 py-20 bg-[#f6f3ea]">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] bg-green-800 px-8 sm:px-14 py-16 lg:py-20 clay">
        {/* organic blobs */}
        <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 blob bg-green-600/50 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 w-72 h-72 blob bg-green-900/50 blur-2xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 text-green-50 text-[11px] font-bold tracking-[0.16em] px-4 py-2 rounded-full mb-6">
              <Leaf size={13} className="text-amber-300" />
              GREENTECH SOLUTION
            </div>
            <h2 className="text-[30px] sm:text-[42px] font-black text-white leading-[1.05] tracking-[-0.03em] mb-4">
              {heading}
            </h2>
            <p className="text-[16px] text-green-100/85 leading-relaxed">{subtext}</p>
          </div>
          <Link
            href={href}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-200 text-green-900 font-bold text-[15px] px-8 py-4 rounded-full transition-colors clay-sm cursor-pointer"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
