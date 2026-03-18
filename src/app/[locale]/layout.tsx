import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "@/components/Providers";
import { locales } from "@/lib/navigation";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://riaddella.com"),
  title: {
    template: "%s | Riad Della",
    default: "Riad Della — Boutique Riad in Marrakech",
  },
  description:
    "A cozy family riad in the heart of Marrakech's Medina. Experience authentic Moroccan hospitality, peaceful courtyards, and traditional culture at Riad Della.",
  keywords: ["Riad", "Marrakech", "Morocco", "Boutique Hotel", "Medina", "Travel", "Riad Della"],
  robots: "index, follow",
  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
      es: "/es",
    },
  },
  openGraph: {
    title: "Riad Della — Boutique Riad in Marrakech",
    description:
      "A cozy family riad in the heart of Marrakech's Medina. Experience authentic Moroccan hospitality, peaceful courtyards, and traditional culture.",
    type: "website",
    siteName: "Riad Della",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
