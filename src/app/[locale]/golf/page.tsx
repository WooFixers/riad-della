import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GolfHero from "@/components/golf/GolfHero";
import GolfIntro from "@/components/golf/GolfIntro";
import GolfCourse from "@/components/golf/GolfCourse";
import GolfServices from "@/components/golf/GolfServices";
import GolfCta from "@/components/golf/GolfCta";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Golf in Marrakech",
  description:
    "Stay at Riad Della and play Golf Royal de Marrakech, just 15 minutes away. Private transfers, tee time reservations & equipment assistance arranged from the riad.",
  openGraph: {
    title: "Golf in Marrakech — Riad Della",
    description:
      "Base yourself at Riad Della and play Golf Royal de Marrakech, 15 minutes away. We arrange transfers, tee times & equipment. The perfect Marrakech golf holiday.",
    url: "/golf",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is there a golf course near Riad Della in Marrakech?",
    answer:
      "Yes. Golf Royal de Marrakech, one of Morocco's most prestigious and historic golf courses, is just 15 minutes from Riad Della by private car.",
  },
  {
    question: "Can Riad Della arrange golf transfers and tee times?",
    answer:
      "Yes. Riad Della arranges private transfers to and from Golf Royal de Marrakech, assists with tee time reservations, and can help with equipment requests — all included as part of our personalised guest services.",
  },
  {
    question: "What golf courses are near Marrakech?",
    answer:
      "Marrakech has several world-class golf courses including Golf Royal de Marrakech (Royal Golf Club, founded 1923), Amelkis Golf Club, Samanah Golf & Country Club, and the Montgomerie Golf Club. Riad Della recommends and arranges transfers to Golf Royal de Marrakech.",
  },
  {
    question: "Is Riad Della a good base for a golf holiday in Marrakech?",
    answer:
      "Absolutely. Riad Della is ideally positioned for a Marrakech golf holiday — we arrange private transfers to Golf Royal de Marrakech (15 minutes away), coordinate tee times, and provide a peaceful medina retreat between rounds with hammam recovery treatments available on request.",
  },
  {
    question: "What is Golf Royal de Marrakech like?",
    answer:
      "Golf Royal de Marrakech is one of Africa's oldest golf clubs, founded in 1923. It features a beautifully maintained 18-hole course surrounded by palm and orange trees, with a warm Moroccan climate ideal for year-round play.",
  },
];

export default function Golf() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Golf in Marrakech", url: `${BASE_URL}/en/golf` },
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
