import type { Metadata } from "next";
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
import { getBreadcrumbSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Riad Della — Boutique Riad in the Heart of Marrakech",
  description:
    "Stay at Riad Della, an intimate boutique family riad in Marrakech's Medina. Moroccan hammam, heated pool, rooftop terrace & authentic Moroccan hospitality from 160 €/night.",
  openGraph: {
    title: "Riad Della — Boutique Riad in the Heart of Marrakech",
    description:
      "An intimate family riad in the heart of Marrakech's Medina — hammam spa, heated pool, rooftop terrace & authentic Moroccan hospitality. From 160 €/night.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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
