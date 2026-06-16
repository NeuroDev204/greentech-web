import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtsol.vn"),
  title: {
    default: "GreenTech Solution — Solar Energy Engineering Vietnam",
    template: "%s | GreenTech Solution",
  },
  description:
    "Giải pháp năng lượng mặt trời toàn diện — EPC, O&M, TDD và hóa chất Chemitek. Comprehensive solar energy solutions in Vietnam.",
  keywords: ["solar energy", "năng lượng mặt trời", "EPC", "O&M", "BESS", "Chemitek", "Vietnam"],
  openGraph: {
    title: "GreenTech Solution",
    description: "Comprehensive solar energy solutions in Vietnam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white antialiased">
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
