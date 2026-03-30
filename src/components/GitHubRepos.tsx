import { ExternalLink, Star } from "lucide-react";
import { GITHUB_USERNAME } from "@/config/site";
import { fetchUserRepos, sortReposForDisplay } from "@/lib/github";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function GitHubRepos() {
  const raw = await fetchUserRepos();
  const repos = sortReposForDisplay(raw).slice(0, 12);

  if (repos.length === 0) {
    return (
      <p className="text-center text-gray-500 text-sm py-8">
        Could not load repositories from GitHub. Try again later or set{" "}
        <code className="text-primary-light/80">GITHUB_TOKEN</code> for a
        higher API limit.
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-border bg-surface/50 p-5 hover:border-primary/30 hover:bg-surface transition-all"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-white group-hover:text-primary-light transition-colors truncate">
              {repo.name}
            </h4>
            <ExternalLink
              size={16}
              className="text-gray-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[2.5rem] mb-4">
            {repo.description || "No description"}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-primary"
                  aria-hidden
                />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star size={12} />
              {repo.stargazers_count}
            </span>
            <span className="ml-auto">{formatDate(repo.pushed_at)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export function GitHubReposHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Live from GitHub
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Repositories for{" "}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          className="text-primary-light hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{GITHUB_USERNAME}
        </a>{" "}
        refresh hourly — newest pushes appear first (pinned order in config).
      </p>
    </div>
  );
}
