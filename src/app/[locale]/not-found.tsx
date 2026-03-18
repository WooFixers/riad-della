import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="font-lora text-6xl font-medium text-foreground mb-4">404</h1>
        <p className="font-sourcesans text-xl text-muted-foreground mb-8">
          {t("message")}
        </p>
        <Link
          href="/"
          className="font-sourcesans text-sm font-semibold uppercase tracking-[0.08em] bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-8 py-3 transition-all duration-150"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
