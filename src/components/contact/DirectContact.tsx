"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react";

const DirectContact = () => {
  const t = useTranslations("DirectContact");

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-12"
        >
          <h2
            className="font-lora font-medium text-foreground leading-[1.2] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {t("heading")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-lora text-lg font-medium text-foreground mb-2">{t("addressLabel")}</h3>
              <p className="font-sourcesans text-muted-foreground leading-[1.7]">
                Zaouia Abbassia Derb Taht Sour Lakbir<br />
                Rue Bounouala<br />
                Marrakech 40000, Morocco
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-lora text-lg font-medium text-foreground mb-2">{t("emailLabel")}</h3>
              <a
                href="mailto:contact@riaddella.com"
                className="font-sourcesans text-primary hover:text-primary/80 transition-colors"
              >
                contact@riaddella.com
              </a>
              <p className="font-sourcesans text-sm text-muted-foreground mt-3 leading-[1.7]">
                {t("emailHelper")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectContact;
