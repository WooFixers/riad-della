import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomsIntro from "@/components/rooms/RoomsIntro";
import RoomShowcase from "@/components/rooms/RoomShowcase";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RiadAtmosphere from "@/components/rooms/RiadAtmosphere";
import RoomBookingForm from "@/components/rooms/RoomBookingForm";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "5 rooms & suites in Marrakech's Medina — Lina (from 160 €), Maya (from 160 €), Amel Deluxe (from 180 €), Asma Triple (from 200 €), and Suite Della (from 250 €). Heated floors, plunge pool & Moroccan breakfast included.",
  openGraph: {
    title: "Rooms & Suites at Riad Della — Marrakech Medina",
    description:
      "5 beautifully appointed rooms & suites in Marrakech's Medina. Heated floors, plunge pool & Moroccan breakfast included. From 160 €/night.",
    url: "/rooms",
    type: "website",
  },
};

const faqs = [
  {
    question: "What rooms are available at Riad Della?",
    answer:
      "Riad Della offers 5 distinctive spaces: Lina (Double Room, from 160 €/night), Maya (Double Room, from 160 €/night), Amel (Double Deluxe, from 180 €/night), Asma (Triple Room, from 200 €/night), and Suite Della (Suite sleeping up to 3 guests, with direct terrace access, from 250 €/night). Each space has heated floors, a private bathroom, and access to the heated plunge pool and rooftop terrace.",
  },
  {
    question: "Is breakfast included at Riad Della?",
    answer:
      "Yes. An authentic Moroccan breakfast is included with every stay — featuring msemen flatbread, honey, seasonal fruits, Moroccan pastries, and freshly brewed mint tea.",
  },
  {
    question: "Does Riad Della have a pool?",
    answer:
      "Yes. Riad Della features a private heated plunge pool in the courtyard, accessible to all guests throughout their stay.",
  },
  {
    question: "How many guests can Riad Della accommodate?",
    answer:
      "Riad Della can accommodate up to 12 guests across 5 rooms and suites: Lina (2 guests), Maya (2 guests), Amel (2 guests), Asma (3 guests), and Suite Della (up to 3 guests).",
  },
  {
    question: "What amenities are included in each room?",
    answer:
      "Every room at Riad Della includes air conditioning, heated floors, a private en-suite bathroom, in-room safe, wardrobe, access to the heated plunge pool, rooftop terrace, and a cozy fireplace lounge — plus Moroccan breakfast every morning.",
  },
  {
    question: "What are the benefits of booking directly with Riad Della?",
    answer:
      "Booking directly with us guarantees the best available price with zero intermediary fees.",
  },
];

export default function Rooms() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Rooms", url: `${BASE_URL}/en/rooms` },
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
        <RoomsHero />
        <RoomsIntro />
        <RoomShowcase />
        <RoomAmenities />
        <RiadAtmosphere />
        <RoomBookingForm />
      </main>
      <Footer />
    </>
  );
}
