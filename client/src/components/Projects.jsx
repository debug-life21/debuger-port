import { useState } from "react";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const tlhUrl = "https://tedbabelearnhub.vercel.app";

const projects = [
  {
    name: "Tedbabe LearnHUB (TLH)",
    number: "01",
    category: "Venture",
    badge: "Co-Founded • Live",
    featured: true,
    description:
      "An online learning platform I co-founded to make quality education accessible. I lead the full-stack build, product direction, and growth — the platform is live in production and serving real learners.",
    tags: [
      "Online Learning Platform",
      "Co-Founder",
      "Full-Stack",
      "Product & UX",
      "SEO Growth",
      "Live on Vercel",
    ],
    highlights: [
      "Co-founded and shipped the platform end-to-end",
      "Full-stack architecture, APIs & data models",
      "Responsive, learner-first interface design",
      "SEO and digital marketing driving enrollment",
    ],
    href: tlhUrl,
    cta: "Visit Live Platform",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Smart Café Management System",
    number: "02",
    category: "Full-Stack",
    badge: "Featured Project",
    description:
      "A complete database-driven management platform built for cafe operations. Features interactive menu administration, order handling, customer management, and real-time inventory tracking.",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Admin Dashboard"],
    highlights: [
      "Role-based administrative control",
      "Dynamic order entry and menu catalog",
      "Relational MySQL database design",
    ],
    href: "https://debug-life21.github.io/My_Portfolio/dku_cafe/cafe/index.php",
    cta: "Live Preview",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Rasdejen Hotel Management System",
    number: "03",
    category: "Full-Stack",
    badge: "MERN Stack",
    description:
      "A full-stack hotel management system built to digitize hospitality operations — room reservations, guest records, check-in / check-out, live room availability, and billing from a single admin dashboard.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Room booking & reservation management",
      "Guest records with check-in / check-out flow",
      "Live room availability & billing dashboard",
    ],
    href: "https://github.com/debug-life21",
    cta: "View on GitHub",
    github: "https://github.com/debug-life21",
  },
];

const categories = ["All", "Venture", "Full-Stack"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="section-space relative border-y border-white/[0.04] bg-slate-950/40"
    >
      <div className="section-shell">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              Featured Projects
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected <span className="animated-gradient-text">Work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            A curation of venture, academic, and self-directed applications
            highlighting full-stack engineering, product thinking, and clean UI
            architecture.
          </p>
        </Reveal>

        {/* Filter buttons */}
        <Reveal delay={80} className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition ${
                filter === cat
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={(index % 2) * 100}
              as="article"
              className={`glow-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 sm:p-8 ${
                project.featured
                  ? "border border-emerald-400/30 bg-gradient-to-br from-emerald-950/40 via-slate-950/80 to-cyan-950/30 md:col-span-2"
                  : "border border-slate-800/80 bg-slate-950/70"
              }`}
            >
              {project.featured && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
              )}

              <div>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-mono text-sm font-bold ${
                      project.featured ? "text-emerald-300" : "text-cyan-300"
                    }`}
                  >
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold ${
                        project.featured
                          ? "border-emerald-400/30 bg-emerald-950/50 text-emerald-200"
                          : "border-cyan-400/20 bg-cyan-950/40 text-cyan-200"
                      }`}
                    >
                      {project.badge}
                    </span>
                    <span className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-0.5 text-[11px] text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3
                  className={`mt-5 font-heading text-2xl font-bold tracking-tight text-white transition ${
                    project.featured
                      ? "text-3xl group-hover:text-emerald-200 sm:text-4xl"
                      : "group-hover:text-cyan-200"
                  }`}
                >
                  {project.name}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed text-slate-300 ${
                    project.featured ? "max-w-3xl" : ""
                  }`}
                >
                  {project.description}
                </p>

                {/* Project highlights */}
                <ul
                  className={`mt-5 grid gap-2 border-t border-slate-800/60 pt-4 text-xs text-slate-400 ${
                    project.featured ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className={
                          project.featured
                            ? "text-emerald-300"
                            : "text-cyan-300"
                        }
                      >
                        <Icon name="check" size={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-slate-800/60 pt-5">
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`shine inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition ${
                      project.featured
                        ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400 hover:text-slate-950"
                        : "border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400 hover:text-slate-950"
                    }`}
                  >
                    <span>{project.cta}</span>
                    <Icon name="arrowUpRight" size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-white"
                  >
                    <Icon name="github" size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
