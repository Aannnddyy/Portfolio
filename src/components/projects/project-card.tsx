import type { Repo } from "@/types/github";
import { sectionCopy } from "@/content/site";
import { focusRingLight } from "@/lib/ui";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
});

const linkClass = `text-xs tracking-[0.18em] uppercase underline decoration-cream/40 underline-offset-4 hover:decoration-cream ${focusRingLight}`;

/** Tarjeta de repo sobre la franja burdeos. */
export function ProjectCard({ repo }: { repo: Repo }) {
  const copy = sectionCopy.projects;
  return (
    <article className="flex h-full flex-col border border-cream/25 p-6 transition-colors hover:border-cream/60">
      <h4 className="font-serif text-2xl break-words">{repo.name}</h4>
      <p className="mt-2 flex-1 text-sm text-cream/80">{repo.description ?? copy.noDescription}</p>

      <dl className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-cream/75">
        {repo.language && (
          <div>
            <dt className="sr-only">Lenguaje</dt>
            <dd>{repo.language}</dd>
          </div>
        )}
        <div className="flex gap-1">
          <dt>
            <span aria-hidden="true">★</span>
            <span className="sr-only">Estrellas</span>
          </dt>
          <dd>{repo.stars}</dd>
        </div>
        <div>
          <dt className="sr-only">Última actualización</dt>
          <dd>
            <time dateTime={repo.pushedAt}>{dateFormatter.format(new Date(repo.pushedAt))}</time>
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex gap-5">
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {copy.codeLink}
          <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {copy.demoLink}
            <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
          </a>
        )}
      </div>
    </article>
  );
}
