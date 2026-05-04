import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for Work
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="gradient-text">Aditya Ranjan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Full Stack Developer | AI Automation Builder | Marketing Tech Enthusiast
          </p>
          <p className="text-gray-500 mb-8 max-w-xl leading-relaxed">
            {/* EDIT: short intro paragraph */}
            I build modern web applications, intelligent automation workflows, and AI-powered tools
            that help businesses grow. Passionate about creating premium digital experiences
            blended with smart marketing technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects"
              className="glow-btn group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-medium">
              <Code2 size={18} /> View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact"
              className="flex items-center gap-2 border border-white/20 hover:border-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-all">
              <Mail size={18} /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT — Avatar / placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/40 bg-gradient-to-br from-card to-dark flex items-center justify-center overflow-hidden animate-float">
              {/* EDIT: replace with <img src="/avatar.png" alt="Aditya" className="w-full h-full object-cover" /> */}
              <span className="text-7xl md:text-8xl font-extrabold gradient-text">AR</span>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
