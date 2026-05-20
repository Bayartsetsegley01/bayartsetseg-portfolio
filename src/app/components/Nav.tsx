import { motion } from "motion/react";
import bayartsetsegImg from "../../imports/Bayartsetseg.png";
import { t, Lang } from "../translations";

interface NavProps {
  darkMode: boolean;
  toggleDark: () => void;
  activeSection: string;
  scrollTo: (id: string) => void;
  lang: Lang;
  toggleLang: () => void;
}

export function Nav({ darkMode, toggleDark, activeSection, scrollTo, lang, toggleLang }: NavProps) {
  const tr = t[lang];
  const sectionIds = ["hero", "about", "skills", "experience", "certifications", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between border-b ${
        darkMode
          ? "bg-[#0f0f0f] border-white/10 text-white"
          : "bg-white border-black/8 text-black"
      }`}
    >
      {/* Left: Profile + Name */}
      <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-violet-100 to-purple-100">
          <img
            src={bayartsetsegImg}
            alt="Bayartsetseg"
            className="w-full h-full object-cover object-top"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="text-left hidden sm:block">
          <div className={`text-sm font-medium leading-tight ${darkMode ? "text-white" : "text-black"}`}>
            Bayartsetseg
          </div>
          <div className={`text-xs leading-tight ${darkMode ? "text-white/50" : "text-black/45"}`}>
            {tr.nav.role}
          </div>
        </div>
      </button>

      {/* Right: Nav links + toggles */}
      <div className="flex items-center gap-1 lg:gap-2">
        {tr.nav.links.map((link, i) => {
          const id = sectionIds[i];
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`hidden lg:block px-3 py-1.5 rounded-md text-sm transition-colors ${
                activeSection === id
                  ? darkMode ? "bg-white/10 text-white" : "bg-black/8 text-black"
                  : darkMode ? "text-white/55 hover:text-white hover:bg-white/5" : "text-black/50 hover:text-black hover:bg-black/5"
              }`}
            >
              {link}
            </button>
          );
        })}

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className={`ml-1 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
            darkMode
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-black/5 hover:bg-black/10 text-black"
          }`}
          aria-label="Toggle language"
        >
          {lang === "mn" ? "EN" : "МН"}
        </button>

        {/* Dark/light toggle */}
        <button
          onClick={toggleDark}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/5 hover:bg-black/10 text-black"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="4.5" />
              <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
