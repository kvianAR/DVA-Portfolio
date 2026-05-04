import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MapPin,
  Code2,
  ExternalLink,
  BookOpen,
  BarChart3,
  Wrench,
} from "lucide-react";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "JavaScript",
  "Python",
  "n8n",
  "AI Automation",
];

const projects = [
  {
    title: "Uber Tableau",
    desc: "Interactive Tableau dashboard dissecting Uber ride data — tracks trip demand patterns, revenue trends, and peak-hour surges across city zones. Univariate to multivariate breakdowns surface the story behind every ride.",
    tech: "Tableau",
    demo: "https://public.tableau.com/app/profile/aditya.ranjan7154/viz/Uber-Analysis-Dashboard/Univariateanalysis",
  },
  {
    title: "WhatsApp AI Store Analytics Assistant",
    desc: "AI assistant that helps store owners ask questions about revenue, sales, stock, and daily performance via WhatsApp.",
    tech: "AI / n8n",
  },
  {
    title: "E-commerce Website with Admin Panel",
    desc: "Full-stack e-commerce system with product listing, cart, checkout, admin panel, and stock management.",
    tech: "MERN Stack",
  },
  {
    title: "Salon Marketing Website",
    desc: "Premium salon website designed for bookings, service showcase, offers, and local brand awareness.",
    tech: "React / Tailwind",
    demo: "https://www.themaxxsalon.shop/",
  },
];

const techStack = [
  "React Frontend",
  "Node.js Backend",
  "Express APIs",
  "PostgreSQL",
  "MongoDB",
  "Prisma ORM",
  "Tailwind CSS",
  "GitHub",
  "Postman",
  "n8n Automation",
  "AI Assistants",
  "WhatsApp Bot",
];

function ContributionGraph() {
  const boxes = Array.from({ length: 180 }, (_, i) => {
    const levels = [
      "bg-green-950",
      "bg-green-900",
      "bg-green-700",
      "bg-green-500",
    ];
    return levels[(i * 7 + 3) % levels.length];
  });

  return (
    <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
      <div className="mb-3 flex justify-between text-xs text-gray-400">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
          (m) => (
            <span key={m}>{m}</span>
          )
        )}
      </div>

      <div className="grid grid-cols-[repeat(30,1fr)] gap-2">
        {boxes.map((color, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-sm ${color} hover:ring-1 hover:ring-green-400`}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-400">
        <span>Less</span>
        <span className="h-3 w-3 rounded-sm bg-green-950"></span>
        <span className="h-3 w-3 rounded-sm bg-green-900"></span>
        <span className="h-3 w-3 rounded-sm bg-green-700"></span>
        <span className="h-3 w-3 rounded-sm bg-green-500"></span>
        <span>More</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#0d1117] px-6 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
        {/* LEFT SIDEBAR */}
        <aside className="lg:sticky lg:top-8 lg:h-fit">
          <div className="flex flex-col items-start">
            {/* Replace this with your own profile image */}
            <div className="mb-6 h-72 w-72 overflow-hidden rounded-full border border-green-900 bg-gradient-to-br from-blue-400 to-blue-700 shadow-[0_0_35px_rgba(34,197,94,0.25)]">
              <div className="flex h-full w-full items-center justify-center text-8xl font-bold text-white">
                A
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-200">Aditya Ranjan</h1>
            <p className="mt-1 text-xl text-gray-400">@kvianAR</p>

            <p className="mt-5 max-w-sm leading-7 text-gray-300">
              Full Stack Developer | AI Automation | React, Node.js, SQL |
              Building smart web and automation systems.
            </p>

            <div className="mt-6 space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <MapPin size={18} /> India
              </p>
              <a className="flex items-center gap-3 text-blue-400 hover:underline" href="https://www.linkedin.com/in/aditya-ranjan-37a827323/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="flex items-center gap-3 text-blue-400 hover:underline" href="https://github.com/kvianAR" target="_blank" rel="noopener noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>

            <div className="my-7 h-px w-full bg-[#30363d]" />

            <p className="flex items-center gap-2 text-gray-300">
              <BookOpen size={18} />
              <b>12</b> repos on GitHub
            </p>

            <div className="my-7 h-px w-full bg-[#30363d]" />

            <h2 className="mb-4 font-semibold text-gray-200">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#30363d] bg-[#13233a] px-3 py-1 text-sm text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section>
          <div className="mb-6 flex items-center gap-3 border-b border-[#30363d] pb-4">
            <BarChart3 size={22} />
            <h2 className="text-2xl font-bold text-gray-200">
              Full Stack & AI Automation Work
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                className="rounded-xl border border-[#30363d] bg-[#161b22] p-5 transition hover:border-green-700 hover:shadow-[0_0_25px_rgba(34,197,94,0.12)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Code2 size={20} className="text-gray-400" />
                  <h3 className="text-lg font-semibold text-blue-400">
                    {project.title}
                  </h3>
                </div>

                <p className="leading-6 text-gray-400">{project.desc}</p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="h-3 w-3 rounded-full bg-orange-400"></span>
                    {project.tech}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-green-700 bg-green-900/30 px-3 py-1 text-sm text-green-400 hover:bg-green-900/60"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-green-700 bg-green-900/30 px-3 py-1 text-sm text-green-400 hover:bg-green-900/60"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 mb-6 flex items-center gap-3 border-b border-[#30363d] pb-4">
            <BookOpen size={22} />
            <h2 className="text-2xl font-bold text-gray-200">Contributions</h2>
          </div>

          <ContributionGraph />

          <div className="mt-10 mb-6 flex items-center gap-3 border-b border-[#30363d] pb-4">
            <Wrench size={22} />
            <h2 className="text-2xl font-bold text-gray-200">Tech Stack</h2>
          </div>

          <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-green-900 bg-green-900/20 px-5 py-2 text-green-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
