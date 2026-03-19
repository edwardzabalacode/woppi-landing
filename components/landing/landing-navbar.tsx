'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  ChevronDown,
  ShoppingCart,
  Globe,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './mobile-menu';

const FEATURES = [
  {
    label: 'Punto de Venta',
    href: '/point-of-sale',
    icon: ShoppingCart,
    description: 'Cobro rápido, reportes en tiempo real y multi-dispositivo',
    color: 'bg-primary/10 text-primary group-hover/item:bg-primary/15',
  },
  {
    label: 'Tienda Online',
    href: '/online-store',
    icon: Globe,
    description: 'Catálogo digital sincronizado y pedidos por WhatsApp',
    color: 'bg-primary/10 text-primary group-hover/item:bg-primary/15',
  },
  {
    label: 'Programa de Lealtad',
    href: '/loyalty-program',
    icon: Heart,
    description: 'Sellos digitales, puntos canjeables y recompensas',
    color: 'bg-primary/10 text-primary group-hover/item:bg-primary/15',
  },
];

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

function NavDropdown({
  label,
  items,
  scrolled,
}: {
  label: string;
  items: DropdownItem[];
  scrolled: boolean;
}) {
  return (
    <div className="group relative">
      <button
        className={cn(
          'flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-300',
          scrolled
            ? 'text-foreground/70 hover:text-foreground'
            : 'text-white hover:text-white/80'
        )}
      >
        {label}
        <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Invisible bridge to prevent hover gap */}
      <div className="absolute left-0 right-0 top-full h-5" />

      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 -translate-x-1/2 translate-y-2 group-hover:translate-y-0">
        <div className="w-[480px] overflow-hidden rounded-2xl border border-border/30 bg-background/95 p-3 shadow-2xl shadow-black/15 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/item flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all hover:bg-muted/50"
              >
                <div className={cn(
                  'flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors',
                  item.color
                )}>
                  <item.icon className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[15px] font-semibold text-foreground">
                      {item.label}
                    </p>
                    <ArrowRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        {/* Pill container that appears on scroll */}
        <div
          className={cn(
            'mx-auto transition-all duration-500 ease-out',
            scrolled
              ? 'mt-4 max-w-4xl px-4'
              : 'mt-0 max-w-full px-0'
          )}
        >
          <nav
            className="relative flex items-center justify-between transition-all duration-500 ease-out"
            style={{
              borderRadius: '9999px',
              padding: scrolled ? '10px 24px' : '16px 24px',
              background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
              backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
              WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
              boxShadow: scrolled
                ? '0 8px 32px rgba(85, 52, 133, 0.12)'
                : '0 0 0 transparent'
            }}
          >
            {/* Border overlay for smooth transition */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500"
              style={{
                border: '1px solid rgba(85, 52, 133, 0.1)',
                opacity: scrolled ? 1 : 0
              }}
            />
            {/* Left: Logo + Nav links */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className={cn(
                  'relative transition-all duration-500',
                  scrolled ? 'h-7 w-[80px]' : 'h-9 w-[100px]'
                )}>
                  {/* White logo */}
                  <Image
                    src="/logo-white.png"
                    alt="woppi"
                    fill
                    className={cn(
                      'object-contain object-left transition-opacity duration-500',
                      scrolled ? 'opacity-0' : 'opacity-100'
                    )}
                    priority
                  />
                  {/* Color logo */}
                  <Image
                    src="/logo.png"
                    alt="woppi"
                    fill
                    className={cn(
                      'object-contain object-left transition-opacity duration-500',
                      scrolled ? 'opacity-100' : 'opacity-0'
                    )}
                    priority
                  />
                </div>
              </Link>

              {/* Desktop nav links */}
              <div className={cn(
                'hidden items-center lg:flex transition-all duration-500',
                scrolled ? 'ml-8 gap-6' : 'ml-12 gap-10'
              )}>
                <Link
                  href="/"
                  className={cn(
                    'font-semibold transition-colors duration-300',
                    scrolled
                      ? 'text-sm text-foreground/70 hover:text-foreground'
                      : 'text-[17px] text-white hover:text-white/80'
                  )}
                >
                  Inicio
                </Link>

                <NavDropdown label="Funcionalidades" items={FEATURES} scrolled={scrolled} />

                <Link
                  href="/pricing"
                  className={cn(
                    'font-semibold transition-colors duration-300',
                    scrolled
                      ? 'text-sm text-foreground/70 hover:text-foreground'
                      : 'text-[17px] text-white hover:text-white/80'
                  )}
                >
                  Precios
                </Link>
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://app.woppi.me/login"
                className={cn(
                  'font-semibold transition-all duration-300',
                  scrolled
                    ? 'px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground'
                    : 'px-4 py-2 text-base text-white hover:text-white/80'
                )}
              >
                Iniciar Sesión
              </a>
              <a
                href="https://app.woppi.me/register"
                className={cn(
                  'rounded-full bg-secondary font-semibold text-white transition-all duration-300 hover:bg-secondary/90',
                  scrolled
                    ? 'px-4 py-1.5 text-sm'
                    : 'px-5 py-2.5 text-base'
                )}
                style={{
                  boxShadow: '0 4px 15px hsl(39, 85%, 60%, 0.3)'
                }}
              >
                Regístrate
              </a>
            </div>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'lg:hidden transition-colors duration-300',
                scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              )}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
