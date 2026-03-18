import Navbar from "@/components/Navbar";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import ExperiencesIntro from "@/components/experiences/ExperiencesIntro";
import FeaturedExperiences from "@/components/experiences/FeaturedExperiences";
import PersonalizedExperiences from "@/components/experiences/PersonalizedExperiences";
import ExperiencesCta from "@/components/experiences/ExperiencesCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover curated experiences in Marrakech: guided medina tours, cooking classes, Atlas Mountains day trips, and more.",
  openGraph: {
    title: "Experiences — Riad Della",
    description: "Discover curated experiences in Marrakech: guided medina tours, cooking classes, Atlas Mountains day trips, and more.",
    url: "/experiences",
    type: "website",
  },
};

export default function Experiences() {
  return (
    <>
      <Navbar />
      <main>
        <ExperiencesHero />
        <ExperiencesIntro />
        <FeaturedExperiences />
        <PersonalizedExperiences />
        <ExperiencesCta />
      </main>
      <Footer />
    </>
  );
}
