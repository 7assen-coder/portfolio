import { GITHUB_USERNAME, HIDDEN_REPO_NAMES, PINNED_REPO_NAMES } from "@/config/site";

export type GitHubUser = {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  created_at: string;
  avatar_url: string;
  html_url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
  topics: string[];
  pushed_at: string;
  homepage: string | null;
  archived: boolean;
};

const UA = "portfolio-next/1.0 (github.com/7assen-coder/portfolio)";

async function ghHeaders(): Promise<HeadersInit> {
  const token = process.env.GITHUB_TOKEN;
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": UA,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

const fetchInit = { next: { revalidate: 3600 } as const };

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}`;
  const res = await fetch(url, {
    headers: await ghHeaders(),
    ...fetchInit,
  });
  if (!res.ok) {
    console.error("GitHub user fetch failed", res.status);
    return null;
  }
  const data = (await res.json()) as GitHubUser;
  return data;
}

/** Total merged PRs authored by the user (GitHub Search API). */
export async function fetchAuthorPullRequestCount(): Promise<number | null> {
  const q = encodeURIComponent(`is:pr author:${GITHUB_USERNAME}`);
  const url = `https://api.github.com/search/issues?q=${q}&per_page=1`;
  const res = await fetch(url, {
    headers: await ghHeaders(),
    ...fetchInit,
  });
  if (!res.ok) {
    console.error("GitHub search (PRs) failed", res.status);
    return null;
  }
  const data = (await res.json()) as { total_count: number };
  return data.total_count ?? null;
}

export function sumRepoStars(repos: GitHubRepo[]): number {
  return repos.reduce((acc, r) => acc + r.stargazers_count, 0);
}

/** Share of repos whose primary language is X (GitHub `language` field). */
export function languageSharesFromRepos(
  repos: GitHubRepo[]
): { name: string; pct: number; count: number }[] {
  const counts: Record<string, number> = {};
  for (const r of repos) {
    if (!r.language) continue;
    counts[r.language] = (counts[r.language] ?? 0) + 1;
  }
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((s, [, c]) => s + c, 0);
  if (total === 0) return [];
  return entries.map(([name, count]) => ({
    name,
    count,
    pct: Math.round((count / total) * 1000) / 10,
  }));
}

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;
  const res = await fetch(url, {
    headers: await ghHeaders(),
    ...fetchInit,
  });
  if (!res.ok) {
    console.error("GitHub repos fetch failed", res.status);
    return [];
  }
  const data = (await res.json()) as GitHubRepo[];
  return data
    .filter((r) => !r.fork && !r.archived)
    .filter((r) => !HIDDEN_REPO_NAMES.includes(r.name));
}

function pinnedOrder(name: string): number {
  const i = PINNED_REPO_NAMES.indexOf(name);
  return i === -1 ? 1000 : i;
}

export function sortReposForDisplay(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos].sort((a, b) => {
    const pa = pinnedOrder(a.name);
    const pb = pinnedOrder(b.name);
    if (pa !== pb) return pa - pb;
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });
}
