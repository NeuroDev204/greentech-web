"use client";

import { useI18n } from "@/lib/i18n";
import PageHero from "@/components/ui/PageHero";

export default function ContactHero() {
  const { t } = useI18n();

  return (
    <PageHero
      label={t("ctLbl2")}
      title={t("ctH")}
      subtitle={t("ctP")}
      image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=75"
      imageAlt="Contact GreenTech"
    />
  );
}
