import { useState } from "react";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const skillCategories = [
  {
    id: "mern",
    name: "Full-Stack MERN",
    icon: "code",
    color: "cyan",
    headline: "Core JavaScript Ecosystem",
    description: "End-to-end web engineering with React, Node, Express, and MongoDB.",
    skills: [
      { name: "React.js", tag: "Frontend" },
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Backend Framework" },
      { name: "MongoDB / Mongoose", tag: "NoSQL DB" },
      { name: "RESTful APIs", tag: "Architecture" },
      { name: "Authentication / JWT", tag: "Security" },
    ],
  },
  {
    id: "frontend",
    name: "Front-End & UI/UX",
    icon: "layers",
    color: "violet",
    headline: "Pixel-Perfect Experiences",
    description: "Responsive layouts, intuitive component design, and modern CSS.",
    skills: [
      { name: "JavaScript (ES6+)", tag: "Language" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "HTML5 & Semantic Markup", tag: "Structure" },
      { name: "CSS3 / Flexbox & Grid", tag: "Layouts" },
      { name: "Responsive & Mobile-First", tag: "UX" },
      { name: "UI Animation & Motion", tag: "Interactivity" },
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing & SEO",
    icon: "megaphone",
    color: "cyan",
    headline: "Traffic, Visibility & Growth",
    description: "Data-driven strategies to boost online reach, engagement, and conversion.",
    skills: [
      { name: "Search Engine Optimization (SEO)", tag: "Search" },
      { name: "Keyword & Audience Research", tag: "Strategy" },
      { name: "Social Media Marketing", tag: "Outreach" },
      { name: "Content Strategy", tag: "Brand" },
      { name: "Web Analytics & Metrics", tag: "Data" },
      { name: "Conversion Optimization (CRO)", tag: "Growth" },
    ],
  },
  {
    id: "foundations",
    name: "CS & Databases",
    icon: "academic",
    color: "violet",
    headline: "University Grounding",
    description: "Computer science theory, algorithms, relational databases, and server basics.",
    skills: [
      { name: "Data Structures & Algorithms", tag: "Theory" },
      { name: "MySQL / Relational DB", tag: "SQL" },
      { name: "Object-Oriented Programming", tag: "Paradigm" },
      { name: "Software Design", tag: "Engineering" },
      { name: "PHP (Basics & CRUD)", tag: "Backend" },
      { name: "Computer Networking Basics", tag: "Systems" },
    ],
  },
];

const colorMap = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
};

const filterTabs = [
  { id: "all", name: "All Skills", icon: "spark" },
  ...skillCategories.map((cat) => ({ id: cat.id, name: cat.name, icon: cat.icon })),
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section-space relative">
      <div className="section-shell">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              Technical Arsenal
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Skills &amp;{" "}
              <span className="animated-gradient-text">Expertise</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            From full-stack JavaScript engineering to front-end craft and
            technical SEO — everything I use to ship and grow a platform.
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={80} className="mb-10 flex flex-wrap items-center gap-2">
          {filterTabs.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition ${
                activeCategory === cat.id
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              <Icon name={cat.icon} size={14} />
              <span>{cat.name}</span>
            </button>
          ))}
        </Reveal>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {displayedCategories.map((group, index) => (
            <Reveal
              key={group.id}
              delay={(index % 2) * 90}
              as="article"
              className="glow-card flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colorMap[group.color]}`}
                  >
                    <Icon name={group.icon} size={20} />
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {group.headline}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {group.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/50 px-3.5 py-2 text-xs transition hover:border-slate-700 hover:bg-slate-900/80"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="rounded-md bg-slate-800/80 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800/50 pt-4 text-[11px] text-slate-400">
                <span>Continuously practicing</span>
                <span className="flex items-center gap-1 font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
