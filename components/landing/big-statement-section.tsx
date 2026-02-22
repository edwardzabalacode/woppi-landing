'use client';

import { motion } from 'framer-motion';
import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

export function BigStatementSection() {
  const country = useCountry();
  const isVE = isVenezuela(country);

  return (
    <section className="bg-white px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {/* Big number/text */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="text-8xl font-bold text-secondary md:text-[10rem]">
              0%
            </span>
          </div>

          {/* Statement */}
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Errores de Calculo.{' '}
            <span className="text-muted-foreground">Siempre.</span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {isVE
              ? 'Con la tasa BCV automatica y conversion en tiempo real, olvida la calculadora y los errores al dar cambio.'
              : 'Con conversion automatica y reportes en tiempo real, olvida las hojas de calculo y los errores manuales.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
