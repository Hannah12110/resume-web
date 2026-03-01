import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PortfolioClient } from "@/components/portfolio-client";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioClient />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
