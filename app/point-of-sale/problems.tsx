'use client';

import { motion } from 'framer-motion';
import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

const PROBLEMS_VE = {
  title: 'Vender en Venezuela tiene demasiadas fricciones',
  pains: [
    'Calculas la tasa BCV a mano con cada venta y a veces te equivocas',
    'Tus cierres de caja no cuadran y no sabes dónde está la diferencia',
    'Tu sistema solo funciona en una PC específica del local',
    'No sabes en tiempo real cuánto llevas vendido ni qué producto vende más',
  ],
};

const PROBLEMS_INTL = {
  title: 'Gestionar un negocio no debería ser tan complicado',
  pains: [
    'Usas hojas de cálculo o cuadernos para llevar tu inventario y ventas',
    'Tus cierres de caja no cuadran y no sabes dónde está la diferencia',
    'Tu sistema solo funciona en una PC específica del local',
    'No sabes en tiempo real cuánto llevas vendido ni qué producto vende más',
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function PuntoDeVentaProblems() {
  const country = useCountry();
  const { title, pains } = isVenezuela(country) ? PROBLEMS_VE : PROBLEMS_INTL;

  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:py-24"
      style={{
        background: 'linear-gradient(180deg, hsl(263, 58%, 25%) 0%, hsl(263, 58%, 28%) 50%, hsl(263, 58%, 30%) 100%)'
      }}
    >
      {/* Decorative orbs - continuing from hero */}
      <div
        className="absolute -left-[150px] top-[20%] h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background: 'hsl(262, 83%, 58%)',
          filter: 'blur(100px)'
        }}
      />
      <div
        className="absolute -right-[100px] bottom-[10%] h-[300px] w-[300px] rounded-full opacity-15"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">¿Te suena familiar?</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {pains.map((pain) => (
            <motion.div
              key={pain}
              variants={itemVariants}
              className="flex items-start gap-3 rounded-xl border border-red-500/20 p-4 backdrop-blur-sm"
              style={{
                background: 'rgba(239, 68, 68, 0.08)'
              }}
            >
              <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">✕</div>
              <p className="text-sm leading-relaxed text-white/70">{pain}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl border border-secondary/30 p-6 text-center backdrop-blur-sm"
          style={{
            background: 'rgba(233, 160, 51, 0.1)'
          }}
        >
          <p className="text-lg font-semibold text-white">
            WOPPI resuelve todo eso — y funciona desde el celular que ya tienes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
