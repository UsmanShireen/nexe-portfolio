import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Tool Calling Agent",
    level: "Beginner",
    levelColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    icon: "🤖",
    color: "#7c3aed",
    glow: "hover:shadow-purple-500/20",
    border: "hover:border-purple-500/50",
    desc: "AI agent with function calling, JSON responses and error handling. Performs math operations using structured tool calls.",
    tags: ["function-calling", "json", "error-handling"],
    url: "https://nexe-agent-projects-1.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_1",
    btnColor: "bg-purple-600 hover:bg-purple-500",
  },
  {
    id: "02",
    title: "AI Calculator Agent",
    level: "Beginner",
    levelColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    icon: "🧮",
    color: "#00d2ff",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/50",
    desc: "Smart calculator with memory — remembers last result and uses it in next calculations. Supports all math operations.",
    tags: ["memory", "math-ops", "structured-output"],
    url: "https://nexe-agent-projects-2.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_2",
    btnColor: "bg-cyan-500 hover:bg-cyan-400 text-black",
  },
  {
    id: "03",
    title: "Multi-Tool Agent",
    level: "Intermediate",
    levelColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    icon: "🛠️",
    color: "#00ff88",
    glow: "hover:shadow-emerald-500/20",
    border: "hover:border-emerald-500/50",
    desc: "Agent with 3 real tools — DuckDuckGo web search, SQLite database storage, and Gmail SMTP email sending.",
    tags: ["web-search", "sqlite", "gmail-smtp"],
    url: "https://nexe-agent-projects-3.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_3",
    btnColor: "bg-emerald-500 hover:bg-emerald-400 text-black",
  },
  {
    id: "04",
    title: "RAG Assistant",
    level: "Intermediate",
    levelColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    icon: "📄",
    color: "#4299e1",
    glow: "hover:shadow-blue-500/20",
    border: "hover:border-blue-500/50",
    desc: "Upload TXT or PDF documents — AI answers questions using only your document content via ChromaDB vector search.",
    tags: ["chromadb", "embeddings", "vector-search"],
    url: "https://nexe-agent-projects-4.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_4",
    btnColor: "bg-blue-500 hover:bg-blue-400",
  },
  {
    id: "05",
    title: "Autonomous Business Agent",
    level: "Advanced",
    levelColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    icon: "🏢",
    color: "#f6c90e",
    glow: "hover:shadow-yellow-500/20",
    border: "hover:border-yellow-500/50",
    desc: "Multi-step reasoning agent that plans tasks, researches online, analyzes data, logs execution and generates reports.",
    tags: ["multi-step", "task-planning", "exec-logs"],
    url: "https://nexe-agent-projects-5.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_5",
    btnColor: "bg-yellow-400 hover:bg-yellow-300 text-black",
  },
  {
    id: "06",
    title: "Multi-Agent System",
    level: "Advanced",
    levelColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    icon: "🧠",
    color: "#a855f7",
    glow: "hover:shadow-purple-500/20",
    border: "hover:border-purple-500/50",
    desc: "4 specialized agents — Manager, Research, Analysis, Report — with full communication layer and task delegation.",
    tags: ["multi-agent", "comm-layer", "delegation"],
    url: "https://nexe-agent-projects-6.streamlit.app/",
    githubUrl: "https://github.com/UsmanShireen/nexe-agent-projects/tree/main/Project_6",
    btnColor: "bg-purple-500 hover:bg-purple-400",
  },
];

