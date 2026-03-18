"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import courtyardImg from "@/assets/riad-courtyard.jpeg";
import terraceImg from "@/assets/riad-terrace.jpeg";

const RiadAtmosphere = () => {
  const t = useTranslations("RiadAtmosphere");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-16"
        >
          <p className="font-sourcesans text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
            {t("eyebrow")}
          </p>
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {t("heading")}
          </h2>
          <p className="font-sourcesans text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-[1.7]">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={courtyardImg.src}
              alt="Riad Della courtyard with fountain and plants"
              className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-6 left-6 font-lora text-xl text-primary-foreground">{t("courtyard")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={terraceImg.src}
              alt="Rooftop terrace with panoramic Marrakech views"
              className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-6 left-6 font-lora text-xl text-primary-foreground">{t("terrace")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiadAtmosphere;
