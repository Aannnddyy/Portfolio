import type { Repo } from "@/types/github";
import { sectionCopy } from "@/content/site";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
});

export function ProjectCard({ repo }: { repo: Repo }) {
  const copy = sectionCopy.projects;
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-muted">
      <h3 className="font-mono text-base font-semibold break-words">
        {repo.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">
        {repo.description ?? "Sin descripción."}
      </p>

      {repo.topics.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Temas">
          {repo.topics.slice(0, 4).map((topic) => (
            <li
              key={topic}
              className="rounded bg-background px-2 py-0.5 font-mono text-xs text-muted"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {repo.language && (
          <div className="flex gap-1">
            <dt className="sr-only">Lenguaje</dt>
            <dd>{repo.language}</dd>
          </div>
        )}
        <div className="flex gap-1">
          <dt>★</dt>
          <dd>{repo.stars}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="sr-only">Última actualización</dt>
          <dd>
            <time dateTime={repo.pushedAt}>
              {dateFormatter.format(new Date(repo.pushedAt))}
            </time>
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex gap-4 text-sm font-medium">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {copy.repoLink}
          <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {copy.demoLink}
            <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
          </a>
        )}
      </div>
    </article>
  );
}
