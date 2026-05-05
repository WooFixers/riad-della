import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TransportationHero from "@/components/transportation/TransportationHero";
import TransportationIntro from "@/components/transportation/TransportationIntro";
import TransportationServices from "@/components/transportation/TransportationServices";
import TransportationDestinations from "@/components/transportation/TransportationDestinations";
import TransportationCta from "@/components/transportation/TransportationCta";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Transportation & Transfers",
  description:
    "Private airport transfers, car hire & day-trip shuttles from Riad Della in Marrakech. Agafay, Atlas Mountains, Jardin Majorelle, Essaouira & more — door-to-door service.",
  openGraph: {
    title: "Transportation & Transfers — Riad Della Marrakech",
    description:
      "Airport shuttles, private car hire & transfers to Agafay, Atlas Mountains, Jardin Majorelle, Essaouira & beyond. Let Riad Della handle every journey.",
    url: "/transportation",
    type: "website",
  },
};

const faqs = [
  {
    question: "Does Riad Della offer airport transfers?",
    answer:
      "Yes. Riad Della offers private airport shuttle service to and from Marrakech Menara Airport (RAK). Just share your flight details when booking and we will arrange door-to-door pickup or drop-off at the riad.",
  },
  {
    question: "How far is Marrakech airport from Riad Della?",
    answer:
      "Marrakech Menara Airport (RAK) is approximately 6 km from Riad Della in the Medina — about 10 to 15 minutes by private car depending on traffic.",
  },
  {
    question: "Can I hire a private car through Riad Della?",
    answer:
      "Yes. Riad Della provides private car hire and on-demand transfers to destinations including the Agafay Desert, Jardin Majorelle, the Atlas Mountains, Essaouira, La Palmeraie, and local restaurants — with an experienced local driver.",
  },
  {
    question: "How do I get from Marrakech airport to the Medina?",
    answer:
      "The easiest and most comfortable way is a private transfer arranged by Riad Della. Share your arrival time and flight number and we will send a driver to meet you at the airport and bring you directly to the riad door — no navigation required.",
  },
  {
    question: "What destinations can Riad Della arrange day trips to?",
    answer:
      "Riad Della can arrange private day trips to: Agafay Desert (30 km), Atlas Mountains & Ourika Valley (60 km), Jardin Majorelle & Yves Saint Laurent Museum (15 min), Essaouira coastal town (2.5 hours), La Palmeraie, and local restaurant transfers within Marrakech.",
  },
];

export default function Transportation() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Transportation", url: `${BASE_URL}/en/transportation` },
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
        <TransportationHero />
        <TransportationIntro />
        <TransportationServices />
        <TransportationDestinations />
        <TransportationCta />
      </main>
      <Footer />
    </>
  );
}
