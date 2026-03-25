import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'es', 'it'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix: 'always',
});
