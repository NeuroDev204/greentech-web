"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { useI18n } from "@/lib/i18n";

export default function ContactHero() {
  const { t } = useI18n();

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-950 border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="[&>span]:text-green-400">
          {t("ctLbl2")}
        </SectionLabel>
        <h1 className="text-[40px] sm:text-[56px] font-black text-white tracking-tight leading-tight mb-4">
          {t("ctH")}
        </h1>
        <p className="text-[16px] text-gray-400 max-w-xl leading-relaxed">{t("ctP")}</p>
      </div>
    </section>
  );
}
