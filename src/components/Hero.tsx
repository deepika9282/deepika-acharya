import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { downloadResume } from '../lib/resume';
import profileImage from '../../Assets/Deepika.jpeg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[#e8e0ff] bg-[#f8f6ff] px-6 py-8 shadow-[0_32px_90px_rgba(109,91,255,0.14)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
      <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#ede7ff] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#efe9ff] to-transparent" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[64px_minmax(0,1fr)_minmax(280px,360px)] lg:gap-12">
        <div className="hidden lg:flex flex-col items-center gap-4 text-[#8d79ef]">
          <a href="https://github.com/deepika9282" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8ccff] bg-white/80 transition-transform hover:-translate-y-0.5">
            <Github size={14} />
          </a>
          <a href="https://www.linkedin.com/in/deepika-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8ccff] bg-white/80 transition-transform hover:-translate-y-0.5">
            <Linkedin size={14} />
          </a>
        </div>

        <div className="relative max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8c78ee]">
            Frontend Developer & Computing Student
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="mt-4 text-4xl font-bold tracking-tight text-[#1f1f2f] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Deepika Acharya
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }} className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            I build polished, responsive interfaces and practical web applications with a strong focus on clarity, usability, and detail. I&apos;m currently studying computing while sharpening my frontend development skills.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }} className="mt-8 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#7057f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(112,87,247,0.3)]">
              View Projects <ArrowRight size={16} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5f56a8] shadow-[0_10px_20px_rgba(93,75,180,0.08)] border border-[#ddd4ff]">
              Contact Me
            </motion.a>
            <button type="button" onClick={downloadResume} className="inline-flex items-center gap-2 rounded-full border border-[#ddd4ff] bg-transparent px-6 py-3 text-sm font-semibold text-[#5f56a8] transition-transform hover:-translate-y-0.5">
              <Download size={16} /> Download CV
            </button>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['React', 'JavaScript', 'UI/UX', 'Problem Solving'].map((item) => (
              <span key={item} className="rounded-full border border-[#ddd4ff] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#725fde] shadow-[0_10px_18px_rgba(111,86,243,0.05)]">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm font-medium text-[#8d79ef] lg:mt-10">
            <span className="h-px w-10 bg-[#d9ceff]" />
            <span>Scroll down</span>
            <span>↓</span>
          </div>

          <div className="mt-8 flex gap-3 text-[#8d79ef] lg:hidden">
            <a href="https://github.com/deepika9282" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8ccff] bg-white/90">
              <Github size={15} />
            </a>
            <a href="https://www.linkedin.com/in/deepika-acharya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8ccff] bg-white/90">
              <Linkedin size={15} />
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 24, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.12 }} className="relative mx-auto w-full max-w-[320px] lg:justify-self-end">
          <div className="absolute inset-0 rounded-[46px] bg-[#6f56f3] shadow-[0_28px_70px_rgba(111,86,243,0.3)]" />
          <div className="relative overflow-hidden rounded-[46px] bg-[#6f56f3] p-4">
            <div className="absolute inset-x-10 top-8 h-10 rounded-full bg-white/20 blur-2xl" />
            <img
              src={profileImage}
              alt="Portrait of Deepika Acharya"
              loading="eager"
              className="aspect-[0.92] w-full rounded-[38px] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
