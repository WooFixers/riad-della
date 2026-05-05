import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import ExperiencesIntro from "@/components/experiences/ExperiencesIntro";
import FeaturedExperiences from "@/components/experiences/FeaturedExperiences";
import PersonalizedExperiences from "@/components/experiences/PersonalizedExperiences";
import ExperiencesCta from "@/components/experiences/ExperiencesCta";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Experiences in Marrakech",
  description:
    "Curated Marrakech experiences from Riad Della: guided medina tours, Moroccan cooking classes, Atlas Mountains day trips, Agafay desert excursions & hammam sessions.",
  openGraph: {
    title: "Experiences in Marrakech — Riad Della",
    description:
      "Guided medina tours, Moroccan cooking classes, Atlas Mountains day trips, Agafay desert excursions & hammam rituals — curated by Riad Della for an authentic Marrakech experience.",
    url: "/experiences",
    type: "website",
  },
};

const faqs = [
  {
    question: "What experiences can I book through Riad Della?",
    answer:
      "Riad Della organises a range of curated Marrakech experiences for guests: guided medina walking tours, Moroccan cooking classes, Atlas Mountains day trips, Agafay desert excursions, souk visits, hammam spa sessions, and food market tours.",
  },
  {
    question: "Can I take a Moroccan cooking class at Riad Della?",
    answer:
      "Yes. Riad Della offers Moroccan cooking classes where guests learn to prepare traditional dishes including tagine, couscous, and Moroccan pastries under the guidance of local chefs — an authentic hands-on cultural experience.",
  },
  {
    question: "How far are the Atlas Mountains from Marrakech?",
    answer:
      "The High Atlas Mountains are approximately 60 km from Marrakech city centre — about 1 hour by car. Riad Della can arrange full-day guided excursions to the Atlas, including stops in Berber villages and the Ourika Valley.",
  },
  {
    question: "How do I explore Marrakech's Medina from Riad Della?",
    answer:
      "Riad Della offers guided walking tours of the Marrakech Medina — perfect for discovering the souks, Bahia Palace, Koutoubia Mosque, Ben Youssef Medersa, hidden artisan workshops, and authentic local restaurants. We also provide maps and personal recommendations for self-guided exploration.",
  },
  {
    question: "What is the Agafay Desert near Marrakech?",
    answer:
      "The Agafay Desert is a rocky desert plateau located about 30 km (40 minutes) from Marrakech. Unlike the Sahara, it features dramatic stone landscapes, nomadic camps, and sunset camel rides — a popular day trip destination that Riad Della can arrange with private transfers.",
  },
];

export default function Experiences() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Experiences", url: `${BASE_URL}/en/experiences` },
  ]);
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
