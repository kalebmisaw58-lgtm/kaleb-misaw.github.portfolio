"use client";
import { useState } from "react";
import { Mail, MapPin, Calendar, CheckCircle, Send } from "lucide-react";

const SERVICES = ["Full-Stack Web Development", "Video Editing", "Social Media Management", "Integrated Campaign"];
const BUDGETS = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Let's discuss"];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) return;
    setStatus("loading");
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          budget: form.budget,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inp = "w-full bg-zinc-800/60 border border-zinc-700/60 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all";
  const lbl = "block text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2";

  if (status === "success") return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-2xl font-black text-zinc-100 mb-3">Message received.</h3>
        <p className="text-zinc-400">I review every inquiry personally and respond within 24 hours.</p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", service: "", budget: "", message: "" }); }}
          className="mt-8 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-semibold transition-colors"
        >
          Send another message
        </button>
      </div>
    </section>
  );

  return (
    <section id="contact" className="py-24 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-violet-500 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-100">Let&apos;s Build Something Memorable</h2>
          <p className="text-zinc-400 mt-3 max-w-xl">Based in Addis Ababa, working with clients worldwide. Describe your project and I&apos;ll come back with a clear plan and timeline within 24 hours.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <form onSubmit={submit} className="lg:col-span-3 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={lbl}>Name *</label>
                <input required value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your full name" className={inp} />
              </div>
              <div>
                <label className={lbl}>Email *</label>
                <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@company.com" className={inp} />
              </div>
            </div>
            <div>
              <label className={lbl}>Service Needed *</label>
              <select required value={form.service} onChange={e => set("service", e.target.value)} className={inp + " appearance-none"}>
                <option value="" disabled>Select a service</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className={lbl}>Project Budget</label>
              <select value={form.budget} onChange={e => set("budget", e.target.value)} className={inp + " appearance-none"}>
                <option value="">Select a range</option>
                {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className={lbl}>Project Brief</label>
              <textarea value={form.message} onChange={e => set("message", e.target.value)} rows={4} placeholder="Describe your project goals, timeline, and any specific requirements..." className={inp + " resize-none"} />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                Something went wrong. Email me directly at kalebmisaw58@gmail.com
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20"
            >
              {status === "loading" ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
              ) : (
                <><Send size={16} />Send Message</>
              )}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-5">
              <h3 className="font-bold text-zinc-100">Direct Contact</h3>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <a href="mailto:kalebmisaw58@gmail.com" className="text-sm text-zinc-300 hover:text-violet-400 transition-colors">kalebmisaw58@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Location</p>
                  <p className="text-sm text-zinc-300">Addis Ababa, Ethiopia</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Available for remote work worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-violet-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Book a Call</p>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-sm text-violet-400 hover:text-violet-300 font-semibold transition-colors">Schedule a 30-min intro call →</a>
                </div>
              </div>
            </div>

            <div className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Available Now</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">Currently accepting new projects for Q2 2026. Response time is under 24 hours.</p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Also reach me on</p>
              <div className="flex gap-3">
                <a href="https://github.com/kalebmisaw58-lgtm" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/kaleb-misaw-b09ab1406" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
