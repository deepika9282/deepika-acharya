import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

const achievements = [
  {
    title: 'Computer Operator Training',
    issuer: 'Certification Program',
    desc: 'Comprehensive training in office automation, operating systems, and computer fundamentals.',
    icon: ShieldCheck,
    color: 'text-primary',
  },
  {
    title: 'Clash-a-thon Participant',
    issuer: 'Tech Competition',
    desc: 'Participated in a high-intensity coding challenge alongside top talent, solving complex algorithmic problems.',
    icon: Trophy,
    color: 'text-secondary',
  },
  {
    title: 'Academic Excellence',
    issuer: 'Itahari International College',
    desc: 'Consistently maintaining a high standard in coursework and practical labs.',
    icon: Star,
    color: 'text-accent',
  },
];

export default function Achievements() {
  return (
    <section className="glass-card flex flex-col h-full">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">Certifications &amp; Achievements</p>
      <h2 className="mt-3 text-2xl font-bold text-[#1f1f2f]">Recognitions</h2>

      <div className="mt-6 space-y-4">
        {achievements.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-[#e7defe] bg-white/90 p-4 shadow-[0_14px_24px_rgba(111,86,243,0.05)]"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1ebff] ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-[#1f1f2f]">{item.title}</h3>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">{item.issuer}</p>
                  </div>
                  <span className="rounded-full border border-[#ddd4ff] bg-[#f7f3ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#725fde]">
                    Verified
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-auto pt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest leading-none text-slate-500">
        <span>Professional growth</span>
        <Award size={14} />
      </div>
    </section>
  );
}
