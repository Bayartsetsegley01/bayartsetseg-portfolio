import { motion } from "motion/react";

interface BottomDockProps {
  darkMode: boolean;
  activeSection: string;
  scrollTo: (id: string) => void;
}

const dockItems = [
  { id: "hero", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { id: "about", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg> },
  { id: "skills", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { id: "experience", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { id: "certifications", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { id: "projects", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { id: "contact", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
];

export function BottomDock({ darkMode, activeSection, scrollTo }: BottomDockProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className={`flex items-center gap-0.5 px-2 py-2 rounded-2xl border shadow-lg backdrop-blur-xl ${
        darkMode ? "bg-[#1a1a1a]/90 border-white/12 shadow-black/40" : "bg-white/90 border-black/10 shadow-black/10"
      }`}>
        {dockItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? darkMode ? "bg-white/15 text-white" : "bg-black/10 text-black"
                  : darkMode ? "text-white/40 hover:text-white hover:bg-white/8" : "text-black/35 hover:text-black hover:bg-black/5"
              }`}
            >
              {item.icon}
              {isActive && (
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${darkMode ? "bg-white" : "bg-black"}`} />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
