"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const reviewKeys = ["sophie", "james", "anna"] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const ReviewsSection = () => {
  const t = useTranslations("ReviewsSection");

  return (
    <section id="reviews" className="py-24 lg:py-32">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {reviewKeys.map((key) => (
            <motion.div key={key} variants={item} className="relative text-center">
              <span
                className="font-lora text-8xl text-primary/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none"
                aria-hidden
              >
                "
              </span>
              <blockquote className="font-lora text-xl lg:text-2xl text-foreground leading-[1.5] relative z-10">
                "{t(`reviews.${key}.quote`)}"
              </blockquote>
              <div className="mt-6">
                <p className="font-sourcesans text-sm font-semibold text-foreground">
                  {t(`reviews.${key}.author`)}
                </p>
                <p className="font-sourcesans text-sm text-muted-foreground">
                  {t(`reviews.${key}.origin`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
