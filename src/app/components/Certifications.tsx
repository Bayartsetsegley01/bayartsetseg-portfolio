import { motion } from "motion/react";
import { t, Lang } from "../translations";
import tradeAnalysisImg from "../../imports/____________________________.png";

interface CertificationsProps {
  darkMode: boolean;
  lang: Lang;
}

const certMeta = [
  { tag: "UX/UI", color: "from-blue-500 to-cyan-400", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
  { tag: "PM", color: "from-green-500 to-emerald-400", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
  { tag: "Design", color: "from-pink-500 to-rose-400", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg> },
  { tag: "Data", color: "from-orange-500 to-yellow-400", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
  { tag: "Analytics", color: "from-purple-500 to-violet-400", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
];

export function Certifications({ darkMode, lang }: CertificationsProps) {
  const tr = t[lang].certs;
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "bg-white/4 border-white/8 hover:bg-white/7" : "bg-black/2 border-black/7 hover:bg-black/4";

  return (
    <section id="certifications" className={`py-20 px-6 md:px-16 lg:px-24 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className={`text-3xl md:text-4xl ${text}`} style={{ fontWeight: 700 }}>{tr.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tr.items.map((cert, i) => {
            const meta = certMeta[i];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`p-5 rounded-xl border transition-colors ${card}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white shrink-0`}>
                    {meta.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${darkMode ? "border-white/12 text-white/50" : "border-black/10 text-black/45"}`}>{meta.tag}</span>
                      <span className={`text-xs shrink-0 ${muted}`}>{cert.year}</span>
                    </div>
                    <h3 className={`text-sm font-semibold mb-1.5 leading-snug ${text}`}>{cert.title}</h3>
                    <p className={`text-xs leading-relaxed ${muted}`}>{cert.description}</p>
                    <div className={`mt-3 text-xs font-medium ${muted}`}>{cert.badge}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
