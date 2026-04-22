import Navbar from "@/components/Navbar";
import GolfHero from "@/components/golf/GolfHero";
import GolfIntro from "@/components/golf/GolfIntro";
import GolfCourse from "@/components/golf/GolfCourse";
import GolfServices from "@/components/golf/GolfServices";
import GolfCta from "@/components/golf/GolfCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf",
  description:
    "Stay at Riad Della and play Golf Royal de Marrakech, just 15 minutes away. We arrange transfers, tee times, and everything in between.",
  openGraph: {
    title: "Golf in Marrakech — Riad Della",
    description:
      "Stay at Riad Della and play Golf Royal de Marrakech, just 15 minutes away. We arrange transfers, tee times, and everything in between.",
    url: "/golf",
    type: "website",
  },
};

export default function Golf() {
  return (
    <>
      <Navbar />
      <main>
        <GolfHero />
        <GolfIntro />
        <GolfCourse />
        <GolfServices />
        <GolfCta />
      </main>
      <Footer />
    </>
  );
}
