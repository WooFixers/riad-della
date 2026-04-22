"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Droplets, Leaf, Gift, Heart } from "lucide-react";

const treatmentData = [
  { key: "hammam",  icon: Droplets },
  { key: "argan",   icon: Leaf },
  { key: "package", icon: Gift },
  { key: "massage", icon: Heart },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const SpaTreatments = () => {
  const t = useTranslations("SpaTreatments");

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {treatmentData.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={item}
              className="bg-background rounded-2xl p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-lora text-xl font-medium text-foreground leading-tight mb-2">
                {t(`items.${key}.title`)}
              </h3>
              <p className="font-sourcesans text-base text-muted-foreground leading-[1.7] mb-4">
                {t(`items.${key}.description`)}
              </p>
              <ul className="space-y-1.5">
                {(["h1", "h2", "h3"] as const).map((h) => (
                  <li key={h} className="font-sourcesans text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {t(`items.${key}.${h}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpaTreatments;
