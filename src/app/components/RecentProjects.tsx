import { useState } from "react";
import { motion } from "motion/react";
import { t, Lang } from "../translations";
import tradeAIImg from "../../imports/AI_____________.png";
import tradeAnalysisImg from "../../imports/____________________________.png";
import tradeJournalImg from "../../imports/_____________________________.png";
import tradeWeeklyImg from "../../imports/________________________.png";

interface RecentProjectsProps {
  darkMode: boolean;
  lang: Lang;
}

function TradeJournalPreview({ darkMode }: { darkMode: boolean }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Анализ", "Тэмдэглэл", "AI Зөвлөх", "Дүгнэлт"];
  const images = [tradeAnalysisImg, tradeJournalImg, tradeAIImg, tradeWeeklyImg];

  return (
    <div className={`w-full h-full flex flex-col ${darkMode ? "bg-[#0f0f0f]" : "bg-[#f9fafb]"}`}>
      <div className={`flex gap-1 px-3 pt-2 border-b ${darkMode ? "border-white/10" : "border-black/8"}`}>
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`px-2.5 py-1 text-[10px] rounded-t transition-colors ${
              tab === i
                ? darkMode ? "bg-white/10 text-white" : "bg-white text-black border border-b-white border-black/10"
                : darkMode ? "text-white/40 hover:text-white/70" : "text-black/35 hover:text-black/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          src={images[tab]}
          alt={tabs[tab]}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function PortfolioPreview({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`w-full h-full flex flex-col ${darkMode ? "bg-[#0f0f0f]" : "bg-white"} overflow-hidden`}>
      <div className={`flex items-center justify-between px-4 py-2 border-b ${darkMode ? "border-white/10" : "border-black/8"}`}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-pink-500" />
          <div className={`text-[10px] ${darkMode ? "text-white/50" : "text-black/40"}`}>Bayartsetseg</div>
        </div>
        <div className="flex gap-2">{["Home", "Projects", "Contact"].map(l => <div key={l} className={`text-[8px] ${darkMode ? "text-white/30" : "text-black/25"}`}>{l}</div>)}</div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className={`text-base font-bold leading-tight mb-2 ${darkMode ? "text-white" : "text-black"}`}>
          Hi, I'm Bayartsetseg
        </div>
        <div className={`text-xs ${darkMode ? "text-white/40" : "text-black/35"}`}>Software Developer · UX/UI Designer</div>
      </div>
    </div>
  );
}

function TwinMarketPreview({ darkMode }: { darkMode: boolean }) {
  const products = ["🧻", "🍎", "🍵", "🍵", "🍌", "🐟"];
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden text-[9px]">
      {/* Top bar */}
      <div className="bg-[#0a1628] text-white/70 flex justify-between px-3 py-1 text-[8px]">
        <span>📍 Улаанбаатар хот · Хүргэлт: Өнөөдөр</span>
        <span>☎ +976 7777-8888</span>
      </div>
      {/* Nav */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-black/8">
        <div className="bg-[#0a1628] text-white font-bold text-[8px] px-1.5 py-0.5 rounded">Twin</div>
        <div className="text-[7px] text-[#0a9]">MARKET<br/><span className="text-black/30">Хүнс & Ахуй</span></div>
        <div className="flex-1 bg-gray-100 rounded text-[7px] px-2 py-0.5 text-black/30">Бүтээгдэхүүн хайх...</div>
        <span className="text-black/40">🛒</span>
      </div>
      {/* Category nav */}
      <div className="flex gap-2 px-3 py-1 border-b border-black/8 overflow-hidden">
        {["Бүх бүтээгдэхүүн", "Хоол хүнс", "Ундаа", "Хүүхдийн", "Цай & Кофе"].map(c => (
          <span key={c} className="text-[7px] text-black/50 whitespace-nowrap">{c}</span>
        ))}
      </div>
      {/* Hero */}
      <div className="mx-2 mt-1.5 rounded-lg bg-[#0a1628] p-3 flex justify-between items-center">
        <div>
          <div className="text-white font-bold text-[10px] leading-tight">Шинэ ногоо,<br/>жимс хямдарлаа</div>
          <div className="mt-1.5 bg-[#0aaa88] text-white text-[7px] px-2 py-0.5 rounded-full inline-block">Дэлгэрэнгүй →</div>
        </div>
        <div className="text-2xl">🥦</div>
      </div>
      {/* Badges */}
      <div className="flex gap-1 px-2 mt-1.5">
        {["🚚 Өнөөдөр", "✅ Чанар", "💰 Хямдрал", "⏰ 7/7"].map(b => (
          <div key={b} className="flex-1 bg-gray-50 border border-black/6 rounded text-[6px] text-center py-0.5 text-black/50">{b}</div>
        ))}
      </div>
      {/* Products */}
      <div className="px-2 mt-1.5">
        <div className="text-[8px] font-semibold text-black/70 mb-1">Хямдралтай бүтээгдэхүүн</div>
        <div className="grid grid-cols-3 gap-1">
          {products.map((p, i) => (
            <div key={i} className="bg-gray-50 border border-black/6 rounded p-1 text-center">
              <div className="text-base">{p}</div>
              <div className="text-[6px] text-[#0aaa88] font-bold">-{[20,50,15,20,15,15][i]}%</div>
              <div className="text-[6px] font-bold text-black/70">{["13,500₮","1,550₮","1,295₮","1,925₮","2,590₮","4,378₮"][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  { id: 1, preview: "trade" },
  { id: 2, preview: "portfolio" },
  { id: 3, preview: "twinmarket" },
];

export function RecentProjects({ darkMode, lang }: RecentProjectsProps) {
  const tr = t[lang].projects;
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "bg-white/4 border-white/8" : "bg-black/2 border-black/7";

  return (
    <section id="projects" className={`py-20 px-6 md:px-16 lg:px-24 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className={`text-4xl md:text-5xl ${text}`} style={{ fontWeight: 700 }}>{tr.heading}</h2>
          </div>
          <p className={`text-sm leading-relaxed max-w-xs text-right hidden md:block ${muted}`}>{tr.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const info = tr.items[i];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border overflow-hidden group cursor-pointer ${card}`}
              >
                {/* Browser chrome */}
                <div className={`flex items-center gap-2 px-4 py-3 border-b ${border}`}>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className={`flex-1 text-center text-xs ${muted}`}>{info.url}</div>
                </div>

                {/* Preview */}
                <div className="h-56 relative overflow-hidden">
                  {project.preview === "trade"
                    ? <TradeJournalPreview darkMode={darkMode} />
                    : project.preview === "twinmarket"
                    ? <TwinMarketPreview darkMode={darkMode} />
                    : <PortfolioPreview darkMode={darkMode} />
                  }
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className={`text-xs tracking-widest uppercase ${muted}`}>{info.category}</span>
                      <h3 className={`text-xl font-semibold mt-1 ${text}`}>{info.title}</h3>
                    </div>
                    <span className={`w-7 h-7 rounded-lg border flex items-center justify-center mt-1 transition-colors ${
                      darkMode ? "border-white/15 text-white/40 group-hover:border-white/40 group-hover:text-white" : "border-black/10 text-black/35 group-hover:border-black/30 group-hover:text-black"
                    }`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${muted}`}>{info.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {info.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border ${darkMode ? "border-white/12 text-white/50" : "border-black/10 text-black/45"}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
