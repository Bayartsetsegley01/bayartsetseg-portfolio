import { motion } from "motion/react";
import { t, Lang } from "../translations";

interface WorkExperienceProps {
  darkMode: boolean;
  lang: Lang;
}

const companyColors = [
  "from-blue-500 to-indigo-500",
  "from-violet-500 to-purple-500",
  "from-pink-500 to-rose-500",
  "from-orange-400 to-amber-400",
  "from-emerald-500 to-teal-400",
  "from-cyan-500 to-sky-400",
];

const companyIcons = [
  // Bimex Holding — building
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  // E-commerce — shopping bag
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  // Women Techmakers — people/community
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Erxes & Youthinc — star/growth
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // Хаан Банк — bank columns
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
  // Хас Банк — shield/security
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

export function WorkExperience({ darkMode, lang }: WorkExperienceProps) {
  const tr = t[lang].workExp;
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "bg-white/4 border-white/8" : "bg-black/2 border-black/7";

  return (
    <section id="experience" className={`py-20 px-6 md:px-16 lg:px-24 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
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

        <div className="space-y-4">
          {tr.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 rounded-xl border ${card}`}
            >
              <div className="flex items-start gap-4">
                {/* Color dot */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${companyColors[i % companyColors.length]} shrink-0 flex items-center justify-center text-white mt-0.5`}>
                  {companyIcons[i]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <span className={`font-semibold text-base ${text}`}>{item.title}</span>
                      <span className={`mx-2 ${muted}`}>·</span>
                      <span className={`text-sm ${muted}`}>{item.company}</span>
                    </div>
                    <span className={`text-xs shrink-0 px-2.5 py-1 rounded-full border ${
                      darkMode ? "border-white/12 text-white/45" : "border-black/10 text-black/40"
                    }`}>
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-sm leading-relaxed ${muted}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${darkMode ? "bg-white/25" : "bg-black/20"}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
