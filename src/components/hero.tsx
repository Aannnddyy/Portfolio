import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/site";

export function Hero() {
  const { hero } = sectionCopy;
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="mx-auto flex max-w-5xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-32"
    >
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
        <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
        {profile.availability}
      </p>

      <h1
        id="inicio-title"
        className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
      >
        {profile.name}
      </h1>
      <p className="mt-3 font-mono text-base text-accent sm:text-lg">
        {profile.role}
      </p>
      <p className="mt-6 max-w-2xl text-lg text-pretty sm:text-xl">
        {profile.tagline}
      </p>
      <p className="mt-4 max-w-2xl text-muted text-pretty">{profile.summary}</p>
      <p className="mt-4 text-sm text-muted">{profile.location}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {hero.primaryCta}
        </a>
        <a
          href="#contacto"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}
