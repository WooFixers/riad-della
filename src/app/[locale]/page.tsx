import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import RoomsSection from "@/components/RoomsSection";
import DiscoverSection from "@/components/DiscoverSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <RoomsSection />
        <DiscoverSection />
        <ReviewsSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
