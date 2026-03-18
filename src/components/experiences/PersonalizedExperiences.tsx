"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heart, Compass, Star } from "lucide-react";

const featureData = [
  { key: "tailored", icon: Heart },
  { key: "local", icon: Compass },
  { key: "seamless", icon: Star },
] as const;

const PersonalizedExperiences = () => {
  const t = useTranslations("PersonalizedExperiences");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
          <p className="font-sourcesans text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-[1.7]">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-5">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-lora text-lg font-medium text-foreground mb-2">{t(`items.${key}.title`)}</h3>
              <p className="font-sourcesans text-base text-muted-foreground leading-[1.7]">{t(`items.${key}.text`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedExperiences;
