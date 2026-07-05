"use client";

import ProjectCards from "./ProjectCards";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Projects() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      scrollMarginTop: "8rem",
    },
    heading: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#71717a",
      margin: 0,
      paddingBottom: "10px",
      borderBottom: "1px solid #ffffff1a",
    },
  } as const;

  return (
    <section id="works" style={styles.section}>
      <h2 style={styles.heading}>{t.projects.heading}</h2>
      <ProjectCards />
    </section>
  );
}
