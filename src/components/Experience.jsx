import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

// EDIT: replace with your real experience & education
const timeline = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Freelance / Self-Employed',
    period: '2024 — Present',
    desc: 'Building automation systems, AI assistants, and e-commerce platforms for clients across multiple industries.',
  },
  {
    type: 'work',
    title: 'AI Automation Engineer',
    org: 'Marketing Tech Studio',
    period: '2023 — 2024',
    desc: 'Designed n8n workflows, WhatsApp bots, and AI integrations that automated marketing operations end-to-end.',
  },
  {
    type: 'edu',
    title: 'B.Tech in Computer Science',
    org: 'Your University',
    period: '2020 — 2024',
    desc: 'Specialised in software engineering, web technologies, and applied AI.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-14">My journey so far</p>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {timeline.map((t, i) => {
            const Icon = t.type === 'work' ? Briefcase : GraduationCap;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-10 md:mb-12 flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-dark z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="bg-card/60 backdrop-blur border border-white/5 rounded-xl p-6 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                        <Icon className="text-primary" size={18} />
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">{t.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{t.title}</h3>
                    <p className="text-primary text-sm mb-2">{t.org}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
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
