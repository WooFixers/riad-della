"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import { Users, Bed, Bath, Wind, Wifi, Paintbrush, Sun, Mountain, Armchair, TreePine } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpeg";
import roomBleue from "@/assets/room-chambre-bleue.jpeg";
import roomSuperior from "@/assets/room-superior.jpeg";
import roomJardin from "@/assets/room-suite-jardin.jpeg";
import roomTerrasse from "@/assets/room-terrasse.jpeg";

type RoomKey = "deluxe" | "bleue" | "superior" | "jardin" | "terrasse";

const roomData: {
  key: RoomKey;
  image: { src: string };
  icons: React.ComponentType<{ className?: string }>[];
}[] = [
  { key: "deluxe",   image: roomDeluxe,   icons: [Bed, Bath, Wind, Paintbrush, Wifi] },
  { key: "bleue",    image: roomBleue,    icons: [Bed, Bath, Wind, Paintbrush, Wifi] },
  { key: "superior", image: roomSuperior, icons: [Bed, Bath, Wind, Armchair, Wifi] },
  { key: "jardin",   image: roomJardin,   icons: [Bed, Bath, Wind, TreePine, Wifi] },
  { key: "terrasse", image: roomTerrasse, icons: [Bed, Sun, Bath, Mountain, Wifi] },
];

const featureKeys = ["f1", "f2", "f3", "f4", "f5"] as const;

const RoomShowcase = () => {
  const t = useTranslations("RoomShowcase");

  return (
    <section className="pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
        {roomData.map(({ key, image, icons }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={image.src}
                alt={t(`rooms.${key}.name`)}
                className="w-full h-80 lg:h-[28rem] object-cover rounded-2xl"
                style={{ outline: "1px solid hsl(0 0% 0% / 0.08)", outlineOffset: "-1px" }}
                loading="lazy"
              />
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-baseline gap-3 mb-2">
                <h3
                  className="font-lora font-medium text-foreground leading-tight tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {t(`rooms.${key}.name`)}
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-sourcesans text-sm text-muted-foreground">{t(`rooms.${key}.capacity`)}</span>
                <span className="text-muted-foreground">·</span>
                <span className="font-sourcesans text-sm font-medium text-primary">{t(`rooms.${key}.price`)}</span>
              </div>
              <p className="font-sourcesans text-base leading-[1.7] text-muted-foreground mb-6">
                {t(`rooms.${key}.description`)}
              </p>
              <ul className="space-y-2.5 mb-8">
                {featureKeys.map((fk, fi) => {
                  const Icon = icons[fi];
                  return (
                    <li key={fk} className="flex items-center gap-3 font-sourcesans text-sm text-foreground">
                      <span className="text-primary"><Icon className="w-4 h-4" /></span>
                      {t(`rooms.${key}.${fk}`)}
                    </li>
                  );
                })}
              </ul>
              <Button variant="outline" asChild>
                <Link href="/contact">{t("checkAvailability")}</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoomShowcase;
