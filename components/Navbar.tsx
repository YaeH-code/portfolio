"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    { label: "Projets", href: "#work" },
    { label: "Expériences", href: "#experience" },
    { label: "Formation", href: "#education" },
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
      borderBottom: "1px solid #27272a66",
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
      objectFit: "contain",
      width: "100%",
      height: "100%",
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
        <Link href="/" className="no-underline inline-block">
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
        </div>
      </div>
    </nav>
  );
}
