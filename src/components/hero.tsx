import { portfolio } from "@/content/profile";
import { ContactLinks } from "@/components/contact-links";

export function Hero() {
  const { identity, contact } = portfolio;
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="font-mono text-sm text-muted">
        <span aria-hidden="true" className="text-accent">
          ▸{" "}
        </span>
        {identity.location}
      </p>
      <h1
        id="inicio-title"
        className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
      >
        {identity.name}
      </h1>
      <p className="mt-4 font-mono text-base text-accent sm:text-lg">
        {identity.role}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
        {identity.tagline}
      </p>
      <div className="mt-10">
        <ContactLinks links={contact} primary="cv" />
      </div>
    </section>
  );
}
