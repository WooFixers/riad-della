"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  const t = useTranslations("ContactCta");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {t("heading")}
          </h2>
          <p className="font-sourcesans text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-[1.7]">
            {t("subheading")}
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              onClick={() => document.getElementById("reservation-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("cta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCta;
