"use client";

import Image from "next/image";
import CustomBadge from "./CustomBadge";
import SkillCards from "./SkillCards";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import frTranslations from "@/locales/fr.json";
import enTranslations from "@/locales/en.json";

export default function Hero() {
  const { lang } = useLanguage();
  const t = lang === "fr" ? frTranslations : enTranslations;
  return (
    <div className="max-w-2xl flex flex-col mx-auto pt-8 gap-5">
      <CustomBadge isOpen={true} />

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-around text-center md:text-left">
        <h1 className="text-[3rem] font-semibold tracking-[1.2px] text-zinc-100 m-0">
          Yae Umehara
        </h1>

        <div className="w-25 h-25 rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_20px_rgba(255,255,255,0.04)] inline-block bg-[#121212]">
          <Image
            src="/images/yae3.jpg"
            alt="Yae Umehara"
            width={100}
            height={100}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-2xl">
        <p className="text-[1rem] text-zinc-400 leading-relaxed m-0">
          {t.hero.introPart1}{" "}
          <span className="font-bold text-white">React, C# .NET</span>{" "}
          {t.hero.introPart2}
        </p>

        <SkillCards />
      </div>

      <SocialLinks />
    </div>
  );
}
