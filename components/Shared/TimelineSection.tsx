"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

  return (
    <section id={id} className="flex flex-col gap-6 scroll-mt-32">
      <h2 className="text-[0.75rem] font-semibold uppercase tracking-widest text-zinc-500 m-0 pb-2.5 border-b border-white/10">
        {sectionTitle}
      </h2>

      <div ref={containerRef} className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-5 bg-[#121212] rounded-xl border border-[#18181b] flex flex-col items-start gap-4 
              transition-all duration-900 ease-in-out transform-gpu ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            style={{
              transitionDelay: isIntersecting ? `${index * 180}ms` : "0ms",
            }}
          >
            <div className="flex flex-col gap-1 w-full">
              {/* En-tête de la carte */}
              <div className="flex flex-row items-center justify-start gap-4 flex-wrap sm:flex-nowrap">
                <span className="inline-flex items-center justify-center overflow-hidden rounded-[3px] w-6 h-6 shrink-0">
                  {item.icon && item.icon.trim() !== "" ? (
                    <Image
                      src={item.icon}
                      alt={`${item.subtitle} logo`}
                      width={24}
                      height={24}
                      unoptimized
                    />
                  ) : (
                    <div className="w-6 h-6 bg-zinc-800 rounded-[10px]" />
                  )}
                </span>

                <h3 className="text-[0.875rem] font-medium text-[#f4f4f5] m-0 mr-auto">
                  {item.title}
                </h3>

                <span className="text-[11px] font-mono text-zinc-500 shrink-0 bg-zinc-900/60 px-2.5 py-1 rounded border border-zinc-800/50">
                  {item.period}
                </span>
              </div>

              {/* Sous-titre */}
              <p className="text-zinc-400 text-[0.75rem] font-medium m-0 mt-1">
                {item.subtitle}
              </p>

              {/* Conteneur de Badges / Tags */}
              <div className="flex flex-wrap gap-1 py-2 px-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 bg-[#09090b] text-zinc-400 rounded border border-zinc-800/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[0.75rem] text-zinc-500 pt-2 px-2 leading-[1.7] m-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
