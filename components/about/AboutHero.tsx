"use client";

import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/ui/PageHero";

export default function AboutHero() {
  const { t } = useI18n();

  return (
    <PageHero
      label={t("abLbl")}
      title={t("abH")}
      subtitle={t("abP")}
      image="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=1400&q=75"
      imageAlt="GreenTech team"
    />
  );
}
