"use client";

import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Footer() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  return (
    <footer className="border-t border-zinc-700/60 py-10 text-center text-[0.75rem] text-zinc-600 bg-[#0a0a0a]">
      <p className="m-0 tracking-wide">
        © {new Date().getFullYear()} Yae Umehara • {t.footer.text}
      </p>
    </footer>
  );
}
