"use client";

import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/ui/PageHero";

export default function SolutionsHero() {
  const { t } = useI18n();

  return (
    <PageHero
      label={t("solPgLbl")}
      title={t("solPgH")}
      subtitle={t("solPgP")}
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=75"
      imageAlt="Solar solutions"
    />
  );
}
