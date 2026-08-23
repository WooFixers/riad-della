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
    "4 rooms & suites in Marrakech's Medina — Lina (from 150 €), Amel Deluxe (from 170 €), Asma Triple (from 180 €), and Douiria Family Suite (from 350 €). Heated floors, private patio, plunge pool & Moroccan breakfast included.",
  openGraph: {
    title: "Rooms & Suites at Riad Della — Marrakech Medina",
    description:
      "4 beautifully appointed rooms & suites in Marrakech's Medina. Heated floors, private patios, plunge pool & Moroccan breakfast included. From 150 €/night.",
    url: "/rooms",
    type: "website",
  },
};

const faqs = [
  {
    question: "What rooms are available at Riad Della?",
    answer:
      "Riad Della offers 4 distinctive spaces: Lina (Double Room, from 150 €/night), Amel (Double Deluxe, from 170 €/night), Asma (Triple Room, from 180 €/night), and Douiria (Private Family Suite with 2 rooms sleeping up to 6 guests, private access, and direct terrace access, from 350 €/night). Each space has heated floors, a private bathroom, and access to the heated plunge pool and rooftop terrace.",
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
      "Riad Della can accommodate up to 13 guests across 4 rooms and suites: Lina (2 guests), Amel (2 guests), Asma (3 guests), and the Douiria Family Suite (up to 6 guests across 2 interconnected rooms).",
  },
  {
    question: "What amenities are included in each room?",
    answer:
      "Every room at Riad Della includes air conditioning, heated floors, a private en-suite bathroom, in-room safe, wardrobe, private patio or independent access, access to the heated plunge pool, rooftop terrace, and a cozy fireplace lounge — plus Moroccan breakfast every morning.",
  },
  {
    question: "What are the benefits of booking directly with Riad Della?",
    answer:
      "Booking directly with us guarantees the best available price with zero intermediary fees, plus a complimentary private airport transfer for any stay of 3 nights or more.",
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
