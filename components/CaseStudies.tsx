"use client";
import{useState}from"react";
import{CheckCircle,Zap,TrendingUp,Code2}from"lucide-react";
const studies=[
{
id:"web-rebuild",
title:"Full-Stack Web Rebuild",
subtitle:"React migration cutting load time by 68%",
icon:Code2,
tabs:{
challenge:{
heading:"The Challenge",
body:"A mid-market SaaS company ran a legacy jQuery monolith with a 7.2s Time-to-Interactive on mobile. Bounce rate sat at 74%. Their engineering team had no capacity to migrate, and every new feature took 3x longer than it should have.",
},
process:{
heading:"The Process",
stack:["Next.js 14 App Router","TypeScript","Tailwind CSS","Vercel Edge Network","Supabase","Playwright E2E tests"],
body:"Rebuilt the entire front-end in Next.js with React Server Components for zero-JS static pages. Replaced all jQuery DOM manipulation with typed React state. Implemented ISR for marketing pages and dynamic imports for dashboard routes. Ran Lighthouse CI on every PR to enforce performance budgets.",
},
impact:{
heading:"The Business Impact",
outcomes:[
"Time-to-Interactive dropped from 7.2s to 1.8s (75% reduction)",
"Lighthouse Performance score: 38 → 97",
"Bounce rate fell from 74% to 31%",
"Trial sign-up conversion increased by 44%",
"Engineering velocity improved — new features ship 3x faster",
],
testimonial:{quote:"The rebuild paid for itself in 6 weeks through improved trial conversions alone.",author:"CTO, TechFlow Inc."},
},
},
},
{
id:"viral-growth",
title:"Organic Viral Growth Engine",
subtitle:"0 to 180K followers in 11 months",
icon:TrendingUp,
tabs:{
challenge:{
heading:"The Challenge",
body:"A DTC health brand had 2,200 Instagram followers and a content team posting inconsistently with no data feedback loop. Their paid CAC was $48 and rising. The founder wanted organic growth but had no system, no content calendar, and no analytics baseline.",
},
process:{
heading:"The Process",
stack:["Meta Business Suite","Google Analytics 4","Notion (content calendar)","CapCut + Premiere Pro","Canva Pro","Sprout Social"],
body:"Audited 6 months of historical posts to identify the top 12% of content by saves-per-impression. Built a 3-pillar content framework: educational carousels, behind-the-scenes Reels, and UGC reposts. Established a weekly analytics review cycle and A/B tested hook copy on every Reel for 90 days straight.",
},
impact:{
heading:"The Business Impact",
outcomes:[
"Grew from 2,200 to 182,000 followers in 11 months",
"Average Reel reach: 340K (up from 4K)",
"Organic CAC dropped to $11 (vs $48 paid)",
"Email list grew by 28,000 from bio link traffic",
"3 posts crossed 1M views organically",
],
testimonial:{quote:"We cut our paid ad spend by 60% because organic was outperforming it.",author:"Founder, Orbit Health"},
},
},
},
];
type TabKey="challenge"|"process"|"impact";
export default function CaseStudies(){
const[activeStudy,setActiveStudy]=useState(0);
const[activeTab,setActiveTab]=useState<TabKey>("challenge");
const study=studies[activeStudy];
const tabs:TabKey[]=["challenge","process","impact"];
return(
<section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="mb-12">
<p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Deep Dives</p>
<h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Technical Case Studies</h2>
<p className="text-zinc-400 mt-3 max-w-xl">Two projects broken down from first brief to final result — the decisions made, the tools used, and the numbers that followed.</p>
</div>
<div className="flex flex-wrap gap-3 mb-8">
{studies.map((s,i)=>(<button key={s.id} onClick={()=>{setActiveStudy(i);setActiveTab("challenge");}} className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${activeStudy===i?"bg-violet-600 text-white shadow-lg shadow-violet-500/20":"bg-zinc-900/40 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700"}`}><s.icon size={15}/>{s.title}</button>))}
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden">
<div className="p-6 border-b border-zinc-800/60">
<h3 className="text-xl font-bold text-zinc-100">{study.title}</h3>
<p className="text-sm text-zinc-500 mt-1">{study.subtitle}</p>
</div>
<div className="flex border-b border-zinc-800/60">
{tabs.map(t=>(<button key={t} onClick={()=>setActiveTab(t)} className={`px-6 py-3 text-sm font-semibold capitalize transition-all duration-200 border-b-2 ${activeTab===t?"border-violet-500 text-violet-400":"border-transparent text-zinc-500 hover:text-zinc-300"}`}>{study.tabs[t].heading}</button>))}
</div>
<div className="p-6 min-h-[280px]">
{activeTab==="challenge"&&(<p className="text-zinc-300 leading-relaxed text-base">{study.tabs.challenge.body}</p>)}
{activeTab==="process"&&(<div><p className="text-zinc-300 leading-relaxed mb-5">{study.tabs.process.body}</p><div className="flex flex-wrap gap-2">{study.tabs.process.stack.map(s=>(<span key={s} className="px-3 py-1.5 text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-lg">{s}</span>))}</div></div>)}
{activeTab==="impact"&&(<div><ul className="space-y-3 mb-6">{study.tabs.impact.outcomes.map(o=>(<li key={o} className="flex items-start gap-3 text-zinc-300"><CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0"/><span>{o}</span></li>))}</ul><div className="bg-zinc-800/40 border border-zinc-700/60 rounded-xl p-5"><p className="text-zinc-200 italic leading-relaxed">"{study.tabs.impact.testimonial.quote}"</p><p className="text-sm text-violet-400 font-semibold mt-3">— {study.tabs.impact.testimonial.author}</p></div></div>)}
</div>
</div>
</section>
);
}