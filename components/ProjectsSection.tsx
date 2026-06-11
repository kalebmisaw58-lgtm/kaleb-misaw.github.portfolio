"use client";
import { ExternalLink, Github } from "lucide-react";

const P = [
  {
    title: "Roha Tours",
    desc: "Full-stack travel booking platform for an Ethiopian tour operator — tour listings, itinerary pages, and inquiry system built for mobile-first performance.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    badge: "Travel",
    live: "https://rohatours-u6ey.vercel.app",
    repo: "",
  },
  {
    title: "Luminary E-commerce",
    desc: "Headless Shopify storefront with custom React checkout. 98 Lighthouse score and 2.1s LCP on mobile.",
    stack: ["Next.js", "Shopify", "Framer Motion", "Vercel"],
    badge: "E-commerce",
    live: "",
    repo: "",
  },
  {
    title: "Orbit Health Landing",
    desc: "High-conversion marketing site with A/B tested hero sections. Increased trial sign-ups by 44% in 30 days.",
    stack: ["Next.js", "Tailwind", "Vercel Analytics"],
    badge: "Marketing",
    live: "",
    repo: "",
  },
  {
    title: "TechFlow API Docs",
    desc: "Interactive API documentation with live code playground, built on Next.js with MDX and syntax highlighting.",
    stack: ["Next.js", "MDX", "Shiki", "TypeScript"],
    badge: "Docs",
    live: "",
    repo: "",
  },
  {
    title: "Nexus Mobile App",
    desc: "React Native companion app with push notifications, offline sync, and biometric auth.",
    stack: ["React Native", "Expo", "TypeScript"],
    badge: "Mobile",
    live: "",
    repo: "",
  },
  {
    title: "DataPulse Widget",
    desc: "Embeddable analytics widget used by 200+ sites. Vanilla JS core with a React config UI.",
    stack: ["TypeScript", "React", "REST API"],
    badge: "Widget",
    live: "",
    repo: "",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Full-Stack Projects</h2>
          <p className="text-zinc-400 mt-3 max-w-xl">Production interfaces built for speed, accessibility, and real business impact.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {P.map((p) => (
            <div key={p.title} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 flex flex-col gap-4 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start justify-between">
                <span className="px-2.5 py-1 text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-md">{p.badge}</span>
                <div className="flex gap-1">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 text-zinc-500 hover:text-zinc-100 rounded-md transition-colors"><Github size={14} /></a>
                  ) : (
                    <span className="p-1.5 text-zinc-700 cursor-not-allowed"><Github size={14} /></span>
                  )}
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="p-1.5 text-zinc-500 hover:text-violet-400 rounded-md transition-colors"><ExternalLink size={14} /></a>
                  ) : (
                    <span className="p-1.5 text-zinc-700 cursor-not-allowed"><ExternalLink size={14} /></span>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 group-hover:text-violet-300 transition-colors mb-2">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
