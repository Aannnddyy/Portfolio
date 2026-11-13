import type { FeaturedProject as FeaturedProjectData } from "@/types/portfolio";
import { sectionCopy } from "@/content/site";
import { buttonPrimary, displayTitle, label } from "@/lib/ui";

/** Tarjeta crema sobre la franja burdeos. */
export function FeaturedProject({ project }: { project: FeaturedProjectData }) {
  const copy = sectionCopy.projects;
  return (
    <article aria-labelledby="featured-title" className="bg-surface text-foreground">
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <p className={`${label} text-muted`}>
            {copy.featuredBadge} · {project.status}
          </p>
          <h3
            id="featured-title"
            className={`${displayTitle} mt-4 text-4xl text-accent sm:text-6xl`}
          >
            {project.title}
          </h3>
          <p className="mt-3 font-serif text-lg italic">{project.subtitle}</p>
          <p className="mt-1 text-sm text-muted">{project.period}</p>
          <p className="mt-6 leading-relaxed">{project.description}</p>

          <h4 className={`${label} mt-10 text-accent`}>{copy.architectureTitle}</h4>
          <div className="mt-4 space-y-4">
            {project.flows.map((flow) => (
              <figure key={flow.label}>
                <figcaption className="text-xs text-muted">{flow.label}</figcaption>
                <ol className="mt-2 flex flex-wrap items-center gap-2">
                  {flow.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden="true" className="text-accent">
                          →
                        </span>
                      )}
                      <span className="border border-border px-2.5 py-1 font-mono text-xs">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className={`${label} text-accent`}>{copy.highlightsTitle}</h4>
          <ol className="mt-4 divide-y divide-border border-y border-border">
            {project.highlights.map((h, i) => (
              <li key={h.title} className="flex gap-5 py-5">
                <span aria-hidden="true" className="font-serif text-3xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-xl">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul
            className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs tracking-wide text-muted uppercase"
            aria-label="Tecnologías"
          >
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonPrimary} mt-8 self-start`}
          >
            {copy.repoLink}
            <span className="sr-only"> de {project.title} (se abre en otra pestaña)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
