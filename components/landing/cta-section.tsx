'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const REGISTER_URL = 'https://app.woppi.me/register';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:py-32">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(263, 58%, 33%) 0%, transparent 50%)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5"
          style={{
            background: 'linear-gradient(135deg, hsl(263, 58%, 97%) 0%, hsl(39, 85%, 97%) 100%)'
          }}
        >
          <Sparkles className="size-4 text-secondary" />
          <span className="text-sm font-medium text-primary">Registro en menos de 2 minutos</span>
        </motion.div>

        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Prueba woppi Gratis
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Comienza hoy y gestiona tu negocio de la forma más simple.
        </p>
        <p className="mb-8 text-sm text-muted-foreground/70">
          Sin tarjeta de crédito · Sin contrato · Cancela cuando quieras
        </p>

        <a
          href={REGISTER_URL}
          className="group inline-flex h-14 items-center gap-2 rounded-full px-10 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, hsl(263, 58%, 33%) 0%, hsl(262, 83%, 45%) 100%)',
            boxShadow: '0 8px 30px hsl(263, 58%, 33%, 0.3)'
          }}
        >
          Comenzar
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

      </motion.div>
    </section>
  );
}
