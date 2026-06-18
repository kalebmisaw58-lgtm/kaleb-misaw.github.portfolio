"use client";
import{useState}from"react";
import{TrendingUp,MousePointerClick,Eye}from"lucide-react";
import{LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer}from"recharts";
const C={
"Africa Celebrates":{
kpis:[
{label:"Total Followers",value:"25.6K",change:"+25.6K since Mar",Icon:Eye,color:"text-blue-400"},
{label:"Avg Engagement Rate",value:"7.2%",change:"+7.2pp",Icon:TrendingUp,color:"text-violet-400"},
{label:"Avg Reach per Post",value:"18.4K",change:"+142%",Icon:MousePointerClick,color:"text-emerald-400"},
],
chart:[
{month:"Mar",impressions:42,followers:2100},
{month:"Apr",impressions:98,followers:7400},
{month:"May",impressions:167,followers:14800},
{month:"Jun",impressions:224,followers:25600},
],
},
"SaaS Campaign":{
kpis:[
{label:"Total Impressions",value:"2.8M",change:"+52%",Icon:Eye,color:"text-blue-400"},
{label:"Avg Engagement Rate",value:"8.2%",change:"+3.4pp",Icon:TrendingUp,color:"text-violet-400"},
{label:"Click-Through Rate",value:"4.1%",change:"+1.6pp",Icon:MousePointerClick,color:"text-emerald-400"},
],
chart:[
{month:"Jan",impressions:180,followers:800},
{month:"Feb",impressions:310,followers:1100},
{month:"Mar",impressions:490,followers:1600},
{month:"Apr",impressions:620,followers:2200},
{month:"May",impressions:810,followers:3100},
{month:"Jun",impressions:1050,followers:4200},
],
},
"E-commerce Launch":{
kpis:[
{label:"Total Impressions",value:"6.1M",change:"+71%",Icon:Eye,color:"text-blue-400"},
{label:"Avg Engagement Rate",value:"5.3%",change:"+1.8pp",Icon:TrendingUp,color:"text-violet-400"},
{label:"Click-Through Rate",value:"2.9%",change:"+0.7pp",Icon:MousePointerClick,color:"text-emerald-400"},
],
chart:[
{month:"Jan",impressions:420,followers:2100},
{month:"Feb",impressions:680,followers:3200},
{month:"Mar",impressions:920,followers:4800},
{month:"Apr",impressions:1240,followers:6500},
{month:"May",impressions:1580,followers:8200},
{month:"Jun",impressions:1960,followers:10400},
],
},
};
type K=keyof typeof C;
const TT=({active,payload,label}:any)=>{
if(!active||!payload?.length)return null;
return(<div className="bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-sm shadow-xl"><p className="text-zinc-400 font-medium mb-2">{label}</p>{payload.map((p:any)=>(<p key={p.name} style={{color:p.color}} className="font-semibold capitalize">{p.name}: {p.value.toLocaleString()}{p.name==="impressions"?"K":""}</p>))}</div>);
};
export default function AnalyticsDashboard(){
const[active,setActive]=useState<K>("Africa Celebrates");
const d=C[active];
return(
<section id="analytics" className="py-24 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Performance</p>
<h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Data-Driven Social Media Performance</h2>
<p className="text-zinc-400 mt-3 max-w-xl">Real results from accounts I manage. Africa Celebrates grew to 25.6K followers in under 4 months — built on consistent content strategy, cultural storytelling, and data-driven posting schedules.</p>
</div>
<div className="flex flex-wrap gap-2 mb-8">
{(Object.keys(C)as K[]).map(k=>(<button key={k} onClick={()=>setActive(k)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${active===k?"bg-violet-600 text-white shadow-lg shadow-violet-500/20":"bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"}`}>{k}</button>))}
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
{d.kpis.map(({label,value,change,Icon,color})=>(<div key={label} className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-5 hover:border-violet-500/30 transition-all duration-300"><div className="flex items-center justify-between mb-3"><span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">{label}</span><Icon size={16} className={color}/></div><div className={`text-3xl font-black ${color} mb-1`}>{value}</div><div className="text-xs font-semibold text-emerald-400">{change} vs prev period</div></div>))}
</div>
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6">
<h3 className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wide">Month-over-Month Growth</h3>
<ResponsiveContainer width="100%" height={280}>
<LineChart data={d.chart} margin={{top:5,right:20,left:0,bottom:5}}>
<CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
<XAxis dataKey="month" stroke="#52525b" tick={{fill:"#71717a",fontSize:12}} />
<YAxis stroke="#52525b" tick={{fill:"#71717a",fontSize:12}} />
<Tooltip content={<TT/>} />
<Line type="monotone" dataKey="impressions" stroke="#8b5cf6" strokeWidth={2} dot={{fill:"#8b5cf6",r:4}} activeDot={{r:6}} name="impressions" />
<Line type="monotone" dataKey="followers" stroke="#3b82f6" strokeWidth={2} dot={{fill:"#3b82f6",r:4}} activeDot={{r:6}} name="followers" />
</LineChart>
</ResponsiveContainer>
<div className="flex gap-6 mt-4 justify-center">
<div className="flex items-center gap-2 text-xs text-zinc-400"><span className="w-3 h-0.5 bg-violet-500 inline-block rounded"/>Impressions (K)</div>
<div className="flex items-center gap-2 text-xs text-zinc-400"><span className="w-3 h-0.5 bg-blue-500 inline-block rounded"/>Followers</div>
</div>
</div>
</div>
</section>
);
}