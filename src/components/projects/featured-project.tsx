import type { FeaturedProject as FeaturedProjectData } from "@/types/portfolio";
import { sectionCopy } from "@/content/site";
import { buttonSecondary, card, tag } from "@/lib/ui";

export function FeaturedProject({ project }: { project: FeaturedProjectData }) {
  const copy = sectionCopy.projects;
  return (
    <article
      aria-labelledby="featured-title"
      className={`${card} overflow-hidden`}
    >
      <div className="border-b border-border p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono text-accent">{copy.featuredBadge}</span>
          <span aria-hidden="true" className="text-border">
            /
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {project.status}
          </span>
          <span aria-hidden="true" className="text-border">
            /
          </span>
          <span className="text-muted">{project.period}</span>
        </div>
        <h3
          id="featured-title"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-sm text-muted">{project.subtitle}</p>
        <p className="mt-4 max-w-2xl leading-relaxed">{project.description}</p>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
        <div>
          <h4 className="font-mono text-xs tracking-wide text-muted uppercase">
            {copy.architectureTitle}
          </h4>
          <div className="mt-4 space-y-5">
            {project.flows.map((flow) => (
              <figure key={flow.label}>
                <figcaption className="text-xs text-muted">{flow.label}</figcaption>
                <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {flow.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden="true" className="font-mono text-accent">
                          →
                        </span>
                      )}
                      <span className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </figure>
            ))}
          </div>
        </div>

        <ul className="space-y-4">
          {project.highlights.map((h) => (
            <li key={h.title} className="border-l-2 border-accent/60 pl-4">
              <p className="text-sm font-medium">{h.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 border-t border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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
          {copy.repoLink}
          <span className="sr-only"> de {project.title} (se abre en otra pestaña)</span>
        </a>
      </div>
    </article>
  );
}