const techStack = [
  { icon: "🤖", name: "Agents SDK", desc: "AI agent framework" },
  { icon: "🌐", name: "OpenRouter", desc: "LLM API provider" },
  { icon: "🎨", name: "Streamlit", desc: "Web UI framework" },
  { icon: "🗄️", name: "ChromaDB", desc: "Vector database" },
  { icon: "🔍", name: "DuckDuckGo", desc: "Web search" },
  { icon: "💾", name: "SQLite", desc: "Local database" },
  { icon: "📧", name: "Gmail SMTP", desc: "Email sending" },
  { icon: "🧬", name: "SentenceTransformers", desc: "Text embeddings" },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-white font-sans">

      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(#ffffff03_1px,transparent_1px),linear-gradient(90deg,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />

      {/* Glow orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 right-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/3 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#050508]/80 backdrop-blur-xl border-b border-white/5">
        <div className="font-black text-xl tracking-[6px] uppercase bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Usman Shireen
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/UsmanShireen"
            target="_blank"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full text-xs font-mono tracking-wider text-white/50 hover:text-white transition-all duration-300"
          >
            <GithubIcon />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/usman-shireen-4211262b7/"
            target="_blank"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full text-xs font-mono tracking-wider text-white/50 hover:text-white transition-all duration-300"
          >
            <LinkedinIcon />
            Linkedin
          </Link>
          <span className="bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 px-3 py-1 rounded-full font-mono text-[10px] tracking-[2px]">
            ● 6 PROJECTS LIVE
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-white/20" />
          <span className="font-mono text-[11px] tracking-[4px] text-white/30 uppercase">
            Nexe-Agent Internship 2026
          </span>
          <div className="w-10 h-px bg-white/20" />
        </div>

        <h1 className="font-black text-[clamp(52px,10vw,120px)] leading-[0.9] tracking-tight mb-2 uppercase">
          <span className="block text-white">AGENTIC AI</span>
          <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            PORTFOLIO
          </span>
        </h1>

        <p className="text-white/40 max-w-lg text-base leading-relaxed mt-6 mb-10">
          6 production-grade AI agent projects — from beginner tool-calling to
          advanced multi-agent systems with communication layers.
        </p>

        {/* Stats */}
        <div className="flex gap-10 sm:gap-16 mb-12">
          {[
            { num: "6", label: "Projects" },
            { num: "3", label: "Levels" },
            { num: "10+", label: "AI Tools" },
            { num: "4", label: "Agents" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black text-5xl bg-gradient-to-b from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                {s.num}
              </div>
              <div className="font-mono text-[10px] tracking-[2px] text-white/30 uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href="#projects"
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300">
            VIEW ALL PROJECTS
            <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </a>
          <Link
            href="https://github.com/UsmanShireen/nexe-agent-projects"
            target="_blank"
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 text-white/60 hover:text-white"
          >
            <GithubIcon />
            VIEW ON GITHUB
          </Link>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[4px] text-white/20">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-[10px] tracking-[4px] text-white/30 uppercase">// LIVE PROJECTS</span>
          <div className="h-px flex-1 bg-white/5 max-w-48" />
        </div>
        <h2 className="font-black text-[clamp(36px,5vw,64px)] uppercase leading-none mb-14">
          ALL{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            6 PROJECTS
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`group relative bg-[#0c0c14] border border-white/[0.06] rounded-2xl p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${p.glow} ${p.border} overflow-hidden`}
            >
              {/* Top color line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.color }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${p.color}12 0%, transparent 60%)`,
                }}
              />

              {/* Card header */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <span className="font-mono text-[10px] tracking-[3px] text-white/20">
                  PROJECT / {p.id}
                </span>
                <span className={`text-[10px] font-mono tracking-[1px] px-3 py-1 rounded-full border ${p.levelColor}`}>
                  {p.level.toUpperCase()}
                </span>
              </div>

              {/* Icon */}
              <span className="text-4xl mb-4 relative z-10 block">{p.icon}</span>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 relative z-10">{p.title}</h3>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1 relative z-10">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-white/5 border border-white/[0.06] text-white/30 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 relative z-10">
                <Link
                  href={p.url}
                  target="_blank"
                  className={`flex-1 flex items-center justify-between ${p.btnColor} text-sm font-bold tracking-wider uppercase px-4 py-3 rounded-xl transition-all duration-200`}
                >
                  LIVE APP
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
                <Link
                  href={p.githubUrl}
                  target="_blank"
                  title="View on GitHub"
                  className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 text-white/40 hover:text-white"
                >
                  <GithubIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-[10px] tracking-[4px] text-white/30 uppercase">// TECHNOLOGIES</span>
          <div className="h-px flex-1 bg-white/5 max-w-48" />
        </div>
        <h2 className="font-black text-[clamp(36px,5vw,64px)] uppercase leading-none mb-14">
          TECH{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            STACK
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="bg-[#0c0c14] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 group"
            >
              <span className="text-2xl">{t.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-white/90">{t.name}</div>
                <div className="text-xs text-white/30 mt-0.5">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB CTA SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[#0c0c14] border border-white/[0.06] rounded-3xl p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="font-mono text-[10px] tracking-[4px] text-white/30 uppercase mb-3">
              // SOURCE CODE
            </div>
            <h3 className="font-black text-3xl uppercase mb-3">
              VIEW ON{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GITHUB
              </span>
            </h3>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              All 6 projects with complete source code, requirements.txt and documentation available on GitHub.
            </p>
          </div>
          <Link
            href="https://github.com/UsmanShireen/nexe-agent-projects"
            target="_blank"
            className="flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-white/90 transition-all duration-300 text-sm tracking-wider whitespace-nowrap"
          >
            <GithubIcon />
            STAR ON GITHUB →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-black text-xl tracking-[6px] uppercase bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
            NEXE-AGENT
          </div>
          <p className="text-xs text-white/30">Agentic AI Developer Internship — 2026</p>
        </div>
        <div className="text-right font-mono text-xs text-purple-400 space-y-1">
          <div>
            <a href="mailto:usmanayan06@gmail.com" className="hover:text-purple-300 transition-colors">
              usmanayan06@gmail.com
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/usman-shireen-4211262b7/" target="_blank" className="hover:text-purple-300 transition-colors">
              linkedin.com/in/usman-shireen
            </a>
          </div>
          <div className="text-purple-400/50 mt-2">Built with ❤️ by Usman Shireen</div>
        </div>
      </footer>

    </main>
  );
}