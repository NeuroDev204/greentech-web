import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import FeaturedServices from "@/components/home/FeaturedServices";
import SolutionsPreview from "@/components/home/SolutionsPreview";
import HomeCtaBanner from "@/components/home/HomeCtaBanner";

export default function HomePage() {
  return (

    <>
      <Hero />
      <WhyUs />
      <FeaturedServices />
      <SolutionsPreview />
      <HomeCtaBanner />
    </>
  );
}
