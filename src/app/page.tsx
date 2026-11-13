import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects/projects";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <SiteFooter />
    </>
  );
}
