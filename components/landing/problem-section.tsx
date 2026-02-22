'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

interface ProblemSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  problems: Array<{ text: string }>;
  solution: string;
}

export function ProblemSection({
  eyebrow = '¿Te suena familiar?',
  title,
  subtitle,
  problems,
  solution,
}: ProblemSectionProps) {
  return (
    <section className="bg-slate-950 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400">
            {eyebrow}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto max-w-xl text-base text-slate-400">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-3 rounded-2xl border border-red-500/10 bg-red-500/5 p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-400/70">
              Sin woppi
            </p>
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircle className="mt-0.5 size-5 shrink-0 text-red-500/60" />
                <p className="text-sm leading-relaxed text-slate-300">{p.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400/70">
              Con woppi
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-400" />
              <p className="text-lg font-semibold leading-relaxed text-white">{solution}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
