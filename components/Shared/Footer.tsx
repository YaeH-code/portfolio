"use client";

import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Footer() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const styles = {
    footer: {
      borderTop: "1px solid #27272a99",
      paddingTop: "2.5rem",
      paddingBottom: "2.5rem",
      textAlign: "center",
      fontSize: "0.75rem",
      color: "#52525b",
      backgroundColor: "#0a0a0a",
    },
    text: {
      margin: 0,
      letterSpacing: "0.025em",
    },
  } as const;
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Yae Umehara • {t.footer.text}
      </p>
    </footer>
  );
}
