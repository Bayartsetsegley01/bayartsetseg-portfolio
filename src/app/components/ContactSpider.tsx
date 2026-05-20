import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ContactSpiderProps {
  darkMode: boolean;
}

const roles = [
  { label: "Software engineer", x: 52, y: 10 },
  { label: "Student", x: 72, y: 17 },
  { label: "Son", x: 44, y: 20 },
  { label: "Solopreneur", x: 66, y: 27 },
  { label: "Security engineer", x: 30, y: 30 },
];

const contacts = [
  {
    label: "Amartuvshins0404",
    icon: "github",
    href: "https://github.com/Amartuvshins0404",
    x: 18, y: 42,
  },
  {
    label: "amartuvshin.com",
    icon: "link",
    href: "https://amartuvshin.com",
    x: 72, y: 40,
  },
  {
    label: "amaraa2404",
    icon: "x",
    href: "https://twitter.com/amaraa2404",
    x: 18, y: 57,
  },
  {
    label: "info@amartuvshin.com",
    icon: "gmail",
    href: "mailto:info@amartuvshin.com",
    x: 68, y: 57,
  },
  {
    label: "amartovision",
    icon: "instagram",
    href: "https://instagram.com/amartovision",
    x: 20, y: 72,
  },
  {
    label: "amartuvshins",
    icon: "linkedin",
    href: "https://linkedin.com/in/amartuvshins",
    x: 70, y: 72,
  },
];

function IconBadge({ icon, darkMode }: { icon: string; darkMode: boolean }) {
  const bg = {
    github: "bg-gray-900",
    x: "bg-black",
    instagram: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    link: "bg-orange-500",
    gmail: "bg-red-500",
    linkedin: "bg-blue-600",
  }[icon] ?? "bg-gray-500";

  return (
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 ${bg}`}>
      {icon === "github" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )}
      {icon === "x" && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )}
      {icon === "instagram" && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )}
      {icon === "link" && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      )}
      {icon === "gmail" && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      )}
      {icon === "linkedin" && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )}
    </div>
  );
}

export function ContactSpider({ darkMode }: ContactSpiderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 700, h: 500 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setSize({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight,
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cx = size.w / 2;
  const cy = size.h / 2;

  const toXY = (px: number, py: number) => ({
    x: (px / 100) * size.w,
    y: (py / 100) * size.h,
  });

  const lineColor = darkMode ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.1)";

  return (
    <section
      id="contact"
      className={`py-20 border-t ${darkMode ? "border-white/10 bg-[#0f0f0f]" : "border-black/8 bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 text-xs tracking-widest uppercase ${darkMode ? "text-white/40" : "text-black/40"}`}
        >
          <div className={`w-6 h-px ${darkMode ? "bg-white/30" : "bg-black/25"}`} />
          Contact
        </motion.div>
      </div>

      {/* Spider diagram */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: "520px" }}
      >
        {/* SVG lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {contacts.map((c) => {
            const pt = toXY(c.x, c.y);
            return (
              <motion.line
                key={c.label}
                x1={cx} y1={cy}
                x2={pt.x} y2={pt.y}
                stroke={lineColor}
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Role labels */}
        {roles.map((role) => {
          const pt = toXY(role.x, role.y);
          return (
            <motion.div
              key={role.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`absolute text-sm flex items-center gap-1.5 ${darkMode ? "text-white/30" : "text-black/30"}`}
              style={{ left: pt.x, top: pt.y, transform: "translate(-50%, -50%)" }}
            >
              <span className={`w-2 h-2 rounded-full ${darkMode ? "bg-white/20" : "bg-black/15"}`} />
              {role.label}
            </motion.div>
          );
        })}

        {/* Center avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute"
          style={{ left: cx, top: cy, transform: "translate(-50%, -50%)", zIndex: 10 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
            AS
          </div>
        </motion.div>

        {/* Contact nodes */}
        {contacts.map((c, i) => {
          const pt = toXY(c.x, c.y);
          const isRight = c.x > 50;

          return (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className={`absolute flex items-center gap-2.5 group ${isRight ? "flex-row" : "flex-row-reverse"}`}
              style={{
                left: pt.x,
                top: pt.y,
                transform: `translate(${isRight ? "-10%" : "-90%"}, -50%)`,
                zIndex: 5,
              }}
            >
              <IconBadge icon={c.icon} darkMode={darkMode} />
              <span className={`text-sm transition-colors ${darkMode ? "text-white/60 group-hover:text-white" : "text-black/55 group-hover:text-black"}`}>
                {c.label}
              </span>
              <span className={`w-2.5 h-2.5 rounded-full border-2 ${darkMode ? "border-white/25 bg-[#0f0f0f]" : "border-black/20 bg-white"}`} />
            </motion.a>
          );
        })}
      </div>

      {/* Footer */}
      <div className={`max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${darkMode ? "border-white/10 text-white/25" : "border-black/8 text-black/30"}`}>
        <span className="text-xs">© 2025 Amartuvshin Surenjav</span>
        <span className="text-xs">Designed & developed in Ulaanbaatar, Mongolia</span>
      </div>
    </section>
  );
}
