"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const RoomsIntro = () => {
  const t = useTranslations("RoomsIntro");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
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
          <p className="font-sourcesans text-lg text-muted-foreground mt-6 leading-[1.7]">
            {t("body")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsIntro;
