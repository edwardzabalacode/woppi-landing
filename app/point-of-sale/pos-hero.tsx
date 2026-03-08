'use client';

import { ArrowRight, Check, Zap } from 'lucide-react';
import { ImagePlaceholder } from '@/components/landing/image-placeholder';
import { useGeoContent } from './geo-content';

const REGISTER_URL = 'https://app.woppi.me/register';

export function PosHero() {
  const { hero } = useGeoContent();

  return (
    <section className="relative overflow-hidden bg-primary px-4 pt-28 pb-0 md:pt-36">
      {/* Glow — secondary color */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          <Zap className="size-3.5" />
          Punto de Venta · woppi
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
          Cobra más rápido.<br />
          <span className="text-secondary">
            {hero.headline}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Comenzar gratis
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Trust bar */}
        <div className="mb-0 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Sin contrato</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Configuración asistida</span>
          <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Cancela cuando quieras</span>
        </div>

        {/* Hero image placeholder */}
        <div className="relative -mb-1 mt-14">
          <ImagePlaceholder
            label="Captura de pantalla del sistema"
            title="Pantalla principal del punto de venta"
            description="Grid de productos + carrito con total + barra superior. Ancho completo, mockup de browser o pantalla limpia."
            aspectRatio="16/9"
            className="rounded-t-2xl border-t border-x border-white/10 shadow-2xl shadow-black/50"
          />
        </div>
      </div>
    </section>
  );
}
