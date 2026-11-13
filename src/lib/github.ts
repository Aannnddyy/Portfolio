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

interface GetReposOptions {
  /** Nombres de repos a omitir (sin distinguir mayúsculas). */
  exclude?: readonly string[];
  limit?: number;
}

/**
 * Obtiene los repos públicos de un usuario (sin forks ni archivados),
 * ordenados por actividad reciente.
 * Nunca lanza: los fallos se devuelven como `{ status: "error" }`.
 */
export async function getRepos(
  username: string,
  { exclude = [], limit = 6 }: GetReposOptions = {},
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
            : res.status === 403 || res.status === 429
              ? "Se ha alcanzado el límite de peticiones de la API de GitHub."
              : `GitHub respondió con el estado ${res.status}.`,
      };
    }

    const excluded = new Set(exclude.map((name) => name.toLowerCase()));
    const data = (await res.json()) as GitHubRepoResponse[];
    const repos = data
      .filter((r) => !r.fork && !r.archived && !excluded.has(r.name.toLowerCase()))
      .map(toRepo)
      .slice(0, limit);

    cacheLife("hours");
    return { status: "ok", repos };
  } catch {
    cacheLife("minutes");
    return { status: "error", message: "Error de red al contactar con GitHub." };
  }
}
