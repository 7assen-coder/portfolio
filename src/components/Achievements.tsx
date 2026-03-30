import { GITHUB_USERNAME, PROFILE_ACHIEVEMENTS } from "@/config/site";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Award className="text-primary-light" size={28} />
            Achievements
          </h3>
          <p className="text-gray-400 text-sm max-w-xl">
            Highlights in the spirit of GitHub profile achievements — keep them
            aligned with what you have on your account.
          </p>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=achievements`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-light hover:underline shrink-0"
        >
          View on GitHub →
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {PROFILE_ACHIEVEMENTS.map((a) => (
          <div
            key={a.id}
            className="flex flex-col items-center text-center max-w-[120px]"
            title={a.hint}
          >
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${a.accent} border border-white/10 flex items-center justify-center shadow-lg mb-3 ring-2 ring-white/5`}
            >
              <span className="text-3xl" aria-hidden>
                {achievementEmoji(a.id)}
              </span>
            </div>
            <span className="text-sm font-medium text-white leading-tight">
              {a.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function achievementEmoji(id: string): string {
  const map: Record<string, string> = {
    quickdraw: "⚡",
    "pull-shark": "🦈",
    yolo: "🚀",
    starstruck: "⭐",
  };
  return map[id] ?? "🏅";
}
