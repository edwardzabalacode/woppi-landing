'use client';

import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: UserPlus,
    title: 'Crea tu cuenta',
    description: 'Registrate gratis con tu email. Sin tarjeta de credito.',
  },
  {
    icon: Settings,
    title: 'Configura tu negocio',
    description: 'Agrega productos, metodos de pago y personaliza tu punto de venta.',
  },
  {
    icon: Rocket,
    title: 'Empieza a vender',
    description: 'Abre tu caja y comienza a registrar ventas desde cualquier dispositivo.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 14 },
  },
};

export function HowItWorksSection() {
  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Comienza en 3 simples pasos
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
        >
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 right-[17%] left-[17%] hidden h-0.5 border-t-2 border-dashed border-primary/20 md:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number circle */}
              <div className="relative z-10 mb-4 flex size-20 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-primary/10">
                <div className="absolute -top-1.5 -right-1.5 flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  {i + 1}
                </div>
                <step.icon className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="max-w-[240px] text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
