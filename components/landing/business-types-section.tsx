'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed, Store, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface BusinessType {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent: string;
}

const BUSINESS_TYPES: BusinessType[] = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes y Comida',
    description: 'Pizzerias, cafes, panaderias, comida rapida',
    features: [
      'Gestion de mesas y cuentas abiertas',
      'Importacion de menu con IA',
      'Delivery con zonas de precio',
      'Variantes por tamano y extras',
    ],
    accent: 'from-orange-500/10 to-amber-500/10',
  },
  {
    icon: Store,
    title: 'Comercio y Retail',
    description: 'Minimarkets, bodegas, tiendas, ferreterias',
    features: [
      'Inventario con codigos SKU',
      'Categorias y variantes de producto',
      'Gestion de clientes y compras',
      'Reportes de productos vendidos',
    ],
    accent: 'from-purple-500/10 to-indigo-500/10',
  },
  {
    icon: Wrench,
    title: 'Servicios',
    description: 'Peluquerias, talleres, consultorios',
    features: [
      'Facturacion rapida y sencilla',
      'Historial de clientes y servicios',
      'Metodos de pago multiples',
      'Reportes de ingresos detallados',
    ],
    accent: 'from-teal-500/10 to-emerald-500/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
};

export function BusinessTypesSection() {
  return (
    <section id="negocios" className="scroll-mt-20 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Adaptado a tu tipo de negocio
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            woppi se ajusta a las necesidades de cada sector
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {BUSINESS_TYPES.map((type) => (
            <motion.div
              key={type.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
              className={cn(
                'group rounded-2xl border border-border/50 bg-gradient-to-br p-6 transition-shadow hover:shadow-lg',
                type.accent
              )}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <type.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{type.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
