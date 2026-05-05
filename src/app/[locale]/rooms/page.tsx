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
  title: "Rooms",
  description:
    "3 rooms in Marrakech's Medina — Lina (from €150), Amel Deluxe (from €170), and Asma Triple (from €180). Heated floors, private patio, plunge pool & Moroccan breakfast included.",
  openGraph: {
    title: "Rooms at Riad Della — Marrakech Medina",
    description:
      "3 beautifully appointed rooms in Marrakech's Medina. Heated floors, private patios, plunge pool & Moroccan breakfast included. From €150/night.",
    url: "/rooms",
    type: "website",
  },
};

const faqs = [
  {
    question: "What rooms are available at Riad Della?",
    answer:
      "Riad Della has 3 rooms: Lina (Double Room, from €150/night), Amel (Double Deluxe, from €170/night), and Asma (Triple Room, from €180/night). Each room has heated floors, a private bathroom, and access to the heated plunge pool and rooftop terrace.",
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
      "Riad Della can accommodate up to 7 guests across 3 rooms. The Lina and Amel rooms each sleep 2, while the Asma Triple Room sleeps up to 3 guests.",
  },
  {
    question: "What amenities are included in each room?",
    answer:
      "Every room at Riad Della includes air conditioning, heated floors, a private en-suite bathroom, in-room safe, wardrobe, private patio, access to the heated plunge pool, rooftop terrace, and a cozy fireplace lounge — plus Moroccan breakfast every morning.",
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
