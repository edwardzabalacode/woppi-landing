'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap } from 'lucide-react';
import Image from 'next/image';
import { useGeoContent } from './geo-content';

const REGISTER_URL = 'https://app.woppi.me/register';

export function PosHero() {
  const { hero } = useGeoContent();

  return (
    <section className="relative overflow-hidden pt-28 pb-0 md:pt-36">
      {/* Background gradient - continues into next section */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(262, 83%, 40%) 0%, hsl(263, 58%, 33%) 30%, hsl(263, 58%, 28%) 70%, hsl(263, 58%, 25%) 100%)'
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(120px)'
        }}
      />
      <div
        className="absolute -right-[100px] top-[40%] h-[400px] w-[400px] rounded-full opacity-15"
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

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <Zap className="size-3.5 text-secondary" />
          <span className="text-sm font-medium text-white/90">Punto de Venta · woppi</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Cobra más rápido.<br />
          <span
            style={{
              background: 'linear-gradient(135deg, hsl(39, 85%, 60%) 0%, hsl(39, 85%, 70%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {hero.headline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={REGISTER_URL}
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, hsl(39, 85%, 60%) 0%, hsl(39, 85%, 50%) 100%)',
              boxShadow: '0 8px 30px hsl(39, 85%, 60%, 0.4)'
            }}
          >
            Comenzar gratis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-0 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Sin contrato</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Configuración asistida</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Cancela cuando quieras</span>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative -mb-1 mt-14"
        >
          <div
            className="overflow-hidden rounded-t-2xl border-t border-x border-white/10"
            style={{
              boxShadow: '0 -20px 80px rgba(0,0,0,0.3)'
            }}
          >
            <Image
              src="/screenshots/pos.png"
              alt="woppi punto de venta"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
