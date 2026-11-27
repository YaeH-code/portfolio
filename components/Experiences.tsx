"use client";

import TimelineSection, { TimelineItem } from "./Shared/TimelineSection";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface Experience {
  key:
    | "sosit"
    | "eminaCoiffure"
    | "clarsi"
    | "gottaphish"
    | "optitmome"
    | "cite";
  role: string;
  icon: string;
  company: string;
  period: string;
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    key: "sosit",
    role: "Développeuse FullStack Web & Mobile",
    icon: "/images/logos/sas.jpeg",
    company: "Sos - IT",
    period: "Nov. 2025 — Présent",
    tags: [
      "Angular",
      "Capacitor",
      "TypeScript",
      "C#",
      ".NET 10",
      "EF Core",
      "Blazor",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    key: "eminaCoiffure",
    role: "Développeuse FullStack (Conception, Déploiement & SEO)",
    icon: "/images/logos/emina-coiffure.jpeg", // replace with your actual logo filename
    company: "Emina Coiffure",
    period: "Fév. 2026 — Présent",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Resend",
      "Cloudflare Pages",
      "SEO",
    ],
  },
  {
    key: "clarsi",
    role: "Développeuse FullStack C# / React.js",
    icon: "/images/logos/clarsi.jpg",
    company: "Clarsi",
    period: "Fév. 2026 — Août 2026",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "Zod",
      "Git",
    ],
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
