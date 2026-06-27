import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the visual journey of Riad Della in Marrakech. View photos of our elegant double rooms, deluxe suites, peaceful fountain courtyard, relaxing hammam, and rooftop terrace.",
  openGraph: {
    title: "Gallery — Riad Della Marrakech",
    description:
      "Browse beautiful photos of Riad Della. Cozy rooms, heated pool, traditional spa & hammam, and rooftop terrace views stretching to the Atlas Mountains.",
    url: "/gallery",
    type: "website",
  },
};

export default function Gallery() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Gallery", url: `${BASE_URL}/en/gallery` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
