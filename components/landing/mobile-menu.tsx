'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, ShoppingCart, Globe, Heart, ArrowRight } from 'lucide-react';

const FEATURES = [
  { label: 'Punto de Venta', href: '/point-of-sale', icon: ShoppingCart },
  { label: 'Tienda Online', href: '/online-store', icon: Globe },
  { label: 'Programa de Lealtad', href: '/loyalty-program', icon: Heart },
];

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Precios', href: '/pricing' },
];

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    }
  }
};

const containerVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  }
};

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] lg:hidden"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsl(263, 58%, 25%) 0%, hsl(263, 58%, 18%) 50%, hsl(263, 58%, 12%) 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Decorative orbs */}
          <div
            className="absolute -right-[100px] -top-[100px] h-[400px] w-[400px] rounded-full opacity-20"
            style={{
              background: 'hsl(39, 85%, 60%)',
              filter: 'blur(100px)'
            }}
          />
          <div
            className="absolute -left-[100px] bottom-[20%] h-[300px] w-[300px] rounded-full opacity-15"
            style={{
              background: 'hsl(262, 83%, 58%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col px-6 py-6">
            {/* Header */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Image
                src="/logo-white.png"
                alt="woppi"
                width={100}
                height={28}
                className="h-8 w-auto"
              />
              <button
                onClick={() => onOpenChange(false)}
                className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <X className="size-5 text-white" />
              </button>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              className="mt-12 flex flex-1 flex-col"
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Main links */}
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => onOpenChange(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-5"
                  >
                    <span className="text-2xl font-semibold text-white">
                      {link.label}
                    </span>
                    <ArrowRight className="size-5 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-secondary" />
                  </Link>
                </motion.div>
              ))}

              {/* Features section */}
              <motion.div
                variants={itemVariants}
                className="mt-8 mb-4"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Funcionalidades
                </span>
              </motion.div>

              <div className="grid grid-cols-1 gap-3">
                {FEATURES.map((feat) => (
                  <motion.div key={feat.href} variants={itemVariants}>
                    <Link
                      href={feat.href}
                      onClick={() => onOpenChange(false)}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                    >
                      <div
                        className="flex size-12 items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, hsl(39, 85%, 60%, 0.2) 0%, hsl(39, 85%, 50%, 0.1) 100%)',
                          border: '1px solid hsl(39, 85%, 60%, 0.3)'
                        }}
                      >
                        <feat.icon className="size-5 text-secondary" />
                      </div>
                      <span className="text-lg font-medium text-white">
                        {feat.label}
                      </span>
                      <ArrowRight className="ml-auto size-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-secondary" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>

            {/* Bottom CTAs */}
            <motion.div
              className="mt-auto flex flex-col gap-3 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a
                href="https://app.woppi.me/login"
                onClick={() => onOpenChange(false)}
                className="flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Iniciar Sesión
              </a>
              <a
                href="https://app.woppi.me/register"
                onClick={() => onOpenChange(false)}
                className="flex h-14 items-center justify-center gap-2 rounded-full text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, hsl(39, 85%, 60%) 0%, hsl(39, 85%, 50%) 100%)',
                  boxShadow: '0 8px 30px hsl(39, 85%, 60%, 0.4)'
                }}
              >
                Regístrate Gratis
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
