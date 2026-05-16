import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { downloadResume } from '../lib/resume';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const observedSections: Element[] = [];

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    navLinks.forEach((link) => {
      const target = document.querySelector(link.href);
      if (target) observer.observe(target);
      if (target) observedSections.push(target);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observedSections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleDownload = () => {
    downloadResume();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/75 backdrop-blur-lg border-b border-[#e7defe] py-3 shadow-[0_10px_30px_rgba(111,86,243,0.06)]' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-[#1f1f2f]"
        >
          DA<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-primary',
                activeSection === link.href.replace('#', '') ? 'text-primary' : 'text-slate-600'
              )}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300',
                activeSection === link.href.replace('#', '') ? 'w-full' : 'w-0'
              )} />
            </motion.a>
          ))}
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(112,87,247,0.25)] transition-transform hover:-translate-y-0.5"
          >
            <Download size={16} /> Download CV
          </button>
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-[#e7defe]">
            <a href="https://github.com/deepika9282" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-500 hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/deepika-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-500 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1f1f2f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    activeSection === link.href.replace('#', '') ? 'text-primary' : 'text-slate-700 hover:text-primary'
                  )}
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} /> Download CV
              </button>
              <div className="flex justify-center gap-6 pt-4 border-t border-[#e7defe]">
                <a href="https://github.com/deepika9282" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/deepika-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
