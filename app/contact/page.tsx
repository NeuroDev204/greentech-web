import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ GreenTech Solution để được tư vấn dự án solar miễn phí.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </>
  );
}
