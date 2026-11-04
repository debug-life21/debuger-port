import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const tlhUrl = "https://tedbabelearnhub.vercel.app";

const qualities = [
  "Full-Stack MERN Developer",
  "Digital Marketing Specialist",
  "Co-Founder Mindset",
  "Product Thinker",
  "SEO & Growth Driven",
  "Self-Taught Learner",
  "Problem Solver",
  "Team Player",
];

const educationHighlights = [
  "Algorithms & Data Structures",
  "Database Management Systems",
  "Web Programming & Software Design",
  "Computer Networks & Security",
];

const pillars = [
  {
    icon: "code",
    accent: "cyan",
    title: "Engineering",
    text: "Shipping reliable full-stack JavaScript products end-to-end.",
  },
  {
    icon: "megaphone",
    accent: "violet",
    title: "Growth",
    text: "Turning products into audiences with SEO and digital marketing.",
  },
  {
    icon: "rocket",
    accent: "emerald",
    title: "Founding",
    text: "Co-building Tedbabe LearnHUB, an online learning platform.",
  },
];

const accentMap = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
};

export default function About() {
  return (
    <section id="about" className="section-space relative border-y border-white/[0.04] bg-slate-950/40">
      <div className="section-shell">
        <Reveal className="mb-14 max-w-3xl">
          <div className="eyebrow mb-3">
            <span className="eyebrow-dot" />
            Background &amp; Story
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineer, Marketer &amp;{" "}
            <span className="animated-gradient-text">Co-Founder</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            I combine rigorous university computer science education with
            self-directed mastery of modern JavaScript and digital growth
            marketing — and I&apos;m building a learning platform of my own.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Main Bio & Story */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal as="article" className="glass-panel rounded-3xl p-7 sm:p-8">
              <h3 className="flex items-center gap-3 font-heading text-2xl font-bold text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon name="user" size={20} />
                </span>
                About Me
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  I am{" "}
                  <strong className="font-semibold text-white">
                    Wendemachew Tsegaye
                  </strong>
                  , a 3rd-year Computer Science student at{" "}
                  <strong className="font-semibold text-cyan-200">
                    Debark University
                  </strong>{" "}
                  in Ethiopia. From my earliest days exploring technology, I fell
                  in love with creating tools that solve practical challenges.
                </p>
                <p>
                  As an{" "}
                  <strong className="font-semibold text-white">
                    online self-learner
                  </strong>
                  , I went beyond the lecture hall to master the full-stack
                  JavaScript ecosystem — the{" "}
                  <strong className="font-semibold text-cyan-300">
                    MERN stack (MongoDB, Express.js, React, Node.js)
                  </strong>{" "}
                  — researching documentation, reading codebases, and shipping
                  real, functional products.
                </p>
                <p>
                  As a{" "}
                  <strong className="font-semibold text-violet-300">
                    Digital Marketing Specialist
                  </strong>
                  , I position products, leverage search engine optimization
                  (SEO), craft compelling messaging, and use analytics to convert
                  traffic into engaged users.
                </p>
                <p>
                  Most recently, I co-founded{" "}
                  <a
                    href={tlhUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-emerald-300 underline decoration-emerald-400/40 decoration-2 underline-offset-4 transition hover:text-emerald-200"
                  >
                    Tedbabe LearnHUB (TLH)
                  </a>
                  , an online learning platform where I lead product
                  engineering, growth, and the technical vision behind the
                  platform.
                </p>
              </div>

              <div className="mt-7 border-t border-slate-800/80 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Core Qualities &amp; Mindset
                </p>
                <div className="flex flex-wrap gap-2">
                  {qualities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Three pillars */}
            <Reveal delay={80} className="grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glow-card rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accentMap[pillar.accent]}`}
                  >
                    <Icon name={pillar.icon} size={18} />
                  </span>
                  <h4 className="mt-4 font-heading text-sm font-bold text-white">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </Reveal>

            {/* Education Box */}
            <Reveal as="article" delay={140} className="glass-panel rounded-3xl p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                    <Icon name="academic" size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      B.Sc. in Computer Science
                    </h3>
                    <p className="text-sm font-medium text-cyan-200">
                      Debark University, Ethiopia • 3rd Year Undergrad
                    </p>
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full border border-cyan-400/20 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300">
                  In Progress
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Acquiring deep theoretical grounding in computational theory,
                software design principles, algorithms, and system architecture.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {educationHighlights.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-cyan-300">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: CV Spotlight & Founder Mindset */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={100} className="glow-card relative rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-cyan-950/40 p-7 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/15 text-cyan-300">
                  <Icon name="fileText" size={24} />
                </span>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
                  PDF Available
                </span>
              </div>

              <h4 className="mt-5 font-heading text-2xl font-bold text-white">
                Curriculum Vitae
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Get a complete overview of my education, MERN stack skills,
                certifications, venture work, and project experience.
              </p>

              <div className="mt-6 space-y-2.5 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Candidate:</span>
                  <span className="font-semibold text-slate-200">
                    Wendemachew Tsegaye
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Roles:</span>
                  <span className="font-semibold text-cyan-300">
                    MERN Dev • Marketer
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Venture:</span>
                  <span className="font-semibold text-emerald-300">
                    Co-Founder, TLH
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>File Format:</span>
                  <span className="font-mono text-cyan-300">
                    PDF • Ready to Print (A4)
                  </span>
                </div>
              </div>

              <a
                href="/Wendemu_Resume.pdf"
                download="Wendemachew_Tsegaye_Resume.pdf"
                className="shine group mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:from-cyan-300 hover:to-white hover:shadow-cyan-400/40"
              >
                <Icon
                  name="download"
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
                <span>Download Complete CV (PDF)</span>
              </a>
            </Reveal>

            {/* Founder Mindset Card */}
            <Reveal as="article" delay={160} className="glass-panel rounded-3xl p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Icon name="spark" size={20} />
                </span>
                <h4 className="font-heading text-xl font-bold text-white">
                  Builder&apos;s Philosophy
                </h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                &ldquo;True mastery in tech comes from curiosity, disciplined
                self-learning, and relentless building. Every day is a chance to
                learn a new pattern, optimize a query, or ship a feature that
                helps real learners.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-800/80 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 font-mono text-xs font-bold text-cyan-300">
                  WT
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Wendemachew Tsegaye
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Co-Founder, Tedbabe LearnHUB
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
