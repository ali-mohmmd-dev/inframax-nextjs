import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import SectorsSection from "@/components/home/SectorsSection";
import SpecializedInSection from "@/components/home/SpecializedInSection";
import FeaturedWorksSection from "@/components/home/FeaturedWorksSection";
import OurServicesSection from "@/components/home/OurServicesSection";
import EquipmentsSection from "@/components/home/EquipmentsSection";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSlider />
  <AboutSection />
  <SectorsSection />
  <SpecializedInSection />
  <FeaturedWorksSection />
  <OurServicesSection />
  <EquipmentsSection />
  <StatsSection />
  <ClientsSection />
  <CTASection />
    </>
  );
}
