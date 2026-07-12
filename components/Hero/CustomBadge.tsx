import { CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface CustomBadgeProps {
  isOpen: boolean;
}

export default function CustomBadge({ isOpen }: CustomBadgeProps) {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.75rem] font-medium w-fit border ${
        isOpen
          ? "bg-green-500/10 text-green-400 border-green-500/20"
          : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isOpen
            ? "bg-green-500 shadow-[0_0_0_2px_rgba(34,197,94,0.2)]"
            : "bg-zinc-500 shadow-none"
        }`}
      />
      {isOpen ? t.badge.open : t.badge.closed}
    </div>
  );
}
