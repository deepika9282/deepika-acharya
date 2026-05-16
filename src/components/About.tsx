import { motion } from 'framer-motion';
import { Code2, LayoutPanelLeft, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

const whatIDo = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Build responsive interfaces with React, modern CSS, and attention to interaction quality.',
  },
  {
    title: 'UI/UX Design',
    icon: Sparkles,
    description: 'Shape clean, intuitive layouts with a focus on hierarchy, accessibility, and polish.',
  },
  {
    title: 'Web Application Development',
    icon: LayoutPanelLeft,
    description: 'Develop practical web solutions that balance usability, performance, and maintainability.',
  },
];

const education = [
  {
    year: '2024 - Present',
    title: 'BSc Computing',
    place: 'Itahari International College',
    detail: 'Building a strong foundation in software development, problem solving, and team-based project work.',
  },
  {
    year: '2022',
    title: 'Science',
    place: 'Sushma Godawari',
    detail: 'Developed analytical thinking and a structured approach to solving technical problems.',
  },
  {
    year: 'Graduated',
    title: 'SEE',
    place: 'Everest Children Home',
    detail: 'Established consistency, discipline, and a habit of learning through practical work.',
  },
];

export default function About() {
  return (
    <section id="about" className="glass-card !p-8 sm:!p-10">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">About Me</p>
          <h2 className="mt-3 text-3xl font-bold flex items-center gap-3 text-[#1f1f2f]">
            Professional Profile <span className="text-primary">&amp; Focus</span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-600 leading-8 text-base">
            I am a computing student and frontend developer who enjoys turning ideas into clean, functional digital experiences. My work blends thoughtful UI design with practical implementation, so the final product feels polished, responsive, and easy to use.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whatIDo.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-[#e7defe] bg-white/90 p-5 shadow-[0_14px_24px_rgba(111,86,243,0.05)] hover:-translate-y-1 transition-transform"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1ebff] text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-[#1f1f2f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">Education Timeline</span>
              <span className="h-px flex-1 bg-[#e7defe]" />
            </div>

            <div className="mt-6 space-y-6 border-l border-[#e7defe] pl-6">
              {education.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border-4 border-[#f4f0ff] bg-primary shadow-[0_0_0_1px_rgba(112,87,247,0.12)]" />
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">{item.year}</div>
                  <h3 className="mt-1 text-lg font-bold text-[#1f1f2f]">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500">{item.place}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{item.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e7defe] bg-white/80 p-6 shadow-[0_18px_30px_rgba(111,86,243,0.05)]">
          <div className="flex items-center gap-3">
            <GraduationCap size={18} className="text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c78ee]">Focus Areas</h3>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              I work best when a project needs a clean visual system, a reliable frontend implementation, and clear communication around the user experience.
            </p>
            <p>
              My approach is practical and detail-oriented: understand the problem, design the interface, build the interaction, and refine the experience until it feels professional.
            </p>
          </div>

          <div className="mt-8 rounded-3xl bg-[#f7f3ff] p-5 border border-[#e7defe]">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8c78ee]">
              <ArrowRight size={16} /> What I Bring
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A strong sense of visual structure, an eagerness to learn, and the ability to transform classroom experience into practical portfolio work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
