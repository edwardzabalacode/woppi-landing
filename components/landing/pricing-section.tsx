'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const REGISTER_URL = 'https://app.woppi.me/register';

const COMPARISON = [
  {
    feature: 'Sistema POS "todo-en-uno" básico',
    price: '$50',
    included: true,
  },
  {
    feature: 'Multi-moneda con conversión automática',
    price: '$20',
    included: true,
  },
  {
    feature: 'Gestión de inventario',
    price: '$15',
    included: true,
  },
  {
    feature: 'Tienda online con pedidos WhatsApp',
    price: '$30',
    included: true,
  },
  {
    feature: 'Programa de sellos y puntos',
    price: '$25',
    included: true,
  },
  {
    feature: 'Importación de menú con IA',
    price: '$40',
    included: true,
  },
  {
    feature: 'Reportes y exportación Excel',
    price: '$15',
    included: true,
  },
  {
    feature: 'Soporte personalizado en WhatsApp',
    price: '$20',
    included: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function PricingSection() {
  const totalOthers = COMPARISON.reduce((acc, item) => {
    return acc + parseInt(item.price.replace('$', ''));
  }, 0);

  return (
    <section id="precios" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Una Solución Simple{' '}
            <span className="inline-block">⚙️</span>
          </h2>
          <p className="text-muted-foreground">
            Lo que pagas por separado, woppi lo incluye todo
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100"
        >
          {/* Features list */}
          <div className="p-6 md:p-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-3"
            >
              {COMPARISON.map((item) => (
                <motion.div
                  key={item.feature}
                  variants={itemVariants}
                  className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-secondary/10">
                      <Check className="size-3.5 text-secondary" />
                    </div>
                    <span className="text-sm text-foreground md:text-base">
                      {item.feature}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground line-through">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-gray-100 bg-gradient-to-br from-primary to-[hsl(263,58%,40%)] p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-white/60 line-through">
                    ${totalOthers}/mes
                  </span>
                  <span className="text-3xl font-bold text-white">
                    Gratis
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  Comienza gratis hoy
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 rounded-full bg-secondary px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-secondary/90 hover:scale-[1.02]"
              >
                <a href={REGISTER_URL}>
                  Comenzar
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
