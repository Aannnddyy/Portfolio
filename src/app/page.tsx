import { SiteHeader } from "@/components/site-header";
import { Intro } from "@/components/intro";
import { Work } from "@/components/work/work";
import { ProfileColumns } from "@/components/profile-columns";
import { ContactSection } from "@/components/contact/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Intro />
        <Work />
        <ProfileColumns />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
