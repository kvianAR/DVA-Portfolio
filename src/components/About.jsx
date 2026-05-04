import { motion } from 'framer-motion';
import { Sparkles, Bot, ShoppingCart, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Sparkles, label: 'Web Development' },
  { icon: Bot, label: 'AI Assistants' },
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: TrendingUp, label: 'Marketing Tech' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-12">A quick intro to what I do</p>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card/60 backdrop-blur border border-white/5 rounded-2xl p-8 md:p-10">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {/* EDIT: about paragraph */}
            I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with a strong
            focus on building <span className="text-accent">automation systems</span>, AI-driven assistants, and
            scalable e-commerce platforms. Over the years, I have crafted full-featured websites,
            event-driven workflow automation tools, WhatsApp bots for store analytics, and high-converting
            marketing pages. I love combining clean engineering with smart marketing tech to deliver
            products that look great and perform even better.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((h, i) => (
              <motion.div key={h.label} whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-dark/60 border border-white/5 hover:border-primary/40 transition-all">
                <h.icon className="text-primary" size={28} />
                <span className="text-sm text-gray-300 text-center">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
