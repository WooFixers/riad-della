const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com";

export const RIAD_DELLA = {
  name: "Riad Della",
  url: BASE_URL,
  email: "contact@riaddella.com",
  address: {
    streetAddress: "Derb Taht Sour Lakbir, Rue Bounouala, Zaouia Abbassia",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    postalCode: "40000",
    addressCountry: "MA",
  },
  geo: {
    latitude: 31.639735610217798,
    longitude: -7.988569814896782,
  },
} as const;

export function getLodgingBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "LocalBusiness"],
    "@id": `${BASE_URL}/#hotel`,
    name: RIAD_DELLA.name,
    url: RIAD_DELLA.url,
    email: RIAD_DELLA.email,
    description:
      "An intimate boutique family riad in the heart of Marrakech's Medina, offering authentic Moroccan hospitality, a hammam spa, heated plunge pool, rooftop terrace, Moroccan breakfast, and curated experiences.",
    address: {
      "@type": "PostalAddress",
      ...RIAD_DELLA.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RIAD_DELLA.geo.latitude,
      longitude: RIAD_DELLA.geo.longitude,
    },
    priceRange: "€€",
    currenciesAccepted: "EUR, MAD",
    paymentAccepted: "Cash, Credit Card",
    numberOfRooms: 5,
    hasMap: `https://www.google.com/maps?q=${RIAD_DELLA.geo.latitude},${RIAD_DELLA.geo.longitude}`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Heated Plunge Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rooftop Terrace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hammam & Spa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Moroccan Breakfast Included", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Heated Floors", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Patio", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport Transfer", value: true },
      { "@type": "LocationFeatureSpecification", name: "In-Room Safe", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private Bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fireplace Lounge", value: true },
    ],
    containsPlace: [
      {
        "@type": "HotelRoom",
        name: "Lina — Double Room",
        description:
          "Traditional Moroccan design with a private patio, heated floor, en-suite bathroom, and access to the heated plunge pool. Perfect for couples. From 160 € per night.",
        occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
        bed: { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Double" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 160,
            priceCurrency: "EUR",
            unitText: "night",
          },
        },
      },
      {
        "@type": "HotelRoom",
        name: "Room Maya — Double Room",
        description:
          "Serene double room with authentic Moroccan craftsmanship, heated floor, en-suite bathroom, and courtyard pool access. Perfect for couples. From 160 € per night.",
        occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
        bed: { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Double" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 160,
            priceCurrency: "EUR",
            unitText: "night",
          },
        },
      },
      {
        "@type": "HotelRoom",
        name: "Amel — Double Deluxe",
        description:
          "Premium Moroccan finishes, heated floor, direct pool access, private patio, and superior comfort. From 180 € per night.",
        occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2 },
        bed: { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Double" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 180,
            priceCurrency: "EUR",
            unitText: "night",
          },
        },
      },
      {
        "@type": "HotelRoom",
        name: "Asma — Triple Room",
        description:
          "Spacious triple room ideal for families or small groups, with private patio, rooftop access, fireplace lounge, and heated floor. Sleeps up to 3 guests. From 200 € per night.",
        occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3 },
        bed: [
          { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Double" },
          { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Single" },
        ],
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 200,
            priceCurrency: "EUR",
            unitText: "night",
          },
        },
      },
      {
        "@type": "HotelRoom",
        name: "Suite Della",
        description:
          "Traditional Moroccan suite accommodating up to 3 guests, featuring direct rooftop terrace access, heated floors, and authentic artisanal decor. From 250 € per night.",
        occupancy: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3 },
        bed: [
          { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Queen" },
          { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Sofa Bed" },
        ],
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 250,
            priceCurrency: "EUR",
            unitText: "night",
          },
        },
      },
    ],
    touristType: ["Cultural Tourists", "Couples", "Families", "Golf Travelers", "Wellness Travelers"],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: RIAD_DELLA.name,
    description:
      "Official website of Riad Della, a boutique riad in the heart of Marrakech's Medina.",
    inLanguage: ["en", "fr", "es", "it"],
    publisher: { "@id": `${BASE_URL}/#hotel` },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
