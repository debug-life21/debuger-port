import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const tlhUrl = "https://tedbabelearnhub.vercel.app";

const roles = [
  "Co-Founder",
  "Product Engineering",
  "Full-Stack Development",
  "Growth & SEO",
  "UX & Learning Design",
];

const features = [
  {
    icon: "monitor",
    title: "Online Learning Platform",
    text: "A web platform where learners discover and study structured courses from anywhere.",
  },
  {
    icon: "book",
    title: "Structured Curriculum",
    text: "Organized lessons and learning paths that make progress clear and achievable.",
  },
  {
    icon: "users",
    title: "Learner-First Community",
    text: "Built to make quality education accessible to students across Ethiopia and beyond.",
  },
  {
    icon: "megaphone",
    title: "Growth Engine",
    text: "SEO, content and digital marketing driving visibility and enrollment.",
  },
];

const contributions = [
  "Architected the platform's full-stack architecture",
  "Built responsive, accessible interfaces in React & Tailwind CSS",
  "Designed backend APIs, data models & authentication",
  "Owned SEO, content strategy and acquisition growth",
];

const previewCourses = [
  { title: "Full-Stack JavaScript", progress: 82, accent: "from-cyan-400 to-sky-400" },
  { title: "Digital Marketing", progress: 64, accent: "from-violet-400 to-fuchsia-400" },
  { title: "Computer Science Fundamentals", progress: 45, accent: "from-emerald-400 to-teal-400" },
];

export default function Venture() {
  return (
    <section id="venture" className="section-space relative">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <div>
            <Reveal>
              <div className="eyebrow eyebrow-emerald mb-4">
                <span className="eyebrow-dot" />
                Venture Spotlight
              </div>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Co-Founder of{" "}
                <span className="animated-gradient-text">Tedbabe LearnHUB</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                I co-founded{" "}
                <strong className="font-semibold text-emerald-300">
                  Tedbabe LearnHUB (TLH)
                </strong>
                , an online learning platform built to make quality education
                accessible. As co-founder, I blend full-stack engineering with
                digital marketing to ship the product and grow its audience.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-6 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200"
                >
                  {role}
                </span>
              ))}
            </Reveal>

            <Reveal delay={140} as="ul" className="mt-7 space-y-3">
              {contributions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Icon name="check" size={13} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </Reveal>

            <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={tlhUrl}
                target="_blank"
                rel="noreferrer"
                className="shine group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:from-emerald-300 hover:to-cyan-300"
              >
                <Icon name="externalLink" size={16} />
                <span>Visit Live Platform</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-white"
              >
                <span>See in Projects</span>
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          </div>

          {/* Product preview mockup */}
          <Reveal delay={120} className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-violet-500/20 blur-2xl" />

            <div className="glass-panel relative overflow-hidden rounded-3xl p-3 sm:p-4">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3.5 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <div className="ml-2 flex flex-1 items-center gap-2 truncate rounded-lg bg-slate-900/90 px-3 py-1.5">
                  <Icon name="shield" size={12} className="shrink-0 text-emerald-400" />
                  <span className="truncate font-mono text-[11px] text-slate-400">
                    tedbabelearnhub.vercel.app
                  </span>
                </div>
              </div>

              {/* App body */}
              <div className="mt-3 rounded-2xl border border-slate-800/60 bg-slate-950/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-cyan-400/20 text-emerald-300">
                      <Icon name="graduationCap" size={18} />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-white">
                        Tedbabe LearnHUB
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Online Learning Platform
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/70 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Live
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {previewCourses.map((course, index) => (
                    <div
                      key={course.title}
                      className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">
                          {course.title}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-300">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${course.accent}`}
                          style={{
                            width: `${course.progress}%`,
                            transitionDelay: `${index * 120}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {[
                    { icon: "play", label: "Lessons" },
                    { icon: "barChart", label: "Progress" },
                    { icon: "award", label: "Certificates" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-800/70 bg-slate-900/40 py-3"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                        <Icon name={item.icon} size={15} />
                      </span>
                      <span className="text-[10px] font-medium text-slate-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-float absolute -right-3 -top-4 hidden items-center gap-2 rounded-2xl border border-emerald-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md sm:flex">
              <Icon name="rocket" size={16} className="text-emerald-300" />
              <span className="text-xs font-bold text-emerald-200">Co-Founded</span>
            </div>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 80}
              as="article"
              className="glow-card rounded-2xl border border-slate-800/80 bg-slate-950/60 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <Icon name={feature.icon} size={20} />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {feature.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
