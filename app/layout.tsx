import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaleb Misaw — Full Stack Developer · Video Editor · Social Media Manager",
  description:
    "Full-stack developer, cinematic video editor, and social media manager based in Addis Ababa, Ethiopia. Available for Q1/Q2 2026 projects.",
  keywords: [
    "full stack developer",
    "video editor",
    "social media manager",
    "React",
    "Next.js",
    "Addis Ababa",
    "Ethiopia",
  ],
  openGraph: {
    title: "Kaleb Misaw — Full Stack Developer · Video Editor · Social Media Manager",
    description:
      "Building interfaces, editing media, and scaling audiences for startups and creative brands worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
