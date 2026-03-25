"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/riaddella-logo.jpg";
import { locales, type Locale } from "@/lib/navigation";

const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: t("home"),        href: "/" as const },
    { label: t("rooms"),       href: "/rooms" as const },
    { label: t("experiences"), href: "/experiences" as const },
    { label: t("contact"),     href: "/contact" as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-[0_1px_0_hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center">
          <img
            src={logo.src}
            alt="Riad Della"
            className="h-12 lg:h-14 w-auto object-contain brightness-75"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sourcesans text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70 text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="sm" asChild>
            <Link href="/contact">{t("checkAvailability")}</Link>
          </Button>

          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 font-sourcesans text-sm font-medium text-foreground hover:opacity-70 transition-opacity">
                <Globe size={16} />
                <ChevronDown size={14} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((locale) => (
                <DropdownMenuItem key={locale} asChild>
                  <Link href={pathname} locale={locale} className="cursor-pointer">
                    {localeLabels[locale]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-secondary border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-sourcesans text-base text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="default" className="w-full mt-4" asChild>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                {t("checkAvailability")}
              </Link>
            </Button>
            {/* Mobile language switcher */}
            <div className="flex gap-3 pt-2">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={pathname}
                  locale={locale}
                  onClick={() => setMenuOpen(false)}
                  className="font-sourcesans text-sm uppercase font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {locale}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
