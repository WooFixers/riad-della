"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, ChefHat, Mountain, Droplets, UtensilsCrossed, Sun } from "lucide-react";
import medinaImg from "@/assets/exp-medina-tour.jpg";
import cookingImg from "@/assets/exp-cooking.jpg";
import atlasImg from "@/assets/exp-atlas.jpg";
import hammamImg from "@/assets/exp-hammam.jpg";
import foodImg from "@/assets/exp-food.jpg";
import desertImg from "@/assets/exp-desert.jpg";

const experienceData = [
  { key: "medina", image: medinaImg, icon: MapPin },
  { key: "cooking", image: cookingImg, icon: ChefHat },
  { key: "atlas", image: atlasImg, icon: Mountain },
  { key: "hammam", image: hammamImg, icon: Droplets },
  { key: "food", image: foodImg, icon: UtensilsCrossed },
  { key: "desert", image: desertImg, icon: Sun },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const FeaturedExperiences = () => {
  const t = useTranslations("FeaturedExperiences");

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experienceData.map(({ key, image, icon: Icon }) => (
            <motion.div
              key={key}
              variants={item}
              className="group bg-background rounded-2xl overflow-hidden shadow-[0_0_0_1px_hsl(0_0%_0%/0.05),0_2px_8px_-2px_hsl(0_0%_0%/0.05)] hover:shadow-[0_0_0_1px_hsl(0_0%_0%/0.08),0_8px_24px_-4px_hsl(0_0%_0%/0.1)] transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image.src}
                  alt={t(`items.${key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-2.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
