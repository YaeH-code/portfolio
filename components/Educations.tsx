"use client";

import TimelineSection, { TimelineItem } from "./Shared/TimelineSection";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface Formation {
  key: "studi" | "m2i" | "afpa" | "kokugakuin";
  icon?: string;
  school: string;
  period: string;
  tags: string[];
}

const FORMATIONS: Formation[] = [
  {
    key: "studi",
    icon: "/images/logos/studi.jpg",
    school: "Studi",
    period: "2025 - 2026",
    tags: [
      "Node.js",
      "Angular",
      "TypeScript",
      "RXJS",
      "Conteneurisation avec Docker",
      "Kubernetes",
      "JavaScript",
      "Middleware",
      "Figma",
      "Design Pattern",
      "Architecture en couche",
    ],
  },
  {
    key: "m2i",
    icon: "/images/logos/m2iformation.jpg",
    school: "M2i Formations",
    period: "2025 — 2026",
    tags: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "EntityFrameworkCore",
      "Logique algorithmique",
      "Programmation Orienté Objet",
      "Visual Studio",
    ],
  },
  {
    key: "afpa",
    icon: "/images/logos/afpa.jpg",
    school: "Afpa Digital",
    period: "2022 — 2023",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Php",
      "Symfony",
      "UML",
      "Figma",
      "Jira",
      "Méthode Agile",
    ],
  },
  {
    key: "kokugakuin",
    school: "Université Kokugakuin",
    period: "2012 — 2016",
    tags: [
      "Japonais",
      "Anglais",
      "Français",
      "Chinois",
      "Littérature",
      "Histoire",
    ],
  },
];

export default function Educations() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const formattedFormations: TimelineItem[] = FORMATIONS.map((form) => ({
    title: t.educations[form.key].degree,
    subtitle: form.school,
    icon: form.icon || "",
    period: form.period,
    description: t.educations[form.key].description,
    tags: form.tags,
  }));
  return (
    <div>
      <TimelineSection
        id="educations"
        sectionTitle="Formations"
        items={formattedFormations}
      />
    </div>
  );
}
