"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";

// Import all images from the gallery subfolders
import food1 from "@/assets/gallery/food/food-1.webp";
import food2 from "@/assets/gallery/food/food-2.webp";
import food3 from "@/assets/gallery/food/food-3.webp";
import food4 from "@/assets/gallery/food/food-4.webp";
import food5 from "@/assets/gallery/food/food-5.webp";
import food6 from "@/assets/gallery/food/food-6.webp";
import food7 from "@/assets/gallery/food/food-7.webp";

import riad1 from "@/assets/gallery/riad/riad-1.webp";
import riad2 from "@/assets/gallery/riad/riad-2.webp";
import riad3 from "@/assets/gallery/riad/riad-3.webp";
import riad4 from "@/assets/gallery/riad/riad-4.webp";
import riad5 from "@/assets/gallery/riad/riad-5.webp";
import riad5_1 from "@/assets/gallery/riad/riad-5-1.webp";
import riad6 from "@/assets/gallery/riad/riad-6.webp";
import riad7 from "@/assets/gallery/riad/riad-7.webp";
import riad8 from "@/assets/gallery/riad/riad-8.webp";
import riad9 from "@/assets/gallery/riad/riad-9.webp";
import riad10 from "@/assets/gallery/riad/riad-10.webp";
import riad11 from "@/assets/gallery/riad/riad-11.webp";
import riad12 from "@/assets/gallery/riad/riad-12.webp";

import rooms1 from "@/assets/gallery/rooms/rooms-1.webp";
import rooms2 from "@/assets/gallery/rooms/rooms-2.webp";
import rooms3 from "@/assets/gallery/rooms/rooms-3.webp";
import rooms4 from "@/assets/gallery/rooms/rooms-4.webp";
import rooms4_1 from "@/assets/gallery/rooms/rooms-4-1.webp";
import rooms5 from "@/assets/gallery/rooms/rooms-5.webp";
import rooms6 from "@/assets/gallery/rooms/rooms-6.webp";

import spa1 from "@/assets/gallery/spa/spa-1.webp";
import spa2 from "@/assets/gallery/spa/spa-2.webp";
import spa2_1 from "@/assets/gallery/spa/spa-2-1.webp";
import spa3 from "@/assets/gallery/spa/spa-3.webp";
import spa4 from "@/assets/gallery/spa/spa-4.webp";
import spa5 from "@/assets/gallery/spa/spa-5.webp";
import spa6 from "@/assets/gallery/spa/spa-6.webp";

interface Photo {
  src: { src: string };
  category: "rooms" | "riad" | "spa" | "food";
  id: string;
  labelKey: string;
}

const GALLERY_IMAGES: Photo[] = [
  // Riad & Terrace
  { src: riad1, category: "riad", id: "riad-1", labelKey: "filterCommon" },
  { src: riad2, category: "riad", id: "riad-2", labelKey: "filterCommon" },
  { src: riad3, category: "riad", id: "riad-3", labelKey: "filterCommon" },
  { src: riad4, category: "riad", id: "riad-4", labelKey: "filterCommon" },
  { src: riad5, category: "riad", id: "riad-5", labelKey: "filterCommon" },
  { src: riad5_1, category: "riad", id: "riad-5-1", labelKey: "filterCommon" },
  { src: riad6, category: "riad", id: "riad-6", labelKey: "filterCommon" },
  { src: riad7, category: "riad", id: "riad-7", labelKey: "filterCommon" },
  { src: riad8, category: "riad", id: "riad-8", labelKey: "filterCommon" },
  { src: riad9, category: "riad", id: "riad-9", labelKey: "filterCommon" },
  { src: riad10, category: "riad", id: "riad-10", labelKey: "filterCommon" },
  { src: riad11, category: "riad", id: "riad-11", labelKey: "filterCommon" },
  { src: riad12, category: "riad", id: "riad-12", labelKey: "filterCommon" },

  // Food
  { src: food1, category: "food", id: "food-1", labelKey: "filterFood" },
  { src: food2, category: "food", id: "food-2", labelKey: "filterFood" },
  { src: food3, category: "food", id: "food-3", labelKey: "filterFood" },
  { src: food4, category: "food", id: "food-4", labelKey: "filterFood" },
  { src: food5, category: "food", id: "food-5", labelKey: "filterFood" },
  { src: food6, category: "food", id: "food-6", labelKey: "filterFood" },
  { src: food7, category: "food", id: "food-7", labelKey: "filterFood" },

  // Rooms
  { src: rooms1, category: "rooms", id: "room-1", labelKey: "filterRooms" },
  { src: rooms2, category: "rooms", id: "room-2", labelKey: "filterRooms" },
  { src: rooms3, category: "rooms", id: "room-3", labelKey: "filterRooms" },
  { src: rooms4, category: "rooms", id: "room-4", labelKey: "filterRooms" },
  { src: rooms4_1, category: "rooms", id: "room-4-1", labelKey: "filterRooms" },
  { src: rooms5, category: "rooms", id: "room-5", labelKey: "filterRooms" },
  { src: rooms6, category: "rooms", id: "room-6", labelKey: "filterRooms" },

  // Spa & Hammam
  { src: spa1, category: "spa", id: "spa-1", labelKey: "filterSpa" },
  { src: spa2, category: "spa", id: "spa-2", labelKey: "filterSpa" },
  { src: spa2_1, category: "spa", id: "spa-2-1", labelKey: "filterSpa" },
  { src: spa3, category: "spa", id: "spa-3", labelKey: "filterSpa" },
  { src: spa4, category: "spa", id: "spa-4", labelKey: "filterSpa" },
  { src: spa5, category: "spa", id: "spa-5", labelKey: "filterSpa" },
  { src: spa6, category: "spa", id: "spa-6", labelKey: "filterSpa" },
];

