'use client';

import { motion } from 'framer-motion';
import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

export function BigStatementSection() {
  const country = useCountry();
  const isVE = isVenezuela(country);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:py-32">
      {/* Subtle decorative elements */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, hsl(263, 58%, 33%) 0%, transparent 70%)'
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {/* Big number with glow */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span
              className="text-8xl font-extrabold tracking-tight md:text-[10rem]"
              style={{
                background: 'linear-gradient(135deg, hsl(39, 85%, 55%) 0%, hsl(39, 85%, 65%) 50%, hsl(39, 85%, 50%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 20px hsl(39, 85%, 60%, 0.3))'
              }}
            >
              0%
            </span>
          </div>

          {/* Statement */}
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Errores de Cálculo.{' '}
            <span className="text-muted-foreground">Siempre.</span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {isVE
              ? 'Con la tasa BCV automática y conversión en tiempo real, olvida la calculadora y los errores al dar cambio.'
              : 'Con conversión automática y reportes en tiempo real, olvida las hojas de cálculo y los errores manuales.'}
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-2">
            <div className="h-[2px] w-12 rounded-full bg-primary/20" />
            <div
              className="h-2 w-2 rounded-full"
              style={{ background: 'hsl(39, 85%, 60%)' }}
            />
            <div className="h-[2px] w-12 rounded-full bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
