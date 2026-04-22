"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, Compass, Sparkles, Flag, Car } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/riaddella-logo.jpg";
import { locales, type Locale } from "@/lib/navigation";
import { BookingDialog } from "@/components/BookingDialog";
import { cn } from "@/lib/utils";

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

  const isActive = (href: string) => pathname === href;

  const discoverLinks = [
    { href: "/experiences" as const, label: t("experiences"), desc: t("experiencesDesc"), icon: Compass },
    { href: "/spa"         as const, label: t("spa"),         desc: t("spaDesc"),         icon: Sparkles },
    { href: "/golf"        as const, label: t("golf"),        desc: t("golfDesc"),        icon: Flag },
    { href: "/transportation" as const, label: t("transportation"), desc: t("transportationDesc"), icon: Car },
  ];

  const isDiscoverActive = discoverLinks.some(({ href }) => isActive(href));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-[0_1px_0_hsl(var(--border))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={logo.src}
            alt="Riad Della"
            className="h-12 lg:h-14 w-auto object-contain brightness-75"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">

          {/* Rooms */}
          <Link
            href="/rooms"
            className={cn(
              "font-sourcesans text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70",
              isActive("/rooms") ? "text-primary" : "text-foreground"
            )}
          >
            {t("rooms")}
          </Link>

          {/* Discover dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent h-auto px-0 py-0 rounded-none font-sourcesans text-sm font-medium tracking-wide hover:opacity-70 transition-opacity",
                    isDiscoverActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {t("discover")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-1 p-3 w-[400px]">
                    {discoverLinks.map(({ href, label, desc, icon: Icon }) => (
                      <li key={href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={href}
                            className={cn(
                              "flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-secondary group",
                              isActive(href) && "bg-secondary"
                            )}
                          >
                            <span className="mt-0.5 shrink-0 text-primary">
                              <Icon className="w-4 h-4" />
                            </span>
                            <div>
                              <div className={cn(
                                "font-sourcesans text-sm font-medium leading-snug",
                                isActive(href) ? "text-primary" : "text-foreground"
                              )}>
                                {label}
                              </div>
                              <div className="font-sourcesans text-xs text-muted-foreground mt-0.5 leading-snug">
                                {desc}
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact */}
          <Link
            href="/contact"
            className={cn(
              "font-sourcesans text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-70",
              isActive("/contact") ? "text-primary" : "text-foreground"
            )}
          >
            {t("contact")}
          </Link>

          {/* Book Now CTA */}
          <BookingDialog>
            <Button variant="default" size="sm">{t("checkAvailability")}</Button>
          </BookingDialog>

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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-secondary border-t border-border">
          <div className="px-6 py-6 space-y-1">

            {/* Rooms */}
            <Link
              href="/rooms"
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block font-sourcesans text-base py-2 transition-colors",
                isActive("/rooms") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              )}
            >
              {t("rooms")}
            </Link>

            {/* Discover section */}
            <div className="pt-3 pb-1">
              <p className="font-sourcesans text-xs uppercase tracking-[0.12em] text-muted-foreground mb-2">
                {t("discover")}
              </p>
              <div className="space-y-0.5 pl-1">
                {discoverLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 py-2 font-sourcesans text-base transition-colors",
                      isActive(href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    )}
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block font-sourcesans text-base py-2 transition-colors",
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              )}
            >
              {t("contact")}
            </Link>

            {/* Book Now */}
            <div className="pt-3">
              <BookingDialog onBeforeOpen={() => setMenuOpen(false)}>
                <Button variant="default" size="default" className="w-full">
                  {t("checkAvailability")}
                </Button>
              </BookingDialog>
            </div>

            {/* Language switcher */}
            <div className="flex gap-3 pt-4">
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
