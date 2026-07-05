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

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
      width: "100%",
    },
    card: {
      padding: "1.25rem",
      backgroundColor: "#121212",
      borderRadius: "1rem",
      border: "1px solid #18181b",
      animation: "fadeInUp 0.6s ease forwards",
      opacity: 0,
    },
    cardTitle: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#f4f4f5",
      margin: "0 0 1rem 0",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding: 0,
      margin: 0,
      listStyleType: "none",
    },
    listItem: {
      fontSize: "0.8rem",
      color: "#a1a1aa",
      display: "flex",
      alignItems: "flex-start",
      animation: "fadeInUp 0.4s ease forwards",
      opacity: 0,
    },
  } as const;

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={styles.grid}>
        {SKILLS_DATA.map((card, cardIdx) => (
          <div
            key={cardIdx}
            style={{
              ...styles.card,
              animationDelay: `${cardIdx * 0.15}s`,
            }}
          >
            <p style={styles.cardTitle}>{card.title}</p>
            <ul style={styles.list}>
              {card.items.map((item, itemIdx) => {
                // Calculates a progressive delay for each individual item across both cards
                const globalIndex = cardIdx * 4 + itemIdx;

                return (
                  <li
                    key={itemIdx}
                    style={{
                      ...styles.listItem,
                      // Staggers each item by 0.08 seconds
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
    </>
  );
}
