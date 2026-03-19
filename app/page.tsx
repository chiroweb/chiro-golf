import HeroSection from "@/components/sections/HeroSection";
import EditorialSection from "@/components/sections/EditorialSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CollectionSection from "@/components/sections/CollectionSection";
import TransitionDivider from "@/components/sections/TransitionDivider";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TransitionDivider />
      <EditorialSection />
      <TransitionDivider />
      <PhilosophySection />
      <TransitionDivider />
      <CollectionSection />
      <Footer />
    </main>
  );
}
