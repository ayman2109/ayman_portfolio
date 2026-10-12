
import Image from "next/image";


const projects = [
  {
    number: "01",
    category: "DEEP LEARNING · COMPUTER VISION",
    title: "Lipreading: Video-to-Text AI",
    status: "RESEARCH PROJECT",
    description:
      "A lightweight personalized visual speech recognition model that converts lip movements into text by learning visual appearance, temporal dynamics, and facial geometry.",
    stack: [
      "Python",
      "Deep Learning",
      "LipNet",
      "dlib",
      "Computer Vision",
    ],
    highlights: [
      "Combined video frames with facial landmark coordinates",
      "Explored spatial and temporal features of lip movements",
      "Reported CER of 5% and WER of 13.3% for the LipNet model",
    ],
    accent: "from-fuchsia-400/20 to-transparent",
  },
  {
    number: "02",
    category: "DISTRIBUTED SYSTEMS · MICROSERVICES",
    title: "Event-Driven E-Commerce Platform",
    status: "FEATURED PROJECT",
    description:
      "A distributed commerce platform with independent services, API Gateway routing, persistent storage, and asynchronous messaging.",
    stack: [
      "Node.js",
      "Express.js",
      "React",
      "MongoDB",
      "RabbitMQ",
      "Docker",
    ],
    highlights: [
      "Separated catalog, order, review, and notification services",
      "Used RabbitMQ for asynchronous event-driven workflows",
      "Containerized services for isolated development",
    ],
    accent: "from-cyan-400/20 to-transparent",
  },
  {
    number: "03",
    category: "BACKEND ENGINEERING · SECURITY",
    title: "E-Commerce Order Management",
    status: "FEATURED PROJECT",
    description:
      "A modular Spring Boot backend supporting commerce workflows, secure access control, caching, and intelligent product recommendations.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "Redis",
    ],
    highlights: [
      "JWT authentication and role-based authorization",
      "DTO validation and centralized exception handling",
      "AI product recommendations using semantic similarity",
    ],
    accent: "from-emerald-400/20 to-transparent",
  },
  {
    number: "04",
    category: "GENERATIVE AI · RAG",
    title: "AI Research & Document Assistant",
    status: "FEATURED PROJECT",
    description:
      "An AI assistant that retrieves relevant information from uploaded documents and generates context-aware responses grounded in source material.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LLMs",
      "Vector Databases",
      "React",
    ],
    highlights: [
      "Document chunking and embedding generation",
      "Semantic retrieval for relevant document context",
      "Agent workflows with tool calling",
    ],
    accent: "from-violet-400/20 to-transparent",
  },
  {
    number: "05",
    category: "WEB3 · BLOCKCHAIN",
    title: "Solana Token Launchpad",
    status: "WEB3 BUILD",
    description:
      "A Web3 application concept focused on token creation workflows and wallet-connected interactions on the Solana blockchain.",
    stack: [
      "Solana",
      "TypeScript",
      "React",
      "Wallet Adapter", 
      "Phantom",
    ],
    highlights: [
      "Explored Solana token program interactions",
      "Worked with associated token accounts",
      "Explored wallet connectivity and Solana CLI tooling",
    ],
    accent: "from-orange-400/20 to-transparent",
  },
  {
    number: "06",
    category: "LLMs · MODEL INTEGRATION",
    title: "Conversational AI Playground",
    status: "EXPERIMENTAL",
    description:
      "An exploration of conversational AI interfaces, model integration, and LLM-powered applications using the Hugging Face ecosystem.",
    stack: [
      "Python",
      "Hugging Face",
      "TinyLlama",
      "LLMs",
      "React",
    ],
    highlights: [
      "Explored loading and interacting with language models",
      "Investigated conversational interfaces and model responses",
      "Explored integration patterns for LLM-powered applications",
    ],
    accent: "from-blue-400/20 to-transparent",
  },
];


const skills = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases & Infrastructure",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "AI & Developer Tools",
    items: ["LangChain", "LLMs", "Vector Databases", "Git", "GitHub"],
  },
];

const ArrowUpRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-emerald-400">
      <span>{number}</span>
      <span className="h-px w-8 bg-emerald-400/40" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b0a] text-[#e9eeeb] selection:bg-emerald-400 selection:text-black">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-48 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.07] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/[0.07]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-mono text-sm font-bold text-emerald-300">
              A.
            </span>
            <span className="text-sm font-semibold tracking-wide">
              AYMAN HUSSAIN
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm transition hover:border-emerald-400/60 hover:bg-emerald-400/5"
          >
            Let&apos;s talk <ArrowUpRight />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-24 md:grid-cols-[1.25fr_0.75fr] md:pb-32 md:pt-32 lg:px-8"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2 text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            SOFTWARE ENGINEER · FULL STACK DEVELOPER
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Building software
            <br />
            that solves
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
              real problems.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m Mohd Ayman Hussain — a software engineer passionate about
            backend systems, scalable applications, and AI-powered products.
            I turn complex ideas into practical software.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#07100b] transition hover:bg-emerald-300"
            >
              Explore my work
              <span className="transition group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </a>
            <a
              href="mailto:mohd.aymanhussain2109@gmail.com"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 text-sm text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.04]"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Hyderabad, India
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <a
              href="https://github.com/ayman2109"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-300"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/ayman-hussaing"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Code-inspired visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-3xl bg-emerald-400/[0.06] blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c110f]/95 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-zinc-500">
                developer.ts
              </span>
              <span className="text-xs text-zinc-600">TS</span>
            </div>

            <div className="overflow-x-auto p-5 font-mono text-[12px] leading-[2.2] sm:p-7 sm:text-sm">
              <div><span className="text-zinc-600">01</span> <span className="text-violet-300">const</span> <span className="text-emerald-300">developer</span> = {"{"}</div>
              <div><span className="text-zinc-600">02</span>   <span className="text-sky-300">name</span>: <span className="text-amber-200">&quot;Ayman Hussain&quot;</span>,</div>
              <div><span className="text-zinc-600">03</span>   <span className="text-sky-300">role</span>: <span className="text-amber-200">&quot;Software Engineer&quot;</span>,</div>
              <div><span className="text-zinc-600">04</span>   <span className="text-sky-300">focus</span>: [</div>
              <div><span className="text-zinc-600">05</span>     <span className="text-amber-200">&quot;Backend Systems&quot;</span>,</div>
              <div><span className="text-zinc-600">06</span>     <span className="text-amber-200">&quot;Microservices&quot;</span>,</div>
              <div><span className="text-zinc-600">07</span>     <span className="text-amber-200">&quot;Applied AI&quot;</span></div>
              <div><span className="text-zinc-600">08</span>   ],</div>
              <div><span className="text-zinc-600">09</span>   <span className="text-sky-300">mindset</span>: <span className="text-amber-200">&quot;Always learning&quot;</span>,</div>
              <div><span className="text-zinc-600">10</span>   <span className="text-sky-300">build</span>: <span className="text-violet-300">async</span> () <span className="text-violet-300">=&gt;</span> {"{"}</div>
              <div><span className="text-zinc-600">11</span>     <span className="text-violet-300">return</span> <span className="text-amber-200">&quot;What&apos;s next?&quot;</span>;</div>
              <div><span className="text-zinc-600">12</span>   {"}"}</div>
              <div><span className="text-zinc-600">13</span> {"}"};</div>
              <div className="mt-4 text-emerald-300">
                <span className="animate-pulse">▍</span> Ready to build something meaningful.
              </div>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-white/[0.08] p-4">
              {["Java", "Spring Boot", "React", "AI / RAG"].map((tag) => (
                <span key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-white/[0.07] px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {[
            { value: "8.75/10", label: "Academic CGPA" },
            { value: "06", label: "Featured projects" },
            { value: "Full Stack", label: "Development focus" },
            { value: "AI + Backend", label: "Core interests" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-7 sm:px-6 sm:py-8">
              <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-zinc-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <SectionLabel number="01">About me</SectionLabel>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Curious by nature.
            <br />
            <span className="text-zinc-500">Engineer by choice.</span>
          </h2>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              I&apos;m a Computer Science graduate from Chaitanya Bharathi
              Institute of Technology, Hyderabad, with a strong interest in
              building reliable, maintainable, and intelligent software.
            </p>
            <p className="mt-5 leading-8 text-zinc-500">
              My work spans full-stack web development, secure backend
              architecture, event-driven microservices, and retrieval-augmented
              generation (RAG). I enjoy understanding how systems work beneath
              the surface — from database queries and API design to asynchronous
              messaging and AI-powered retrieval.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem solving", "System design", "Clean code", "Continuous learning"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <SectionLabel number="02">Selected work</SectionLabel>
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects built to go
              <span className="text-zinc-500"> beyond the basics.</span>
            </h2>
            <span className="text-sm text-zinc-500">03 projects · Engineering & AI</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0f0d] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${project.accent} opacity-60`} />
                <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-5">
                  <span className="font-mono text-sm text-emerald-300">{project.number} / 03</span>
                  <span className="text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300">
                    <ArrowUpRight />
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-medium leading-5 tracking-[0.14em] text-zinc-500">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="mb-3 text-xs font-medium text-zinc-300">Engineering highlights</p>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2.5 text-xs leading-5 text-zinc-500">
                          <span className="mt-1 text-emerald-400">↗</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[10px] text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-zinc-600">
            Project descriptions are based on my development work. Source-code links can be added to each project card.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <SectionLabel number="03">Experience & education</SectionLabel>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
          The journey so far.
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Work experience
            </p>
            <div className="relative border-l border-emerald-400/25 pl-6">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-[#080b0a]" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Full Stack Developer</h3>
                <span className="text-xs text-zinc-500">Nov 2025 – Mar 2026</span>
              </div>
              <p className="mt-1 text-sm text-emerald-300">Exsovert · Hyderabad</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
                <li>• Developed full-stack applications using Next.js, React, and Node.js.</li>
                <li>• Designed and integrated RESTful APIs for frontend and backend communication.</li>
                <li>• Built reusable components, application state management, and validated backend endpoints.</li>
                <li>• Implemented request processing, error handling, and asynchronous API integration.</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Education
            </p>
            <div className="relative border-l border-emerald-400/25 pl-6">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-[#080b0a]" />
              <p className="text-xs text-zinc-500">Oct 2022 – May 2026</p>
              <h3 className="mt-3 text-lg font-semibold">
                B.E. in Computer Science
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Chaitanya Bharathi Institute of Technology
              </p>
              <p className="text-sm text-zinc-400">Hyderabad, India</p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
                <span className="text-2xl font-semibold text-emerald-300">8.75</span>
                <span className="text-xs leading-5 text-zinc-500">
                  CGPA
                  <br />
                  out of 10
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <SectionLabel number="04">Technical toolkit</SectionLabel>
          <div className="mb-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The tools behind
              <br />
              <span className="text-zinc-500">the solutions.</span>
            </h2>
            <p className="max-w-lg text-sm leading-7 text-zinc-400">
              A versatile engineering toolkit spanning application development,
              backend architecture, databases, containerization, and modern AI
              workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <div
                key={group.title}
                className={`rounded-xl border border-white/[0.08] bg-[#0b0f0d] p-5 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-2 text-xs text-zinc-400 transition hover:border-emerald-400/30 hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#0c130f] p-7 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-emerald-400/[0.09] blur-[90px]" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel number="05">Get in touch</SectionLabel>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Have an interesting
                <br />
                <span className="text-emerald-300">problem to solve?</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                I&apos;m always interested in connecting with developers,
                exchanging ideas, and exploring opportunities to build
                meaningful software.
              </p>
              <a
                href="mailto:mohd.aymanhussain2109@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#07100b] transition hover:bg-emerald-300"
              >
                Say hello <ArrowUpRight />
              </a>
            </div>

            <div className="flex flex-col gap-4 text-sm text-zinc-400">
              <a
                href="mailto:mohd.aymanhussain2109@gmail.com"
                className="flex items-center gap-3 transition hover:text-emerald-300"
              >
                <span className="text-emerald-400">@</span>
                mohd.aymanhussain2109@gmail.com
              </a>
              <a
                href="tel:+919515978501"
                className="flex items-center gap-3 transition hover:text-emerald-300"
              >
                <span className="text-emerald-400">↗</span>
                +91 9515978501
              </a>
              <a
                href="https://github.com/ayman2109"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-emerald-300"
              >
                <span className="text-emerald-400">↗</span>
                github.com/ayman2109
              </a>
              <a
                href="https://linkedin.com/in/ayman-hussaing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-emerald-300"
              >
                <span className="text-emerald-400">↗</span>
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#home" className="font-semibold tracking-wide text-zinc-400">
            AYMAN HUSSAIN<span className="text-emerald-400">.</span>
          </a>

          <p>Designed with purpose. Built with code.</p>

          <a
            href="#home"
            className="transition hover:text-emerald-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
