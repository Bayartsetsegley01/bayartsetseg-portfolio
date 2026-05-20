import { useRef, useState } from "react";
import { motion } from "motion/react";
import { t, Lang } from "../translations";

interface SoftSkillsProps {
  darkMode: boolean;
  lang: Lang;
}

export function SoftSkills({ darkMode, lang }: SoftSkillsProps) {
  const tr = t[lang].softSkills;
  const items = [...tr.items, ...tr.items]; // duplicate for infinite loop
  const [paused, setPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const pill = darkMode
    ? "bg-white/6 border-white/10 text-white/70 hover:bg-white/12 hover:text-white"
    : "bg-black/3 border-black/8 text-black/60 hover:bg-black/7 hover:text-black";

  return (
    <section id="skills" className={`py-16 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"} overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 text-xs tracking-widest uppercase ${muted}`}
        >
          <div className={`w-6 h-px ${darkMode ? "bg-white/30" : "bg-black/25"}`} />
          {tr.label}
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onMouseDown={(e) => setDragStart(e.clientX)}
        onMouseMove={(e) => {
          if (dragStart !== null && containerRef.current) {
            containerRef.current.scrollLeft += dragStart - e.clientX;
            setDragStart(e.clientX);
          }
        }}
        onMouseUp={() => setDragStart(null)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-3 w-max"
          animate={paused ? { x: undefined } : { x: [0, -50 * tr.items.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: tr.items.length * 2.5,
              ease: "linear",
            },
          }}
          style={paused ? { animationPlayState: "paused" } : {}}
        >
          {items.map((skill, i) => (
            <span
              key={i}
              className={`shrink-0 px-4 py-2 rounded-full border text-sm transition-colors select-none ${pill}`}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className={`absolute inset-y-0 left-0 w-16 pointer-events-none ${
          darkMode
            ? "bg-gradient-to-r from-[#0f0f0f] to-transparent"
            : "bg-gradient-to-r from-white to-transparent"
        }`} />
        <div className={`absolute inset-y-0 right-0 w-16 pointer-events-none ${
          darkMode
            ? "bg-gradient-to-l from-[#0f0f0f] to-transparent"
            : "bg-gradient-to-l from-white to-transparent"
        }`} />
      </div>
    </section>
  );
}
