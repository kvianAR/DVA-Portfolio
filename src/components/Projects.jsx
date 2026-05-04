import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// EDIT: update GitHub & live demo URLs
const projects = [
  {
    title: 'Uber Tableau',
    desc: 'Interactive Tableau dashboard dissecting Uber ride data — tracks trip demand patterns, revenue trends, and peak-hour surges across city zones. Univariate to multivariate breakdowns surface the story behind every ride.',
    stack: ['Tableau'],
    demo: 'https://public.tableau.com/app/profile/aditya.ranjan7154/viz/Uber-Analysis-Dashboard/Univariateanalysis'
  },
  {
    title: 'E-commerce Website with Admin Panel',
    desc: 'Full-featured e-commerce store with product management, payment integration, order tracking, and a complete admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    // demo: '#',
  },
  {
    title: 'SectionB_G12_Employee_Attrition',
    desc: 'Full-featured e-commerce store with product management, payment integration, order tracking, and a complete admin dashboard.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter Notebook', 'Scikit-Learn'],
    demo: 'https://github.com/kvianAR/SectionB_G12_Employee_Attrition',
  },
  {
    title: 'Salon Marketing Website / Portfolio',
    desc: 'High-converting marketing landing page for a salon brand with smooth animations, booking system, and SEO-optimised structure.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    demo: 'https://www.themaxxsalon.shop/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-14">A selection of my recent work</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card/60 backdrop-blur border border-white/5 rounded-2xl p-7 hover:border-primary/40 transition-all overflow-hidden">
              {/* glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed relative z-10">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {p.stack.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 relative z-10">
                <a href={p.github} className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-white/15 hover:border-white hover:bg-white/5 transition-all">
                  <Github size={16} /> GitHub
                </a>
                <a href={p.demo} className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/40 transition-all">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
