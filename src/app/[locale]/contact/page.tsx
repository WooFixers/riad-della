import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ReservationForm from "@/components/contact/ReservationForm";
import DirectContact from "@/components/contact/DirectContact";
import ContactMap from "@/components/contact/ContactMap";
import TravelAssistance from "@/components/contact/TravelAssistance";
import ContactCta from "@/components/contact/ContactCta";
import Footer from "@/components/Footer";
import { getBreadcrumbSchema, getFAQSchema, RIAD_DELLA } from "@/lib/structured-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Book your stay at Riad Della in Marrakech. Send a reservation request online or email contact@riaddella.com — we reply within 24 hours. Rooms & suites from 160 €/night.",
  openGraph: {
    title: "Contact & Reservations — Riad Della Marrakech",
    description:
      "Plan your stay at Riad Della. Send a reservation request or email us at contact@riaddella.com — we reply within 24 hours.",
    url: "/contact",
    type: "website",
  },
};

const faqs = [
  {
    question: "Where is Riad Della located?",
    answer: `Riad Della is located at ${RIAD_DELLA.address.streetAddress}, Marrakech Medina, ${RIAD_DELLA.address.postalCode}, Morocco. GPS coordinates: ${RIAD_DELLA.geo.latitude.toFixed(4)}°N, ${Math.abs(RIAD_DELLA.geo.longitude).toFixed(4)}°W.`,
  },
  {
    question: "How can I make a reservation at Riad Della?",
    answer:
      "You can make a reservation by completing the reservation form on this page, or by emailing us directly at contact@riaddella.com. We reply to all enquiries within 24 hours, often sooner.",
  },
  {
    question: "How far in advance should I book Riad Della?",
    answer:
      "As Riad Della is an intimate boutique riad with limited rooms & suites, we recommend booking as early as possible — ideally 4 to 8 weeks in advance. Peak travel periods (November to March and July to August) fill up quickly, so early booking is strongly advised.",
  },
  {
    question: "What is the email address for Riad Della?",
    answer: `You can reach Riad Della at ${RIAD_DELLA.email} for reservations, general enquiries, and travel assistance. We respond within 24 hours.`,
  },
  {
    question: "Does Riad Della have a minimum stay requirement?",
    answer:
      "Riad Della typically requires a minimum stay of 2 nights. For shorter stays, please contact us at contact@riaddella.com as availability may vary by season.",
  },
];

export default function Contact() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Riad Della", url: `${BASE_URL}/en` },
    { name: "Contact & Reservations", url: `${BASE_URL}/en/contact` },
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
