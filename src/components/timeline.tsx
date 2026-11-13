import type { TimelineEntry } from "@/types/portfolio";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { label } from "@/lib/ui";

function TimelineList({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.period}`}
          className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8"
        >
          <p className="text-sm text-muted">
            {entry.period}
            {entry.location && (
              <>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> · </span>
                {entry.location}
              </>
            )}
          </p>
          <div>
            <h4 className="font-serif text-2xl leading-tight">{entry.title}</h4>
            <p className={`${label} mt-2 text-accent`}>{entry.organization}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Timeline() {
  const copy = sectionCopy.timeline;
  const { experience, education, languages } = portfolio;
  return (
    <Section id="trayectoria" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="mx-auto max-w-4xl space-y-16">
        <div>
          <h3 className={`${label} mb-4 text-muted`}>{copy.experienceTitle}</h3>
          <TimelineList entries={experience} />
        </div>
        <div>
          <h3 className={`${label} mb-4 text-muted`}>{copy.educationTitle}</h3>
          <TimelineList entries={education} />
        </div>
        <div>
          <h3 className={`${label} mb-4 text-muted`}>{copy.languagesTitle}</h3>
          <dl className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-baseline justify-between gap-4">
                <dt className="font-serif text-2xl">{lang.name}</dt>
                <dd className="text-sm tracking-wide text-muted uppercase">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
