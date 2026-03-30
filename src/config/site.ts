/** Single place to tune portfolio + GitHub integration */

export const GITHUB_USERNAME = "7assen-coder" as const;

/** Shown first; must match repo `name` on GitHub when pinned */
export const PINNED_REPO_NAMES: readonly string[] = [
  "espdc-datathon",
  "portfolio",
  "RAQIB",
  "Tawssil",
];

/** Repos to hide from the live list (archived forks, experiments, etc.) */
export const HIDDEN_REPO_NAMES: readonly string[] = [];

/**
 * GitHub does not expose profile achievements via a public API.
 * These entries power the visual “achievement” row (edit to match your profile).
 */
export const PROFILE_ACHIEVEMENTS: readonly {
  id: string;
  label: string;
  hint: string;
  accent: string;
}[] = [
  {
    id: "quickdraw",
    label: "Quickdraw",
    hint: "Closed an issue or PR within 5 minutes of opening",
    accent: "from-amber-500/30 to-orange-600/20",
  },
  {
    id: "pull-shark",
    label: "Pull Shark",
    hint: "Merged multiple pull requests",
    accent: "from-cyan-500/30 to-blue-600/20",
  },
  {
    id: "yolo",
    label: "YOLO",
    hint: "Merged a PR without review",
    accent: "from-fuchsia-500/30 to-purple-600/20",
  },
  {
    id: "starstruck",
    label: "Starstruck",
    hint: "Created a repo that earned stars",
    accent: "from-rose-500/30 to-pink-600/20",
  },
];
