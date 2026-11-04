import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const services = [
  {
    number: "01",
    title: "Full-Stack MERN Development",
    category: "Web Engineering",
    description:
      "Architecting and shipping end-to-end web applications using MongoDB, Express.js, React, and Node.js with secure RESTful APIs and modern state management.",
    icon: "code",
    accent: "cyan",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    number: "02",
    title: "Modern Front-End Engineering",
    category: "User Experience",
    description:
      "Crafting responsive, high-performance, accessible interfaces with clean component architecture, Tailwind CSS, and polished micro-interactions.",
    icon: "layers",
    accent: "violet",
    skills: ["React 19", "Tailwind CSS", "JavaScript (ES6+)", "Responsive UI", "Motion & Animation"],
  },
  {
    number: "03",
    title: "Digital Marketing & SEO Growth",
    category: "Audience & Reach",
    description:
      "Boosting organic visibility and driving traffic through technical SEO, content strategy, social media marketing, and data-backed campaigns.",
    icon: "megaphone",
    accent: "cyan",
    skills: ["Technical SEO", "Content Strategy", "Social Media", "Keyword Research", "Analytics"],
  },
  {
    number: "04",
    title: "Analytics & Conversion Optimization",
    category: "Growth Data",
    description:
      "Measuring what matters — funnels, engagement metrics, and A/B-informed decisions that turn traffic into sign-ups, learners, and customers.",
    icon: "barChart",
    accent: "emerald",
    skills: ["Web Analytics", "Funnel Tracking", "CRO", "A/B Testing", "Reporting"],
  },
];

const accentMap = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
};

export default function Approach() {
  return (
    <section id="services" className="section-space relative">
      <div className="section-shell">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              What I Do
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized{" "}
              <span className="animated-gradient-text">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Bridging full-stack engineering, product building, and strategic
            digital marketing to create products that work seamlessly — and get
            discovered.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={(index % 2) * 90}
              as="article"
              className="glow-card group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accentMap[service.accent]}`}
                  >
                    <Icon name={service.icon} size={22} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                      {service.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-white transition group-hover:text-cyan-200">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/60 pt-5">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition group-hover:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
