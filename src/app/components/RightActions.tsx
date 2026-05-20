import { motion } from "motion/react";

interface RightActionsProps {
  darkMode: boolean;
  toggleDark: () => void;
  showScrollTop: boolean;
}

export function RightActions({ darkMode, toggleDark, showScrollTop }: RightActionsProps) {
  const btn = `w-9 h-9 rounded-xl flex items-center justify-center transition-all border ${
    darkMode
      ? "bg-[#1a1a1a]/90 border-white/12 text-white/50 hover:text-white backdrop-blur-xl"
      : "bg-white/90 border-black/10 text-black/40 hover:text-black backdrop-blur-xl"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="fixed right-4 bottom-24 z-50 flex flex-col gap-2"
    >
      <button onClick={toggleDark} className={btn} aria-label="Toggle theme">
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


      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={btn}
          aria-label="Scroll to top"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
}
