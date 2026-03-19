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
      'woppi es un sistema para gestionar tu negocio desde el celular o la computadora. Registras ventas, controlas tu inventario, tienes tu tienda online y fidelizas clientes — todo en un solo lugar. Y lo mejor: maneja dólares y bolívares con la tasa BCV del día.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Puedes empezar gratis con hasta 30 productos, punto de venta, tienda online y reportes. Si necesitas más (inventario, programa de lealtad, mesas), puedes probar todo gratis por 14 días sin compromiso.',
  },
  {
    question: '¿Necesito descargar algo?',
    answer:
      'No. woppi funciona directo desde el navegador de tu celular, tablet o computadora. Solo abre la página, inicia sesión y listo. También puedes agregarla a tu pantalla de inicio como si fuera una app.',
  },
  {
    question: '¿Cómo funciona lo de dólares y bolívares?',
    answer:
      'woppi actualiza la tasa BCV automáticamente todos los días. Tú pones tus precios en dólares y el sistema calcula los bolívares solo. Puedes cobrar en USD, VES o mezclar métodos de pago en una misma venta.',
  },
  {
    question: '¿Con qué puedo cobrar?',
    answer:
      'Efectivo en dólares o bolívares, Pago Móvil, Zelle, transferencia, punto de venta (tarjeta) y más. Si tu cliente quiere pagar con dos métodos en la misma compra, woppi lo permite.',
  },
  {
    question: '¿Qué hace la inteligencia artificial de woppi?',
    answer:
      'woppi usa IA para ayudarte con tu negocio. Por ejemplo, puedes tomar una foto de tu menú y el sistema extrae los productos, precios y categorías automáticamente. Tú solo revisas y guardas.',
  },
  {
    question: '¿Lo puedo usar en varios dispositivos a la vez?',
    answer:
      'Sí. Puedes tener woppi abierto en tu celular, en la caja y en la computadora al mismo tiempo. Cada persona puede tener su propio acceso con permisos diferentes.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Totalmente. Toda la información de tu negocio está cifrada y protegida. Nadie más puede ver tus datos — ni siquiera otros negocios que usen woppi. Además, hacemos respaldos automáticos.',
  },
];

const FAQS_INTL: FaqItem[] = [
  {
    question: '¿Qué es woppi?',
    answer:
      'woppi es un sistema para gestionar tu negocio desde el celular o la computadora. Registras ventas, controlas tu inventario, tienes tu tienda online y fidelizas clientes — todo en un solo lugar.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'Puedes empezar gratis con hasta 30 productos, punto de venta, tienda online y reportes. Si necesitas más (inventario, programa de lealtad, mesas), puedes probar todo gratis por 14 días sin compromiso.',
  },
  {
    question: '¿Necesito descargar algo?',
    answer:
      'No. woppi funciona directo desde el navegador de tu celular, tablet o computadora. Solo abre la página, inicia sesión y listo. También puedes agregarla a tu pantalla de inicio como si fuera una app.',
  },
  {
    question: '¿Cómo funciona con diferentes monedas?',
    answer:
      'Configuras tu moneda al crear tu cuenta y listo. Los precios se convierten automáticamente. Si tu cliente quiere pagar con diferentes métodos o monedas en la misma compra, woppi lo permite.',
  },
  {
    question: '¿Con qué puedo cobrar?',
    answer:
      'Efectivo, transferencia, tarjeta y otros métodos de pago locales. Si tu cliente quiere pagar con dos métodos en la misma compra, woppi lo permite sin problema.',
  },
  {
    question: '¿Qué hace la inteligencia artificial de woppi?',
    answer:
      'woppi usa IA para ayudarte con tu negocio. Por ejemplo, puedes tomar una foto de tu menú y el sistema extrae los productos, precios y categorías automáticamente. Tú solo revisas y guardas.',
  },
  {
    question: '¿Lo puedo usar en varios dispositivos a la vez?',
    answer:
      'Sí. Puedes tener woppi abierto en tu celular, en la caja y en la computadora al mismo tiempo. Cada persona puede tener su propio acceso con permisos diferentes.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Totalmente. Toda la información de tu negocio está cifrada y protegida. Nadie más puede ver tus datos — ni siquiera otros negocios que usen woppi. Además, hacemos respaldos automáticos.',
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
      className="border-b border-primary/10 last:border-0"
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
            'flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            open
              ? 'bg-secondary text-white shadow-[0_4px_15px_hsl(39,85%,60%,0.3)]'
              : 'bg-primary/10 text-primary'
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
    <section id="faq" className="relative scroll-mt-20 overflow-hidden bg-gray-50 px-4 py-16 md:py-24">
      {/* Subtle decorative elements */}
      <div
        className="absolute -left-[150px] top-[20%] h-[300px] w-[300px] rounded-full opacity-[0.04]"
        style={{
          background: 'hsl(263, 58%, 33%)',
          filter: 'blur(80px)'
        }}
      />
      <div
        className="absolute -right-[100px] bottom-[20%] h-[250px] w-[250px] rounded-full opacity-[0.03]"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative mx-auto max-w-3xl">
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

        <div
          className="rounded-2xl border border-primary/10 bg-white p-6 md:p-8"
          style={{
            boxShadow: '0 10px 40px hsl(263, 58%, 33%, 0.06)'
          }}
        >
          {FAQS.map((faq, i) => (
            <FaqAccordionItem key={faq.question} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
