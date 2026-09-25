"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Wind, Waves, Bath, Shield, MountainSnow, Droplets, Flower2, Flame, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import linaBedroom1 from "@/assets/riad/lina/bedroom-1.webp";
import linaBedroom2 from "@/assets/riad/lina/bedroom-2.webp";
import linaBedroom3 from "@/assets/riad/lina/bedroom-3.webp";
import linaBathroom1 from "@/assets/riad/lina/bathroom-1.webp";
import amelBedroom1 from "@/assets/riad/amel/bedroom-1.webp";
import amelBedroom2 from "@/assets/riad/amel/bedroom-2.webp";
import amelBedroom3 from "@/assets/riad/amel/bedroom-3.webp";
import amelBathroom1 from "@/assets/riad/amel/bathroom-1.webp";
import amelBathroom2 from "@/assets/riad/amel/bathroom-2.webp";
import asmaBedroom1 from "@/assets/riad/asma/bedroom-1.webp";
import asmaBedroom2 from "@/assets/riad/asma/bedroom-2.webp";
import asmaBedroom3 from "@/assets/riad/asma/bedroom-3.webp";
import asmaBathroom1 from "@/assets/riad/asma/bathroom-1.webp";
import della1 from "@/assets/riad/della/della-1.webp";
import della2 from "@/assets/riad/della/della-2.webp";
import dellaBathroom from "@/assets/riad/della/della-bathroom.webp";
import maya1 from "@/assets/riad/maya/maya-1.webp";
import maya2 from "@/assets/riad/maya/maya-2.webp";
import mayaBathroom from "@/assets/riad/maya/bathroom.webp";

type RoomKey = "lina" | "maya" | "amel" | "asma" | "della";

const featureIcons = [Wind, Waves, Bath, Shield, MountainSnow, Droplets, Flower2, Flame, Coffee];
const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9"] as const;

const roomData: { key: RoomKey; images: { src: string }[] }[] = [
  { key: "lina", images: [linaBedroom1, linaBedroom2, linaBedroom3, linaBathroom1] },
  { key: "maya", images: [maya1, maya2, mayaBathroom] },
  { key: "amel", images: [amelBedroom1, amelBedroom2, amelBedroom3, amelBathroom1, amelBathroom2] },
  { key: "asma", images: [asmaBedroom1, asmaBedroom2, asmaBedroom3, asmaBathroom1] },
  { key: "della", images: [della1, della2, dellaBathroom] },
];

const RoomShowcase = () => {
  const t = useTranslations("RoomShowcase");
  const tSection = useTranslations("RoomsSection");

  return (
    <section className="pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-24">
        {roomData.map(({ key, images }, index) => (
          <motion.div
            key={key}
            id={`room-${key}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {key === "della" && <span id="room-douiria" className="sr-only" />}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <Carousel
                className="w-full"
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {images.map((img, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={img.src}
                        alt={t(`rooms.${key}.name`)}
                        className="w-full h-80 lg:h-[28rem] object-cover rounded-2xl"
                        style={{ outline: "1px solid hsl(0 0% 0% / 0.08)", outlineOffset: "-1px" }}
                        loading="lazy"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <h3
                className="font-lora font-medium text-foreground leading-tight tracking-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                {t(`rooms.${key}.name`)}
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="font-sourcesans text-sm text-muted-foreground">{t(`rooms.${key}.capacity`)}</span>
                </div>
                <span className="font-sourcesans text-sm font-medium text-primary">{tSection(`rooms.${key}.price`)}</span>
              </div>
              <p className="font-sourcesans text-base leading-[1.7] text-muted-foreground mb-6">
                {t(`rooms.${key}.description`)}
              </p>
              <ul className="space-y-2.5 mb-8">
                {featureKeys.map((fk, fi) => {
                  const Icon = featureIcons[fi];
                  return (
                    <li key={fk} className="flex items-center gap-3 font-sourcesans text-sm text-foreground">
                      <span className="text-primary"><Icon className="w-4 h-4" /></span>
                      {t(`rooms.${key}.${fk}`)}
                    </li>
                  );
                })}
              </ul>
              <BookingDialog>
                <Button variant="outline">{t("checkAvailability")}</Button>
              </BookingDialog>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RoomShowcase;
