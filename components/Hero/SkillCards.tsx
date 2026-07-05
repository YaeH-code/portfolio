import { ReactNode } from "react";

interface SkillCardData {
  title: string;
  items: (string | ReactNode)[];
}

export default function SkillsGrid() {
  const SKILLS_DATA: SkillCardData[] = [
    {
      title: "💻 Expertise Technique",
      items: [
        "Programmation Orientée Objet (POO)",
        "C# .NET, Java, PHP, TypeScript",
        "React, Angular, Next, Laravel",
        "HTML5, CSS3, JavaScript",
        "SQL, PostgreSQL, NoSQL",
        "(Développement de fonctionnalités dynamiques, intégration d'API)",
      ],
    },
    {
      title: "✨ Soft Skills",
      items: [
        "Capacité d’adaptation rapide",
        "Curiosité technologique constante",
        "Rigueur et sens de l’organisation",
        "Engagement & esprit d’équipe",
      ],
    },
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
    },
  } as const;

  return (
    <div style={styles.grid}>
      {SKILLS_DATA.map((card, cardIdx) => (
        <div key={cardIdx} style={styles.card}>
          <p style={styles.cardTitle}>{card.title}</p>
          <ul style={styles.list}>
            {card.items.map((item, itemIdx) => (
              <li key={itemIdx} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
