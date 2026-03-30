import { Suspense } from "react";
import GitHubStats from "@/components/GitHubStats";
import Achievements from "@/components/Achievements";
import GitHubRepos, { GitHubReposHeader } from "@/components/GitHubRepos";

function StatsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto animate-pulse">
      <div className="rounded-xl border border-border bg-[#0d1117] h-64" />
      <div className="rounded-xl border border-border bg-[#0d1117] h-64" />
    </div>
  );
}

function ReposSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-surface/40 h-40"
        />
      ))}
    </div>
  );
}

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GitHub
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Profile stats and languages come from the GitHub REST API (no
            third-party images). Data refreshes about every hour.
          </p>
        </div>

        <Suspense fallback={<StatsSkeleton />}>
          <GitHubStats />
        </Suspense>

        <Achievements />

        <div>
          <GitHubReposHeader />
          <Suspense fallback={<ReposSkeleton />}>
            <GitHubRepos />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
