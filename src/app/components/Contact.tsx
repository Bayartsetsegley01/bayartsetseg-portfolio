import { useState } from "react";
import { motion } from "motion/react";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const email = "hello@amartuvshin.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={`py-32 px-6 md:px-16 lg:px-24 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className={`text-xs tracking-widest uppercase ${darkMode ? "text-white/40" : "text-black/40"}`}>
            03 — Contact
          </span>
          <div className={`flex-1 h-px ${darkMode ? "bg-white/10" : "bg-black/10"}`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="text-4xl md:text-6xl leading-tight mb-8"
              style={{ fontFamily: "'Georgia', serif", fontWeight: 300 }}
            >
              Let's work
              <br />
              <span className={darkMode ? "text-white/40" : "text-black/40"}>together.</span>
            </h2>
            <p className={`text-base leading-relaxed max-w-md ${darkMode ? "text-white/50" : "text-black/50"}`}>
              Have a project in mind or want to chat about an opportunity?
              I'd love to hear from you. Drop me a message and I'll get back within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className={`text-xs tracking-widest uppercase mb-3 ${darkMode ? "text-white/30" : "text-black/30"}`}>
                Email
              </div>
              <button
                onClick={copyEmail}
                className={`group flex items-center gap-3 text-lg transition-all ${
                  darkMode ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                }`}
              >
                {email}
                <span className={`text-xs px-2 py-1 rounded-md transition-all ${
                  copied
                    ? "opacity-100 bg-green-500/20 text-green-400"
                    : darkMode
                    ? "opacity-0 group-hover:opacity-100 bg-white/10 text-white/50"
                    : "opacity-0 group-hover:opacity-100 bg-black/5 text-black/40"
                }`}>
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            <div className={`h-px ${darkMode ? "bg-white/10" : "bg-black/10"}`} />

            <div>
              <div className={`text-xs tracking-widest uppercase mb-4 ${darkMode ? "text-white/30" : "text-black/30"}`}>
                Social
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "GitHub", url: "https://github.com" },
                  { name: "LinkedIn", url: "https://linkedin.com" },
                  { name: "Twitter", url: "https://twitter.com" },
                  { name: "Dribbble", url: "https://dribbble.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      darkMode ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black"
                    }`}
                  >
                    {social.name}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-24 pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}
        >
          <span className={`text-xs ${darkMode ? "text-white/25" : "text-black/25"}`}>
            © 2024 Amartuvshin Tserenpuntsag. All rights reserved.
          </span>
          <span className={`text-xs ${darkMode ? "text-white/25" : "text-black/25"}`}>
            Designed & developed with care in Ulaanbaatar
          </span>
        </motion.div>
      </div>
    </section>
  );
}
