import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card } from "@/lib/ui";

export function About() {
  const { about } = portfolio;
  const copy = sectionCopy.about;
  return (
    <Section id="sobre-mi" title={copy.title} accent={copy.accent} subtitle={copy.subtitle}>
      <div className="grid gap-10 lg:grid-cols-[1fr_17rem]">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-pretty">
          {about.paragraphs.map((paragraph, i) => (
            <p key={paragraph} className={i === 0 ? "" : "text-foreground/85"}>
              {paragraph}
            </p>
          ))}
        </div>
        <dl className={`${card} h-fit space-y-4 p-5`}>
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-serif text-sm italic text-accent">{fact.label}</dt>
              <dd className="mt-0.5 text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
