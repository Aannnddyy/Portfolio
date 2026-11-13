import { Suspense } from "react";
import type { Repo } from "@/types/github";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { getRepos } from "@/lib/github";
import { grid, link, sectionSpace } from "@/lib/ui";
import { FeaturedProject } from "@/components/work/featured-project";

const copy = sectionCopy.work;

/** Fila del índice: (nº) · proyecto · stack · año · enlace. */
const rowClass = `${grid} border-t border-rule py-3 lg:items-baseline`;

function index(n: number): string {
  return `(${String(n).padStart(2, "0")})`;
}

function RepoRow({ repo, n }: { repo: Repo; n: number }) {
  return (
    <li className={rowClass}>
      <span className="hidden text-muted lg:block">{index(n)}</span>
      <span className="lg:col-span-2">{repo.name}</span>
      <span className="hidden text-muted lg:block">{repo.language ?? copy.noLanguage}</span>
      <span className="hidden text-muted lg:block">{new Date(repo.pushedAt).getFullYear()}</span>
      <span className="text-right">
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className={link}>
          {copy.codeLink} ↗<span className="sr-only"> de {repo.name} (se abre en otra pestaña)</span>
        </a>
      </span>
    </li>
  );
}

async function RepoRows() {
  const { identity, featuredProject } = portfolio;
  const result = await getRepos(identity.githubUsername, {
    exclude: [featuredProject.repoName],
  });

  if (result.status === "error") {
    return (
      <li role="alert" className={rowClass}>
        <span className="col-span-2 lg:col-span-5 lg:col-start-2">
          {copy.error} <span className="text-muted">{result.message}</span>
        </span>
      </li>
    );
  }

  if (result.repos.length === 0) {
    return (
      <li className={rowClass}>
        <span className="col-span-2 text-muted lg:col-span-5 lg:col-start-2">{copy.empty}</span>
      </li>
    );
  }

  return result.repos.map((repo, i) => <RepoRow key={repo.id} repo={repo} n={i + 2} />);
}

export function Work() {
  const { identity, featuredProject } = portfolio;
  return (
    <section id="trabajo" aria-labelledby="trabajo-title" className={sectionSpace}>
      <div className={`${grid} pb-3 text-muted`}>
        <h2 id="trabajo-title" className="text-foreground">
          {copy.title}
        </h2>
        <span className="hidden lg:col-span-2 lg:block">{copy.columns.project}</span>
        <span className="hidden lg:block">{copy.columns.stack}</span>
        <span className="hidden lg:block">{copy.columns.year}</span>
      </div>

      <ol className="border-b border-rule">
        <li>
          <div className={rowClass}>
            <span className="hidden text-muted lg:block">{index(1)}</span>
            <span className="lg:col-span-2">
              {featuredProject.title}{" "}
              <em className="text-muted">— {featuredProject.subtitle}</em>
            </span>
            <span className="hidden text-muted lg:block">{featuredProject.tags.slice(0, 3).join(", ")}</span>
            <span className="hidden text-muted lg:block">{featuredProject.period}</span>
            <span className="text-right">
              <a href={featuredProject.repoUrl} target="_blank" rel="noopener noreferrer" className={link}>
                {copy.codeLink} ↗
                <span className="sr-only"> de {featuredProject.title} (se abre en otra pestaña)</span>
              </a>
            </span>
          </div>
          <FeaturedProject project={featuredProject} />
        </li>

        <Suspense
          fallback={
            <li className={rowClass} aria-busy="true">
              <span className="col-span-2 text-muted lg:col-span-5 lg:col-start-2">{copy.loading}</span>
            </li>
          }
        >
          <RepoRows />
        </Suspense>
      </ol>

      <div className={`${grid} pt-3`}>
        <a
          href={`https://github.com/${identity.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link} col-start-2 text-right lg:col-start-6`}
        >
          {copy.viewOnGithub} ↗
        </a>
      </div>
    </section>
  );
}
