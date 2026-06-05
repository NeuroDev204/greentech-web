"use client";

import CtaBanner from "@/components/ui/CtaBanner";
import { useI18n } from "@/lib/i18n";

export default function AboutCtaBanner() {
  const { t } = useI18n();
  return (
    <CtaBanner
      heading={t("cta4h")}
      subtext={t("cta4p")}
      buttonLabel={t("cta4b")}
    />
  );
}
