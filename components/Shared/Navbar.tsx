"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { lang, toggleLang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;

  const links = [
    { label: t.navbar.projects, href: "#works" },
    { label: t.navbar.experiences, href: "#experiences" },
    { label: t.navbar.educations, href: "#educations" },
  ];

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      backgroundColor: "#0a0a0ab3",
      borderBottom: "1px solid #ffffff1a",
    },
    container: {
      maxWidth: "56rem",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      width: "55px",
      height: "55px",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    link: (isHovered: boolean) => ({
      color: isHovered ? "#ffffff" : "#a1a1aa",
      textDecoration: "none",
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: isHovered ? "translateY(-1px)" : "translateY(0)",
    }),
  } as const;

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link
          href="/"
          className="no-underline inline-block"
          style={{ width: 60, height: 60 }}
        >
          <Image
            src="/images/logo.png"
            alt="Image de l'accueil"
            width={60}
            height={60}
            style={styles.logo}
            priority
          />
        </Link>
        <div style={styles.navLinks}>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              style={styles.link(hoveredIndex === index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            style={{
              padding: "0.25rem 0.625rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#a1a1aa",
              backgroundColor: "transparent",
              border: "1px solid #ffffff1a",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </div>
    </nav>
  );
}
