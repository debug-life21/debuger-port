import { useEffect, useRef, useState } from "react";
import Icon from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const profilePhoto = "/profile-pro.jpg";
const cvPdfPath = "/Wendemu_Resume.pdf";
const tlhUrl = "https://tedbabelearnhub.vercel.app";

const roles = [
  "Full-Stack JavaScript (MERN) Developer",
  "Digital Marketing Specialist",
  "Co-Founder @ Tedbabe LearnHUB",
];

const quickLinks = [
  { label: "Email", href: "mailto:debuglife1221@gmail.com", icon: "mail" },
  { label: "Call", href: "tel:+251903166512", icon: "phone" },
  { label: "GitHub", href: "https://github.com/debug-life21", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/wendmachew-tsegaye",
    icon: "linkedin",
  },
];

const stats = [
  { value: 12, suffix: "+", label: "Projects Shipped" },
  { value: 1, suffix: "", label: "Venture Co-Founded" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 6, suffix: "+", label: "Core Technologies" },
];

function useTypewriter(
  words,
  { typeSpeed = 65, deleteSpeed = 35, pause = 1500 } = {},
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const hold = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(hold);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
      return undefined;
    }

    const step = setTimeout(
      () => setSubIndex((value) => value + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(step);
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return words[index % words.length].slice(0, subIndex);
}

function Counter({ to, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frame;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * to));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const typedRole = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center py-16 sm:py-24"
    >
      {/* Ambient aurora lights */}
      <div className="aurora pointer-events-none absolute -left-28 top-12 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="aurora-delayed pointer-events-none absolute -right-16 bottom-16 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/5 blur-[140px]" />

      <div className="section-shell relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {/* Live Status Pill */}
            <Reveal className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-200">
                Open to Full-Stack, Product &amp; Growth Roles
              </span>
            </Reveal>

            {/* Headline */}
            <Reveal
              as="h1"
              delay={80}
              className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            >
              Hi, I&apos;m{" "}
              <span className="animated-gradient-text">Wendemachew</span>{" "}
              Tsegaye
            </Reveal>

            {/* Rotating roles (typewriter) */}
            <Reveal
              as="p"
              delay={160}
              className="mt-5 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
            >
              <span className="text-slate-300"> </span>
              <span className="animated-gradient-text">{typedRole}</span>
              <span className="cursor-blink ml-1 inline-block h-[1em] w-[3px] translate-y-[4px] rounded-full bg-cyan-300 align-middle" />
            </Reveal>

            {/* Bio paragraph */}
            <Reveal
              as="p"
              delay={220}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              I design and engineer production-grade web platforms with{" "}
              <span className="font-semibold text-white">
                MongoDB, Express.js, React &amp; Node.js
              </span>
              , turn them into growing products through{" "}
              <span className="font-semibold text-white">
                data-driven digital marketing
              </span>
              , and co-founded{" "}
              <span className="font-semibold text-emerald-300">
                Tedbabe LearnHUB
              </span>{" "}
              — an online learning platform making quality education accessible.
            </Reveal>

            {/* Primary Action Buttons */}
            <Reveal
              delay={280}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={tlhUrl}
                target="_blank"
                rel="noreferrer"
                className="shine group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-300 to-cyan-400 p-[1px] font-semibold shadow-[0_10px_30px_-10px_rgba(52,211,153,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-8px_rgba(52,211,153,0.7)]"
              >
                <span className="inline-flex h-full w-full items-center gap-2.5 rounded-[11px] bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                  <Icon
                    name="rocket"
                    size={17}
                    className="text-emerald-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span>Visit Tedbabe LearnHUB</span>
                  <Icon
                    name="externalLink"
                    size={14}
                    className="text-emerald-300"
                  />
                </span>
              </a>

              <a
                href="#projects"
                className="shine inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white"
              >
                <span>View Projects</span>
                <Icon name="arrow" size={16} />
              </a>

              <a
                href={cvPdfPath}
                download="Wendemachew_Tsegaye_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-300 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 hover:text-cyan-200"
              >
                <Icon name="download" size={16} />
                <span>Download CV</span>
              </a>
            </Reveal>

            {/* Quick Links */}
            <Reveal
              delay={340}
              className="mt-8 flex flex-wrap items-center gap-2.5"
            >
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              {quickLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-800 hover:text-cyan-200"
                >
                  <Icon name={icon} size={15} />
                  <span>{label}</span>
                </a>
              ))}
            </Reveal>

            {/* Animated stat counters */}
            <Reveal
              delay={400}
              className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-3.5 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-slate-900/50"
                >
                  <div className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    <Counter to={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Portrait & Floating Badges */}
          <Reveal
            delay={200}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-violet-500/20 to-emerald-400/20 blur-2xl" />

            <div className="glass-panel relative overflow-hidden rounded-3xl p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/80">
                {!photoFailed ? (
                  <img
                    src={profilePhoto}
                    alt="Portrait of Wendemachew Tsegaye"
                    className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-slate-900 p-6 text-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                      <Icon name="user" size={48} />
                    </div>
                    <p className="mt-4 font-heading text-lg font-bold text-white">
                      Wendemachew Tsegaye
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Full-Stack MERN Developer
                    </p>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                  <div>
                    <p className="font-heading text-base font-bold text-white">
                      Wendemachew Tsegaye
                    </p>
                    <p className="text-xs text-cyan-300">
                      Debark University • CS 3rd Year
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Floating chip: MERN */}
            <div className="animate-float absolute -right-2 -top-4 hidden items-center gap-2.5 rounded-2xl border border-cyan-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md sm:-right-4 sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Icon name="code" size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Stack
                </p>
                <p className="text-xs font-bold text-cyan-200">
                  Full-Stack MERN
                </p>
              </div>
            </div>

            {/* Floating chip: Digital Marketing */}
            <div className="animate-float-delayed absolute -left-2 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-violet-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md sm:-left-4 sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                <Icon name="megaphone" size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Expertise
                </p>
                <p className="text-xs font-bold text-violet-200">
                  Digital Marketing
                </p>
              </div>
            </div>

            {/* Floating chip: Co-Founder */}
            <div className="animate-float absolute -bottom-6 right-4 hidden items-center gap-2.5 rounded-2xl border border-emerald-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md md:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <Icon name="graduationCap" size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Role
                </p>
                <p className="text-xs font-bold text-emerald-200">
                  Co-Founder • TLH
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
