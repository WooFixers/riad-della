"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, Lock, Star, CalendarCheck } from "lucide-react";

const highlightData = [
  { key: "products",   icon: Sparkles },
  { key: "private",    icon: Lock },
  { key: "therapists", icon: Star },
  { key: "flexible",   icon: CalendarCheck },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const } },
};

const SpaHighlights = () => {
  const t = useTranslations("SpaHighlights");

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
            {t("subheading")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlightData.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={item}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary shadow-[0_0_0_1px_hsl(0_0%_0%/0.05)]"
            >
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-lora text-lg font-medium text-foreground leading-snug mb-2">
                {t(`items.${key}.title`)}
              </h3>
              <p className="font-sourcesans text-sm text-muted-foreground leading-[1.65]">
                {t(`items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpaHighlights;
