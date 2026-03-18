import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ReservationForm from "@/components/contact/ReservationForm";
import DirectContact from "@/components/contact/DirectContact";
import ContactMap from "@/components/contact/ContactMap";
import TravelAssistance from "@/components/contact/TravelAssistance";
import ContactCta from "@/components/contact/ContactCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Plan your stay at Riad Della in Marrakech. Send a reservation request or contact us directly.",
  openGraph: {
    title: "Contact & Reservations — Riad Della",
    description: "Plan your stay at Riad Della in Marrakech. Send a reservation request or contact us directly.",
    url: "/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ReservationForm />
        <DirectContact />
        <ContactMap />
        <TravelAssistance />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
