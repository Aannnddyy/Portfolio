import { Suspense } from "react";
import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { getRepos } from "@/lib/github";
import { buttonOutlineLight, displayTitle } from "@/lib/ui";
import { Section } from "@/components/section";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";

const gridClass = "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";

async function RepoList() {
  const copy = sectionCopy.projects;
  const { identity, featuredProject } = portfolio;
  const result = await getRepos(identity.githubUsername, {
    exclude: [featuredProject.repoName],
  });

  if (result.status === "error") {
    return (
      <div role="alert" className="border border-cream/40 bg-cream/10 p-5 text-sm">
        <p className="font-medium">{copy.error}</p>
        <p className="mt-1 text-cream/80">{result.message}</p>
      </div>
    );
  }

  if (result.repos.length === 0) {
    return (
      <p className="border border-dashed border-cream/30 p-8 text-center text-sm text-cream/80">
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
        <li key={i} className="h-48 animate-pulse border border-cream/20 bg-cream/5" />
      ))}
    </ul>
  );
}

export function Projects() {
  const copy = sectionCopy.projects;
  const { identity, featuredProject } = portfolio;
  return (
    <Section
      id="proyectos"
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      tone="dark"
    >
      <FeaturedProject project={featuredProject} />

      <div className="mt-20">
        <h3 className={`${displayTitle} text-center text-3xl sm:text-4xl`}>{copy.othersTitle}</h3>
        <p className="mt-3 mb-10 text-center text-sm text-cream/80">{copy.othersSubtitle}</p>
        <Suspense fallback={<RepoListSkeleton />}>
          <RepoList />
        </Suspense>
        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${identity.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonOutlineLight}
          >
            {copy.viewOnGithub}
          </a>
        </div>
      </div>
    </Section>
  );
}
