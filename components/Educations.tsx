import TimelineSection, { TimelineItem } from "./Shared/TimelineSection";

interface Formation {
  degree: string;
  icon?: string;
  school: string;
  period: string;
  description: string;
  tags: string[];
}

const FORMATIONS: Formation[] = [
  {
    degree: "Bac +3 - Concepteur Développeur d'Applications",
    icon: "https://media.licdn.com/dms/image/v2/C4D0BAQHdD7jqdt_9Xg/company-logo_200_200/company-logo_200_200/0/1630577675897/studi_digital_education_logo?e=1784764800&v=beta&t=HZDGJIamOs0zFieDMr2KA5ZsBH_Fwu0gSuh8kkGokHM",
    school: "Studi",
    period: "2025 - 2026",
    description: `Formation supérieure axée sur la conception d'architectures web robustes et sécurisées avec une spécialisation Angular, 
      la gestion de bases de données relationnelles et le développement full-stack.`,
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
    degree: "Certification - Microsoft Certified Professional Developer (MCPD)",
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQGtSzkzCF3ybw/company-logo_200_200/B4DZlNjvg1GkAM-/0/1757942839709/m2iformation_logo?e=1784764800&v=beta&t=cNkGwqEY-rs1G19beBaIBWUmPa5U2QZSz0UENuZ-IDU",
    school: "M2i Formations",
    period: "2025 — 2026",
    description: `Formation intensive de professionnalisation en Programmation Orientée Objet (POO) avec C# et .NET 10, 
    axée sur la conception et la réalisation d'API REST robustes via ASP.NET et Entity Framework Core.`,
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
    degree: "Bac +2 - Développeur Web et Web Mobile",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEM9o30NHySWg/company-logo_200_200/company-logo_200_200/0/1718901706220/afpa_logo?e=1784764800&v=beta&t=ICZHmrgAD0pd6NIJ5f3Deb7trQPNNlspLBEX2DU-Yrs",
    school: "Afpa Digital",
    period: "2022 — 2023",
    description: `Apprentissage intensif des fondamentaux du web, intégration responsive, et création d'applications web dynamiques avec des frameworks modernes.`,
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
    degree: "Bac +4 Diplôme universitaire, Professeur de Langue",
    school: "Université Kokugakuin",
    period: "2012 — 2016",
    description: `Travail approfondi d'analyse, d'investigation scientifique et d'archivage de manuscrits anciens (~ 2000 ans), 
    combiné à la conception de programmes de formation sur mesure, adaptés avec précision aux besoins spécifiques des apprenants.`,
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

const formattedFormations: TimelineItem[] = FORMATIONS.map((form) => ({
  title: form.degree,
  subtitle: form.school,
  icon: form.icon || "",
  period: form.period,
  description: form.description,
  tags: form.tags,
}));

export default function Educations() {
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
