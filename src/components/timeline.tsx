import type { TimelineEntry } from "@/types/portfolio";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card } from "@/lib/ui";

function TimelineList({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[1.8rem] size-2.5 rounded-full border-2 border-background bg-accent"
          />
          <p className="font-mono text-xs text-muted">
            {entry.period}
            {entry.location && ` · ${entry.location}`}
          </p>
          <h4 className="mt-1 font-medium">{entry.title}</h4>
          <p className="text-sm text-accent">{entry.organization}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted marker:text-border">
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
    <Section id="trayectoria" title={copy.title} subtitle={copy.subtitle}>
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <h3 className="mb-6 font-mono text-xs tracking-wide text-muted uppercase">
            {copy.experienceTitle}
          </h3>
          <TimelineList entries={experience} />
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="mb-6 font-mono text-xs tracking-wide text-muted uppercase">
              {copy.educationTitle}
            </h3>
            <TimelineList entries={education} />
          </div>
          <div>
            <h3 className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
              {copy.languagesTitle}
            </h3>
            <dl className={`${card} divide-y divide-border`}>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex flex-wrap justify-between gap-x-4 gap-y-1 px-5 py-3 text-sm"
                >
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
