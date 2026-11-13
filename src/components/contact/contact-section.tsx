import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { ContactLinks } from "@/components/contact-links";
import { ContactForm } from "@/components/contact/contact-form";
import { card } from "@/lib/ui";

export function ContactSection() {
  const { identity, contact } = portfolio;
  return (
    <Section
      id="contacto"
      title={sectionCopy.contact.title}
      subtitle={sectionCopy.contact.subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <a
            href={`mailto:${identity.email}`}
            className="block font-mono text-sm break-all text-accent hover:underline"
          >
            {identity.email}
          </a>
          <ContactLinks links={contact.filter((c) => c.kind !== "email")} />
        </div>
        <div className={`${card} p-5 sm:p-6`}>
          <ContactForm email={identity.email} />
        </div>
      </div>
    </Section>
  );
}
