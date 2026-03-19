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
    title: 'Herramientas IA',
    description: 'Potencia tu negocio con inteligencia artificial',
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
    title: 'Herramientas IA',
    description: 'Potencia tu negocio con inteligencia artificial',
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
      className="relative overflow-hidden px-4 py-16 md:py-24"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 100%, hsl(262, 83%, 45%) 0%, hsl(263, 58%, 33%) 50%, hsl(263, 58%, 28%) 100%)'
      }}
    >
      {/* Background decorations - matching hero */}
      <div
        className="absolute -right-[100px] top-[20%] h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(120px)'
        }}
      />
      <div
        className="absolute -left-[100px] bottom-[10%] h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background: 'hsl(262, 83%, 58%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

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
              {/* Laptop mockup - improved styling */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 p-2"
                style={{
                  background: 'linear-gradient(145deg, hsl(263, 58%, 20%) 0%, hsl(263, 58%, 15%) 100%)',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.4)'
                }}
              >
                <div className="overflow-hidden rounded-xl">
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
                <div
                  className="overflow-hidden rounded-[1.5rem] border-2 border-white/20"
                  style={{
                    background: 'white',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }}
                >
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
                className="group rounded-xl border border-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  className="mb-3 flex size-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-300 group-hover:border-secondary/30"
                  style={{
                    background: 'rgba(233, 160, 51, 0.15)'
                  }}
                >
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
