"use client";

import ProjectCards from "./ProjectCards";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Projects() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section id="works" className="flex flex-col gap-6 scroll-mt-32">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-widest text-zinc-500 m-0 pb-[10px] border-b border-white/10">
          {t.projects.heading}
        </h2>
        <ProjectCards />
      </section>
    </>
  );
}
