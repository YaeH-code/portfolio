"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "fr" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);
  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
