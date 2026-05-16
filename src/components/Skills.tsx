import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, LayoutPanelTop, Sparkles } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: LayoutPanelTop,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Programming',
    icon: Code2,
    skills: ['Java', 'Python', 'OOP'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['SQL'],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Soft Skills',
    icon: Sparkles,
    skills: ['Teamwork', 'Problem Solving', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="glass-card flex flex-col h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">Tech Stack</p>
      <h2 className="mt-3 text-2xl font-bold text-[#1f1f2f]">Skills & Tools</h2>

      <div className="mt-6 grid gap-4">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.08 }}
            className="rounded-3xl border border-[#e7defe] bg-white/90 p-5 shadow-[0_14px_24px_rgba(111,86,243,0.05)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f1ebff] text-primary">
                <group.icon size={18} />
              </span>
              <h3 className="text-base font-bold text-[#1f1f2f]">{group.category}</h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-[#ddd4ff] bg-[#f7f3ff] px-4 py-2 text-sm font-medium text-[#5f56a8] transition-colors hover:bg-[#efe8ff]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[#e7defe] bg-[#f7f3ff] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
        Continuously learning and refining
      </div>
    </section>
  );
}
