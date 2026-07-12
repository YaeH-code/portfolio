"use client";

import TimelineSection, { TimelineItem } from "./Shared/TimelineSection";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface Experience {
  key: "clarsi" | "sosit" | "gottaphish" | "optitmome" | "cite";
  role: string;
  icon: string;
  company: string;
  period: string;
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    key: "clarsi",
    role: "Développeur Full Stack React.js / C# .NET",
    icon: "/images/logos/clarsi.jpg",
    company: "Clarsi",
    period: "2026 — Present",
    tags: ["React.js", "Next.Js", "TypeScript", "Tailwind", "SqlServer", "Git"],
  },
  {
    key: "sosit",
    role: "Développeur Full Stack C# .NET / Blazor",
    icon: "/images/logos/sas.jpeg",
    company: "Sos - IT",
    period: "2026",
    tags: ["C#", ".NET", "Blazor", "XUnit", "Docker", "Git"],
  },
  {
    key: "gottaphish",
    role: "Développeur Full Stack React.js / Node.js",
    icon: "/images/logos/gottaphish.jpg",
    company: "GottaPhish",
    period: "2025 sept - nov",
    tags: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind",
      "Playwright",
      "Hugo",
      "Go",
      "Docker",
      "Express.js",
    ],
  },
  {
    key: "optitmome",
    role: "Webmaster",
    icon: "/images/logos/optitmome.jpg",
    company: "Ô P'tit Môme",
    period: "2024-2025 nov - janv",
    tags: ["WordPress", "Php", "Laravel", "Tailwind", "Git"],
  },
  {
    key: "cite",
    role: "Développeur Full Stack",
    icon: "/images/logos/cite_formation.jpg",
    company: "La Cité des Formations",
    period: "2023 juin - août",
    tags: ["Php", "Laravel", "Livewire", "Git", "Github", "MySQL"],
  },
];

export default function Experiences() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;

  const formattedExperiences: TimelineItem[] = EXPERIENCES.map((exp) => ({
    title: t.experiences[exp.key].role,
    subtitle: exp.company,
    icon: exp.icon,
    period: exp.period,
    description: t.experiences[exp.key].description,
    tags: exp.tags,
  }));
  return (
    <div id="experience">
      <TimelineSection
        id="experiences"
        sectionTitle="Expériences"
        items={formattedExperiences}
      />
    </div>
  );
}
