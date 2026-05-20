import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import bayartsetsegImg from "../../imports/Bayartsetseg.png";
import photo1 from "../../imports/instc_2025-11-09_150528.610.JPG";
import photo2 from "../../imports/fxn_2025-08-15_143022.623.JPG";
import photo3 from "../../imports/IMG_3249.JPG";
import { t, Lang } from "../translations";

interface AboutShortProps {
  darkMode: boolean;
  lang: Lang;
}

const photos = [photo1, photo2, photo3];

const courses = [
  // Core fundamentals
  "Программчлалын үндэс",
  "Объект хандлагат программчлал",
  "Өгөгдлийн бүтэц ба алгоритм",
  "Үйлдлийн систем",
  "Өгөгдлийн сангийн систем",
  "Компьютерийн сүлжээ",
  // Web & software
  "Веб зохиомж",
  "Веб систем ба технологи",
  "Дэвшилтэт программчлал",
  "Системийн шинжилгээ ба зохиомж",
  "Мэдээллийн технологийн төсөл I",
  // Systems & infrastructure
  "Мэдээллийн технологийн дэд бүтэц",
  "Систем ба сүлжээний удирдлага",
  "Холбооны систем",
  "Мэдээллийн баталгаажуулалт, хамгаалалт",
  // Applied
  "Мобайл технологи",
  "Их өгөгдлийн аналитик",
  "Визуал программчлал",
  "Хүн ба компьютерийн харилцааны зохиомж",
  "Микроконтроллёрын хэрэгсэл",
  "Мультимедиа системүүд",
  "Төслийн менежмент",
];

export function AboutShort({ darkMode, lang }: AboutShortProps) {
  const [showCourses, setShowCourses] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const tr = t[lang].about;
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/55" : "text-black/50";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "bg-white/5 border-white/8" : "bg-black/2 border-black/6";

  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-16 lg:px-24 ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className={`text-3xl md:text-4xl mb-1 ${text}`} style={{ fontWeight: 700 }}>
            {tr.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column: profile + bio + education */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Profile header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                <img
                  src={bayartsetsegImg}
                  alt="Bayartsetseg"
                  className="w-full h-full object-cover object-top"
                  style={{ mixBlendMode: darkMode ? "screen" : "multiply" }}
                />
              </div>
              <div>
                <div className={`font-semibold text-lg ${text}`}>Bayartsetseg</div>
                <div className={`text-sm mt-0.5 ${muted}`}>{tr.role}</div>
                <div className={`text-sm flex items-center gap-1.5 mt-1 ${muted}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {tr.location}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className={`space-y-3 text-sm leading-relaxed mb-8 ${muted}`}>
              {tr.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Education card */}
            <div className={`p-5 rounded-xl border ${card}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center gap-2 text-xs tracking-widest uppercase ${muted}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  {tr.education.label}
                </div>
                <span className={`text-xs ${muted}`}>2022 — 2026</span>
              </div>
              <h3 className={`text-base font-semibold mb-1 ${text}`}>{tr.education.degree}</h3>
              <p className={`text-sm ${muted}`}>{tr.education.school}</p>
              <div className="flex items-center gap-4 mt-2 mb-3">
                <span className={`text-xs ${muted}`}>{tr.education.gpa} <span className={`font-semibold ${text}`}>3.5</span></span>
              </div>

              <button
                onClick={() => setShowCourses((v) => !v)}
                className={`flex items-center gap-1.5 text-xs transition-colors ${
                  darkMode ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black"
                }`}
              >
                <motion.svg
                  width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  animate={{ rotate: showCourses ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </motion.svg>
                {showCourses ? tr.education.hideCourses : tr.education.showCourses}
              </button>

              <AnimatePresence>
                {showCourses && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-3 pt-3 border-t grid grid-cols-1 gap-1.5 ${border}`}>
                      {courses.map((course, i) => (
                        <div key={i} className={`flex items-center gap-2 text-xs ${muted}`}>
                          <span className={`w-1 h-1 rounded-full shrink-0 ${darkMode ? "bg-white/25" : "bg-black/20"}`} />
                          {course}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right column: hover photos + currently */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Stacked photo deck */}
            <div className="flex flex-col items-center py-4 mt-10">
              <div
                className="relative cursor-pointer"
                style={{ width: 220, height: 300 }}
                onClick={() => setActivePhoto((p) => (p + 1) % photos.length)}
              >
                {photos.map((photo, i) => {
                  const layer = (i - activePhoto + photos.length) % photos.length;
                  const slotTransform = [
                    { rotate: 0, x: 0, y: 0, scale: 1, z: 30 },
                    { rotate: 5, x: 14, y: 8, scale: 0.96, z: 20 },
                    { rotate: -6, x: -12, y: 12, scale: 0.92, z: 10 },
                  ][layer];

                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{ zIndex: slotTransform.z }}
                      animate={{
                        rotate: slotTransform.rotate,
                        x: slotTransform.x,
                        y: slotTransform.y,
                        scale: slotTransform.scale,
                        boxShadow: layer === 0
                          ? "0 12px 40px rgba(0,0,0,0.25)"
                          : "0 4px 16px rgba(0,0,0,0.15)",
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    >
                      <img
                        src={photo}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setActivePhoto(i)}
                    onClick={() => setActivePhoto(i)}
                    className={`rounded-full transition-all duration-200 ${
                      activePhoto === i
                        ? `w-4 h-2 ${darkMode ? "bg-white" : "bg-black"}`
                        : `w-2 h-2 ${darkMode ? "bg-white/25" : "bg-black/20"}`
                    }`}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
