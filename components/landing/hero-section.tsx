'use client';

import { ArrowRight, MessageCircle, ShoppingCart, Smartphone, BarChart3, Globe } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
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

const WHATSAPP_NUMBER = '584123949884';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola! Quiero comenzar con woppi.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const HERO_POINTS_VE = [
  {
    icon: ShoppingCart,
    text: 'Punto de venta con doble moneda y tasa BCV automatica',
  },
  {
    icon: Smartphone,
    text: 'Usalo desde tu celular, tablet o computador',
  },
  {
    icon: BarChart3,
    text: 'Conoce las estadisticas de tu negocio en tiempo real',
  },
];

const HERO_POINTS_INTL = [
  {
    icon: Globe,
    text: 'Todo el control de tu negocio en un solo lugar',
  },
  {
    icon: Smartphone,
    text: 'Usalo desde tu celular, tablet o computador',
  },
  {
    icon: BarChart3,
    text: 'Reportes y estadisticas de tu negocio en tiempo real',
  },
];

export function HeroSection() {
  const country = useCountry();
  const HERO_POINTS = isVenezuela(country) ? HERO_POINTS_VE : HERO_POINTS_INTL;
  return (
    <>
      <section className="relative min-h-screen overflow-x-clip" style={{ backgroundColor: 'hsl(263, 55%, 50%)' }}>
        {/* Desktop layout */}
        <div className="mx-auto hidden h-full max-w-7xl items-center gap-12 px-8 pt-32 pb-16 md:flex lg:gap-16 xl:gap-20">
          {/* Left: Text content */}
          <div className="flex w-[45%] shrink-0 flex-col">
            {/* Headline */}
            <h1 className="mb-6 text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.05] tracking-tight text-white">
              Sistema de{' '}
              <span className="relative inline-block">
                <span className="relative z-10"><AnimatedWord /></span>
                <span className="absolute -inset-x-2 bottom-1 top-[60%] -z-0 rounded-md bg-secondary/40" />
              </span>
              <br />
              para tu negocio
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/70">
              Gestiona tu negocio de la forma mas facil.{' '}
              <span className="font-medium text-white/90">De cero a woppi!</span>
            </p>

            {/* Feature points */}
            <div className="mb-10 space-y-4">
              {HERO_POINTS.map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                    <point.icon className="size-5 text-secondary" />
                  </div>
                  <p className="text-[15px] font-medium text-white/80">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mb-10 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-secondary px-7 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
              >
                Prueba ya
                <ArrowRight className="size-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/20 px-7 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                Contactanos
              </a>
            </div>

          </div>

          {/* Right: Banner image */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative h-[550px] w-full max-w-[750px] lg:h-[600px] xl:h-[650px]">
              <Image
                src="/banner.png"
                alt="woppi sistema de punto de venta"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col px-6 pt-28 pb-12 md:hidden">
          <div className="mb-8">
            <h1 className="mb-4 text-[36px] font-extrabold leading-[1.05] tracking-tight text-white">
              Sistema de{' '}
              <span className="relative inline-block">
                <span className="relative z-10"><AnimatedWord /></span>
                <span className="absolute -inset-x-1 bottom-0.5 top-[60%] -z-0 rounded bg-secondary/40" />
              </span>
              <br />
              para tu negocio
            </h1>

            <p className="mb-6 max-w-sm text-base leading-relaxed text-white/70">
              Gestiona tu negocio de la forma mas facil.{' '}
              <span className="font-medium text-white/90">De cero a woppi!</span>
            </p>

            {/* Feature points */}
            <div className="mb-8 space-y-3">
              {HERO_POINTS.map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary/20">
                    <point.icon className="size-4 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-white/80">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-7 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Prueba ya
                <ArrowRight className="size-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white/20 px-7 text-base font-semibold text-white transition-all hover:border-white/40 active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                Contactanos
              </a>
            </div>

          </div>

          {/* Mobile image */}
          <div className="relative mx-auto h-[350px] w-full max-w-[400px]">
            <Image
              src="/banner.png"
              alt="woppi sistema de punto de venta"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Diagonal separator */}
      <div className="relative h-[120px]" style={{ backgroundColor: 'hsl(263, 55%, 50%)' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <polygon points="0,120 1440,120 1440,0" fill="white" />
        </svg>
      </div>
    </>
  );
}
