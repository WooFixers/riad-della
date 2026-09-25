"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import linaBedroom1 from "@/assets/riad/lina/bedroom-1.webp";
import mayaBedroom1 from "@/assets/riad/maya/maya-1.webp";
import amelBedroom1 from "@/assets/riad/amel/bedroom-1.webp";
import asmaBedroom1 from "@/assets/riad/asma/bedroom-1.webp";
import dellaBedroom1 from "@/assets/riad/della/della-1.webp";

const roomImages = [linaBedroom1, mayaBedroom1, amelBedroom1, asmaBedroom1, dellaBedroom1];
const roomKeys = ["lina", "maya", "amel", "asma", "della"] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const RoomsSection = () => {
  const t = useTranslations("RoomsSection");

  return (
    <section id="rooms" className="py-24 lg:py-32">
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
          <p className="font-sourcesans text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-[1.7]">
            {t("subheading")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {roomKeys.map((key, index) => (
            <motion.div
              key={key}
              variants={item}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-secondary rounded-2xl p-2 shadow-[0_0_0_1px_hsl(0_0%_0%/0.05),0_2px_8px_-2px_hsl(0_0%_0%/0.05)] hover:shadow-[0_0_0_1px_hsl(0_0%_0%/0.08),0_8px_24px_-4px_hsl(0_0%_0%/0.1)] transition-shadow duration-300 will-change-transform flex flex-col"
            >
              <img
                src={roomImages[index].src}
                alt={t(`rooms.${key}.name`)}
                className="w-full h-64 object-cover rounded-xl"
                style={{ outline: "1px solid hsl(0 0% 0% / 0.1)", outlineOffset: "-1px" }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-lora text-xl font-normal text-foreground leading-tight">
                      {t(`rooms.${key}.name`)}
                    </h3>
                    <span className="font-sourcesans text-sm text-muted-foreground">{t(`rooms.${key}.price`)}</span>
                  </div>
                  <p className="font-sourcesans text-base leading-[1.7] text-muted-foreground mb-5">
                    {t(`rooms.${key}.description`)}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                  <Link href={`/rooms#room-${key}`}>{t("viewRoom")}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
