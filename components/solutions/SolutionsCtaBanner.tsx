"use client";

import CtaBanner from "@/components/ui/CtaBanner";
import { useI18n } from "@/lib/i18n";

export default function SolutionsCtaBanner() {
  const { t } = useI18n();
  return (
    <CtaBanner
      heading={t("cta3h")}
      subtext={t("cta3p")}
      buttonLabel={t("cta3b")}
    />
  );
}
