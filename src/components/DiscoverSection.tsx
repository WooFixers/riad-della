"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import discoverImage from "@/assets/discover-marrakech.jpg";

const highlightKeys = ["medina", "souks", "cuisine", "guided"] as const;

const DiscoverSection = () => {
  const t = useTranslations("DiscoverSection");

  return (
    <section id="discover" className="py-24 lg:py-32 bg-secondary">
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
            <div className="mt-8 space-y-6">
              {highlightKeys.map((key) => (
                <div key={key}>
                  <h3 className="font-lora text-lg font-normal text-foreground leading-tight mb-1">
                    {t(`highlights.${key}.title`)}
                  </h3>
                  <p className="font-sourcesans text-base leading-[1.7] text-muted-foreground">
                    {t(`highlights.${key}.text`)}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="default" size="lg" className="mt-10">
              {t("planVisit")}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src={discoverImage.src}
              alt="Marrakech medina souks with colorful spices"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
              style={{ outline: "1px solid hsl(0 0% 0% / 0.1)", outlineOffset: "-1px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
