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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 h-25 flex items-center justify-between">
        <Link href="/" className="no-underline inline-block w-15 h-15">
          <Image
            src="/images/logo.png"
            alt="Image de l'accueil"
            width={60}
            height={60}
            className="w-[55px] h-[55px]"
            priority
          />
        </Link>

        <div className="flex gap-6 text-[0.8rem] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="no-underline text-zinc-400 hover:text-white transition-all duration-250 ease-out hover:-translate-y-0.5"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-[0.75rem] font-semibold text-zinc-400 bg-transparent border border-white/10 rounded-md cursor-pointer hover:border-white/30 hover:text-white transition-colors"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </div>
    </nav>
  );
}
