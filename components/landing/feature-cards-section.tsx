'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Smartphone,
  Receipt,
  MessageCircle,
  Banknote,
  Sparkles,
  Users,
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    icon: Smartphone,
    title: 'Sin Instalación',
    description:
      'woppi es la forma más simple de empezar. Funciona en cualquier navegador, celular o tablet. Sin descargas.',
    image: '/screenshots/pos.png',
    imagePosition: 'right' as const,
    bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Receipt,
    title: 'Registra Ventas Fácil',
    description:
      'Punto de venta simplificado y sin complicaciones. Registra tus ventas en segundos con nuestra interfaz intuitiva.',
    image: '/screenshots/pos.png',
    imagePosition: 'left' as const,
    bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: MessageCircle,
    title: 'Tienda Online Integrada',
    description:
      'Recibe tus pedidos directos al WhatsApp. Tus clientes piden desde tu tienda online y tu gestionas todo desde un solo lugar.',
    logos: [
      { icon: MessageCircle, color: 'text-green-500' },
      { icon: Banknote, color: 'text-blue-500' },
      { icon: Sparkles, color: 'text-purple-500' },
      { icon: Users, color: 'text-orange-500' },
    ],
    imagePosition: 'icons' as const,
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
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
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
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
              className={`overflow-hidden rounded-3xl ${card.bgColor} p-6 md:p-10`}
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
                    className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${card.iconBg}`}
                  >
                    <card.icon className={`size-6 ${card.iconColor}`} />
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
                  {card.imagePosition === 'icons' ? (
                    <div className="flex items-center justify-center gap-4">
                      {card.logos?.map((logo, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                            delay: 0.1 * i,
                          }}
                          className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-lg md:size-20"
                        >
                          <logo.icon className={`size-8 ${logo.color}`} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
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
                      <div className="w-48 overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl md:w-56">
                        <Image
                          src={card.image!}
                          alt={card.title}
                          width={400}
                          height={800}
                          className="h-auto w-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
