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
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQHdD7jqdt_9Xg/company-logo_200_200/company-logo_200_200/0/1630577675897/studi_digital_education_logo?e=1784764800&v=beta&t=HZDGJIamOs0zFieDMr2KA5ZsBH_Fwu0gSuh8kkGokHM",
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
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQGtSzkzCF3ybw/company-logo_200_200/B4DZlNjvg1GkAM-/0/1757942839709/m2iformation_logo?e=1784764800&v=beta&t=cNkGwqEY-rs1G19beBaIBWUmPa5U2QZSz0UENuZ-IDU",
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
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEM9o30NHySWg/company-logo_200_200/company-logo_200_200/0/1718901706220/afpa_logo?e=1784764800&v=beta&t=ICZHmrgAD0pd6NIJ5f3Deb7trQPNNlspLBEX2DU-Yrs",
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
    <main>
      <TimelineSection
        id="educations"
        sectionTitle="Formations"
        items={formattedFormations}
      />
    </main>
  );
}
