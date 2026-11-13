import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card } from "@/lib/ui";

export function About() {
  const { about } = portfolio;
  return (
    <Section
      id="sobre-mi"
      title={sectionCopy.about.title}
      subtitle={sectionCopy.about.subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_18rem]">
        <div className="max-w-2xl space-y-4 leading-relaxed text-pretty">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={`${card} h-fit divide-y divide-border`}>
          {about.facts.map((fact) => (
            <div key={fact.label} className="px-5 py-3">
              <dt className="font-mono text-xs text-muted">{fact.label}</dt>
              <dd className="mt-0.5 text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
