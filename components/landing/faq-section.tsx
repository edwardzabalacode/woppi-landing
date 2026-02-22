'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_VE: FaqItem[] = [
  {
    question: '¿Qué es woppi?',
    answer:
      'woppi es un sistema de punto de venta (POS) diseñado para negocios en Venezuela. Funciona desde tu celular o computadora y soporta doble moneda USD/VES con tasa BCV automática.',
  },
  {
    question: '¿Cuánto cuesta woppi?',
    answer:
      'woppi es gratis para empezar. Regístrate y prueba todas las funcionalidades sin compromiso.',
  },
  {
    question: '¿Necesito internet para usarlo?',
    answer:
      'woppi es una PWA (Progressive Web App). Necesitas internet para sincronizar datos, pero puedes instalarla en tu celular y funciona con conexiones lentas.',
  },
  {
    question: '¿Cómo funciona la doble moneda?',
    answer:
      'woppi descarga la tasa BCV automáticamente todos los días. Tus precios en USD se convierten a bolívares al instante. Puedes cobrar en USD, VES o combinar métodos de pago en una misma venta.',
  },
  {
    question: '¿Qué métodos de pago soporta?',
    answer:
      'Efectivo en USD y VES, Pago Móvil, Zelle, transferencia bancaria, punto (tarjeta) y más. Puedes combinar varios métodos en una misma venta.',
  },
  {
    question: '¿Cómo funciona la importación con IA?',
    answer:
      'Subes una foto de tu menú y Google Gemini analiza la imagen para extraer productos, precios y categorías automáticamente. Puedes editarlos antes de guardar.',
  },
  {
    question: '¿Puedo usar woppi en varios dispositivos?',
    answer:
      'Sí, woppi funciona en cualquier navegador. Varios usuarios pueden acceder simultáneamente con diferentes roles (dueño, administrador, cajero).',
  },
  {
    question: '¿Es seguro?',
    answer:
      'woppi usa Supabase con encriptación y Row Level Security. Tus datos están protegidos y completamente aislados de otros negocios.',
  },
];

const FAQS_INTL: FaqItem[] = [
  {
    question: '¿Qué es woppi?',
    answer:
      'woppi es un sistema de punto de venta (POS) diseñado para cualquier tipo de negocio. Funciona desde tu celular o computadora y soporta multi-moneda con conversión automática.',
  },
  {
    question: '¿Cuánto cuesta woppi?',
    answer:
      'woppi es gratis para empezar. Regístrate y prueba todas las funcionalidades sin compromiso.',
  },
  {
    question: '¿Necesito internet para usarlo?',
    answer:
      'woppi es una PWA (Progressive Web App). Necesitas internet para sincronizar datos, pero puedes instalarla en tu celular y funciona con conexiones lentas.',
  },
  {
    question: '¿Cómo funciona la multi-moneda?',
    answer:
      'Configuras tu moneda local al crear tu cuenta. Todos los precios se convierten al instante. Puedes cobrar en diferentes monedas o combinar métodos de pago en una misma venta.',
  },
  {
    question: '¿Qué métodos de pago soporta?',
    answer:
      'Efectivo, transferencia bancaria, tarjeta y otros métodos locales. Puedes combinar varios métodos en una misma venta.',
  },
  {
    question: '¿Cómo funciona la importación con IA?',
    answer:
      'Subes una foto de tu menú y Google Gemini analiza la imagen para extraer productos, precios y categorías automáticamente. Puedes editarlos antes de guardar.',
  },
  {
    question: '¿Puedo usar woppi en varios dispositivos?',
    answer:
      'Sí, woppi funciona en cualquier navegador. Varios usuarios pueden acceder simultáneamente con diferentes roles (dueño, administrador, cajero).',
  },
  {
    question: '¿Es seguro?',
    answer:
      'woppi usa Supabase con encriptación y Row Level Security. Tus datos están protegidos y completamente aislados de otros negocios.',
  },
];

function FaqAccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-foreground md:text-lg">
          {item.question}
        </span>
        <div
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
            open ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-48 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
      </div>
    </motion.div>
  );
}

export function FaqSection() {
  const country = useCountry();
  const FAQS = isVenezuela(country) ? FAQS_VE : FAQS_INTL;

  return (
    <section id="faq" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas saber sobre woppi
          </p>
        </motion.div>

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          {FAQS.map((faq, i) => (
            <FaqAccordionItem key={faq.question} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
