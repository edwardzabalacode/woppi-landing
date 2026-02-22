'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Que es woppi?',
    answer:
      'woppi es un sistema de punto de venta (POS) disenado para negocios en Venezuela. Funciona desde tu celular o computadora y soporta doble moneda USD/VES con tasa BCV automatica.',
  },
  {
    question: 'Cuanto cuesta woppi?',
    answer:
      'Ofrecemos planes adaptados a cada tipo de negocio. Contactanos por WhatsApp y te asesoramos sobre la mejor opcion para ti. Puedes empezar gratis.',
  },
  {
    question: 'Necesito internet para usarlo?',
    answer:
      'woppi es una PWA (Progressive Web App). Necesitas internet para sincronizar datos, pero puedes instalarla en tu celular y funciona con conexiones lentas.',
  },
  {
    question: 'Como funciona la doble moneda?',
    answer:
      'Configuras la tasa BCV del dia al abrir caja (o se actualiza automaticamente). Todos los precios se convierten al instante. Puedes cobrar en USD, bolivares, o combinar metodos de pago.',
  },
  {
    question: 'Que metodos de pago soporta?',
    answer:
      'Efectivo USD, efectivo VES, Pago Movil, Zelle, transferencia bancaria y punto de venta (tarjeta). Puedes combinar varios metodos en una misma venta.',
  },
  {
    question: 'Como funciona la importacion con IA?',
    answer:
      'Subes una foto de tu menu y Google Gemini analiza la imagen para extraer productos, precios y categorias automaticamente. Puedes editarlos antes de guardar.',
  },
  {
    question: 'Puedo usar woppi en varios dispositivos?',
    answer:
      'Si, woppi funciona en cualquier navegador. Varios usuarios pueden acceder simultaneamente con diferentes roles (dueno, administrador, cajero).',
  },
  {
    question: 'Es seguro?',
    answer:
      'woppi usa Supabase con encriptacion y Row Level Security. Tus datos estan protegidos y completamente aislados de otros negocios.',
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
