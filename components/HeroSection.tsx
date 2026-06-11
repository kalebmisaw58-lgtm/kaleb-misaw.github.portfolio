"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Download, Code2, Video, BarChart3, Zap, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const techCards = [
  {
    icon: Code2,
    label: "React / Next.js",
    level: 95,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    years: "4 yrs",
  },
  {
    icon: Video,
    label: "Premiere Pro",
    level: 90,
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    years: "5 yrs",
  },
  {
    icon: BarChart3,
    label: "Google Analytics 4",
    level: 88,
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    years: "3 yrs",
  },
  {
    icon: Zap,
    label: "TypeScript",
    level: 92,
    color: "from-yellow-400 to-amber-300",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    years: "3 yrs",
  },
];

const highlights = [
  "Full-stack React, Next.js & TypeScript",
  "Cinematic video editing & production",
  "Social media management & growth strategy",
];

function TechCard({
  icon: Icon,
  label,
  level,
  color,
  bg,
  border,
  years,
  delay,
}: (typeof techCards)[0] & { delay: number }) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-4 flex flex-col gap-3 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-0.5",
        border
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className={cn("p-2 rounded-lg", bg)}>
          <Icon size={16} className="text-zinc-100" />
        </div>
        <span className="text-xs font-medium text-zinc-500">{years}</span>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium text-zinc-200">{label}</span>
          <span className="text-xs font-semibold text-zinc-400">{level}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000", color)}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Badges row */}
          <div className="animate-on-scroll flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Active for Q1 / Q2 2026
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/60 text-zinc-400 text-xs font-semibold">
              📍 Addis Ababa, Ethiopia
            </div>
          </div>

          {/* Headline */}
          <div className="animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              <span className="text-zinc-100">Designing</span>{" "}
              <span className="gradient-text">Interfaces.</span>
              <br />
              <span className="text-zinc-100">Editing</span>{" "}
              <span className="text-violet-400">Media.</span>
              <br />
              <span className="text-zinc-100">Scaling</span>{" "}
              <span className="text-zinc-300">Audiences.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="animate-on-scroll">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              I build full-stack web applications, direct cinematic video productions, and run
              data-driven social media strategies — based in Addis Ababa, Ethiopia, working
              with startups and brands worldwide.
            </p>
          </div>

          {/* Highlights */}
          <div className="animate-on-scroll flex flex-col gap-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                <CheckCircle size={14} className="text-violet-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-on-scroll flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 glow-violet-sm hover:glow-violet"
            >
              View Work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-semibold rounded-xl transition-all duration-200 hover:bg-zinc-800/40"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column — Photo + Bento Tech Grid */}
        <div className="animate-on-scroll flex flex-col gap-3">

          {/* Photo + top 2 tech cards side by side */}
          <div className="grid grid-cols-2 gap-3">
            {/* Profile photo card */}
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 aspect-[3/4] row-span-2 group">
              <img
                src="/kaleb.jpg"
                alt="Kaleb Misaw"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-xs font-bold text-zinc-100">Kaleb Misaw</p>
                <p className="text-xs text-zinc-400">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Right: 2 stacked tech cards */}
            <div className="flex flex-col gap-3">
              {techCards.slice(0, 2).map((card, i) => (
                <TechCard key={card.label} {...card} delay={i * 80} />
              ))}
            </div>
          </div>

          {/* Bottom: 2 tech cards + stats */}
          <div className="grid grid-cols-2 gap-3">
            {techCards.slice(2).map((card, i) => (
              <TechCard key={card.label} {...card} delay={(i + 2) * 80} />
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "40+", label: "Projects Shipped" },
              { value: "2M+", label: "Social Impressions" },
              { value: "98", label: "Lighthouse Score" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="glass-card rounded-xl p-4 text-center hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="text-2xl font-black text-violet-400 text-glow">{value}</div>
                <div className="text-xs text-zinc-500 mt-1 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
