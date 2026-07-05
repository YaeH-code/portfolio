import { useState, CSSProperties } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
  subGithubLink?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "Emina Coiffure",
    description: `Une application React.js élégante au service d'un véritable salon de coiffure visagiste, 
      mêlant vitrine digitale et réservation intelligente avec un blocage 
      des créneaux sur-mesure selon la prestation choisie.`,
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Firebase",
      "Cloudflare",
      "Resend",
    ],
    liveLink: "https://eminacoiffure.fr",
    githubLink: "https://github.com/YaeH-code/emina-hairsalon",
    image: "/images/site-eminacoiffure.png",
  },
  {
    title: "Innov'Events",
    description: `Une solution client-serveur conteneurisée (Web et API Docker) 
    centralisant la gestion événementielle d'une agence via un CRM fiable, 
    la génération automatique de devis PDF et un suivi collaboratif des tâches.
    `,
    tags: [
      "Angular",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      ".NET",
      "API REST",
      "Entity Framework Core",
      "PostgreSQL",
    ],
    liveLink: "https://innovevent.occy.ovh/",
    githubLink: "https://github.com/YaeH-code/InnovEvents.API",
    subGithubLink: "https://github.com/YaeH-code/InnovEvents.Client",
    image: "/images/site-innovevent.png",
  },
  {
    title: "GottaPostal",
    description: `Une plateforme SMTP gratuite et performante dédiée à l'envoi d'e-mails, 
    la gestion de campagnes marketing et la réalisation de tests légaux de sensibilisation au phishing`,
    tags: ["Hugo", "Go", "CloudFlare", "Docker", "HTML", "CSS", "JavaScript"],
    liveLink: "https://gottapostal.gottaphish.com/",
    githubLink: "https://github.com/YaeH-code/GottaPostal",
    image: "/images/site-gottapostal.png",
  },
];

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  card: (isHovered: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: isHovered ? "#161618" : "#121212",
    borderRadius: "0.75rem",
    border: isHovered ? "1px solid #3f3f46" : "1px solid #18181b",
    transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px 1px rgba(63, 63, 70, 0.15)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    overflow: "hidden",
  }),
  imageContainer: {
    width: "100%",
    height: "180px",
    position: "relative" as const,
    overflow: "hidden" as const,
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
    backgroundColor: "#1a1a1a",
  },
  projectImg: (isHovered: boolean) =>
    ({
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transform: isHovered ? "scale(1.04)" : "scale(1)",
      filter: isHovered ? "brightness(1.0)" : "brightness(0.9)",
      transition: "transform 0.5s ease, filter 0.5s ease",
    }) as const,
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "1.25rem 1.25rem 0 1.25rem",
    flex: 1,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between" as const,
    alignItems: "flex-start" as const,
    gap: "0.5rem",
  },
  title: {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#f4f4f5",
    margin: 0,
  } as const,
  actions: {
    display: "flex",
    gap: "0.625rem",
    color: "#71717a",
    flexShrink: 0,
  },
  iconLink: (isIconHovered: boolean) => ({
    color: isIconHovered ? "#f4f4f5" : "inherit",
    transform: isIconHovered ? "scale(1.1)" : "scale(1)",
    transition: "all 0.15s ease",
    display: "inline-flex",
    alignItems: "center",
  }),
  svgIcon: {
    width: "1.25rem",
    height: "1.25rem",
  },
  description: {
    fontSize: "0.75rem",
    color: "#a1a1aa",
    lineHeight: 1.625,
    margin: 0,
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.25rem",
    padding: "1rem 1.25rem 1.25rem 1.25rem",
  },
  tag: {
    fontSize: "10px",
    fontFamily: "monospace",
    padding: "0.125rem 0.5rem",
    backgroundColor: "#09090b",
    color: "#a1a1aa",
    borderRadius: "0.25rem",
    border: "1px solid rgba(39, 39, 42, 0.4)",
  },
} as const;

export default function ProjectCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<{
    cardIdx: number;
    type: "github" | "subgithub" | "live";
  } | null>(null);

  return (
    <div style={styles.grid}>
      {PROJECTS.map((project, index) => {
        const isCardHovered = hoveredCard === index;

        return (
          <div
            key={index}
            style={styles.card(isCardHovered)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Link href={project.liveLink}>
              <div style={styles.imageContainer} title={project.title}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={styles.projectImg(isCardHovered)}
                  priority={index === 0}
                />
              </div>
            </Link>

            <div style={styles.cardContent}>
              <div style={styles.cardHeader}>
                <h3 style={styles.title}>{project.title}</h3>
                <div style={styles.actions}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.iconLink(
                        hoveredIcon?.cardIdx === index &&
                          hoveredIcon?.type === "github",
                      )}
                      onMouseEnter={() =>
                        setHoveredIcon({ cardIdx: index, type: "github" })
                      }
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <svg
                        style={styles.svgIcon}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    </a>
                  )}

                  {project.subGithubLink && (
                    <a
                      href={project.subGithubLink}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.iconLink(
                        hoveredIcon?.cardIdx === index &&
                          hoveredIcon?.type === "subgithub",
                      )}
                      onMouseEnter={() =>
                        setHoveredIcon({ cardIdx: index, type: "subgithub" })
                      }
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <svg
                        style={styles.svgIcon}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    </a>
                  )}

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.iconLink(
                      hoveredIcon?.cardIdx === index &&
                        hoveredIcon?.type === "live",
                    )}
                    onMouseEnter={() =>
                      setHoveredIcon({ cardIdx: index, type: "live" })
                    }
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p style={styles.description}>{project.description}</p>
            </div>

            <div style={styles.tagContainer}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
