import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <Gallery />
        <PricingSection />
      </main>
    </>
  );
}
