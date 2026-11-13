import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { ContactLinks } from "@/components/contact-links";
import { ContactForm } from "@/components/contact/contact-form";
import { card, textLink } from "@/lib/ui";

export function ContactSection() {
  const { identity, contact } = portfolio;
  const copy = sectionCopy.contact;
  return (
    <Section id="contacto" title={copy.title} accent={copy.accent} subtitle={copy.subtitle}>
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <a href={`mailto:${identity.email}`} className={`block break-all ${textLink}`}>
            {identity.email}
          </a>
          <ContactLinks links={contact.filter((c) => c.kind !== "email")} />
        </div>
        <div className={`${card} p-5 sm:p-7`}>
          <ContactForm email={identity.email} />
        </div>
      </div>
    </Section>
  );
}
