import { Github, Mail, Linkedin, ArrowUp, Download } from 'lucide-react';
import { downloadResume } from '../lib/resume';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 border-t border-[#e7defe] bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.6fr] md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter mb-4 text-[#1f1f2f]">
              DA<span className="text-primary">.</span>
            </a>
            <p className="text-slate-500 text-sm text-center md:text-left max-w-sm leading-7">
              Building polished frontends and practical digital experiences with a soft visual identity and a professional finish.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee] mb-4 text-center md:text-left">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-600">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee] mb-4 text-center md:text-left">Connect</h3>
            <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
              <a href="https://github.com/deepika9282" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 glass rounded-xl hover:text-primary transition-colors text-slate-600">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/deepika-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 glass rounded-xl hover:text-primary transition-colors text-slate-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:deepika071221@gmail.com" aria-label="Email" className="p-3 glass rounded-xl hover:text-primary transition-colors text-slate-600">
                <Mail size={20} />
              </a>
              <button type="button" onClick={downloadResume} aria-label="Download CV" className="p-3 glass rounded-xl hover:text-primary transition-colors text-slate-600">
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e7defe] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest font-bold">
          <div>© 2026 Deepika Acharya. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <button onClick={scrollToTop} className="inline-flex items-center gap-2 rounded-full border border-[#ddd4ff] bg-white/80 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-slate-500 hover:text-primary transition-colors" type="button">
              <ArrowUp size={14} /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
