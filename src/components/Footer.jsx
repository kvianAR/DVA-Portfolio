import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2026 Aditya Ranjan. All rights reserved.</p>
        <div className="flex gap-4">
          {/* EDIT: socials */}
          <a href="https://github.com/" className="text-gray-400 hover:text-primary transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com/" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:aditya@example.com" className="text-gray-400 hover:text-primary transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
