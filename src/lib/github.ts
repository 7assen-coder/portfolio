import { GITHUB_USERNAME, HIDDEN_REPO_NAMES, PINNED_REPO_NAMES } from "@/config/site";

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

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`;
  const res = await fetch(url, {
    headers: await ghHeaders(),
    next: { revalidate: 3600 },
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
