"use client";

import { useTranslations } from "next-intl";

const footerLinkKeys = ["about", "experience", "rooms", "discover", "reviews", "location"] as const;

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-lora text-xl font-medium text-primary-foreground mb-4">
              Riad Della
            </h3>
            <p className="font-sourcesans text-sm text-primary-foreground/60 leading-[1.7]">
              {t("tagline")}
            </p>
          </div>
          <div>
            <h4 className="font-sourcesans text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground/80 mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {footerLinkKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="font-sourcesans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {t(`links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sourcesans text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground/80 mb-4">
              {t("contact")}
            </h4>
            <div className="space-y-2 font-sourcesans text-sm text-primary-foreground/60">
              <p>Zaouia Abbassia Derb Taht Sour Lakbir</p>
              <p>Rue Bounouala, Marrakech 40000</p>
              <p>Morocco</p>
              <p className="mt-4">
                <a href="mailto:contact@riaddella.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  contact@riaddella.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-sourcesans text-xs text-primary-foreground/40 text-center">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
