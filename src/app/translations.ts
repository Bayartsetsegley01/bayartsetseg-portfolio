export type Lang = "mn" | "en";

export const t = {
  mn: {
    nav: {
      role: "Програм хөгжүүлэгч & UX/UI Дизайнер",
      links: ["Нүүр", "Тухай", "Чадвар", "Туршлага", "Гэрчилгээ", "Төслүүд", "Холбоо"],
    },
    hero: {
      heading: "Баярцэцэг",
      roles: ["IT оюутан", "Програм хөгжүүлэгч", "UX/UI дизайнер"],
      description:
        "Мэдээллийн технологийн мэргэжлээр сурч байгаа, веб болон апп хөгжүүлэлтэд төвлөрөн өөрийгөө хөгжүүлж буй оюутан. Одоогоор Frontend хөгжүүлэлт болон UX/UI дизайны ур чадвараа гүнзгийрүүлж, хэрэглэгч төвтэй, ойлгомжтой, үр ашигтай шийдэл боловсруулахад анхаарч байгаа.",
      viewProjects: "Төслүүд үзэх",
      getInTouch: "Холбоо барих",
      stats: { projects: "Төсөл", growth: "Хөгжих хүсэл", certs: "Гэрчилгээ" },
      social: "Сошиал",
    },
    about: {
      heading: "Товч танилцуулга.",
      role: "IT оюутан | Програм хөгжүүлэгч | UX/UI дизайнер",
      location: "Улаанбаатар, Монгол",
      bio: [
        "Мэдээллийн технологийн мэргэжлээр сурч байгаа, веб болон апп хөгжүүлэлтэд төвлөрөн өөрийгөө хөгжүүлж буй оюутан.",
        "Одоогоор Frontend хөгжүүлэлт болон UX/UI дизайны ур чадвараа гүнзгийрүүлж, хэрэглэгч төвтэй, ойлгомжтой, үр ашигтай шийдэл боловсруулахад анхаарч байгаа.",
        "Ирээдүйд Full-Stack Developer болох зорилготой бөгөөд програм хангамжийн суурь мэдлэгээ өргөжүүлж, шинэлэг төсөл дээр тогтмол ажиллан практик туршлага хуримтлуулахыг эрмэлздэг.",
      ],
      currently: {
        label: "Одоо",
        items: [
          { label: "СУРАЛЦАЖ", value: "ШУТИС МХТС — Мэдээллийн технологи, 4-р курс" },
          { label: "БҮТЭЭЖ", value: "Frontend болон UX/UI дизайны шийдэл" },
          { label: "СУДАЛЖ", value: "Python, SQL, Data Analysis — DataCamp Scholar" },
        ],
      },
      skills: { label: "Чадвар" },
      education: {
        label: "Боловсрол",
        degree: "Мэдээллийн технологи",
        school: "ШУТИС МХТС · 4-р курс",
        gpa: "Голч",
        showCourses: "Судалсан мэргэжлийн хичээлүүд",
        hideCourses: "Судалсан мэргэжлийн хичээлүүд",
      },
      stats: { certs: "Гэрчилгээ", exp: "Жилийн туршлага", projects: "Бүтээсэн төсөл", passion: "Хөгжих хүсэл" },
    },
    softSkills: {
      label: "Хувийн ур чадвар",
      items: [
        "Багаар ажиллах", "Манлайлах", "Ажлын ачаалал даах", "Санал бодлоо илэрхийлэх",
        "Илтгэх", "Зохион бүтээх", "Шинийг санаачлах", "Шинжилгээ хийх, асуудал шийдвэрлэх",
        "Хувийн сахилга бат", "Үлгэр дуурайлал үзүүлэх", "Цагийн менежмент",
        "Хариуцлага хүлээх чадвар", "Анхааралтай сонсох, хүлээн авах",
        "Дасан зохицох, шинэчлэл хийх", "Нягт нямбай", "Харилцааны чадвар",
      ],
    },
    techStack: {
      label: "Мэргэжлийн ур чадвар",
      categories: [
        { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Flutter"] },
        { name: "Backend", items: ["Node.js", "Express.js"] },
        { name: "Өгөгдлийн сан", items: ["PostgreSQL", "SQL", "mySQL", "MongoDB"] },
        { name: "Дизайн & AI", items: ["Figma", "Claude Code", "Gemini.ai", "Prompt Engineering"] },
        { name: "Хэрэгсэл", items: ["GitHub", "Render", "VS Code"] },
      ],
    },
    workExp: {
      label: "Ажлын туршлага",
      heading: "Туршлага.",
      items: [
        {
          title: "UX/UI Intern",
          company: "Bimex Holding",
          period: "2025 оны 6-р сар — 7-р сар",
          bullets: [
            "Usability study төлөвлөж, Google Form ашиглан хэрэглэгчийн өгөгдөл цуглуулсан",
            "Хэрэглэгчийн зан төлөв болон UX асуудлуудыг тодорхойлсон",
            "Сайжруулалтын санал, интерфэйсийн бүтцийн зөвлөмж боловсруулсан",
            "Веб болон мобайл аппын хэрэглээний туршлагыг сайжруулах шийдэл санал болгосон",
          ],
        },
        {
          title: "UX/UI Intern",
          company: "E-commerce Web Design",
          period: "2025 оны 8-р сар — 9-р сар",
          bullets: [
            "Хэрэглэгчийн судалгаа хийж, user flow тодорхойлсон",
            "Figma ашиглан wireframe болон интерфэйсийн бүтэц боловсруулсан",
            "UI interaction (hover, animation) туршиж, хэрэглээний туршлагыг сайжруулсан",
          ],
        },
        {
          title: "Volunteer Organizer",
          company: "Women Techmakers Mongolia",
          period: "2024 оны 1-р сар — 12-р сар",
          bullets: [
            "Технологийн арга хэмжээ, community үйл ажиллагаа зохион байгуулахад оролцсон",
            "Багаар ажиллах, зохион байгуулалт хийх ур чадвараа хөгжүүлсэн",
          ],
        },
        {
          title: "Internship",
          company: "Erxes & Youthinc — Empowering Girls in Tech",
          period: "2023 оны 8-р сар — 12-р сар",
          bullets: [
            "Soft болон hard skill сургалтад хамрагдсан",
            "Даалгавар болон төслийн ажил гүйцэтгэх чадвараа хөгжүүлсэн",
          ],
        },
        {
          title: "Танилцах дадлага",
          company: "Хаан Банк — МТ үндсэн систем, үйлчилгээ удирдлагын газар",
          period: "2023",
          bullets: [
            "МТ үндсэн систем болон үйлчилгээ удирдлагын газарт танилцах дадлага хийсэн",
            "Банкны мэдээллийн технологийн дэд бүтэц, ажлын процессыг судалсан",
          ],
        },
        {
          title: "Танилцах дадлага",
          company: "Хас Банк — Мэдээллийн Технологийн газар",
          period: "2023",
          bullets: [
            "Мэдээллийн Технологийн газарт танилцах дадлага хийсэн",
            "Банкны IT системийн ажиллагаа, мэдээллийн аюулгүй байдлын үндсийг судалсан",
          ],
        },
      ],
    },
    certs: {
      label: "Гэрчилгээнүүд",
      heading: "Гэрчилгээ.",
      items: [
        { title: "Google UX Design Certificate", description: "Хэрэглэгчийн судалгаа, wireframe, прототип, usability тест хамарсан цогц хөтөлбөр.", badge: "Google", year: "2024" },
        { title: "Google Project Management Certificate", description: "Төсөл төлөвлөлт, agile арга зүй, багийн хамтын ажиллагааг судалсан.", badge: "Google", year: "2024" },
        { title: "UXCEL UX/UI Designer", description: "UX/UI дизайны иж бүрэн онол, практик сургалт.", badge: "UXCEL", year: "2025" },
        { title: "DataCamp Scholar", description: "Python, SQL, R хэлээр өгөгдлийн шинжилгээ хийх эрчимт хөтөлбөр.", badge: "DataCamp", year: "2025" },
        { title: "Dataschool Data Analyst Scholar", description: "SQL, Machine Learning (Kaggle), Python, Tableau, R, PowerBI ашиглан өгөгдлийн шинжилгээ.", badge: "Dataschool", year: "2025–2026" },
      ],
    },
    projects: {
      label: "Хэрэгжүүлсэн төслүүд",
      heading: "Сүүлийн төслүүд.",
      description: "Дизайн системээс deployment хүртэл бүрэн гүйцэтгэсэн live бүтээгдэхүүнүүд.",
      items: [
        {
          title: "TradeJournal",
          category: "Веб систем · AI",
          description: "Хиймэл оюунд суурилсан арилжааны тэмдэглэлийн веб систем. Арилжаачдад арилжааны тэмдэглэл хөтлөх, алдааг тодорхойлох, AI зөвлөгөө авах боломж олгодог.",
          tags: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Render.com"],
          url: "tradejournal.app",
        },
        {
          title: "Personal Portfolio",
          category: "Бранд · Portfolio",
          description: "Энэ сайт. React, TypeScript, Tailwind v4-ар бүтэгдсэн. Монгол/Англи хэл солих, dark/light горим, бүрэн responsive дизайн.",
          tags: ["React", "TypeScript", "Tailwind v4", "Motion"],
          url: "bayartsetseg.dev",
        },
        {
          title: "Twin Market",
          category: "E-Commerce · Веб дизайн",
          description: "Хүнс, ахуйн хэрэглээний бүтээгдэхүүний онлайн дэлгүүрийн вэб дизайн. Бүтээгдэхүүн хайх, ангилал, хямдрал, сагс зэрэг бүрэн e-commerce туршлагыг хэрэглэгчид ойлгомжтой, цэвэр загвараар хүргэсэн.",
          tags: ["Figma", "UI Design", "UX Research", "E-Commerce", "Design System"],
          url: "twinmarket.mn",
        },
      ],
    },
    letsBuild: {
      badge: "Шинэ төсөлд бэлэн",
      heading: "Хамтдаа үнэ цэнтэй зүйл бүтээцгээе.",
      subheading: "",
      description: "Холбоглох",
      emailLabel: "Имэйл",
      phoneLabel: "Утас",
      cta: "Яриа эхлүүлэх",
      footer1: "© 2026 Баярцэцэг Цогтбаатар",
      footer2: "",
    },
    dock: ["Нүүр", "Тухай", "Чадвар", "Туршлага", "Гэрчилгээ", "Төслүүд", "Холбоо"],
  },

  en: {
    nav: {
      role: "Software Developer & UX/UI Designer",
      links: ["Home", "About", "Skills", "Experience", "Certifications", "Projects", "Contact"],
    },
    hero: {
      heading: "Hi, I'm Bayartsetseg",
      roles: ["IT Student", "Software Developer", "UX/UI Designer"],
      description:
        "An IT student focused on web and app development, deepening skills in Frontend development and UX/UI design to build user-centered, intuitive, and efficient solutions.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      stats: { projects: "Projects", growth: "Growth Mindset", certs: "Certifications" },
      social: "Social",
    },
    about: {
      heading: "The short version.",
      role: "IT Student | Software Developer | UX/UI Designer",
      location: "Ulaanbaatar, Mongolia",
      bio: [
        "An IT student focused on web and app development, continuously growing through hands-on projects.",
        "Currently deepening skills in Frontend development and UX/UI design to build user-centered, intuitive, and efficient solutions.",
        "Aiming to become a Full-Stack Developer by expanding foundational knowledge and accumulating practical experience through consistent project work.",
      ],
      currently: {
        label: "Currently",
        items: [
          { label: "STUDYING", value: "MUST SICT — Information Technology, Year 4" },
          { label: "BUILDING", value: "Frontend & UX/UI design solutions" },
          { label: "LEARNING", value: "Python, SQL, Data Analysis — DataCamp Scholar" },
        ],
      },
      skills: { label: "Skills" },
      education: {
        label: "Education",
        degree: "Information Technology",
        school: "MUST SICT · Year 4",
        gpa: "GPA",
        showCourses: "View courses",
        hideCourses: "Hide courses",
      },
      stats: { certs: "Certifications", exp: "Years experience", projects: "Projects built", passion: "Growth Mindset" },
    },
    softSkills: {
      label: "Soft Skills",
      items: [
        "Teamwork", "Leadership", "Handling workload", "Expressing opinions",
        "Presenting", "Creative thinking", "Initiative", "Problem solving & analysis",
        "Self-discipline", "Leading by example", "Time management",
        "Accountability", "Active listening",
        "Adaptability", "Attention to detail", "Communication skills",
      ],
    },
    techStack: {
      label: "Technical Skills",
      categories: [
        { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Flutter"] },
        { name: "Backend", items: ["Node.js", "Express.js"] },
        { name: "Database", items: ["PostgreSQL", "SQL", "mySQL", "MongoDB"] },
        { name: "Design & AI", items: ["Figma", "Claude Code", "Gemini.ai", "Prompt Engineering"] },
        { name: "Tools", items: ["GitHub", "Render", "VS Code"] },
      ],
    },
    workExp: {
      label: "Work Experience",
      heading: "Experience.",
      items: [
        {
          title: "UX/UI Intern",
          company: "Bimex Holding",
          period: "June 2025 – July 2025",
          bullets: [
            "Planned usability studies and collected user data via Google Forms",
            "Identified user behavior patterns and UX issues",
            "Developed improvement proposals and interface structure recommendations",
            "Proposed solutions to enhance web and mobile app user experience",
          ],
        },
        {
          title: "UX/UI Intern",
          company: "E-commerce Web Design",
          period: "Aug 2025 – Sep 2025",
          bullets: [
            "Conducted user research and defined user flows",
            "Designed wireframes and interface structures using Figma",
            "Tested UI interactions (hover, animation) to improve user experience",
          ],
        },
        {
          title: "Volunteer Organizer",
          company: "Women Techmakers Mongolia",
          period: "Jan 2024 – Dec 2024",
          bullets: [
            "Participated in organizing tech events and community activities",
            "Developed teamwork and organizational skills",
          ],
        },
        {
          title: "Internship",
          company: "Erxes & Youthinc — Empowering Girls in Tech",
          period: "Aug 2023 – Dec 2023",
          bullets: [
            "Participated in soft and hard skill training programs",
            "Developed task and project execution capabilities",
          ],
        },
        {
          title: "Internship",
          company: "Khan Bank — IT Core Systems & Service Management",
          period: "2023",
          bullets: [
            "Completed an internship in the IT Core Systems and Service Management division",
            "Studied the bank's IT infrastructure and operational processes",
          ],
        },
        {
          title: "Internship",
          company: "Khas Bank — Information Technology Department",
          period: "2023",
          bullets: [
            "Completed an internship in the Information Technology Department",
            "Studied banking IT systems and information security fundamentals",
          ],
        },
      ],
    },
    certs: {
      label: "Credentials",
      heading: "Certifications.",
      items: [
        { title: "Google UX Design Certificate", description: "Comprehensive program covering user research, wireframing, prototyping, and usability testing.", badge: "Google", year: "2024" },
        { title: "Google Project Management Certificate", description: "Learned project planning, agile methodologies, and team collaboration.", badge: "Google", year: "2024" },
        { title: "UXCEL UX/UI Designer", description: "Comprehensive UX/UI design theory and practical training.", badge: "UXCEL", year: "2025" },
        { title: "DataCamp Scholar", description: "Intensive program learning Python, SQL, and R for data analysis.", badge: "DataCamp", year: "2025" },
        { title: "Dataschool Data Analyst Scholar", description: "SQL, Machine Learning (Kaggle), Python, Tableau, R, PowerBI for data analysis.", badge: "Dataschool", year: "2025–2026" },
      ],
    },
    projects: {
      label: "Featured Work",
      heading: "Recent projects.",
      description: "Live products shipped end-to-end — from design system to deployment.",
      items: [
        {
          title: "TradeJournal",
          category: "Web system · AI",
          description: "An AI-powered trading journal web system. Helps traders log trades, identify mistakes, and receive AI-driven insights and advice.",
          tags: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Render.com"],
          url: "tradejournal.app",
        },
        {
          title: "Personal Portfolio",
          category: "Brand · Portfolio",
          description: "This site. Built with React, TypeScript, Tailwind v4. Bilingual MN/EN, dark/light mode, fully responsive design.",
          tags: ["React", "TypeScript", "Tailwind v4", "Motion"],
          url: "bayartsetseg.dev",
        },
        {
          title: "Twin Market",
          category: "E-Commerce · Web Design",
          description: "Web design for an online grocery and household goods store. Designed a clean, intuitive e-commerce experience covering product search, categories, discounts, and cart flow.",
          tags: ["Figma", "UI Design", "UX Research", "E-Commerce", "Design System"],
          url: "twinmarket.mn",
        },
      ],
    },
    letsBuild: {
      badge: "Available for new projects",
      heading: "Let's build something together.",
      subheading: "",
      description: "Feel free to reach out anytime.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      cta: "Start a conversation",
      footer1: "© 2026 Bayartsetseg Tsogtbaatar",
      footer2: "",
    },
    dock: ["Home", "About", "Skills", "Experience", "Certifications", "Projects", "Contact"],
  },
};
