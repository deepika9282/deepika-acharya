import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const projects = [
  {
    title: 'Saral Sewa',
    category: 'Mobile App',
    subtitle: 'Government Services App',
    desc: 'A Flutter mobile app backed by Django that simplifies access to government services for Nepali citizens through a clean, guided experience.',
    tech: ['Flutter', 'Django', 'REST API'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/deepika9282',
    demo: '#contact',
  },
  {
    title: 'Dello',
    category: 'E-Commerce',
    subtitle: 'Shoe Store',
    desc: 'Responsive online shoe store with a complete shopping cart system, product filtering, and local storage integration.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/deepika9282',
    demo: '#contact',
  },
  {
    title: 'Art Gallery Management',
    category: 'Desktop App',
    subtitle: 'Visitor Tracking',
    desc: 'Java-based desktop system for managing art gallery visitors, ticket bookings, and staff attendance using OOP principles.',
    tech: ['Java', 'OOP', 'Swing'],
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/deepika9282',
    demo: '#contact',
  },
  {
    title: 'Stock Management',
    category: 'Software',
    subtitle: 'Stock Management',
    desc: 'Python-based inventory tracking system designed for small businesses to manage stock levels and sales reporting.',
    tech: ['Python', 'File I/O', 'CLI'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/deepika9282',
    demo: '#contact',
  },
  {
    title: 'Know Your Potential',
    category: 'Web App',
    subtitle: 'Self-Assessment',
    desc: 'Interactive web application helping users identify their professional strengths and career suitability through dynamic queries.',
    tech: ['HTML', 'CSS', 'JS'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/deepika9282',
    demo: '#contact',
  }
];

const filters = ['All', 'Mobile App', 'Web App', 'Desktop App', 'Software'] as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" className="py-8">
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">Projects</p>
          <h2 className="mt-3 text-3xl font-bold flex items-center gap-3 text-[#1f1f2f]">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            A curated selection of projects that reflect my frontend, UI, and problem-solving skills across web and desktop work.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Filter size={16} className="text-slate-400" />
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={filter === activeFilter
                ? 'rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(112,87,247,0.2)]'
                : 'rounded-full border border-[#ddd4ff] bg-white/90 px-4 py-2 text-sm font-semibold text-[#5f56a8] transition-colors hover:bg-[#f4efff]'}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass-card !p-0 overflow-hidden border-[#e7defe] hover:-translate-y-1"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f2f]/90 via-[#1f1f2f]/30 to-transparent opacity-70 transition-opacity group-hover:opacity-80" />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="rounded-full border border-white/30 bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#5f56a8] backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[#e8e0ff] text-[10px] font-bold uppercase tracking-[0.22em] mb-1">{project.subtitle}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#efe9ff] transition-colors">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-slate-600 line-clamp-3 mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[#f0eaff] border border-[#ddd4ff] text-[#5f56a8] font-semibold">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#e7defe]">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_22px_rgba(112,87,247,0.18)] transition-transform hover:-translate-y-0.5">
                  <Github size={14} /> Source Code
                </a>
                <a href={project.demo} className="inline-flex items-center gap-2 rounded-full border border-[#ddd4ff] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5f56a8] transition-transform hover:-translate-y-0.5">
                  <ExternalLink size={14} /> Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
