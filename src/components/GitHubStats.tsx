import Image from "next/image";
import {
  Star,
  GitBranch,
  Users,
  UserPlus,
  BookMarked,
  Calendar,
} from "lucide-react";
import { GITHUB_USERNAME } from "@/config/site";
import {
  fetchAuthorPullRequestCount,
  fetchGitHubUser,
  fetchUserRepos,
  languageSharesFromRepos,
  sumRepoStars,
} from "@/lib/github";
import { languageColor } from "@/lib/github-lang-colors";

function formatJoined(iso: string) {
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function GitHubStats() {
  const [user, repos, prTotal] = await Promise.all([
    fetchGitHubUser(),
    fetchUserRepos(),
    fetchAuthorPullRequestCount(),
  ]);

  if (!user) {
    return (
      <div className="rounded-xl border border-border bg-[#0d1117] p-6 text-center text-sm text-gray-400 max-w-4xl mx-auto">
        Could not load GitHub profile. If this persists, set{" "}
        <code className="text-primary-light/90">GITHUB_TOKEN</code> on Vercel
        for reliable API access.
      </div>
    );
  }

  const totalStars = sumRepoStars(repos);
  const langs = languageSharesFromRepos(repos);

  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-border bg-[#0d1117] p-5 hover:border-primary/40 transition-colors text-left"
      >
        <div className="flex items-center gap-3 mb-5">
          <Image
            src={user.avatar_url}
            alt=""
            width={48}
            height={48}
            className="rounded-full border border-white/10"
          />
          <div className="min-w-0">
            <p className="text-lg font-semibold text-white truncate">
              {user.login}
            </p>
            <p className="text-xs text-gray-500">GitHub · live API</p>
          </div>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center justify-between gap-2 text-gray-300">
            <span className="flex items-center gap-2 text-gray-500">
              <Star size={16} className="text-amber-400/90" />
              Stars (on repos)
            </span>
            <span className="font-mono text-white tabular-nums">{totalStars}</span>
          </li>
          <li className="flex items-center justify-between gap-2 text-gray-300">
            <span className="flex items-center gap-2 text-gray-500">
              <BookMarked size={16} className="text-blue-400/90" />
              Public repos
            </span>
            <span className="font-mono text-white tabular-nums">
              {user.public_repos}
            </span>
          </li>
          <li className="flex items-center justify-between gap-2 text-gray-300">
            <span className="flex items-center gap-2 text-gray-500">
              <Users size={16} className="text-green-400/90" />
              Followers
            </span>
            <span className="font-mono text-white tabular-nums">
              {user.followers}
            </span>
          </li>
          <li className="flex items-center justify-between gap-2 text-gray-300">
            <span className="flex items-center gap-2 text-gray-500">
              <UserPlus size={16} className="text-purple-400/90" />
              Following
            </span>
            <span className="font-mono text-white tabular-nums">
              {user.following}
            </span>
          </li>
          {prTotal !== null ? (
            <li className="flex items-center justify-between gap-2 text-gray-300">
              <span className="flex items-center gap-2 text-gray-500">
                <GitBranch size={16} className="text-orange-400/90" />
                PRs (search)
              </span>
              <span className="font-mono text-white tabular-nums">{prTotal}</span>
            </li>
          ) : null}
          <li className="flex items-center justify-between gap-2 text-gray-300">
            <span className="flex items-center gap-2 text-gray-500">
              <Calendar size={16} className="text-gray-400" />
              Joined
            </span>
            <span className="text-gray-200">{formatJoined(user.created_at)}</span>
          </li>
        </ul>
      </a>

      <div className="rounded-xl border border-border bg-[#0d1117] p-5 hover:border-primary/40 transition-colors">
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Most used languages</p>
          <p className="text-xs text-gray-500 mt-1">
            By primary language per repository (GitHub API) · @{GITHUB_USERNAME}
          </p>
        </div>
        {langs.length === 0 ? (
          <p className="text-sm text-gray-500">
            No language data on non-fork repos yet.
          </p>
        ) : (
          <>
            <div className="flex h-3 rounded-full overflow-hidden mb-4 ring-1 ring-white/10">
              {langs.map((l) => (
                <div
                  key={l.name}
                  style={{
                    width: `${l.pct}%`,
                    backgroundColor: languageColor(l.name),
                  }}
                  title={`${l.name} ${l.pct}%`}
                />
              ))}
            </div>
            <ul className="space-y-2">
              {langs.slice(0, 8).map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <span className="flex items-center gap-2 min-w-0 text-gray-300">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: languageColor(l.name) }}
                    />
                    <span className="truncate">{l.name}</span>
                  </span>
                  <span className="font-mono text-gray-400 tabular-nums shrink-0">
                    {l.pct}%
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
