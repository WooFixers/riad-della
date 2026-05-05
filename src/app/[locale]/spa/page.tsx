import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SpaHero from "@/components/spa/SpaHero";
import SpaIntro from "@/components/spa/SpaIntro";
import SpaGallery from "@/components/spa/SpaGallery";
import SpaTreatments from "@/components/spa/SpaTreatments";
import SpaHighlights from "@/components/spa/SpaHighlights";
import SpaCta from "@/components/spa/SpaCta";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Spa & Hammam",
  description:
    "Moroccan hammam & spa treatments at Riad Della in Marrakech. Traditional steam baths, argan oil rituals, kessa scrubs & relaxing massages from 100 MAD. Book in advance.",
  openGraph: {
    title: "Spa & Hammam — Riad Della Marrakech",
    description:
      "Experience the ancient Moroccan hammam at Riad Della. Traditional steam baths, argan oil rituals, and expert therapists in the heart of Marrakech's Medina.",
    url: "/spa",
    type: "website",
  },
};

const faqs = [
  {
    question: "What spa and hammam treatments does Riad Della offer?",
    answer:
      "Riad Della's spa offers traditional Moroccan hammam treatments — steam baths, black soap (savon beldi) scrubs, kessa exfoliation, and full body rituals — as well as relaxing massages using authentic argan oil and Moroccan botanicals. Treatments range from 100 MAD for a steam bath to 850 MAD for the signature Bain Royal Della package.",
  },
  {
    question: "What is a Moroccan hammam?",
    answer:
      "A Moroccan hammam is a centuries-old cleansing ritual involving a steam bath, application of black soap (savon beldi), and deep exfoliation with a kessa glove. It is one of Morocco's most cherished wellness and social traditions, promoting relaxation, skin renewal, and overall wellbeing.",
  },
  {
    question: "Do I need to book a spa treatment in advance at Riad Della?",
    answer:
      "Yes. We recommend booking spa and hammam treatments in advance as availability is limited to hotel guests. Contact us at contact@riaddella.com or request during your reservation to schedule your session.",
  },
  {
    question: "What products are used in Riad Della's spa treatments?",
    answer:
      "Riad Della uses authentic Moroccan spa products including pure argan oil, savon beldi (black soap), rhassoul clay, rose water, and natural Moroccan botanicals — all sourced from local artisan producers.",
  },
  {
    question: "Is the hammam at Riad Della for hotel guests only?",
    answer:
      "The spa and hammam at Riad Della is primarily for hotel guests. Please contact us in advance at contact@riaddella.com to check availability and make a reservation.",
  },
];

export default function Spa() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Spa & Hammam", url: `${BASE_URL}/en/spa` },
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
