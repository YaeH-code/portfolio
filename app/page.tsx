import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-28 pb-28 space-y-24">
      <Hero />
      <Projects />
      <Experiences />
      <Educations />
    </main>
  );
}
