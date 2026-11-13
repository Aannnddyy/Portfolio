import { cacheLife } from "next/cache";
import type { GitHubRepoResponse, Repo, ReposResult } from "@/types/github";

const GITHUB_API = "https://api.github.com";

function toRepo(repo: GitHubRepoResponse): Repo {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage || null,
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics ?? [],
    pushedAt: repo.pushed_at,
  };
}

/**
 * Obtiene los repos públicos de un usuario (sin forks ni archivados).
 * Si `featured` no está vacío, esos repos van primero en el orden indicado.
 * Nunca lanza: los fallos se devuelven como `{ status: "error" }`.
 */
export async function getRepos(
  username: string,
  featured: readonly string[],
  limit = 6,
): Promise<ReposResult> {
  "use cache";

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Opcional: sube el límite de 60 a 5000 peticiones/hora.
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `${GITHUB_API}/users/${encodeURIComponent(username)}/repos?sort=pushed&per_page=100`,
      { headers },
    );

    if (!res.ok) {
      cacheLife("minutes");
      return {
        status: "error",
        message:
          res.status === 404
            ? `El usuario "${username}" no existe en GitHub.`
            : `GitHub respondió con ${res.status}.`,
      };
    }

    const data = (await res.json()) as GitHubRepoResponse[];
    const repos = data.filter((r) => !r.fork && !r.archived).map(toRepo);

    const rank = (name: string) => {
      const i = featured.indexOf(name);
      return i === -1 ? Number.POSITIVE_INFINITY : i;
    };
    const sorted =
      featured.length > 0
        ? [...repos].sort((a, b) => rank(a.name) - rank(b.name))
        : repos;

    cacheLife("hours");
    return { status: "ok", repos: sorted.slice(0, limit) };
  } catch {
    cacheLife("minutes");
    return { status: "error", message: "Error de red al contactar con GitHub." };
  }
}
