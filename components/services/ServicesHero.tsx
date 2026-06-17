"use client";

import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/ui/PageHero";

export default function ServicesHero() {
  const { t } = useI18n();

  return (
    <PageHero
      label={t("svLbl")}
      title={t("svH")}
      subtitle={t("svP")}
      image="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1400&q=75"
      imageAlt="Solar services"
    />
  );
}
