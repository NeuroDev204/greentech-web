import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ChemitekSection from "@/components/services/ChemitekSection";
import ServicesCtaBanner from "@/components/services/ServicesCtaBanner";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "EPC Trọn gói, O&M Vận hành bảo trì, TDD Thẩm định kỹ thuật và hóa chất Chemitek Solar.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ChemitekSection />
      <ServicesCtaBanner />
    </>
  );
}
