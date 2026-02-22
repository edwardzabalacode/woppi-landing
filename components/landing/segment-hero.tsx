'use client';

import { motion } from 'framer-motion';
import {
  MessageCircle,
  ChefHat,
  UtensilsCrossed,
  Truck,
  LayoutGrid,
  Package,
  BarChart3,
  Users,
  FileSpreadsheet,
  Heart,
  Receipt,
  CalendarCheck,
  Banknote,
  Smartphone,
  Sparkles,
  ShoppingCart,
  Globe,
  QrCode,
  Palette,
  Star,
  Gift,
  ScanLine,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Mapa de iconos por nombre
const ICON_MAP: Record<string, LucideIcon> = {
  ChefHat,
  UtensilsCrossed,
  Truck,
  LayoutGrid,
  Package,
  BarChart3,
  Users,
  FileSpreadsheet,
  Heart,
  Receipt,
  CalendarCheck,
  Banknote,
  Smartphone,
  Sparkles,
  ShoppingCart,
  Globe,
  MessageCircle,
  QrCode,
  Palette,
  Star,
  Gift,
  ScanLine,
};

interface SegmentHeroProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  features: Array<{
    iconName: string;
    text: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    business: string;
  };
  imageSrc: string;
  imageAlt: string;
}

const WHATSAPP_NUMBER = '584123949884';

export function SegmentHero({
  badge,
  title,
  highlight,
  subtitle,
  features,
  testimonial,
  imageSrc,
  imageAlt,
}: SegmentHeroProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa woppi para mi ${badge.toLowerCase()}. Quiero comenzar.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      className="relative overflow-hidden bg-primary px-4 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              {badge}
            </div>

            {/* Headline */}
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {title}{' '}
              <span className="text-secondary">
                {highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              {subtitle}
            </p>

            {/* Features */}
            <div className="mb-8 space-y-3">
              {features.map((feature, i) => {
                const Icon = ICON_MAP[feature.iconName] || Package;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 bg-[#25D366] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:bg-[#22c55e] hover:scale-[1.02] active:scale-[0.98]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Comenzar Gratis
                </a>
              </Button>
              <span className="text-xs text-white/50">
                Sin compromiso. Configuracion asistida.
              </span>
            </motion.div>

            {/* Testimonial */}
            {testimonial && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <p className="mb-2 text-sm italic text-white/70">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-xs text-white/50">
                  — {testimonial.author}, {testimonial.business}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-secondary/30 blur-2xl" />
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/30 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
