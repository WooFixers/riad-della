"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plane, Compass, Sparkles } from "lucide-react";

const itemKeys = [
  { key: "transfers", icon: Plane },
  { key: "excursions", icon: Compass },
  { key: "experiences", icon: Sparkles },
] as const;

const TravelAssistance = () => {
  const t = useTranslations("TravelAssistance");

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-12"
        >
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {t("heading")}
          </h2>
          <p className="font-sourcesans text-muted-foreground mt-3 max-w-xl mx-auto leading-[1.7]">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itemKeys.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-lora text-lg font-medium text-foreground mb-2">{t(`items.${key}.title`)}</h3>
              <p className="font-sourcesans text-sm text-muted-foreground leading-[1.7]">{t(`items.${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelAssistance;
