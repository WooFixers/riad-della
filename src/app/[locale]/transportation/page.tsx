import Navbar from "@/components/Navbar";
import TransportationHero from "@/components/transportation/TransportationHero";
import TransportationIntro from "@/components/transportation/TransportationIntro";
import TransportationServices from "@/components/transportation/TransportationServices";
import TransportationDestinations from "@/components/transportation/TransportationDestinations";
import TransportationCta from "@/components/transportation/TransportationCta";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation",
  description:
    "Airport shuttles, private car hire, and transfers to Agafay, Jardin Majorelle, restaurants, and beyond. Let Riad Della handle every journey.",
  openGraph: {
    title: "Transportation — Riad Della",
    description:
      "Airport shuttles, private car hire, and transfers to Agafay, Jardin Majorelle, restaurants, and beyond. Let Riad Della handle every journey.",
    url: "/transportation",
    type: "website",
  },
};

export default function Transportation() {
  return (
    <>
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
