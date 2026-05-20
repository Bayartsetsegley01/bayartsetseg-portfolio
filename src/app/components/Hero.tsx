import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import bayartsetsegImg from "../../imports/Bayartsetseg.png";
import { t, Lang } from "../translations";

interface HeroProps {
  darkMode: boolean;
  scrollTo: (id: string) => void;
  lang: Lang;
}

export function Hero({ darkMode, scrollTo, lang }: HeroProps) {
  const tr = t[lang].hero;
  const [roleIdx, setRoleIdx] = useState(0);
  const muted = darkMode ? "text-white/60" : "text-[#44475a]";
  const text = darkMode ? "text-white" : "text-[#1a1a2e]";

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % tr.roles.length), 2200);
    return () => clearInterval(id);
  }, [tr.roles.length]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-10 relative overflow-hidden"
      style={{
        background: darkMode
          ? "radial-gradient(ellipse at 50% 40%, #1e1b4b 0%, #0f0f0f 65%)"
          : "radial-gradient(ellipse at 50% 40%, #e8e4ff 0%, #f3f0ff 35%, #ffffff 70%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full flex flex-col items-center"
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-2"
        >
          <img
            src={bayartsetsegImg}
            alt="Bayartsetseg"
            className="w-48 h-60 md:w-56 md:h-72 object-cover object-top"
            style={{ mixBlendMode: darkMode ? "screen" : "multiply", borderRadius: "1rem" }}
          />
        </motion.div>

        {/* Heading */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl leading-tight mb-3 ${text}`}
          style={{ fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          {tr.heading}
        </h1>

        {/* Animated role */}
        <div className="h-9 mb-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className={`text-lg md:text-xl font-semibold ${text}`}
            >
              {tr.roles[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 ${muted}`}
        >
          {tr.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo("projects")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              darkMode ? "bg-white text-black hover:bg-white/90" : "bg-[#1a1a2e] text-white hover:bg-black"
            }`}
          >
            {tr.viewProjects}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all ${
              darkMode
                ? "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                : "border-black/20 text-black/70 hover:border-black/50 hover:text-black"
            }`}
          >
            {tr.getInTouch}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`flex flex-wrap items-center justify-center gap-10 pt-8 border-t w-full ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}
        >
          {[
            { value: "3+", label: tr.stats.projects },
            { value: "100%", label: tr.stats.growth },
            { value: "4+", label: tr.stats.certs },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-xl font-semibold ${text}`}>{stat.value}</div>
              <div className={`text-xs mt-0.5 ${muted}`}>{stat.label}</div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            {[
              { icon: "github", href: "https://github.com" },
              { icon: "linkedin", href: "https://linkedin.com" },
              { icon: "twitter", href: "https://twitter.com" },
              { icon: "instagram", href: "https://instagram.com" },
            ].map(({ icon, href }) => (
              <a key={icon} href={href} target="_blank" rel="noopener noreferrer"
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                  darkMode ? "text-white/40 hover:text-white hover:bg-white/10" : "text-black/35 hover:text-black hover:bg-black/6"
                }`}
              >
                {icon === "github" && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>}
                {icon === "linkedin" && <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                {icon === "twitter" && <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                {icon === "instagram" && <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
