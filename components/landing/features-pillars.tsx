'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ShoppingCart,
  Banknote,
  Smartphone,
  BarChart3,
  Sparkles,
  Users,
  Globe,
  MessageCircle,
  QrCode,
  Palette,
  Heart,
  Gift,
  Star,
  ScanLine,
  ArrowRight,
} from 'lucide-react';

const WHATSAPP_NUMBER = '584123949884';

const PILLARS = [
  {
    id: 'pos',
    badge: 'Pilar 1',
    title: 'Punto de Venta',
    tagline: 'Cobra mas rapido, sin errores',
    description:
      'Un sistema de punto de venta disenado para velocidad. Doble moneda con tasa BCV automatica, multiples metodos de pago y reportes en tiempo real.',
    image: '/screenshots/pos.png',
    imageAlt: 'Punto de venta woppi',
    accentColor: 'from-orange-500 to-amber-500',
    accentBg: 'bg-orange-500/10',
    accentText: 'text-orange-600',
    features: [
      {
        icon: Banknote,
        title: 'Doble Moneda USD/VES',
        description: 'Tasa BCV automatica cada manana. Conversion instantanea en cada venta.',
      },
      {
        icon: ShoppingCart,
        title: 'Cobro en Segundos',
        description: 'Busqueda rapida, variantes, extras y carrito intuitivo.',
      },
      {
        icon: Smartphone,
        title: 'Cualquier Dispositivo',
        description: 'Funciona en tu celular, tablet o computador. Sin instalacion.',
      },
      {
        icon: BarChart3,
        title: 'Reportes en Tiempo Real',
        description: 'Ventas del dia, productos estrella, graficos y exportacion a Excel.',
      },
      {
        icon: Sparkles,
        title: 'Importacion con IA',
        description: 'Sube una foto de tu menu y la IA extrae todos los productos.',
      },
      {
        icon: Users,
        title: 'Multi-usuario',
        description: 'Varios cajeros con permisos, turnos y cierre de caja.',
      },
    ],
  },
  {
    id: 'store',
    badge: 'Pilar 2',
    title: 'Tienda Online',
    tagline: 'Vende 24/7 desde tu celular',
    description:
      'Tu catalogo digital siempre actualizado, sincronizado con tu punto de venta. Tus clientes piden por WhatsApp y tu gestionas todo desde un solo lugar.',
    image: '/screenshots/mesas.png',
    imageAlt: 'Tienda online woppi',
    accentColor: 'from-emerald-500 to-green-500',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600',
    features: [
      {
        icon: Globe,
        title: 'Catalogo Siempre Actualizado',
        description: 'Sincronizado automaticamente con tu inventario del POS.',
      },
      {
        icon: MessageCircle,
        title: 'Pedidos por WhatsApp',
        description: 'Tus clientes hacen pedidos y te llegan directo al WhatsApp.',
      },
      {
        icon: QrCode,
        title: 'Codigo QR',
        description: 'Genera un QR para compartir tu tienda o poner en mesas.',
      },
      {
        icon: Palette,
        title: 'Personaliza tu Marca',
        description: 'Tu logo, colores y nombre. Tu tienda con tu identidad.',
      },
      {
        icon: Smartphone,
        title: 'Responsive',
        description: 'Se ve perfecto desde cualquier celular o computador.',
      },
      {
        icon: ScanLine,
        title: 'Sin Comisiones',
        description: 'No cobramos comision por venta. Tu tienda, tus ganancias.',
      },
    ],
  },
  {
    id: 'loyalty',
    badge: 'Pilar 3',
    title: 'Programa de Lealtad',
    tagline: 'Que tus clientes siempre vuelvan',
    description:
      'Fideliza a tus clientes con sellos digitales y puntos canjeables. Sin tarjetas fisicas que se pierden. Todo desde el celular de tu cliente.',
    image: '/screenshots/dashboard.png',
    imageAlt: 'Programa de lealtad woppi',
    accentColor: 'from-purple-500 to-violet-500',
    accentBg: 'bg-purple-500/10',
    accentText: 'text-purple-600',
    features: [
      {
        icon: Heart,
        title: 'Tarjeta de Sellos Digital',
        description: 'Tus clientes acumulan sellos en su celular. Nunca se pierden.',
      },
      {
        icon: Star,
        title: 'Sistema de Puntos',
        description: '1 punto por cada $1 gastado. Configurable a tu medida.',
      },
      {
        icon: Gift,
        title: 'Recompensas Personalizadas',
        description: 'Crea premios a tu gusto: servicios gratis, descuentos, productos.',
      },
      {
        icon: Users,
        title: 'Dashboard de Miembros',
        description: 'Ve quienes son tus mejores clientes y su actividad.',
      },
      {
        icon: QrCode,
        title: 'Escaneo en Tienda',
        description: 'El cliente muestra su QR y acumula puntos al instante.',
      },
      {
        icon: BarChart3,
        title: 'Metricas de Retencion',
        description: 'Conoce la frecuencia de visitas y efectividad del programa.',
      },
    ],
  },
];

export function FeaturesPillars() {
  return (
    <div>
      {PILLARS.map((pillar, pillarIndex) => (
        <section
          key={pillar.id}
          className={pillarIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            {/* Pillar header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {/* Badge */}
              <div className={`mb-4 inline-flex items-center rounded-full ${pillar.accentBg} px-4 py-1.5`}>
                <span className={`text-sm font-semibold ${pillar.accentText}`}>
                  {pillar.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Text */}
                <div className={pillarIndex % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                    {pillar.title}
                  </h2>
                  <p className={`mb-4 text-xl font-semibold bg-gradient-to-r ${pillar.accentColor} bg-clip-text text-transparent`}>
                    {pillar.tagline}
                  </p>
                  <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Me interesa saber mas sobre el ${pillar.title} de woppi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 text-base font-semibold ${pillar.accentText} transition-colors hover:opacity-80`}
                  >
                    Saber mas
                    <ArrowRight className="size-4" />
                  </a>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: pillarIndex % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
                  className={pillarIndex % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-xl">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      width={700}
                      height={500}
                      className="h-auto w-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Features grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pillar.features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl border border-border/40 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className={`mb-3 flex size-10 items-center justify-center rounded-lg ${pillar.accentBg}`}>
                    <feature.icon className={`size-5 ${pillar.accentText}`} />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
