"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import aboutImage from "@/assets/about-riad.jpeg";

const AboutSection = () => {
  const t = useTranslations("AboutSection");

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <img
              src={aboutImage.src}
              alt="Riad Della courtyard with orange trees and mint tea"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
              style={{ outline: "1px solid hsl(0 0% 0% / 0.1)", outlineOffset: "-1px" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
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
            <div className="mt-6 space-y-5 max-w-[65ch]">
              <p className="font-sourcesans text-lg leading-[1.7] text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
                {t("body1")}
              </p>
              <p className="font-sourcesans text-lg leading-[1.7] text-muted-foreground" style={{ textWrap: "pretty" } as React.CSSProperties}>
                {t("body2")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
