import{Github,Linkedin,Twitter,Zap}from"lucide-react";
export default function Footer(){
const year=new Date().getFullYear();
return(
<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid sm:grid-cols-3 gap-8 mb-10">
<div>
<div className="flex items-center gap-2 mb-3"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"/></span><span className="text-lg font-bold text-zinc-100">Kaleb<span className="text-violet-500">Misaw</span></span></div>
<p className="text-sm text-zinc-500 leading-relaxed">Full Stack Developer · Video Editor · Social Media Manager</p>
<div className="flex gap-3 mt-4">
<a href="https://github.com/kalebmisaw58-lgtm" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"><Github size={16}/></a>
<a href="https://www.linkedin.com/in/kaleb-misaw-b09ab1406" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"><Linkedin size={16}/></a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"><Twitter size={16}/></a>
</div>
</div>
<div>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Navigation</p>
<ul className="space-y-2">
{["Home","Projects","Video","Analytics","Case Studies","Contact"].map(l=>(<li key={l}><a href={`#${l.toLowerCase().replace(" ","-")}`} className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">{l}</a></li>))}
</ul>
</div>
<div>
<p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Core Web Vitals</p>
<div className="space-y-3">
{[{label:"Performance",score:"100"},{label:"Accessibility",score:"100"},{label:"Best Practices",score:"100"},{label:"SEO",score:"100"}].map(({label,score})=>(<div key={label} className="flex items-center justify-between"><span className="text-sm text-zinc-500">{label}</span><div className="flex items-center gap-2"><div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{width:score+"%"}}/></div><span className="text-xs font-bold text-emerald-400">{score}</span></div></div>))}
</div>
</div>
</div>
<div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© {year} Kaleb Misaw. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
<div className="flex items-center gap-1.5 text-xs text-zinc-600"><Zap size={11} className="text-violet-500"/>Optimized for 100 Lighthouse score across all categories</div>
</div>
</div>
</footer>
);
}