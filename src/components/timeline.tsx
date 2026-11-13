import type { TimelineEntry } from "@/types/portfolio";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card, eyebrow } from "@/lib/ui";

function TimelineList({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="relative space-y-10 border-l border-dashed border-accent/30 pl-6">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-1 -left-[1.95rem] size-3 rounded-full border-2 border-accent bg-background"
          />
          <p className="text-xs text-muted">
            {entry.period}
            {entry.location && ` · ${entry.location}`}
          </p>
          <h4 className="mt-1 font-medium">{entry.title}</h4>
          <p className="font-serif text-sm italic text-accent">{entry.organization}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {entry.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function Timeline() {
  const copy = sectionCopy.timeline;
  const { experience, education, languages } = portfolio;
  return (
    <Section id="trayectoria" title={copy.title} accent={copy.accent} subtitle={copy.subtitle}>
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <h3 className={`${eyebrow} mb-6`}>{copy.experienceTitle}</h3>
          <TimelineList entries={experience} />
        </div>
        <div className="space-y-12">
          <div>
            <h3 className={`${eyebrow} mb-6`}>{copy.educationTitle}</h3>
            <TimelineList entries={education} />
          </div>
          <div>
            <h3 className={`${eyebrow} mb-4`}>{copy.languagesTitle}</h3>
            <dl className={`${card} divide-y divide-border px-5`}>
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="font-medium">{lang.name}</dt>
                  <dd className="text-muted">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
