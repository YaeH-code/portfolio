import Image from "next/image";
import { CSSProperties } from "react";
import TimelineSection, { TimelineItem } from "./Shared/TimelineSection";

interface Experience {
  role: string;
  icon: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Développeur Full Stack React.js / C# .NET",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQG3_WBurmR1hw/company-logo_200_200/company-logo_200_200/0/1630651869866/clarsi_logo?e=1784764800&v=beta&t=_d5JgppjFZ4DFBwEBvl7CDltFlNBxBw5ECBfXoZkXCg",
    company: "Clarsi",
    period: "2026 — Present",
    description: `Développement d'une application web en React / Next.js dédiée à la gestion des comptes personnels 
    des abonnés et adhérents de la Fédération Française de la Randonnée.
    Intégration de validations de données strictes avec Zod et consommation sécurisée d'une API Gateway via Axios.
    Exploitation des stratégies de rendu hybrides de Next.js pour optimiser les performances d'affichage et la vitesse de chargement initial de l'espace adhérent.`,
    tags: ["React.js", "Next.Js", "TypeScript", "Tailwind", "SqlServer", "Git"],
  },
  {
    role: "Développeur Full Stack C# .NET / Blazor",
    icon: "https://woodtrack-preprod.sos-it.fr/img/logo.99ibqk48ke.jpeg",
    company: "Sos - IT",
    period: "2026",
    description: `Développement en Clean Architecture (.NET 10 / EF Core) d'une application de gestion de chantiers pour le transport routier, 
      intégrant des composants Blazor réutilisables, des formulaires multi-étapes, 
      la génération de PDF de Lettre de Voiture et des tests unitaires/d'intégration rigoureux.`,
    tags: ["C#", ".NET", "Blazor", "XUnit", "Docker", "Git"],
  },
  {
    role: "Développeur Full Stack React.js / Node.js",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQE1fc6-JFUY7Q/company-logo_200_200/company-logo_200_200/0/1709653075368/gottaphish_logo?e=1784764800&v=beta&t=6E-oR0448oZb1gyEL06IcWLyK9oBSwsL4aneVemtxcE",
    company: "GottaPhish",
    period: "2025 sept - nov",
    description: `Contribution au développement et à l'amélioration continue de la plateforme de cybersécurité GottaPhish, 
    dédiée à la formation et à la prévention des risques de phishing via des campagnes dynamiques et personnalisées. 
    Réalisation complète et déploiement sous Docker d'une application web (GottaPostal), généré avec Hugo, donnant accès à un serveur SMTP. 
    Modernisation de la suite de tests end-to-end de l'application principale à l'aide de Playwright et Node.js.`,
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
    role: "Webmaster",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQGxTZCy4MHBCw/company-logo_200_200/company-logo_200_200/0/1727792244093/optitmome_logo?e=1784764800&v=beta&t=zQk_ZgHa9rQZ6KWir62QmTCxPyyCxHscWDEGUgFDvTQ",
    company: "Ô P'tit Môme",
    period: "2024-2025 nov - janv",
    description: `Optimisation de la satisfaction client et de la productivité interne grâce à une analyse rigoureuse des besoins et une communication fluide, 
    concrétisées par l'intégration de maquettes sous PHP Laravel et WordPress pour offrir une UX/UI améliorée.`,
    tags: ["WordPress", "Php", "Laravel", "Tailwind", "Git"],
  },
  {
    role: "Développeur Full Stack",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQEbJi6mrlsz1Q/company-logo_200_200/company-logo_200_200/0/1724680386946/cite_formations_tours_logo?e=1784764800&v=beta&t=JBza9V2Xs0GRyoveCjsFx4nxyUU0sUAuYZS5JuZJR2c",
    company: "La Cité des Formations",
    period: "2023 juin - août",
    description: `Conception et développement d’un outil collaboratif inter-services en interface directe avec l'équipe technique et le client. 
    Ce projet a englobé la refonte UI/UX responsive, l'implémentation de vues dynamiques par profil, ainsi que la création de composants sur mesure 
    (moteur de recherche, fenêtres modales, Iconpicker), le tout accompagné d'une gestion de versions rigoureuse sous Git/GitHub et clôturé par 
    l'animation de la démonstration technique finale devant le client.`,
    tags: ["Php", "Laravel", "Livewire", "Git", "Github", "MySQL"],
  },
];

const formattedExperiences: TimelineItem[] = EXPERIENCES.map((exp) => ({
  title: exp.role,
  subtitle: exp.company,
  icon: exp.icon,
  period: exp.period,
  description: exp.description,
  tags: exp.tags,
}));

export default function Experiences() {
  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    heading: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#71717a",
      margin: 0,
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    card: {
      padding: "1.25rem",
      backgroundColor: "#121212",
      borderRadius: "0.75rem",
      border: "1px solid #18181b",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem",
    } as CSSProperties,
    contentStack: {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },
    cardHeading: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      gap: "1rem",
    },
    companyIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "3px",
      width: "24px",
      height: "24px",
    },
    roleTitle: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#f4f4f5",
      margin: 0,
    },
    companyName: {
      color: "#a1a1aa",
      fontSize: "0.75rem",
      fontWeight: 500,
      margin: 0,
    },
    descriptionText: {
      fontSize: "0.75rem",
      color: "#71717a",
      paddingTop: "0.5rem",
      maxWidth: "36rem",
      lineHeight: 1.625,
      margin: 0,
    },
    periodBadge: {
      fontSize: "11px",
      fontFamily: "monospace",
      color: "#71717a",
      flexShrink: 0,
      backgroundColor: "rgba(24, 24, 27, 0.6)",
      padding: "0.25rem 0.625rem",
      borderRadius: "0.25rem",
      border: "1px solid rgba(39, 39, 42, 0.5)",
    },
  } as const;

  return (
    <section id="experience" style={styles.section}>
      <TimelineSection
        id="experiences"
        sectionTitle="Expériences"
        items={formattedExperiences}
      />
    </section>
  );
}
