"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import heroImage from "@/assets/golf-hero.webp";

const GolfHero = () => {
  const t = useTranslations("GolfHero");

  return (
    <section
      className="relative min-h-svh flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="font-sourcesans text-sm uppercase tracking-[0.15em] text-primary-foreground/80 mb-6"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
          className="font-lora font-medium text-primary-foreground leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          {t("heading")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
          className="font-sourcesans text-lg lg:text-xl text-primary-foreground/85 mt-6 max-w-xl mx-auto leading-[1.7]"
        >
          {t("subheading")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
          className="mt-10"
        >
          <BookingDialog>
            <Button variant="hero" size="lg">{t("cta")}</Button>
          </BookingDialog>
        </motion.div>
      </div>
    </section>
  );
};

export default GolfHero;
