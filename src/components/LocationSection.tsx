"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LocationSection = () => {
  const t = useTranslations("LocationSection");

  return (
    <section id="location" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
            <p className="font-sourcesans text-lg leading-[1.7] text-muted-foreground mt-6 max-w-[65ch]" style={{ textWrap: "pretty" } as React.CSSProperties}>
              {t("description")}
            </p>
            <div className="mt-8 space-y-2">
              <p className="font-sourcesans text-base text-foreground font-medium">
                Riad Della
              </p>
              <p className="font-sourcesans text-base text-muted-foreground">
                Zaouia Abbassia Derb Taht Sour Lakbir,<br />
                Rue Bounouala, Marrakech 40000, Morocco
              </p>
              <p className="font-sourcesans text-base text-muted-foreground mt-4">
                <a href="mailto:contact@riaddella.com" className="text-primary hover:text-primary/80 transition-colors">
                  contact@riaddella.com
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px] shadow-[0_0_0_1px_hsl(0_0%_0%/0.05),0_2px_8px_-2px_hsl(0_0%_0%/0.05)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.086089958419!2d-7.988569814896782!3d31.639735610217798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefd6743572a5%3A0xd57e81fa11135e11!2sRiad%20Della!5e0!3m2!1sen!2sma!4v1773661722724!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riad Della location on map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
