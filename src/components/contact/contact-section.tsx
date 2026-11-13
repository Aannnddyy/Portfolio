import Image from "next/image";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { grid, link, sectionSpace } from "@/lib/ui";
import { ContactForm } from "@/components/contact/contact-form";

export function ContactSection() {
  const { identity, about } = portfolio;
  const copy = sectionCopy.contact;
  return (
    <section id="contacto" aria-labelledby="contacto-title" className={`${sectionSpace} pb-28 sm:pb-40`}>
      <div className={`${grid} gap-y-12`}>
        <Image
          src={about.photo.src}
          alt={about.photo.alt}
          width={800}
          height={1000}
          sizes="(min-width: 1024px) 16vw, 50vw"
          className="aspect-[4/5] w-full object-cover mix-blend-multiply"
        />

        <div className="col-span-2 lg:col-start-3">
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
