"use client";
import{useState}from"react";
import{Mail,MapPin,Calendar,CheckCircle}from"lucide-react";
const SERVICES=["Full-Stack Web Development","Video Editing","Social Media Management","Integrated Campaign"];
const BUDGETS=["Under $2,000","$2,000 – $5,000","$5,000 – $15,000","$15,000+","Let's discuss"];
type S="idle"|"loading"|"success";
export default function ContactSection(){
const[form,setForm]=useState({name:"",email:"",service:"",budget:"",message:""});
const[status,setStatus]=useState<S>("idle");
const set=(k:string,v:string)=>setForm(p=>({...p,[k]:v}));
const submit=async(e:React.FormEvent)=>{
e.preventDefault();
if(!form.name||!form.email||!form.service)return;
setStatus("loading");
await new Promise(r=>setTimeout(r,1400));
setStatus("success");
};
if(status==="success")return(
<section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="max-w-lg mx-auto text-center">
<div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6"><CheckCircle size={28} className="text-emerald-400"/></div>
<h3 className="text-2xl font-black text-zinc-100 mb-3">Message received.</h3>
<p className="text-zinc-400">I review every inquiry personally and respond within 24 hours.</p>
<button onClick={()=>{setStatus("idle");setForm({name:"",email:"",service:"",budget:"",message:""});}} className="mt-8 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-semibold transition-colors">Send another</button>
</div>
</section>
);
const inp="w-full bg-zinc-800/60 border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all";
const lbl="block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2";
return(
<section id="contact" className="py-24 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
<h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Let's Build Something Memorable</h2>
<p className="text-zinc-400 mt-3 max-w-xl">Describe the project and I'll come back with a clear plan and timeline.</p>
</div>
<div className="grid lg:grid-cols-5 gap-8">
<form onSubmit={submit} className="lg:col-span-3 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div><label className={lbl}>Name *</label><input required value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Your full name" className={inp}/></div>
<div><label className={lbl}>Email *</label><input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@company.com" className={inp}/></div>
</div>
<div><label className={lbl}>Service Needed *</label><select required value={form.service} onChange={e=>set("service",e.target.value)} className={inp+" appearance-none"}><option value="" disabled>Select a service</option>{SERVICES.map(s=>(<option key={s} value={s}>{s}</option>))}</select></div>
<div><label className={lbl}>Project Budget</label><select value={form.budget} onChange={e=>set("budget",e.target.value)} className={inp+" appearance-none"}><option value="">Select a range</option>{BUDGETS.map(b=>(<option key={b} value={b}>{b}</option>))}</select></div>
<div><label className={lbl}>Project Brief</label><textarea value={form.message} onChange={e=>set("message",e.target.value)} rows={4} placeholder="Describe your project goals, timeline, and any specific requirements..." className={inp+" resize-none"}/></div>
<button type="submit" disabled={status==="loading"} className="w-full py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20">
{status==="loading"?"Sending...":"Send Message"}
</button>
</form>
<div className="lg:col-span-2 space-y-4">
<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5">
<h3 className="font-bold text-zinc-100">Direct Contact</h3>
<div className="flex items-start gap-3"><Mail size={16} className="text-violet-400 mt-0.5 flex-shrink-0"/><div><p className="text-xs text-zinc-500 mb-0.5">Email</p><a href="mailto:kalebmisaw58@gmail.com" className="text-sm text-zinc-300 hover:text-violet-400 transition-colors">kalebmisaw58@gmail.com</a></div></div>
<div className="flex items-start gap-3"><MapPin size={16} className="text-violet-400 mt-0.5 flex-shrink-0"/><div><p className="text-xs text-zinc-500 mb-0.5">Location</p><p className="text-sm text-zinc-300">Addis Ababa, Ethiopia — Remote worldwide</p></div></div>
<div className="flex items-start gap-3"><Calendar size={16} className="text-violet-400 mt-0.5 flex-shrink-0"/><div><p className="text-xs text-zinc-500 mb-0.5">Book a Call</p><a href="#" className="text-sm text-violet-400 hover:text-violet-300 font-semibold transition-colors">Schedule 30-min intro →</a></div></div>
</div>
<div className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-2"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"/></span><span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Available Now</span></div>
<p className="text-sm text-zinc-400 leading-relaxed">Currently accepting new projects for Q2 2026. Response time is under 24 hours.</p>
</div>
</div>
</div>
</div>
</section>
);
}