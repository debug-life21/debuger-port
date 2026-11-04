import { useEffect, useRef, useState } from "react";
import About from "./components/About.jsx";
import Approach from "./components/Approach.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Icon from "./components/Icons.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Venture from "./components/Venture.jsx";

const tlhUrl = "https://tedbabelearnhub.vercel.app";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Venture", href: "#venture" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Animated skill marquee (icon + label) shown at the bottom of the home page
const skillMarquee = [
  { name: "MongoDB", icon: "database", accent: "emerald" },
  { name: "Express.js", icon: "server", accent: "slate" },
  { name: "React", icon: "code", accent: "cyan" },
  { name: "Node.js", icon: "cpu", accent: "emerald" },
  { name: "JavaScript (ES6+)", icon: "terminal", accent: "amber" },
  { name: "Tailwind CSS", icon: "palette", accent: "cyan" },
  { name: "REST APIs", icon: "globe", accent: "violet" },
  { name: "Mongoose", icon: "layers", accent: "emerald" },
  { name: "Git & GitHub", icon: "github", accent: "slate" },
  { name: "MySQL", icon: "database", accent: "sky" },
  { name: "Vite", icon: "zap", accent: "violet" },
  { name: "Vercel", icon: "rocket", accent: "slate" },
  { name: "SEO", icon: "search", accent: "amber" },
  { name: "Web Analytics", icon: "barChart", accent: "cyan" },
];

const marqueeAccent = {
  cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/25 bg-violet-400/10 text-violet-300",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  sky: "border-sky-400/25 bg-sky-400/10 text-sky-300",
  slate: "border-slate-500/30 bg-slate-500/10 text-slate-300",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progressRef = useRef(null);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const bar = progressRef.current;
      if (!bar) return;
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const ratio = max > 0 ? root.scrollTop / max : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Scroll-spy for active nav link
  useEffect(() => {
    const ids = ["home", ...navigation.map((item) => item.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px]"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Ambient aurora background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="aurora absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="aurora-delayed absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="aurora absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[150px]" />
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
        <nav
          className="section-shell flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Wendemachew Tsegaye home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-violet-500/20 font-mono text-sm font-extrabold text-cyan-200 shadow-md shadow-cyan-400/10 transition group-hover:scale-105 group-hover:border-cyan-400/60">
              WT
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-bold tracking-tight text-white transition group-hover:text-cyan-200">
                Wendemachew<span className="text-cyan-300">.</span>
              </span>
              <span className="text-[10px] text-slate-400">
                MERN Dev • Marketing • Co-Founder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  className={`relative text-xs font-semibold transition ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-cyan-300"
                  }`}
                  href={item.href}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}

            {/* TLH quick link */}
            <a
              href={tlhUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-2 text-xs font-bold text-emerald-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-950"
            >
              <Icon name="graduationCap" size={14} />
              <span>TLH</span>
            </a>

            {/* Prominent CV Download in Navbar */}
            <a
              href="/Wendemu_Resume.pdf"
              download="Wendemachew_Tsegaye_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-xs font-bold text-cyan-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <Icon name="download" size={14} />
              <span>CV</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:from-cyan-300 hover:to-white"
            >
              <span>Get in touch</span>
              <Icon name="arrowUpRight" size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="section-shell border-t border-slate-800/80 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-cyan-300"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2.5 border-t border-slate-800/80 pt-3">
                <a
                  href={tlhUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-950/40 px-4 py-2.5 text-sm font-bold text-emerald-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="graduationCap" size={16} />
                  <span>Tedbabe LearnHUB</span>
                  <Icon name="externalLink" size={14} />
                </a>

                <a
                  href="/Wendemu_Resume.pdf"
                  download="Wendemachew_Tsegaye_Resume.pdf"
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-4 py-2.5 text-sm font-bold text-cyan-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="download" size={16} />
                  <span>Download CV (PDF)</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />

        {/* Animated skills marquee (icon + label) */}
        <div className="marquee-track relative overflow-hidden border-y border-white/[0.05] bg-slate-950/40 py-8">
          <p className="section-shell mb-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
            Technologies &amp; Tools I Build With
          </p>
          <div className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max items-center">
              {[...skillMarquee, ...skillMarquee].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="pr-4">
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 py-2.5 pl-2.5 pr-5 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border ${marqueeAccent[skill.accent]}`}
                    >
                      <Icon name={skill.icon} size={18} />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold text-slate-200">
                      {skill.name}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <About />
        <Approach />
        <Venture />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-slate-950/80">
        <div className="section-shell flex flex-col gap-6 py-10 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#home"
              className="font-heading text-sm font-bold text-white transition hover:text-cyan-200"
            >
              Wendemachew Tsegaye <span className="text-cyan-300">©</span>{" "}
              {new Date().getFullYear()}
            </a>
            <p className="mt-1 text-slate-400">
              Full-Stack JavaScript (MERN) Developer • Digital Marketing
              Specialist • Co-Founder, Tedbabe LearnHUB
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href={tlhUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-300 transition hover:text-white"
            >
              <Icon name="graduationCap" size={14} />
              <span>Tedbabe LearnHUB</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="/Wendemu_Resume.pdf"
              download="Wendemachew_Tsegaye_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-cyan-300 transition hover:text-white"
            >
              <Icon name="download" size={14} />
              <span>Download CV</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://github.com/debug-life21"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://linkedin.com/in/wendmachew-tsegaye"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 text-slate-300 transition hover:text-cyan-300"
            >
              <span>Back to top</span>
              <Icon name="arrowUpRight" size={13} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
