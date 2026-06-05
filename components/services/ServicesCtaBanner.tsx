"use client";

import CtaBanner from "@/components/ui/CtaBanner";
import { useI18n } from "@/lib/i18n";

export default function ServicesCtaBanner() {
  const { t } = useI18n();
  return (
    <CtaBanner
      heading={t("cta2h")}
      subtext={t("cta2p")}
      buttonLabel={t("cta2b")}
    />
  );
}
