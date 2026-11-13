import Image from "next/image";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { buttonOutline, displayTitle, label } from "@/lib/ui";

export function About() {
  const { about, identity, contact } = portfolio;
  const copy = sectionCopy.about;
  const cv = contact.find((c) => c.kind === "cv");
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="scroll-mt-14 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-8 md:grid-cols-2 md:gap-16">
        <Image
          src={about.photo.src}
          alt={about.photo.alt}
          width={800}
          height={1000}
          sizes="(min-width: 768px) 32rem, 100vw"
          className="hidden aspect-[4/5] w-full object-cover mix-blend-multiply md:block"
        />

        <div>
          <h2 id="sobre-mi-title" className={`${displayTitle} text-3xl text-accent sm:text-5xl`}>
            {copy.greeting}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-pretty text-foreground/90">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className={`${label} text-muted`}>{fact.label}</dt>
                <dd className="mt-1 font-serif text-lg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border-l-2 border-accent pl-4">
            <p className={`${label} text-accent`}>{copy.nowTitle}</p>
            <ul className="mt-2 space-y-1 text-sm">
              {identity.now.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {cv && (
            <a href={cv.href} download={cv.download} className={`${buttonOutline} mt-10`}>
              {copy.cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
