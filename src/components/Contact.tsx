import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'deepika071221@gmail.com', href: 'mailto:deepika071221@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+977-9803071323', href: 'tel:+9779803071323' },
  { icon: Github, label: 'GitHub', value: 'deepika9282', href: 'https://github.com/deepika9282' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/deepika-acharya', href: 'https://www.linkedin.com/in/deepika-acharya/' },
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Thank you for your message. Deepika will get back to you soon!');
    reset();
  };

  return (
    <section id="contact" className="py-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8c78ee]">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1f1f2f]">
              Let&apos;s Build <span className="text-primary">Something Together</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Whether you have a project idea, an internship opportunity, or a collaboration in mind, I&apos;d be glad to connect.
            </p>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
            I usually respond within 24–48 hours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-3xl border border-[#e7defe] bg-white/90 p-4 shadow-[0_14px_24px_rgba(111,86,243,0.05)] transition-transform hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1ebff] text-primary">
                  <info.icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] leading-none text-slate-400">{info.label}</div>
                  <div className="truncate text-sm font-semibold text-[#1f1f2f] transition-colors group-hover:text-primary">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="soft-card rounded-[32px] p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block pl-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full rounded-2xl border border-[#e7defe] bg-white px-4 py-3 text-sm text-[#1f1f2f] outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
                  placeholder="Deepika Acharya"
                />
                {errors.name && <span className="mt-1 block text-[10px] text-red-500">{errors.name.message}</span>}
              </div>

              <div>
                <label className="mb-2 block pl-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' },
                  })}
                  className="w-full rounded-2xl border border-[#e7defe] bg-white px-4 py-3 text-sm text-[#1f1f2f] outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="mt-1 block text-[10px] text-red-500">{errors.email.message}</span>}
              </div>
            </div>

            <div>
              <label className="mb-2 block pl-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Subject</label>
              <input
                {...register('subject', { required: 'Subject is required' })}
                className="w-full rounded-2xl border border-[#e7defe] bg-white px-4 py-3 text-sm text-[#1f1f2f] outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
                placeholder="Internship opportunity, freelance project, or collaboration"
              />
              {errors.subject && <span className="mt-1 block text-[10px] text-red-500">{errors.subject.message}</span>}
            </div>

            <div>
              <label className="mb-2 block pl-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={5}
                className="w-full resize-none rounded-2xl border border-[#e7defe] bg-white px-4 py-3 text-sm text-[#1f1f2f] outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
                placeholder="Tell me a little about your project or opportunity..."
              />
              {errors.message && <span className="mt-1 block text-[10px] text-red-500">{errors.message.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(112,87,247,0.22)] disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
