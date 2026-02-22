'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Package,
  Users,
  BarChart3,
  ShoppingCart,
  Banknote,
  Globe,
  Sparkles,
  UtensilsCrossed,
  Truck,
  Heart,
  Receipt,
  Gift,
  Smartphone,
  MessageCircle,
  QrCode,
  Palette,
  Star,
  ScanLine,
  type LucideIcon,
} from 'lucide-react';

// Mapa de iconos por nombre
const ICON_MAP: Record<string, LucideIcon> = {
  Package,
  Users,
  BarChart3,
  ShoppingCart,
  Banknote,
  Globe,
  Sparkles,
  UtensilsCrossed,
  Truck,
  Heart,
  Receipt,
  Gift,
  Smartphone,
  MessageCircle,
  QrCode,
  Palette,
  Star,
  ScanLine,
};

interface Feature {
  iconName: string;
  title: string;
  description: string;
  highlights: string[];
}

interface SegmentFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 100,
      damping: 15,
    },
  },
};

export function SegmentFeatures({
  title,
  subtitle,
  features,
}: SegmentFeaturesProps) {
  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = ICON_MAP[feature.iconName] || Package;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border/50 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
