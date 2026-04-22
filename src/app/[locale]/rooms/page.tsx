import Navbar from "@/components/Navbar";
import RoomsHero from "@/components/rooms/RoomsHero";
import RoomsIntro from "@/components/rooms/RoomsIntro";
import RoomShowcase from "@/components/rooms/RoomShowcase";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RiadAtmosphere from "@/components/rooms/RiadAtmosphere";
import RoomBookingForm from "@/components/rooms/RoomBookingForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "Discover our 3 rooms at Riad Della — Lina, Amel, and Asma — each with heated floors, a private patio, and access to the plunging heated pool.",
  openGraph: {
    title: "Rooms — Riad Della",
    description: "Discover our 3 rooms at Riad Della — Lina, Amel, and Asma — each with heated floors, a private patio, and access to the plunging heated pool.",
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
        <RoomBookingForm />
      </main>
      <Footer />
    </>
  );
}
