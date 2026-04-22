import Navbar from "@/components/Navbar";
import SpaHero from "@/components/spa/SpaHero";
import SpaIntro from "@/components/spa/SpaIntro";
import SpaGallery from "@/components/spa/SpaGallery";
import SpaTreatments from "@/components/spa/SpaTreatments";
import SpaHighlights from "@/components/spa/SpaHighlights";
import SpaCta from "@/components/spa/SpaCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Hammam",
  description:
    "Experience the ancient art of the Moroccan hammam and rejuvenating massages at Riad Della. Authentic rituals, pure argan oil, and expert therapists.",
  openGraph: {
    title: "Spa & Hammam — Riad Della",
    description:
      "Experience the ancient art of the Moroccan hammam and rejuvenating massages at Riad Della. Authentic rituals, pure argan oil, and expert therapists.",
    url: "/spa",
    type: "website",
  },
};

export default function Spa() {
  return (
    <>
      <Navbar />
      <main>
        <SpaHero />
        <SpaIntro />
        <SpaGallery />
        <SpaTreatments />
        <SpaHighlights />
        <SpaCta />
      </main>
      <Footer />
    </>
  );
}
