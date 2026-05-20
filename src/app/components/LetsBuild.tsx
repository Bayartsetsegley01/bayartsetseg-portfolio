import { useState } from "react";
import { motion } from "motion/react";
import { t, Lang } from "../translations";

interface LetsBuildProps {
  darkMode: boolean;
  lang: Lang;
}

export function LetsBuild({ darkMode, lang }: LetsBuildProps) {
  const [copied, setCopied] = useState(false);
  const tr = t[lang].letsBuild;
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "bg-white/5 border-white/10 hover:bg-white/8" : "bg-black/3 border-black/8 hover:bg-black/5";

  return (
    <section id="contact" className={`py-24 px-6 md:px-16 lg:px-24 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className={`text-xs tracking-widest uppercase ${muted}`}>{tr.badge}</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
          className={`text-4xl md:text-6xl leading-tight mb-6 ${text}`} style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
          {tr.heading}
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-base leading-relaxed mb-12 ${muted}`}>
          {tr.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a href="mailto:bayartsetsegley@gmail.com" className={`flex items-center gap-3 p-4 rounded-xl border transition-colors text-left ${card}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${darkMode ? "bg-white/10" : "bg-black/6"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={text}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="min-w-0">
              <div className={`text-xs uppercase tracking-wider mb-0.5 ${muted}`}>{tr.emailLabel}</div>
              <div className={`text-sm truncate ${text}`}>bayartsetsegley@gmail.com</div>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`ml-auto shrink-0 ${muted}`}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>

          <a href="tel:+97694232022" className={`flex items-center gap-3 p-4 rounded-xl border transition-colors text-left ${card}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${darkMode ? "bg-white/10" : "bg-black/6"}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={text}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.58 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-1.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15l.19 1.92z"/></svg>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-wider mb-0.5 ${muted}`}>{tr.phoneLabel}</div>
              <div className={`text-sm ${text}`}>+976 9423-2022</div>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`ml-auto shrink-0 ${muted}`}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
          className={`flex items-center justify-center gap-5 pb-12 border-b ${border}`}>
          {[
            {
              label: "Facebook",
              href: "https://www.facebook.com/bayar.tsetsegley/",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/her.bayaraa/",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/bayartsetseg-ley-3bbb032bb/",
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
            },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                darkMode
                  ? "border-white/12 text-white/40 hover:border-white/40 hover:text-white hover:bg-white/8"
                  : "border-black/10 text-black/35 hover:border-black/30 hover:text-black hover:bg-black/4"
              }`}>
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="pt-8">
          <p className={`text-sm mb-2 ${muted}`}>{tr.footer1}</p>
          <p className={`text-xs leading-relaxed ${darkMode ? "text-white/25" : "text-black/25"}`}>{tr.footer2}</p>
        </motion.div>
      </div>
    </section>
  );
}
