import { useEffect, useState } from "react";
import Icon from "./Icons.jsx";

const initialForm = { name: "", email: "", message: "" };
const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

const contactChannels = [
  {
    title: "Direct Email",
    value: "debuglife1221@gmail.com",
    href: "mailto:debuglife1221@gmail.com",
    icon: "mail",
    badge: "Fastest Response",
  },
  {
    title: "Phone / Telegram",
    value: "+251 903166512",
    href: "tel:+251903166512",
    icon: "phone",
    badge: "Direct Call",
  },
  {
    title: "GitHub Profile",
    value: "github.com/debug-life21",
    href: "https://github.com/debug-life21",
    icon: "github",
    badge: "Code Repositories",
  },
  {
    title: "LinkedIn Profile",
    value: "linkedin.com/in/wendmachew-tsegaye",
    href: "https://linkedin.com/in/wendmachew-tsegaye",
    icon: "linkedin",
    badge: "Professional Network",
  },
];

function getFieldError(name, value) {
  if (!value.trim()) return "This field is required.";
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Enter a valid email address.";
  }
  return "";
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) return undefined;

    const timeout = window.setTimeout(() => setNotice(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function getInputClass(name) {
    const invalid = touched[name] && getFieldError(name, form[name]);
    return `mt-2 w-full rounded-xl border bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:outline-none ${
      invalid
        ? "border-rose-400/60 ring-2 ring-rose-400/15 focus:border-rose-300"
        : "border-slate-800 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
    }`;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setNotice(null);
    setTouched({ name: true, email: true, message: true });

    if (
      Object.entries(form).some(([name, value]) => getFieldError(name, value))
    ) {
      setNotice({
        type: "error",
        message: "Please check the highlighted fields and try again.",
      });
      return;
    }

    setIsSending(true);
    try {
      const endpoint = `${API_BASE_URL}/api/users`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        // Response is not JSON
      }

      if (!response.ok) {
        throw new Error(
          result?.message || `Request failed with status ${response.status}`,
        );
      }

      setForm(initialForm);
      setTouched({});
      setNotice({
        type: "success",
        message: "Thanks for reaching out! Your message was sent successfully.",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setNotice({
        type: "error",
        message:
          error instanceof Error
            ? error.message === "Failed to fetch"
              ? "Cannot connect to server. If the backend was sleeping or waking up, please wait a moment and try again, or email me directly at debuglife1221@gmail.com."
              : error.message
            : "A network error occurred. Feel free to email me directly at debuglife1221@gmail.com.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-space relative">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              Get in Touch
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">Exceptional</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Have an opening, an interesting project, or want to collaborate on a MERN stack web app or digital marketing campaign? I&apos;d love to hear from you.
            </p>

            {/* Direct contact cards */}
            <div className="mt-8 space-y-3">
              {contactChannels.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-900/80 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-400">
                        {item.title}
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-cyan-200 transition">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-mono font-medium text-slate-400 group-hover:text-cyan-300">
                    {item.badge}
                  </span>
                </a>
              ))}
            </div>

            {/* Resume button shortcut */}
            <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-950/40 to-slate-950/40 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Need a PDF copy of my CV?</p>
                <p className="text-[11px] text-slate-400">Includes full project &amp; course details</p>
              </div>
              <a
                href="/Wendemu_Resume.pdf"
                download="Wendemachew_Tsegaye_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-3.5 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Icon name="download" size={14} />
                <span>Get CV</span>
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs font-medium text-slate-300">
                  Your name
                  <input
                    className={getInputClass("name")}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Wendmachew Tsegaye"
                    value={form.name}
                    onChange={updateField}
                    onBlur={() =>
                      setTouched((current) => ({ ...current, name: true }))
                    }
                    aria-invalid={Boolean(
                      touched.name && getFieldError("name", form.name),
                    )}
                    required
                    maxLength={100}
                  />
                  {touched.name && getFieldError("name", form.name) && (
                    <span className="mt-1.5 block text-xs text-rose-300">
                      {getFieldError("name", form.name)}
                    </span>
                  )}
                </label>
                <label className="block text-xs font-medium text-slate-300">
                  Email address
                  <input
                    className={getInputClass("email")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField}
                    onBlur={() =>
                      setTouched((current) => ({ ...current, email: true }))
                    }
                    aria-invalid={Boolean(
                      touched.email && getFieldError("email", form.email),
                    )}
                    required
                    maxLength={254}
                  />
                  {touched.email && getFieldError("email", form.email) && (
                    <span className="mt-1.5 block text-xs text-rose-300">
                      {getFieldError("email", form.email)}
                    </span>
                  )}
                </label>
              </div>
              <label className="mt-5 block text-xs font-medium text-slate-300">
                Your message
                <textarea
                  className={`${getInputClass("message")} min-h-36 resize-y`}
                  name="message"
                  placeholder="Tell me a little about what you have in mind..."
                  value={form.message}
                  onChange={updateField}
                  onBlur={() =>
                    setTouched((current) => ({ ...current, message: true }))
                  }
                  aria-invalid={Boolean(
                    touched.message && getFieldError("message", form.message),
                  )}
                  required
                  maxLength={5000}
                />
                {touched.message && getFieldError("message", form.message) && (
                  <span className="mt-1.5 block text-xs text-rose-300">
                    {getFieldError("message", form.message)}
                  </span>
                )}
              </label>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-5 text-slate-500">
                  Your details are only used to respond to your message.
                </p>
                <button
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-300 to-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:from-cyan-200 hover:to-white disabled:cursor-wait disabled:opacity-60"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send message"}
                  {!isSending && (
                    <Icon
                      name="arrow"
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {notice && (
        <div
          role={notice.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`toast-enter fixed bottom-6 right-6 z-50 flex max-w-[calc(100%-3rem)] items-center gap-3 rounded-2xl border px-5 py-4 text-sm shadow-2xl backdrop-blur-xl ${
            notice.type === "success"
              ? "border-emerald-300/20 bg-slate-900/95 text-emerald-100"
              : "border-rose-300/20 bg-slate-900/95 text-rose-100"
          }`}
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${notice.type === "success" ? "bg-emerald-300/10 text-emerald-300" : "bg-rose-300/10 text-rose-300"}`}
          >
            <Icon
              name={notice.type === "success" ? "check" : "spark"}
              size={16}
            />
          </span>
          {notice.message}
        </div>
      )}
    </section>
  );
}
