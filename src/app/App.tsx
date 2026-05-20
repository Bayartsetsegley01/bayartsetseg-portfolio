import { useState, useEffect, useCallback } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AboutShort } from "./components/AboutShort";
import { SoftSkills } from "./components/SoftSkills";
import { TechStack } from "./components/TechStack";
import { WorkExperience } from "./components/WorkExperience";
import { Certifications } from "./components/Certifications";
import { RecentProjects } from "./components/RecentProjects";
import { LetsBuild } from "./components/LetsBuild";
import { BottomDock } from "./components/BottomDock";
import { RightActions } from "./components/RightActions";
import { Lang } from "./translations";

const SECTIONS = ["hero", "about", "skills", "experience", "certifications", "projects", "contact"];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<Lang>("mn");
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" }}>
      <Nav
        darkMode={darkMode}
        toggleDark={() => setDarkMode((d) => !d)}
        activeSection={activeSection}
        scrollTo={scrollTo}
        lang={lang}
        toggleLang={() => setLang((l) => l === "mn" ? "en" : "mn")}
      />

      <main className="pb-24">
        <Hero darkMode={darkMode} scrollTo={scrollTo} lang={lang} />
        <AboutShort darkMode={darkMode} lang={lang} />
        <SoftSkills darkMode={darkMode} lang={lang} />
        <TechStack darkMode={darkMode} lang={lang} />
        <WorkExperience darkMode={darkMode} lang={lang} />
        <Certifications darkMode={darkMode} lang={lang} />
        <RecentProjects darkMode={darkMode} lang={lang} />
        <LetsBuild darkMode={darkMode} lang={lang} />
      </main>

      <BottomDock darkMode={darkMode} activeSection={activeSection} scrollTo={scrollTo} />
      <RightActions darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} showScrollTop={showScrollTop} />
    </div>
  );
}
