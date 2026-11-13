import { Suspense } from "react";
import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { getRepos } from "@/lib/github";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/projects/project-card";

const gridClass = "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

async function ProjectList() {
  const copy = sectionCopy.projects;
  const result = await getRepos(profile.githubUsername, profile.featuredRepos);

  if (result.status === "error") {
    return (
      <div
        role="alert"
        className="rounded-lg border border-red-500/40 bg-red-500/5 p-5 text-sm"
      >
        <p className="font-medium">{copy.error}</p>
        <p className="mt-1 text-muted">{result.message}</p>
      </div>
    );
  }

  if (result.repos.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted">
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

function ProjectListSkeleton() {
  return (
    <ul className={gridClass} aria-busy="true" aria-label="Cargando proyectos">
      {Array.from({ length: 3 }, (_, i) => (
        <li
          key={i}
          className="h-48 animate-pulse rounded-lg border border-border bg-surface"
        />
      ))}
    </ul>
  );
}

export function Projects() {
  const copy = sectionCopy.projects;
  const githubUrl = `https://github.com/${profile.githubUsername}`;
  return (
    <Section id="proyectos" title={copy.title} subtitle={copy.subtitle}>
      <Suspense fallback={<ProjectListSkeleton />}>
        <ProjectList />
      </Suspense>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm font-medium text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {copy.viewOnGithub} →
      </a>
    </Section>
  );
}
