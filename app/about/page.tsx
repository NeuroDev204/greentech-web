import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import PartnersSection from "@/components/about/PartnersSection";
import AboutCtaBanner from "@/components/about/AboutCtaBanner";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description: "GreenTech Solution — Công ty kỹ thuật năng lượng mặt trời tại Việt Nam. Sứ mệnh, tầm nhìn và đối tác.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <PartnersSection />
      <AboutCtaBanner />
    </>
  );
}
