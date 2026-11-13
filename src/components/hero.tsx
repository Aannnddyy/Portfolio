import Image from "next/image";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { ContactLinks } from "@/components/contact-links";
import { displayTitle, label } from "@/lib/ui";

export function Hero() {
  const { identity, contact } = portfolio;
  const copy = sectionCopy.hero;
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="relative overflow-hidden bg-sand"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 sm:px-8 md:grid-cols-[1fr_minmax(0,26rem)] md:pt-16">
        <div className="relative z-10 flex flex-col justify-between gap-10 md:pb-16">
          <div>
            <p className={`${label} text-muted`}>{copy.kicker}</p>
            <p className={`${displayTitle} mt-5 max-w-lg text-2xl text-accent sm:text-4xl`}>
              {copy.headline}
            </p>
            <div className="mt-8">
              <ContactLinks links={contact} primary="cv" />
            </div>
          </div>
          <h1
            id="inicio-title"
            className={`${displayTitle} text-[clamp(4.5rem,15vw,11rem)] text-accent md:-mr-48`}
          >
            {identity.firstName}
            <span className="sr-only"> Grañas López, {identity.role}</span>
          </h1>
        </div>

        <div className="relative self-end">
          <Image
            src={identity.photo.src}
            alt={identity.photo.alt}
            width={800}
            height={1000}
            sizes="(min-width: 768px) 26rem, 100vw"
            preload
            className="aspect-[4/5] w-full object-cover mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
