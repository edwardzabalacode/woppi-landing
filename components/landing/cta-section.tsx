'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '584123949884';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola! Quiero saber mas sobre woppi para mi negocio.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function CtaSection() {
  return (
    <section className="bg-white px-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Prueba woppi Gratis
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Comienza hoy y descubre por que cientos de negocios en Venezuela
          ya gestionan sus ventas con woppi.
        </p>
        <Button
          asChild
          size="lg"
          className="h-14 gap-2 rounded-full bg-primary px-10 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Comenzar
            <ArrowRight className="size-5" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
