import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stack";
import { Timeline } from "@/components/timeline";
import { ContactSection } from "@/components/contact/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Timeline />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
