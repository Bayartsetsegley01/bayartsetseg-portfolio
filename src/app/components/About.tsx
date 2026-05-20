import { motion } from "motion/react";

interface AboutProps {
  darkMode: boolean;
}

const skills = [
  { category: "Development", items: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"] },
  { category: "Design", items: ["Figma", "UI/UX", "Design Systems", "Prototyping", "Motion Design"] },
  { category: "Other", items: ["Git", "AWS", "Docker", "CI/CD", "Agile", "Technical Writing"] },
];

export function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className={`py-32 px-6 md:px-16 lg:px-24 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className={`text-xs tracking-widest uppercase ${darkMode ? "text-white/40" : "text-black/40"}`}>
            01 — About
          </span>
          <div className={`flex-1 h-px ${darkMode ? "bg-white/10" : "bg-black/10"}`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={`text-lg md:text-xl leading-relaxed mb-6 ${darkMode ? "text-white/80" : "text-black/80"}`}>
              I'm a full-stack developer and designer based in Ulaanbaatar, Mongolia.
              I build products that live at the intersection of great design and solid engineering.
            </p>
            <p className={`text-base leading-relaxed mb-6 ${darkMode ? "text-white/50" : "text-black/50"}`}>
              With over 5 years of experience, I've worked with startups and established companies
              to create digital products that are both beautiful and functional. I believe that
              the best experiences come from deeply understanding users and their needs.
            </p>
            <p className={`text-base leading-relaxed ${darkMode ? "text-white/50" : "text-black/50"}`}>
              When I'm not coding or designing, you'll find me exploring the mountains of Mongolia,
              reading about philosophy, or contributing to open source projects.
            </p>

            <div className={`mt-10 pt-10 border-t ${darkMode ? "border-white/10" : "border-black/10"}`}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Experience", value: "5+ Years" },
                  { label: "Projects", value: "40+" },
                  { label: "Clients", value: "20+" },
                  { label: "Location", value: "Ulaanbaatar" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className={`text-2xl mb-1 ${darkMode ? "text-white" : "text-black"}`}>{stat.value}</div>
                    <div className={`text-xs tracking-wider uppercase ${darkMode ? "text-white/30" : "text-black/30"}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <div className={`text-xs tracking-widest uppercase mb-4 ${darkMode ? "text-white/30" : "text-black/30"}`}>
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                          darkMode
                            ? "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                            : "border-black/10 text-black/60 hover:border-black/30 hover:text-black"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-10 p-6 rounded-2xl ${darkMode ? "bg-white/5" : "bg-black/3"}`}>
              <div className={`text-xs tracking-widest uppercase mb-3 ${darkMode ? "text-white/30" : "text-black/30"}`}>
                Currently
              </div>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-white/60" : "text-black/60"}`}>
                Open to full-time positions and exciting freelance projects.
                Particularly interested in early-stage startups and innovative product teams.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-xs ${darkMode ? "text-white/40" : "text-black/40"}`}>Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
