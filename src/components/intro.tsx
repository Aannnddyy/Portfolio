import Image from "next/image";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { grid, link } from "@/lib/ui";

export function Intro() {
  const { identity, contact, about } = portfolio;
  return (
    <section id="inicio" aria-labelledby="inicio-title" className="pt-10 sm:pt-16">
      <div className={`${grid} gap-y-10`}>
        <div className="col-span-2 lg:col-span-3">
          <h1 id="inicio-title" className="sr-only">
            {identity.name}, {identity.role}
          </h1>
          <p className="text-2xl leading-[1.2] text-pretty sm:text-[2rem]">{identity.tagline}</p>
        </div>

        <Image
          src={identity.photo.src}
          alt={identity.photo.alt}
          width={800}
          height={1000}
          sizes="(min-width: 1024px) 16vw, 50vw"
          preload
          className="aspect-[4/5] w-full object-cover mix-blend-multiply"
        />

        <div className="lg:col-start-6">
          <ul>
            {contact.map((c) => (
              <li key={c.kind}>
                <a
                  href={c.href}
                  download={c.download}
                  {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={link}
                >
                  {c.kind === "email" ? identity.email : c.label}
                  {c.external && <span className="sr-only"> (se abre en otra pestaña)</span>}
                </a>
              </li>
            ))}
            <li className="text-muted">{identity.location}</li>
          </ul>

          <p className="mt-8 text-muted">{sectionCopy.intro.nowTitle}</p>
          <ul>
            {identity.now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${grid} mt-24 gap-y-6 sm:mt-32`}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="col-span-2 text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
