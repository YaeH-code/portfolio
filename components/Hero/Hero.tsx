"use client";

import Image from "next/image";
import CustomBadge from "./CustomBadge";
import SkillCards from "./SkillCards";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Hero() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const styles = {
    profile: {
      maxWidth: "42rem",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      paddingTop: "2rem",
      gap: "1.25rem",
    },
    imageWrapper: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0 0 0 1px #ffffff14, 0 4px 20px #ffffff0a",
      display: "inline-block",
      backgroundColor: "#121212",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    titleText: {
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: "1.2px",
      color: "#f4f4f5",
      margin: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      maxWidth: "42rem",
    },
    introText: {
      fontSize: "1rem",
      color: "#a1a1aa",
      lineHeight: 1.7,
      margin: 0,
    },
  } as const;

  return (
    <div style={styles.profile}>
      <CustomBadge isOpen={true} />

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-around text-center md:text-left">
        <h1 style={styles.titleText}>Yae Umehara</h1>
        <div style={styles.imageWrapper}>
          <Image
            src="/images/yae3.jpg"
            alt="Yae Umehara"
            width={100}
            height={100}
            style={styles.image}
            priority
          />
        </div>
      </div>

      <div style={styles.container}>
        <p style={styles.introText}>
          {t.hero.introPart1}{" "}
          <span className="font-bold text-white">React, C# .NET</span>{" "}
          {t.hero.introPart2}
        </p>

        <SkillCards></SkillCards>
      </div>

      <SocialLinks></SocialLinks>
    </div>
  );
}
