"use client";

import { motion } from "framer-motion";
import spa3 from "@/assets/riad/spa/spa-3.webp";
import spa4 from "@/assets/riad/spa/spa-4.webp";
import spa5 from "@/assets/riad/spa/spa-5.webp";

const imgStyle = { outline: "1px solid hsl(0 0% 0% / 0.07)", outlineOffset: "-1px" as const };

const SpaGallery = () => (
  <section className="pb-16 lg:pb-0">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:h-[32rem]"
      >
        {/* Landscape — fills full height on desktop */}
        <img
          src={spa3.src}
          alt="Spa at Riad Della"
          className="w-full h-72 lg:h-full object-cover rounded-2xl"
          style={imgStyle}
          loading="lazy"
        />

        {/* Two portrait images stacked */}
        <div className="grid grid-rows-2 gap-3">
          <img
            src={spa4.src}
            alt="Hammam at Riad Della"
            className="w-full h-48 lg:h-full object-cover rounded-2xl"
            style={imgStyle}
            loading="lazy"
          />
          <img
            src={spa5.src}
            alt="Massage at Riad Della"
            className="w-full h-48 lg:h-full object-cover rounded-2xl"
            style={imgStyle}
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SpaGallery;
