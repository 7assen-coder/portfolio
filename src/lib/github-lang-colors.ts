/** Approximate Linguist-style colors for primary-language bars */
export function languageColor(name: string): string {
  const map: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#701516",
    PHP: "#4F5D95",
    Dart: "#00B4AB",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Shell: "#89e051",
    Dockerfile: "#384d54",
    Vue: "#41b883",
    SCSS: "#c6538c",
    "Jupyter Notebook": "#DA5B0B",
    MDX: "#fcb32c",
  };
  return map[name] ?? "#58a6ff";
}
