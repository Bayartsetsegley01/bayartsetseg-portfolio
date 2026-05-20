import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    year: "2024",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and an intuitive admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBhcHAlMjBwcm9qZWN0JTIwVUklMjBkZXNpZ258ZW58MXx8fHwxNzc5Mjk0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Design",
    year: "2024",
    description: "A clean and accessible mobile banking application focusing on user experience and financial literacy.",
    tags: ["React Native", "Figma", "Node.js", "Redis"],
    image: "https://images.unsplash.com/photo-1767449356630-c60094b1d1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBhcHAlMjBwcm9qZWN0JTIwVUklMjBkZXNpZ258ZW58MXx8fHwxNzc5Mjk0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    year: "2023",
    description: "An analytics dashboard for a SaaS startup, featuring data visualization and real-time reporting tools.",
    tags: ["React", "D3.js", "Tailwind", "GraphQL"],
    image: "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBhcHAlMjBwcm9qZWN0JTIwVUklMjBkZXNpZ258ZW58MXx8fHwxNzc5Mjk0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    year: "2023",
    description: "A comprehensive brand identity system for a tech startup, including logo, typography, and design guidelines.",
    tags: ["Figma", "Illustrator", "Motion Design"],
    image: "https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBwcm9qZWN0JTIwVUklMjBkZXNpZ258ZW58MXx8fHwxNzc5Mjk0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
];

export function Projects({ darkMode }: ProjectsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className={`py-32 px-6 md:px-16 lg:px-24 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className={`text-xs tracking-widest uppercase ${darkMode ? "text-white/40" : "text-black/40"}`}>
            02 — Selected Work
          </span>
          <div className={`flex-1 h-px ${darkMode ? "bg-white/10" : "bg-black/10"}`} />
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative border-b transition-all duration-300 cursor-pointer ${
                darkMode ? "border-white/10 hover:border-white/20" : "border-black/10 hover:border-black/20"
              }`}
            >
              <div className="py-8 flex flex-col md:flex-row md:items-center gap-6">
                <div className={`text-sm w-12 shrink-0 ${darkMode ? "text-white/30" : "text-black/30"}`}>
                  0{i + 1}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                      darkMode ? "bg-white/10 text-white/60" : "bg-black/5 text-black/50"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed max-w-xl ${darkMode ? "text-white/50" : "text-black/50"}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs ${darkMode ? "text-white/30" : "text-black/30"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className={`text-sm ${darkMode ? "text-white/30" : "text-black/30"}`}>{project.year}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    hovered === project.id
                      ? darkMode ? "bg-white text-black border-white" : "bg-black text-white border-black"
                      : darkMode ? "border-white/20 text-white/40" : "border-black/20 text-black/40"
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover preview image */}
              <div
                className={`absolute right-24 top-1/2 -translate-y-1/2 w-48 h-32 rounded-lg overflow-hidden transition-all duration-500 pointer-events-none ${
                  hovered === project.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ zIndex: 10 }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
