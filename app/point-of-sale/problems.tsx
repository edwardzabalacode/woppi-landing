'use client';

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

export function PuntoDeVentaProblems() {
  const country = useCountry();
  const { title, pains } = isVenezuela(country) ? PROBLEMS_VE : PROBLEMS_INTL;

  return (
    <section className="bg-primary/95 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">¿Te suena familiar?</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pains.map((pain) => (
            <div key={pain} className="flex items-start gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
              <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">✕</div>
              <p className="text-sm leading-relaxed text-white/70">{pain}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 text-center">
          <p className="text-lg font-semibold text-white">
            woppi resuelve todo eso — y funciona desde el celular que ya tienes.
          </p>
        </div>
      </div>
    </section>
  );
}
