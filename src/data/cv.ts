// Manually curated from latex/cv_professional.tex and latex/cv_research.tex (read-only source of truth).
// Update this file by hand when the .tex CVs change — it is not generated automatically.

export const education = [
  {
    school: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    degree: "B.Sc. (Honours) in Engineering — Computer Science & Engineering (Cybersecurity Stream)",
    period: "Mar 2023 – Present",
    details: ["GPA: 3.68 / 4.0"],
  },
  {
    school: "Royal College",
    location: "Colombo, Sri Lanka",
    degree: "Primary and Secondary Education",
    period: "Jan 2008 – Mar 2022",
    details: [
      "G.C.E. Advanced Level: 3 A's, Physical Science Stream (Z-score: 2.1595)",
      "G.C.E. Ordinary Level: 9 A's",
    ],
  },
];

export const experience = [
  {
    role: "Teaching Assistant",
    org: "CS2033, Data Communication and Networking Lab, University of Moratuwa",
    type: "Part-time, On-site",
    period: "Aug 2026 – Present",
    bullets: [
      "Teach undergraduates core networking concepts, including IP addressing, TCP/IP, and the OSI layer stack, and conduct hands-on lab practicals using real Cisco switches and routers.",
    ],
  },
  {
    role: "Cybersecurity Engineer Intern",
    org: "WSO2 Lanka Pvt Limited",
    type: "Full-time, On-site",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Developed a scheduled scanning system that evaluates GitHub repositories against security, maintenance, and community standards, with a monitoring dashboard.",
      "Built an AI-powered service to refine security advisory content to public announcement standards, along with a companion Chrome extension.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Simology Limited, United Kingdom",
    type: "Part-time, Remote",
    period: "June 2024 – May 2025",
    bullets: [
      "Led a team of developers building an end-to-end eSIM sales platform: website backend and mobile apps.",
      "Oversaw deployment, maintenance, payment gateway integrations, and testing.",
    ],
  },
  {
    role: "Flutter Developer",
    org: "Operate Holdings Limited, Saudi Arabia",
    type: "Part-time, Remote",
    period: "Mar 2024 – July 2025",
    bullets: [
      "Developed \"Operate\", a mobile app for task management, issue tracking, and employee training.",
      "Led UI/UX design and implementation for users in Middle Eastern organizations.",
    ],
  },
];

export const skills = [
  { label: "Programming Languages", items: ["Python", "TypeScript", "SQL", "Java", "C", "C++", "Solidity", "Bash"] },
  { label: "AI & LLMs", items: ["OpenAI API", "Anthropic API", "LangChain / LangGraph", "Prompt Engineering", "MCP"] },
  { label: "Cybersecurity Tools", items: ["OWASP ZAP", "Wireshark", "Nmap", "Burp Suite"] },
  { label: "Frameworks & Cloud", items: ["React.js", "Next.js", "Node.js", "Docker", "AWS", "Google Cloud"] },
];

export const awards = [
  { title: "Best AI Solution Award — DreamShot AI Hackathon", note: "SafeCom", period: "Jan 2025" },
  { title: "Winner — Idealize 4.0 (Open Category, AIESEC)", note: "Localize Sri Lanka", period: "Aug 2024" },
  { title: "Winner — Devthon 1.0", note: "Localize Sri Lanka", period: "Mar 2024" },
  { title: "President's Scout Award — National Level", note: "", period: "Feb 2022" },
];

export const leadership = [
  { role: "Student Representative", org: "Dept. of Computer Science & Engineering, University of Moratuwa", period: "Jan 2025 – June 2026" },
  { role: "Webmaster", org: "Computer Science and Engineering Students' Society (CSESS)", period: "July 2025 – May 2026" },
  { role: "Lead, Web Development Committee", org: "Innovate with Ballerina 2025, IEEE Student Branch", period: "May 2025 – Sept 2025" },
  { role: "Assistant Head, Web & Technology Pillar", org: "MoraSpirit", period: "May 2024 – Oct 2024" },
  { role: "Senior Prefect", org: "Royal College", period: "Mar 2022 – Mar 2023" },
  { role: "Assistant Chairman", org: "Royal College Computer Society", period: "Jan 2020 – Dec 2020" },
];

export const volunteering = [
  { role: "Volunteer, Publications Committee", org: "1st ADScAI Symposium 2025 (CSE40)", period: "Mar – May 2025", note: "Composed the proceedings document from authors' camera-ready papers." },
  { role: "Volunteer", org: "Cyber Rush 2025 — CodeJam 2025 Capture the Flag Competition (CSE40)", period: "Mar – May 2025", note: "Designed original cryptography and web-vulnerability challenges." },
  { role: "Volunteer Resource Person", org: "Future Minds 2025 — CodeJam 2025 (CSE40)", period: "Mar – May 2025", note: "Delivered a session on Introduction to Network Security & Cryptography for school students." },
];

export const languages = "English (Professional working proficiency), Tamil (Native), Sinhala (Professional working proficiency)";
