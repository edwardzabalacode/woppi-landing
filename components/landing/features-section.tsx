'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Smartphone,
  Globe,
  CreditCard,
  BarChart3,
  Users,
  Zap,
} from 'lucide-react';

import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

const FEATURES_VE = [
  {
    icon: Smartphone,
    title: 'Punto de Venta',
    description: 'Interfaz rápida y táctil para cualquier dispositivo',
  },
  {
    icon: CreditCard,
    title: 'Doble Moneda',
    description: 'USD y VES con tasa BCV automática',
  },
  {
    icon: Globe,
    title: 'Tienda Online',
    description: 'Pedidos por WhatsApp 24/7',
  },
  {
    icon: Users,
    title: 'Programa de Lealtad',
    description: 'Sellos y puntos digitales',
  },
  {
    icon: BarChart3,
    title: 'Reportes',
    description: 'Análisis de ventas en tiempo real',
  },
  {
    icon: Zap,
    title: 'Importación IA',
    description: 'Carga tu menú con una foto',
  },
];

const FEATURES_INTL = [
  {
    icon: Smartphone,
    title: 'Punto de Venta',
    description: 'Interfaz rápida y táctil para cualquier dispositivo',
  },
  {
    icon: CreditCard,
    title: 'Múltiples Monedas',
    description: 'Configura la moneda de tu país fácilmente',
  },
  {
    icon: Globe,
    title: 'Tienda Online',
    description: 'Pedidos por WhatsApp 24/7',
  },
  {
    icon: Users,
    title: 'Programa de Lealtad',
    description: 'Sellos y puntos digitales',
  },
  {
    icon: BarChart3,
    title: 'Reportes',
    description: 'Análisis de ventas en tiempo real',
  },
  {
    icon: Zap,
    title: 'Importación IA',
    description: 'Carga tu menú con una foto',
  },
];

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
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function FeaturesSection() {
  const country = useCountry();
  const FEATURES = isVenezuela(country) ? FEATURES_VE : FEATURES_INTL;

  return (
    <section
      id="funcionalidades"
      className="relative overflow-hidden bg-primary px-4 py-16 md:py-24"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-secondary opacity-10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[hsl(262,83%,58%)] opacity-10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            No es otro sistema de ventas{' '}
            <span className="inline-block">✨</span>
          </h2>
          <p className="mx-auto max-w-xl text-white/70">
            woppi tiene todo lo que necesitas para gestionar tu negocio. Todo en
            un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Device mockups */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Laptop mockup */}
              <div className="relative rounded-xl bg-gray-900 p-2 shadow-2xl">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="Dashboard"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Phone mockup overlapping */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-8 -right-8 w-40 md:w-56"
              >
                <div className="overflow-hidden rounded-[1.5rem] border-4 border-white/20 bg-white shadow-xl">
                  <Image
                    src="/screenshots/pos.png"
                    alt="POS Mobile"
                    width={200}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary/20">
                  <feature.icon className="size-5 text-secondary" />
                </div>
                <h3 className="mb-1 font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
