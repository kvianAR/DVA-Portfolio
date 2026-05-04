import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

// EDIT: update with your real contact info
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'aditya@example.com', href: 'mailto:aditya@example.com' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/aditya-ranjan', href: 'https://linkedin.com/' },
  { icon: Github, label: 'GitHub', value: '@aditya-ranjan', href: 'https://github.com/' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // EDIT: hook this to a real backend / EmailJS / Formspree
    alert('Thanks! Your message has been received.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <p className="text-center text-gray-500 mb-14">Let's build something amazing together</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4">
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-5 bg-card/60 backdrop-blur border border-white/5 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform">
                  <c.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{c.label}</p>
                  <p className="text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-card/60 backdrop-blur border border-white/5 rounded-2xl p-7 space-y-4">
            <input type="text" required placeholder="Your Name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition" />
            <input type="email" required placeholder="Your Email" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition" />
            <textarea required rows="5" placeholder="Your Message" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition resize-none" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
              className="glow-btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-medium">
              <Send size={18} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
