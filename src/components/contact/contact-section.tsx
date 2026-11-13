import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { ContactLinks } from "@/components/contact-links";
import { ContactForm } from "@/components/contact/contact-form";
import { focusRingLight } from "@/lib/ui";

export function ContactSection() {
  const { identity, contact } = portfolio;
  const copy = sectionCopy.contact;
  return (
    <Section
      id="contacto"
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      tone="dark"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <a
            href={`mailto:${identity.email}`}
            className={`block font-serif text-2xl break-all underline decoration-cream/30 underline-offset-8 hover:decoration-cream sm:text-3xl ${focusRingLight}`}
          >
            {identity.email}
          </a>
          <ContactLinks links={contact.filter((c) => c.kind !== "email")} tone="dark" />
        </div>
        <ContactForm email={identity.email} />
      </div>
    </Section>
  );
}
