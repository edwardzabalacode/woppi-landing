'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Smartphone,
  Receipt,
  MessageCircle,
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    icon: Smartphone,
    title: 'Sin Instalación',
    description:
      'WOPPI es la forma más simple de empezar. Funciona en cualquier navegador, celular o tablet. Sin descargas.',
    image: '/screenshots/dashboard.png',
    imagePosition: 'right' as const,
    gradient: 'linear-gradient(135deg, hsl(39, 85%, 97%) 0%, hsl(39, 85%, 93%) 100%)',
    borderColor: 'hsl(39, 85%, 60%, 0.2)',
  },
  {
    icon: Receipt,
    title: 'Registra Ventas Fácil',
    description:
      'Punto de venta simplificado y sin complicaciones. Registra tus ventas en segundos con nuestra interfaz intuitiva.',
    image: '/screenshots/pos-carrito.png',
    imagePosition: 'left' as const,
    gradient: 'linear-gradient(135deg, hsl(263, 58%, 97%) 0%, hsl(263, 58%, 93%) 100%)',
    borderColor: 'hsl(263, 58%, 33%, 0.15)',
  },
  {
    icon: MessageCircle,
    title: 'Tienda Online Integrada',
    description:
      'Recibe tus pedidos directos al WhatsApp. Tus clientes piden desde tu tienda online y tú gestionas todo desde un solo lugar.',
    image: '/screenshots/store-phone-catalog.png',
    imagePosition: 'right' as const,
    gradient: 'linear-gradient(135deg, hsl(262, 83%, 97%) 0%, hsl(39, 85%, 97%) 100%)',
    borderColor: 'hsl(262, 83%, 58%, 0.15)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

export function FeatureCardsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24">
      {/* Subtle background decoration */}
      <div
        className="absolute right-0 top-[30%] h-[500px] w-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'hsl(263, 58%, 33%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {FEATURE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="overflow-hidden rounded-3xl p-6 md:p-10"
              style={{
                background: card.gradient,
                border: `1px solid ${card.borderColor}`,
                boxShadow: '0 10px 40px hsl(263, 58%, 33%, 0.06)'
              }}
            >
              <div
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    card.imagePosition === 'left' ? 'md:order-2' : ''
                  }`}
                >
                  <div
                    className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-white/50"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 4px 15px hsl(263, 58%, 33%, 0.08)'
                    }}
                  >
                    <card.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>

                {/* Visual */}
                <div
                  className={`${
                    card.imagePosition === 'left' ? 'md:order-1' : ''
                  }`}
                >
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex justify-center"
                  >
                    <div
                      className="w-48 overflow-hidden rounded-[2rem] border-2 border-white/80 bg-white md:w-56"
                      style={{
                        boxShadow: '0 20px 60px hsl(263, 58%, 33%, 0.15)'
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={400}
                        height={800}
                        className="h-auto w-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
