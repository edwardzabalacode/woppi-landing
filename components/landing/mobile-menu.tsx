'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Globe, Heart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const FEATURES = [
  { label: 'Punto de Venta', href: '/punto-de-venta', icon: ShoppingCart },
  { label: 'Tienda Online', href: '/tienda-online', icon: Globe },
  { label: 'Programa de Lealtad', href: '/programa-de-lealtad', icon: Heart },
];

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-80 p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="woppi"
              width={90}
              height={26}
              className="h-7 w-auto"
            />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 p-4">
          <Link
            href="/"
            onClick={() => onOpenChange(false)}
            className="rounded-xl px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
          >
            Inicio
          </Link>

          {/* Features section */}
          <div className="mt-2 mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Funcionalidades
          </div>
          {FEATURES.map((feat) => (
            <Link
              key={feat.href}
              href={feat.href}
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition-colors hover:bg-primary/5"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-secondary/10">
                <feat.icon className="size-4 text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground/70">{feat.label}</span>
            </Link>
          ))}

          <div className="my-2 border-t" />

          <Link
            href="/pricing"
            onClick={() => onOpenChange(false)}
            className="rounded-xl px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
          >
            Precios
          </Link>
        </nav>

        <div className="mt-auto flex flex-col gap-3 border-t p-4">
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full text-base"
          >
            <Link href="/login" onClick={() => onOpenChange(false)}>
              Iniciar Sesion
            </Link>
          </Button>
          <Button
            asChild
            className="h-12 w-full rounded-full bg-secondary text-base font-semibold text-white hover:bg-secondary/90"
          >
            <Link href="/login" onClick={() => onOpenChange(false)}>
              Registrate
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
