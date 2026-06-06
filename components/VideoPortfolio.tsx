"use client";
import { useState, useEffect } from "react";
import { Play, X, ExternalLink } from "lucide-react";

const videos = [
  { id: "DyPaY2jkDIA", title: "Eritrea Independence Day – Commemorative Visuals", client: "AFRONOVA", category: "Documentary · Event Coverage", duration: "", description: "An emotionally resonant retrospective featuring synchronized crowd displays, street festivities, and high-contrast night celebration grading.", tags: ["Premiere Pro", "Color Grading", "Event Coverage"] },
  { id: "9bZkp7q19f0", title: "E-commerce Brand Launch", client: "Luminary Co.", category: "Brand Film · Commercial", duration: "1:48", description: "High-energy brand launch film for a DTC fashion label. Shot on RED Komodo, edited in Premiere Pro with custom LUT grading.", tags: ["RED Camera", "Premiere Pro", "Color Grading"] },
  { id: "kJQP7kiw5Fk", title: "Startup Pitch Deck Video", client: "Nexus Ventures", category: "Corporate · Pitch", duration: "3:12", description: "Investor-facing pitch video combining live interviews, data visualizations, and kinetic typography for a Series A raise.", tags: ["Kinetic Type", "Data Viz", "Interview"] },
  { id: "JGwWNGJdvx8", title: "Social Media Ad Campaign", client: "Orbit Health", category: "Paid Social · Reels", duration: "0:30", description: "15-video ad creative suite for Meta and TikTok — optimized aspect ratios, hook-first editing, and A/B tested thumbnails.", tags: ["Meta Ads", "TikTok", "A/B Testing"] },
];

function VideoModal({ video, onClose }: { video: (typeof videos)[0]; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md" />
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between p-5 border-b border-zinc-800">
          <div>
            <h3 className="text-lg font-bold text-zinc-100">{video.title}</h3>
            <p className="text-sm text-zinc-500 mt-0.5">{video.client} · {video.category}</p>
          </div>
          <div className="flex gap-2">
            <a href={`https://youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors" aria-label="Open in YouTube"><ExternalLink size={16} /></a>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors" aria-label="Close"><X size={16} /></button>
          </div>
        </div>
        <div className="relative aspect-video bg-zinc-950">
          <iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
        </div>
        <div className="p-5">
          <p className="text-sm text-zinc-400 leading-relaxed">{video.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {video.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-md">{tag}</span>))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onClick }: { video: (typeof videos)[0]; onClick: () => void }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden group cursor-pointer hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") onClick(); }} aria-label={`Play ${video.title}`}>
      <div className="relative aspect-video bg-zinc-900 overflow-hidden">
        {/* Skeleton */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
        )}
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-violet-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-violet-500 transition-all duration-300">
            <Play size={20} className="text-white ml-0.5" fill="white" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-zinc-950/80 rounded-md text-xs font-medium text-zinc-300">{video.duration}</div>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-violet-400 mb-1">{video.category}</p>
        <h3 className="font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">{video.title}</h3>
        <p className="text-sm text-zinc-500 mt-1">{video.client}</p>
      </div>
    </div>
  );
}

export default function VideoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);
  return (
    <section id="video" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Cinematic Editing &amp; Motion Direction</h2>
        <p className="text-zinc-400 mt-3 max-w-xl">From concept to final cut — every project is built around a clear narrative, precise pacing, and a visual language that converts viewers into customers.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {videos.map((v) => (<VideoCard key={v.id} video={v} onClick={() => setActiveVideo(v)} />))}
      </div>
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  );
}
