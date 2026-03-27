import { Section } from "@/components/ui/screen";
import { NavBar } from "@/components/ui/navbar-view";
import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/ui/features-section";

export default function Home() {
  return (
    <Section>
      <NavBar />
      <HeroSection />
      <Features />
    </Section>
  );
}
