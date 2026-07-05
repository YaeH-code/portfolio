"use client";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";

export interface TimelineItem {
  title?: string;
  subtitle: string;
  icon: string;
  period: string;
  description?: string;
  tags: string[];
}

interface TimelineSectionProps {
  id?: string;
  sectionTitle: string;
  items: TimelineItem[];
}

export default function TimelineSection({
  id,
  sectionTitle,
  items,
}: TimelineSectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-50px 0px",
        threshold: 0.1,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      scrollMarginTop: "8rem",
    },
    heading: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#71717a",
      margin: 0,
      paddingBottom: "10px",
      borderBottom: "1px solid #ffffff1a",
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
      opacity: 0,
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
    itemIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "3px",
      width: "24px",
      height: "24px",
      flexShrink: 0,
    },
    itemTitle: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#f4f4f5",
      margin: 0,
    },
    itemSubtitle: {
      color: "#a1a1aa",
      fontSize: "0.75rem",
      fontWeight: 500,
      margin: 0,
    },
    tagContainer: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "0.25rem",
      padding: "0.5rem 1.25rem 0.5rem 1.25rem",
    },
    tag: {
      fontSize: "10px",
      fontFamily: "monospace",
      padding: "0.1rem 0.5rem",
      backgroundColor: "#09090b",
      color: "#a1a1aa",
      borderRadius: "0.25rem",
      border: "1px solid rgba(39, 39, 42, 0.4)",
    },
    descriptionText: {
      fontSize: "0.75rem",
      color: "#71717a",
      paddingTop: "0.5rem",
      paddingInline: "0.5rem",
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

      <section id={id} style={styles.section}>
        <h2 style={styles.heading}>{sectionTitle}</h2>

        <div ref={containerRef} style={styles.listContainer}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                animationName: isIntersecting ? "fadeInUp" : "none",
                animationDuration: "1.5s",
                animationTimingFunction: "ease-in-out",
                animationFillMode: "forwards",
                animationDelay: isIntersecting ? `${index * 150}ms` : "0ms",
              }}
            >
              <div style={styles.contentStack}>
                <div style={styles.cardHeading}>
                  <span style={styles.itemIcon}>
                    {item.icon && item.icon.trim() !== "" ? (
                      <Image
                        src={item.icon}
                        alt={`${item.subtitle} logo`}
                        width={24}
                        height={24}
                        unoptimized
                      />
                    ) : (
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          backgroundColor: "#27272a",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </span>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <span style={styles.periodBadge}>{item.period}</span>
                </div>
                <p style={styles.itemSubtitle}>{item.subtitle}</p>
                <div style={styles.tagContainer}>
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={styles.descriptionText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
