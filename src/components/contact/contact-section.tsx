import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { grid, link, sectionSpace } from "@/lib/ui";
import { ContactForm } from "@/components/contact/contact-form";

export function ContactSection() {
  const { identity } = portfolio;
  const copy = sectionCopy.contact;
  return (
    <section id="contacto" aria-labelledby="contacto-title" className={`${sectionSpace} pb-28 sm:pb-40`}>
      <div className={`${grid} gap-y-12`}>
        <div className="col-span-2 lg:col-span-3">
          <h2 id="contacto-title" className="text-muted">
            {copy.title}
          </h2>
          <p className="mt-3 text-2xl leading-[1.2] text-pretty sm:text-[2rem]">{copy.lead}</p>
          <a
            href={`mailto:${identity.email}`}
            className={`${link} mt-6 inline-block text-2xl break-all italic sm:text-[2rem]`}
          >
            {identity.email}
          </a>
        </div>

        <div className="col-span-2 lg:col-start-5">
          <ContactForm email={identity.email} />
        </div>
      </div>
    </section>
  );
}
