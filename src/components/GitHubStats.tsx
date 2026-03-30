import Image from "next/image";
import { GITHUB_USERNAME } from "@/config/site";

const STATS_THEME = "dark";
const BG = "0d1117";

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${STATS_THEME}&hide_border=true&bg_color=${BG}&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9`;

const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${STATS_THEME}&hide_border=true&bg_color=${BG}&title_color=58a6ff&text_color=c9d1d9`;

export default function GitHubStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden border border-border bg-[#0d1117] hover:border-primary/40 transition-colors"
      >
        <Image
          src={statsUrl}
          alt={`GitHub stats for ${GITHUB_USERNAME}`}
          width={495}
          height={195}
          className="w-full h-auto"
          unoptimized
        />
      </a>
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden border border-border bg-[#0d1117] hover:border-primary/40 transition-colors"
      >
        <Image
          src={langsUrl}
          alt={`Most used languages for ${GITHUB_USERNAME}`}
          width={495}
          height={195}
          className="w-full h-auto"
          unoptimized
        />
      </a>
    </div>
  );
}
