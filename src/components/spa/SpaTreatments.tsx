"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Flame, Droplets, Sparkles, Leaf, Zap, Gift, Clock } from "lucide-react";

const hammamTreatments = [
  { key: "steamBath",  icon: Flame },
  { key: "expressBath", icon: Droplets },
  { key: "royalBath",  icon: Sparkles },
] as const;

const massageTreatments = [
  { key: "orientalRelax",      icon: Leaf },
  { key: "tonicMassage",       icon: Zap },
  { key: "bathMassagePackage", icon: Gift },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

function TreatmentCard({ treatmentKey, icon: Icon, t }: {
  treatmentKey: string;
  icon: React.ElementType;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div variants={item} className="bg-background rounded-2xl p-7 flex flex-col">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary mb-5 shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-lora text-lg font-medium text-foreground leading-snug mb-3">
        {t(`items.${treatmentKey}.title`)}
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <span className="inline-flex items-center gap-1.5 font-sourcesans text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1">
          <Clock className="w-3 h-3" />
          {t(`items.${treatmentKey}.duration`)}
        </span>
        <span className="font-sourcesans text-sm font-semibold text-primary">
          {t(`items.${treatmentKey}.price`)}
        </span>
      </div>
      <p className="font-sourcesans text-sm text-muted-foreground leading-[1.75] flex-1">
        {t(`items.${treatmentKey}.description`)}
      </p>
    </motion.div>
  );
}

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

        {/* Hammam section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
            className="font-lora text-2xl font-medium text-foreground text-center mb-10"
          >
            {t("hammamSection")}
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {hammamTreatments.map(({ key, icon }) => (
              <TreatmentCard key={key} treatmentKey={key} icon={icon} t={t} />
            ))}
          </motion.div>
        </div>

        {/* Massage section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
            className="font-lora text-2xl font-medium text-foreground text-center mb-10"
          >
            {t("massageSection")}
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {massageTreatments.map(({ key, icon }) => (
              <TreatmentCard key={key} treatmentKey={key} icon={icon} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaTreatments;
