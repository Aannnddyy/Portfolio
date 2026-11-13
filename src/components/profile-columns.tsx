import type { TimelineEntry } from "@/types/portfolio";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { grid, sectionSpace } from "@/lib/ui";

function Entries({ entries, detailed }: { entries: readonly TimelineEntry[]; detailed?: boolean }) {
  return (
    <ul className="space-y-12">
      {entries.map((entry) => (
        <li key={`${entry.title}-${entry.period}`}>
          <p>{entry.title}</p>
          <p>{entry.organization}</p>
          <p className="text-muted">{entry.period}</p>
          {detailed && (
            <ul className="mt-4 space-y-3 text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ProfileColumns() {
  const copy = sectionCopy.profile;
  const { experience, education, stack, languages } = portfolio;
  return (
    <section id="perfil" aria-labelledby="perfil-title" className={sectionSpace}>
      <h2 id="perfil-title" className="sr-only">
        {copy.title}
      </h2>
      <div className={`${grid} gap-y-24`}>
        <div className="col-span-2">
          <h3 className="mb-6">{copy.experienceTitle}</h3>
          <Entries entries={experience} detailed />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-6">{copy.educationTitle}</h3>
          <Entries entries={education} />

          <h3 className="mt-20 mb-6">{copy.languagesTitle}</h3>
          <ul className="space-y-1">
            {languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} <span className="text-muted">— {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3">
          <h3 className="mb-6">{copy.stackTitle}</h3>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {stack.map((category) => (
              <ul key={category.title} className="space-y-1">
                <li className="mb-2 text-muted">{category.title}</li>
                {category.items.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.note && <em className="text-muted"> ({item.note})</em>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
