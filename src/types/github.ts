/** Subconjunto de campos de `GET /users/{username}/repos` que usa la web. */
export interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  pushedAt: string;
}

export type ReposResult =
  | { status: "ok"; repos: Repo[] }
  | { status: "error"; message: string };
