import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import CustomerScale from "@/components/solutions/CustomerScale";
import SystemConfigs from "@/components/solutions/SystemConfigs";
import SolutionsCtaBanner from "@/components/solutions/SolutionsCtaBanner";

export const metadata: Metadata = {
  title: "Giải pháp",
  description: "Giải pháp năng lượng solar tích hợp từ hộ dân đến khu công nghiệp — Solar + Grid, Hybrid, BESS.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <CustomerScale />
      <SystemConfigs />
      <SolutionsCtaBanner />
    </>
  );
}
