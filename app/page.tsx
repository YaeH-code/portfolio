import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-28 pb-28 flex flex-col gap-8">
      <Hero />
      <Projects />
      <Experiences />
      <Educations />
    </main>
  );
}
