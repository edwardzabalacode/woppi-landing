'use client';

import { ArrowRight, MessageCircle, ShoppingCart, Smartphone, BarChart3, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, type Variants, type Easing } from 'framer-motion';
import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

const SYNONYMS = [
  'Punto de Venta',
  'Facturación',
  'Inventario',
  'Cobros y Pagos',
];

function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % SYNONYMS.length);
        setVisible(true);
      }, 180);
    }, 2500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      style={{
        display: 'inline-block',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      }}
    >
      {SYNONYMS[index]}
    </span>
  );
}

const REGISTER_URL = 'https://app.woppi.me/register';

const HERO_POINTS_VE = [
  {
    icon: ShoppingCart,
    text: 'Punto de venta con doble moneda y tasa BCV automática',
  },
  {
    icon: Smartphone,
    text: 'Úsalo desde tu celular, tablet o computador',
  },
  {
    icon: BarChart3,
    text: 'Conoce las estadísticas de tu negocio en tiempo real',
  },
];

const HERO_POINTS_INTL = [
  {
    icon: Globe,
    text: 'Todo el control de tu negocio en un solo lugar',
  },
  {
    icon: Smartphone,
    text: 'Úsalo desde tu celular, tablet o computador',
  },
  {
    icon: BarChart3,
    text: 'Reportes y estadísticas de tu negocio en tiempo real',
  },
];

