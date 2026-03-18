import Navbar from "@/components/Navbar";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomsIntro from "@/components/rooms/RoomsIntro";
import RoomShowcase from "@/components/rooms/RoomShowcase";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RiadAtmosphere from "@/components/rooms/RiadAtmosphere";
import RoomsCta from "@/components/rooms/RoomsCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore our 5 unique rooms and suites at Riad Della, each designed with traditional Moroccan craftsmanship and modern comfort.",
  openGraph: {
    title: "Rooms & Suites — Riad Della",
    description: "Explore our 5 unique rooms and suites at Riad Della, each designed with traditional Moroccan craftsmanship and modern comfort.",
    url: "/rooms",
    type: "website",
  },
};

export default function Rooms() {
  return (
    <>
      <Navbar />
      <main>
        <RoomsHero />
        <RoomsIntro />
        <RoomShowcase />
        <RoomAmenities />
        <RiadAtmosphere />
        <RoomsCta />
      </main>
      <Footer />
    </>
  );
}
