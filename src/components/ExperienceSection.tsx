"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const experienceKeys = [
  { key: "medina", icon: "🏛" },
  { key: "breakfast", icon: "🫖" },
  { key: "terrace", icon: "☀️" },
  { key: "hospitality", icon: "🤲" },
  { key: "courtyard", icon: "🌿" },
  { key: "culture", icon: "✨" },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const ExperienceSection = () => {
  const t = useTranslations("ExperienceSection");

  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experienceKeys.map(({ key, icon }) => (
            <motion.div
              key={key}
              variants={item}
              className="bg-background rounded-2xl p-8 shadow-[0_0_0_1px_hsl(0_0%_0%/0.05),0_2px_8px_-2px_hsl(0_0%_0%/0.05)] hover:shadow-[0_0_0_1px_hsl(0_0%_0%/0.08),0_8px_24px_-4px_hsl(0_0%_0%/0.1)] transition-shadow duration-300"
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-lora text-xl font-normal text-foreground leading-tight mb-3">
                {t(`items.${key}.title`)}
              </h3>
              <p className="font-sourcesans text-base leading-[1.7] text-muted-foreground">
                {t(`items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
