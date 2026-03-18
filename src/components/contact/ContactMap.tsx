"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ContactMap = () => {
  const t = useTranslations("ContactMap");

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-10"
        >
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {t("heading")}
          </h2>
          <p className="font-sourcesans text-muted-foreground mt-3 max-w-xl mx-auto leading-[1.7]">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Riad Della Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.086089958419!2d-7.988569814896782!3d31.639735610217798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefd6743572a5%3A0xd57e81fa11135e11!2sRiad%20Della!5e0!3m2!1sen!2sma!4v1773661722724!5m2!1sen!2sma"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
