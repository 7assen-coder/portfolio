import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Mohammed Hassen",
  description: "Mohammed Hassen's resume - Full-Stack Developer",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center">
      {/* Top bar */}
      <div className="w-full max-w-4xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Portfolio
        </Link>
        <a
          href="/resume.png"
          download="Mohammed_Hassen_CV.png"
          className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-all flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>

      {/* CV Image */}
      <div className="w-full max-w-3xl px-4 pb-12">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
          <Image
            src="/resume.png"
            alt="Mohammed Hassen - Resume / CV"
            width={2551}
            height={3579}
            quality={100}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
