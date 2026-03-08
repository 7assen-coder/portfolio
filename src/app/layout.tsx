import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Hassen | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Flutter, Django, React & Docker. Creator of RAQIB & Tawssil. Based in Nouakchott, Mauritania.",
  keywords: [
    "Mohammed Hassen",
    "Full-Stack Developer",
    "Flutter",
    "Django",
    "React",
    "Docker",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mohammed Hassen | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Flutter, Django, React & Docker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
