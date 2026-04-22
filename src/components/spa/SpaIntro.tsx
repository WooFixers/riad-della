"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import spaImage from "@/assets/riad/spa/spa-1.webp";

const SpaIntro = () => {
  const t = useTranslations("SpaIntro");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              className="font-lora font-medium text-foreground leading-[1.2] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              {t("heading")}
            </h2>
            <p className="font-sourcesans text-lg text-muted-foreground leading-[1.8]">
              {t("body")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <img
              src={spaImage.src}
              alt="Spa at Riad Della"
              className="w-full aspect-[3/2] object-cover rounded-2xl"
              style={{ outline: "1px solid hsl(0 0% 0% / 0.07)", outlineOffset: "-1px" }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaIntro;
