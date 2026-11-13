import type { FeaturedProject as FeaturedProjectData } from "@/types/portfolio";
import { sectionCopy } from "@/content/site";
import { buttonSecondary, card, eyebrow, tag } from "@/lib/ui";

export function FeaturedProject({ project }: { project: FeaturedProjectData }) {
  const copy = sectionCopy.projects;
  return (
    <article aria-labelledby="featured-title" className={`${card} overflow-hidden`}>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <span className={eyebrow}>{copy.featuredBadge}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">
            <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
            {project.status}
          </span>
          <span className="text-xs text-muted">{project.period}</span>
        </div>
        <h3
          id="featured-title"
          className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl"
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">{project.description}</p>
      </div>

      <div className="grid gap-8 border-t border-border/70 p-6 sm:p-8 lg:grid-cols-2">
        <div>
          <h4 className="font-serif text-lg italic text-accent">{copy.architectureTitle}</h4>
          <div className="mt-4 space-y-5">
            {project.flows.map((flow) => (
              <figure key={flow.label}>
                <figcaption className="text-xs text-muted">{flow.label}</figcaption>
                <ol className="mt-2 flex flex-wrap items-center gap-2">
                  {flow.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden="true" className="text-accent/70">
                          →
                        </span>
                      )}
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </figure>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg italic text-accent">{copy.highlightsTitle}</h4>
          <ul className="mt-4 space-y-4">
            {project.highlights.map((h) => (
              <li key={h.title} className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 text-accent">
                  ✦
                </span>
                <div>
                  <p className="text-sm font-medium">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {project.tags.map((t) => (
            <li key={t} className={tag}>
              {t}
            </li>
          ))}
        </ul>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonSecondary} shrink-0`}
        >
          {copy.repoLink} →
          <span className="sr-only"> de {project.title} (se abre en otra pestaña)</span>
        </a>
      </div>
    </article>
  );
}
