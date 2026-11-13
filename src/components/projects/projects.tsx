import { Suspense } from "react";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { getRepos } from "@/lib/github";
import { card, textLink } from "@/lib/ui";
import { Section } from "@/components/section";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";

const gridClass = "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

async function RepoList() {
  const copy = sectionCopy.projects;
  const { identity, featuredProject } = portfolio;
  const result = await getRepos(identity.githubUsername, {
    exclude: [featuredProject.repoName],
  });

  if (result.status === "error") {
    return (
      <div role="alert" className="rounded-2xl border border-red-300/30 bg-red-300/5 p-5 text-sm">
        <p className="font-medium text-red-200">{copy.error}</p>
        <p className="mt-1 text-muted">{result.message}</p>
      </div>
    );
  }

  if (result.repos.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
        {copy.empty}
      </p>
    );
  }

  return (
    <ul className={gridClass}>
      {result.repos.map((repo) => (
        <li key={repo.id}>
          <ProjectCard repo={repo} />
        </li>
      ))}
    </ul>
  );
}

function RepoListSkeleton() {
  return (
    <ul className={gridClass} aria-busy="true" aria-label={sectionCopy.projects.loading}>
      {Array.from({ length: 3 }, (_, i) => (
        <li key={i} className={`${card} h-44 animate-pulse`} />
      ))}
    </ul>
  );
}

export function Projects() {
  const copy = sectionCopy.projects;
  const { identity, featuredProject } = portfolio;
  return (
    <Section id="proyectos" title={copy.title} accent={copy.accent} subtitle={copy.subtitle}>
      <FeaturedProject project={featuredProject} />

      <div className="mt-16">
        <h3 className="font-serif text-2xl font-medium">{copy.othersTitle}</h3>
        <p className="mt-1 mb-6 text-sm text-muted">{copy.othersSubtitle}</p>
        <Suspense fallback={<RepoListSkeleton />}>
          <RepoList />
        </Suspense>
        <a
          href={`https://github.com/${identity.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-block text-sm ${textLink}`}
        >
          {copy.viewOnGithub} →
        </a>
      </div>
    </Section>
  );
}
