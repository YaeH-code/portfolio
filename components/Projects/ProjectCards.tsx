"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface Project {
  key: "eminaCoiffure" | "innovEvents" | "gottaPostal";
  title: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
  subGithubLink?: string;
  tag?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    key: "innovEvents",
    title: "Innov'Events",
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
    tag: "Innov'Event API",
    subGithubLink: "https://github.com/YaeH-code/InnovEvents.Client",
    image: "/images/site-innovevent.png",
  },
  {
    key: "eminaCoiffure",
    title: "Emina Coiffure",
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Firebase",
      "Cloudflare",
      "Resend",
    ],
    liveLink: "https://eminacoiffure.fr",
    githubLink: "https://github.com/YaeH-code/eminacoiffure-presentation",
    tag: "GitHub vitrine – Emina Coiffure",
    image: "/images/site-eminacoiffure.png",
  },
  {
    key: "gottaPostal",
    title: "GottaPostal",
    tags: [
      "Hugo",
      "Go",
      "Template",
      "CloudFlare",
      "Docker",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveLink: "https://gottapostal.gottaphish.com/",
    githubLink: "https://github.com/YaeH-code/gottapostal-presentation",
    tag: "GitHub vitrine – GottaPostal",
    image: "/images/site-gottapostal.png",
  },
];

export default function ProjectCards() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
      {PROJECTS.map((project, index) => {
        const isCardHovered = hoveredCard === index;

        return (
          <div
            key={index}
            className={`flex flex-col justify-between rounded-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group ${
              isCardHovered
                ? "bg-[#161618] border border-[#3f3f46] -translate-y-1.5"
                : "bg-[#121212] border border-[#18181b] translate-y-0"
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Link href={project.liveLink}>
              <div
                className="w-full h-[180px] relative overflow-hidden rounded-t-xl bg-[#1a1a1a]"
                title={project.title}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover w-full h-full transition-all duration-500 ease-in-out ${
                    isCardHovered
                      ? "scale-[1.04] brightness-100"
                      : "scale-100 brightness-90"
                  }`}
                  priority={index === 0}
                />
              </div>
            </Link>
            <div className="flex flex-col gap-3 p-5 pb-0 flex-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-[0.875rem] font-semibold text-[#f4f4f5] m-0">
                  {project.title}
                </h3>
                <div className="flex gap-2.5 text-zinc-500 shrink-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      title={project.tag}
                      rel="noreferrer"
                      className="inline-flex items-center hover:text-[#f4f4f5] hover:scale-110 transition-all duration-150 ease-in-out"
                    >
                      <svg
                        className="w-5 h-5"
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
                      title="Innov'Event Client"
                      rel="noreferrer"
                      className="inline-flex items-center hover:text-[#f4f4f5] hover:scale-110 transition-all duration-150 ease-in-out"
                    >
                      <svg
                        className="w-5 h-5"
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
                    className="inline-flex items-center hover:text-[#f4f4f5] hover:scale-110 transition-all duration-150 ease-in-out"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-[0.75rem] text-zinc-400 leading-[1.7] m-0">
                {t.projects[project.key].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1 p-5 pt-4">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 bg-[#09090b] text-zinc-400 rounded border border-zinc-800/40"
                >
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
