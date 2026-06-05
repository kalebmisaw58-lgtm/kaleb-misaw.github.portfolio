"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Video", href: "#video" },
  { label: "Analytics", href: "#analytics" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600" />
          </span>
          <span className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-violet-400 transition-colors">
            Kaleb<span className="text-violet-500">Misaw</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                  activeSection === href.replace("#", "")
                    ? "text-violet-400 bg-violet-500/10"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/kalebmisaw58-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-md transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaleb-misaw-b09ab1406"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-md transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="ml-2 px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-all duration-200 glow-violet-sm hover:glow-violet"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-md transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    activeSection === href.replace("#", "")
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800">
            <a href="https://github.com/kalebmisaw58-lgtm" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-100 rounded-md transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kaleb-misaw-b09ab1406" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-100 rounded-md transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="ml-auto px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-all duration-200"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
