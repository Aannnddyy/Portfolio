import type { Repo } from "@/types/github";
import { sectionCopy } from "@/content/site";
import { card, tag, textLink } from "@/lib/ui";

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
});

export function ProjectCard({ repo }: { repo: Repo }) {
  const copy = sectionCopy.projects;
  return (
    <article
      className={`${card} flex h-full flex-col p-5 transition-colors hover:border-muted`}
    >
      <h4 className="font-mono text-sm font-semibold break-words">{repo.name}</h4>
      <p className="mt-2 flex-1 text-sm text-muted">
        {repo.description ?? copy.noDescription}
      </p>

      {repo.topics.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Temas">
          {repo.topics.slice(0, 4).map((topic) => (
            <li key={topic} className={tag}>
              {topic}
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
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
            <time dateTime={repo.pushedAt}>
              {dateFormatter.format(new Date(repo.pushedAt))}
            </time>
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex gap-4 text-sm">
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className={textLink}>
          {copy.codeLink}
          <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={textLink}
          >
            {copy.demoLink}
            <span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
          </a>
        )}
      </div>
    </article>
  );
}
