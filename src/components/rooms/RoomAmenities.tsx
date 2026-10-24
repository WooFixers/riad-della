"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Wind, Waves, Bath, Shield, MountainSnow, Droplets, Coffee, Flame } from "lucide-react";

const amenityData = [
  { key: "acHeating", icon: Wind },
  { key: "heatedFloor", icon: Waves },
  { key: "privateBathroom", icon: Bath },
  { key: "safeCloset", icon: Shield },
  { key: "rooftopAccess", icon: MountainSnow },
  { key: "heatedPool", icon: Droplets },
  { key: "breakfast", icon: Coffee },
  { key: "lounge", icon: Flame },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

const RoomAmenities = () => {
  const t = useTranslations("RoomAmenities");

  return (
    <section className="py-24 lg:py-32 bg-secondary">
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
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {amenityData.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={item}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-[0_0_0_1px_hsl(0_0%_0%/0.05)]"
            >
              <Icon className="w-7 h-7 text-primary mb-3" strokeWidth={1.5} />
              <span className="font-sourcesans text-sm font-medium text-foreground">{t(key)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomAmenities;
