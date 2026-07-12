import { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

interface SkillCardData {
  title: string;
  items: (string | ReactNode)[];
}

export default function SkillsGrid() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  const SKILLS_DATA: SkillCardData[] = [
    { title: t.skills.technicalTitle, items: t.skills.technicalItems },
    { title: t.skills.softSkillsTitle, items: t.skills.softItems },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full">
      {SKILLS_DATA.map((card, cardIdx) => (
        <div
          key={cardIdx}
          className="p-5 bg-[#121212] rounded-2xl border border-zinc-900 opacity-0 animate-[fadeInUp_0.8s_ease_forwards]"
          style={{
            animationDelay: `${cardIdx * 0.15}s`,
          }}
        >
          <p className="text-[1rem] font-semibold text-zinc-100 m-0 mb-4">
            {card.title}
          </p>

          <ul className="flex flex-col gap-2 p-0 m-0 list-none">
            {card.items.map((item, itemIdx) => {
              const globalIndex = cardIdx * 4 + itemIdx;

              return (
                <li
                  key={itemIdx}
                  className="text-[0.9rem] text-zinc-400 flex items-start opacity-0 animate-[fadeInUp_0.6s_ease_forwards]"
                  style={{
                    animationDelay: `${0.2 + globalIndex * 0.08}s`,
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
