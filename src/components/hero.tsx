import Image from "next/image";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { ContactLinks } from "@/components/contact-links";
import { card } from "@/lib/ui";

/** Subrayado "a mano" bajo el nombre. */
function Squiggle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-3 w-full text-accent/70"
    >
      <path
        d="M2 8c22-5 40-5 58-1s34 4 52 0 40-6 86-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  const { identity, contact } = portfolio;
  const copy = sectionCopy.hero;
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1fr_auto]"
    >
      <div>
        <h1
          id="inicio-title"
          className="font-serif text-5xl font-medium tracking-tight sm:text-7xl"
        >
          {copy.greeting}{" "}
          <span className="relative inline-block italic text-accent">
            {identity.firstName}
            <Squiggle />
          </span>
        </h1>
        <p className="mt-6 text-sm text-muted">
          {identity.name} · {identity.role}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty">
          {identity.tagline}
        </p>
        <div className="mt-10">
          <ContactLinks links={contact} primary="cv" />
        </div>
      </div>

      <aside className="flex flex-row items-center gap-6 md:flex-col md:items-center">
        <div className="relative shrink-0">
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-lilac/30"
          />
          <Image
            src={identity.photo.src}
            alt={identity.photo.alt}
            width={250}
            height={250}
            preload
            className="relative size-28 rounded-full object-cover ring-4 ring-accent/40 sm:size-40"
          />
        </div>
        <div className={`${card} max-w-56 -rotate-1 px-4 py-3 text-sm`}>
          <p className="font-serif italic text-accent">{copy.nowTitle}…</p>
          <ul className="mt-1.5 space-y-1 text-muted">
            {identity.now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted/80">
            {copy.locationPrefix} {identity.location}
          </p>
        </div>
      </aside>
    </section>
  );
}
