'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '584123949884';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola! Quiero ver como funciona la importacion de menu con IA en woppi.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const BULLETS = [
  'Reconocimiento automatico de productos',
  'Extraccion de precios en USD y VES',
  'Categorias sugeridas por IA',
  'Edicion y ajuste post-importacion',
];

export function AiShowcaseSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-sm font-medium text-secondary">
              Potenciado con IA
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Importa tu menu con una foto
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Solo toma una foto de tu menu fisico y nuestra inteligencia artificial
              extraera automaticamente todos los productos con sus precios, categorias
              y descripciones.
            </p>
            <ul className="mb-8 space-y-3">
              {BULLETS.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3 text-primary" />
                  </div>
                  {bullet}
                </motion.li>
              ))}
            </ul>
            <Button
              asChild
              variant="secondary"
              className="gap-2 font-semibold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Ver Demo
              </a>
            </Button>
          </motion.div>

          {/* Right: real screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/screenshots/image.png"
              alt="Importacion de menu con IA"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-2xl border border-border/50 shadow-lg"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
