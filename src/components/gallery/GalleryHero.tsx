"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import heroImage from "@/assets/hero-courtyard.jpeg";

const GalleryHero = () => {
  const t = useTranslations("GalleryHero");

  return (
    <section
      className="relative h-[55vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.55)), url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.610, 0.355, 1] }}
          className="font-sourcesans text-xs lg:text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.610, 0.355, 1] }}
          className="font-lora font-medium text-primary-foreground leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-6xl"
        >
          {t("heading")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.215, 0.610, 0.355, 1] }}
          className="font-sourcesans text-base lg:text-lg text-primary-foreground/85 mt-4 max-w-xl mx-auto leading-[1.6]"
        >
          {t("subheading")}
        </motion.p>
      </div>
    </section>
  );
};

export default GalleryHero;
