"use client";

import CtaBanner from "@/components/ui/CtaBanner";
import { useI18n } from "@/lib/i18n";

export default function HomeCtaBanner() {
  const { t } = useI18n();
  return (
    <CtaBanner
      heading={t("cta1h")}
      subtext={t("cta1p")}
      buttonLabel={t("cta1b")}
    />
  );
}