const imgStyle = { outline: "1px solid hsl(0 0% 0% / 0.05)", outlineOffset: "-1px" as const };

const GalleryGrid = () => {
  const t = useTranslations("GalleryGrid");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories definition
  const categories = [
    { id: "all", label: t("filterAll") },
    { id: "riad", label: t("filterCommon") },
    { id: "food", label: t("filterFood") },
    { id: "rooms", label: t("filterRooms") },
    { id: "spa", label: t("filterSpa") },
  ];

  // Filtered photos
  const filteredPhotos = GALLERY_IMAGES.filter(
    (photo) => activeCategory === "all" || photo.category === activeCategory
  );

  // Lightbox handlers
  const openLightbox = (id: string) => {
    const index = filteredPhotos.findIndex((photo) => photo.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // Also close lightbox if category changes (failsafe)
                setLightboxIndex(null);
              }}
              className={`font-sourcesans text-sm font-medium tracking-wide px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-foreground hover:bg-secondary/70 border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="group relative cursor-pointer aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-md transition-shadow"
                onClick={() => openLightbox(photo.id)}
              >
                <img
                  src={photo.src.src}
                  alt={t(photo.labelKey)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  style={imgStyle}
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground p-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-xs font-sourcesans font-medium text-white tracking-wide uppercase bg-black/50 px-2.5 py-1 rounded">
                    {t(photo.labelKey)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="font-sourcesans text-muted-foreground">No photos found in this category.</p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-24 rounded-3xl bg-secondary p-8 md:p-12 text-center max-w-4xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-border">
          <h3 className="font-lora text-2xl md:text-3xl font-medium text-foreground mb-4">
            {t("ctaHeading")}
          </h3>
          <p className="font-sourcesans text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-[1.6]">
            {t("ctaText")}
          </p>
          <BookingDialog>
            <Button variant="default" size="lg" className="px-8 font-sourcesans">
              {t("ctaButton")}
            </Button>
          </BookingDialog>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between py-6 select-none"
            onClick={(e) => {
              // Close if clicking outside the image or arrows
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Header info */}
            <div className="flex items-center justify-between px-6 md:px-12 w-full text-white/90">
              <span className="font-sourcesans text-xs md:text-sm tracking-widest uppercase">
                {t(filteredPhotos[lightboxIndex].labelKey)}
              </span>
              <span className="font-sourcesans text-xs md:text-sm font-light">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-primary transition-colors p-2 cursor-pointer bg-white/5 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main content with Image and Arrows */}
            <div className="relative flex items-center justify-center flex-1 my-4 px-4">
              
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-10 text-white hover:text-primary transition-colors p-3 bg-black/45 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Active Image */}
              <div className="max-w-5xl max-h-[70vh] flex items-center justify-center overflow-hidden pointer-events-none">
                <motion.img
                  key={filteredPhotos[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  src={filteredPhotos[lightboxIndex].src.src}
                  alt={t(filteredPhotos[lightboxIndex].labelKey)}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  style={imgStyle}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-10 text-white hover:text-primary transition-colors p-3 bg-black/45 rounded-full hover:bg-black/70 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>

            </div>

            {/* Bottom info / title / keyboard hints */}
            <div className="text-center text-white/40 font-sourcesans text-xs px-6 py-2">
              <span className="hidden md:inline">Use Arrow keys ← / → to navigate • Esc to close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