// Animation easing
const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export function HeroSection() {
  const country = useCountry();
  const HERO_POINTS = isVenezuela(country) ? HERO_POINTS_VE : HERO_POINTS_INTL;
  const badgeText = isVenezuela(country) ? 'Sistema #1 en Venezuela' : 'Sistema #1 para tu negocio';

  return (
    <>
      <section className="relative min-h-screen overflow-x-clip bg-primary">
        {/* Enhanced background with gradient and orbs */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 50% 0%, hsl(262, 83%, 45%) 0%, hsl(263, 58%, 33%) 50%, hsl(263, 58%, 25%) 100%)'
          }}
        />

        {/* Decorative orbs */}
        <div
          className="absolute -right-[100px] -top-[200px] h-[600px] w-[600px] rounded-full opacity-10"
          style={{
            background: 'hsl(39, 85%, 60%)',
            filter: 'blur(120px)'
          }}
        />
        <div
          className="absolute -left-[150px] bottom-[100px] h-[400px] w-[400px] rounded-full opacity-15"
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

        {/* Desktop layout */}
        <motion.div
          className="relative z-10 mx-auto hidden h-full max-w-7xl items-center gap-12 px-8 pt-32 pb-16 md:flex lg:gap-16 xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text content */}
          <div className="flex w-[45%] shrink-0 flex-col">
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 backdrop-blur-xl"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              variants={itemVariants}
            >
              <Sparkles className="size-3.5 text-secondary" />
              <span className="text-sm font-medium text-white/90">{badgeText}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight text-white"
              variants={itemVariants}
            >
              Sistema de{' '}
              <span className="relative inline-block">
                <span className="relative z-10"><AnimatedWord /></span>
                <span
                  className="absolute -inset-x-2 bottom-1 top-[60%] -z-0 rounded-md"
                  style={{
                    background: 'linear-gradient(90deg, hsl(39, 85%, 60%, 0.5) 0%, hsl(39, 85%, 70%, 0.25) 100%)',
                    boxShadow: '0 0 30px hsl(39, 85%, 60%, 0.3)'
                  }}
                />
              </span>
              <br />
              para tu negocio
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-8 max-w-md text-lg leading-relaxed text-white/70"
              variants={itemVariants}
            >
              Gestiona tu negocio de la forma más fácil.{' '}
              <span className="font-medium text-white/90">De cero a woppi!</span>
            </motion.p>

            {/* Feature points */}
            <motion.div className="mb-10 space-y-4" variants={itemVariants}>
              {HERO_POINTS.map((point, idx) => (
                <motion.div
                  key={point.text}
                  className="group flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 backdrop-blur-sm transition-all duration-300 group-hover:border-white/25"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <point.icon className="size-5 text-secondary" />
                  </div>
                  <p className="text-[15px] font-medium text-white/80">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="mb-10 flex items-center gap-3" variants={itemVariants}>
              <a
                href={REGISTER_URL}
                className="group inline-flex h-12 items-center gap-2 rounded-full px-7 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, hsl(39, 85%, 65%) 0%, hsl(39, 85%, 55%) 100%)',
                  boxShadow: '0 4px 20px hsl(39, 85%, 60%, 0.4)'
                }}
              >
                Prueba ya
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={REGISTER_URL}
                className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/20 px-7 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <MessageCircle className="size-4" />
                Contáctanos
              </a>
            </motion.div>
          </div>

          {/* Right: Screenshots composition */}
          <div className="relative flex flex-1 items-center justify-center" style={{ perspective: '1000px' }}>
            <div className="relative h-[550px] w-full max-w-[750px] lg:h-[600px] xl:h-[650px]">

              {/* Secondary screenshot - left */}
              <motion.div
                className="absolute left-0 top-[10%] z-10 w-[280px]"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
                style={{
                  transform: 'rotateY(8deg) rotateZ(-3deg)',
                  animation: 'hero-float 4s ease-in-out infinite'
                }}
              >
                <Image
                  src="/screenshots/pos.png"
                  alt="woppi punto de venta"
                  width={280}
                  height={200}
                  className="rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                />
              </motion.div>

              {/* Main screenshot - center */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-20 w-[500px] -translate-x-1/2 -translate-y-1/2 lg:w-[550px]"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
              >
                <Image
                  src="/screenshots/dashboard.png"
                  alt="woppi dashboard"
                  width={550}
                  height={380}
                  className="rounded-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
                  priority
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute right-[10%] top-[20%] z-30 flex items-center gap-2 rounded-xl px-4 py-3 shadow-xl backdrop-blur-xl"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  animation: 'hero-float 4s ease-in-out infinite 1s'
                }}
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-green-100">
                  <Sparkles className="size-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">100% gratis</p>
                  <p className="text-xs text-gray-500">para empezar</p>
                </div>
              </motion.div>

              {/* Tertiary screenshot - right */}
              <motion.div
                className="absolute -right-[20px] bottom-[15%] w-[260px]"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: easeOut }}
                style={{
                  zIndex: 15,
                  transform: 'rotateY(-8deg) rotateZ(2deg)',
                  animation: 'hero-float 4s ease-in-out infinite 2s'
                }}
              >
                <Image
                  src="/screenshots/fidelidad.png"
                  alt="woppi programa de lealtad"
                  width={260}
                  height={180}
                  className="rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                />
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Mobile layout */}
        <motion.div
          className="relative z-10 flex flex-col px-6 pt-28 pb-12 md:hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-8">
            {/* Badge */}
            <motion.div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1 backdrop-blur-xl"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              variants={itemVariants}
            >
              <Sparkles className="size-3 text-secondary" />
              <span className="text-xs font-medium text-white/90">{badgeText}</span>
            </motion.div>

            <motion.h1
              className="mb-4 text-[36px] font-extrabold leading-[1.05] tracking-tight text-white"
              variants={itemVariants}
            >
              Sistema de{' '}
              <span className="relative inline-block">
                <span className="relative z-10"><AnimatedWord /></span>
                <span
                  className="absolute -inset-x-1 bottom-0.5 top-[60%] -z-0 rounded"
                  style={{
                    background: 'linear-gradient(90deg, hsl(39, 85%, 60%, 0.5) 0%, hsl(39, 85%, 70%, 0.25) 100%)',
                    boxShadow: '0 0 20px hsl(39, 85%, 60%, 0.25)'
                  }}
                />
              </span>
              <br />
              para tu negocio
            </motion.h1>

            <motion.p
              className="mb-6 max-w-sm text-base leading-relaxed text-white/70"
              variants={itemVariants}
            >
              Gestiona tu negocio de la forma más fácil.{' '}
              <span className="font-medium text-white/90">De cero a woppi!</span>
            </motion.p>

            {/* Feature points */}
            <motion.div className="mb-8 space-y-3" variants={itemVariants}>
              {HERO_POINTS.map((point, idx) => (
                <motion.div
                  key={point.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                >
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/15 backdrop-blur-sm"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <point.icon className="size-4 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-white/80">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="mb-8 flex flex-col gap-3 sm:flex-row" variants={itemVariants}>
              <a
                href={REGISTER_URL}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(180deg, hsl(39, 85%, 65%) 0%, hsl(39, 85%, 55%) 100%)',
                  boxShadow: '0 4px 20px hsl(39, 85%, 60%, 0.4)'
                }}
              >
                Prueba ya
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={REGISTER_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-white/30 active:scale-[0.98]"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <MessageCircle className="size-4" />
                Contáctanos
              </a>
            </motion.div>
          </div>

          {/* Mobile image */}
          <motion.div
            className="relative mx-auto w-full max-w-[380px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Image
              src="/screenshots/dashboard.png"
              alt="woppi sistema de punto de venta"
              width={380}
              height={260}
              className="rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Float animation keyframes */}
      <style jsx global>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}
