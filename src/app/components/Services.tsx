import { motion } from "motion/react";

interface ServicesProps {
  darkMode: boolean;
}

const services = [
  {
    tag: "Маркетингийн хэрэгт",
    time: "5-7 өдөр",
    title: "Landing & Marketing Sites",
    description:
      "Хурдан, дахин хагарцгүй landing болон marketing сайт — Next.js, Tailwind технологи дахар сүурийнсан. SEO, analytics, performance оптимизаци багтсан.",
  },
  {
    tag: "Production-ready веб систем",
    time: "3-8 долоо хоног",
    title: "Full-stack Web Applications",
    description:
      "Хэрэглэг-чийн нарийрал дагуу, CMS, админ панель, тэлбэр, интэграцийн баtгасан бүрэн веб шийдэл. flint.mn, voices.mn, piano.mn зэрэг live production системүүдийг хэгжүүлсэн туршлагатай.",
  },
  {
    tag: "Claude Code · MCP Servers",
    time: "Расалт шаарт",
    title: "AI Agentic Workflows",
    description:
      "Claude Code, custom MCP server тулган task skill ашилган инженерийн процессийг автоматжуулна. Нэг хэгжүүлэгч бүхэл багийн адил хурдтай ажиллах болдог болно.",
  },
  {
    tag: "Тооцоо · GraphQL Federation",
    time: "3-5 долоо хоног",
    title: "Security Audit & Vulnerability Triage",
    description:
      "Application security review, code-scanning-ур дулгелін triage, vulnerability засвар. Erxes дахар enterprise SaaS-ийн аюулгүй байдлыг хангасан ажиллагаа туршлагатай.",
  },
];

export function Services({ darkMode }: ServicesProps) {
  const text = darkMode ? "text-white" : "text-black";
  const muted = darkMode ? "text-white/50" : "text-black/45";
  const border = darkMode ? "border-white/10" : "border-black/8";
  const card = darkMode ? "hover:bg-white/4" : "hover:bg-black/2";

  return (
    <section
      id="services"
      className={`py-20 px-6 md:px-16 lg:px-24 border-t ${border} ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className={`flex items-center gap-3 mb-6 text-xs tracking-widest uppercase ${muted}`}>
            <div className={`w-6 h-px ${darkMode ? "bg-white/30" : "bg-black/25"}`} />
            Services · Үйлчилгэх
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-8">
            <div>
              <h2 className={`text-4xl md:text-5xl leading-tight ${text}`} style={{ fontWeight: 700 }}>
                Веб хөгжүүлэлт.
              </h2>
              <p className={`text-xl mt-1 ${muted}`}>Web development from Mongolia.</p>
            </div>
            <p className={`text-sm leading-relaxed max-w-sm ${muted}`}>
              Улаанбаатар хотоос үүлэн таны{" "}
              <span className={text}>найдвартай веб хэгжүүлэлтийн</span> зайгаас. Монголын бизнэсүүд болон
              олон улсын клиентүүдэд зориулсан freelance design, development, security зайлдаг.
            </p>
          </div>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-6 rounded-xl border cursor-pointer transition-colors ${border} ${card}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs ${muted}`}>{service.tag}</span>
                <span className={`text-xs ${muted}`}>{service.time}</span>
              </div>
              <h3 className={`text-lg font-semibold mb-3 ${text}`}>{service.title}</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
