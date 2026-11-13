import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { label } from "@/lib/ui";

/** Declaración central + cinta animada de tecnologías. */
export function Vision() {
  const { identity, keywords } = portfolio;
  // Se duplica la lista para que la animación sea continua.
  const loop = [...keywords, ...keywords];
  return (
    <section aria-labelledby="vision-title" className="overflow-hidden pt-20 pb-12 sm:pt-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 id="vision-title" className={`${label} text-muted`}>
          {sectionCopy.vision.eyebrow}
        </h2>
        <p className="mt-5 text-lg leading-relaxed font-medium tracking-wide text-pretty text-accent uppercase sm:text-2xl">
          {identity.tagline}
        </p>
      </div>

      <div aria-hidden="true" className="mt-16 flex w-max animate-marquee motion-reduce:animate-none">
        {loop.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="px-4 font-serif text-4xl whitespace-nowrap text-muted/50 uppercase sm:text-6xl"
          >
            {word} <span className="pl-6">·</span>
          </span>
        ))}
      </div>
      <p className="sr-only">Tecnologías: {keywords.join(", ")}.</p>
    </section>
  );
}
