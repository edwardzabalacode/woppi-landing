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
          'flex items-center gap-1.5 text-[17px] font-semibold transition-colors',
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border/50 bg-background/95 shadow-sm backdrop-blur-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="flex items-center justify-between px-6 py-4 md:px-10">
          {/* Left: Logo + Nav links */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={scrolled ? '/logo.png' : '/logo-white.png'}
                alt="woppi"
                width={120}
                height={34}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="ml-12 hidden items-center gap-10 lg:flex">
              <Link
                href="/"
                className={cn(
                  'text-[17px] font-semibold transition-colors',
                  scrolled
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-white hover:text-white/80'
                )}
              >
                Inicio
              </Link>

              <NavDropdown label="Funcionalidades" items={FEATURES} scrolled={scrolled} />

              <Link
                href="/pricing"
                className={cn(
                  'text-[17px] font-semibold transition-colors',
                  scrolled
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-white hover:text-white/80'
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
                'px-4 py-2 text-base font-semibold transition-colors',
                scrolled
                  ? 'text-foreground/70 hover:text-foreground'
                  : 'text-white hover:text-white/80'
              )}
            >
              Iniciar Sesión
            </a>
            <a
              href="https://app.woppi.me/register"
              className="rounded-full bg-secondary px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-secondary/90"
            >
              Regístrate
            </a>
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'lg:hidden',
              scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
