import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const PRODUCT_LINKS = [
  { label: 'Punto de Venta', href: '/features/pos' },
  { label: 'Tienda Online', href: '/features/store' },
  { label: 'Programa de Lealtad', href: '/features/loyalty' },
  { label: 'Precios', href: '/pricing' },
];

const BUSINESS_LINKS = [
  { label: 'Restaurantes', href: '/restaurants' },
  { label: 'Comercios', href: '/retail' },
  { label: 'Servicios', href: '/services' },
  { label: 'Mercados', href: '/markets' },
];

const LEGAL_LINKS = [
  { label: 'Terminos de Servicio', href: '#' },
  { label: 'Politica de Privacidad', href: '#' },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export function LandingFooter() {
  return (
    <footer className="bg-[hsl(267,45%,8%)] px-4 py-16 text-white/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="woppi"
                width={100}
                height={28}
                className="mb-4 h-8 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed">
              El sistema todo-en-uno para negocios en Venezuela. Punto de venta,
              tienda online y programa de lealtad.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Producto
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Negocios */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Negocios
            </h4>
            <ul className="space-y-3">
              {BUSINESS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} woppi. Todos los derechos
            reservados.
          </p>
          <p className="text-sm">
            Hecho con <span className="text-red-400">♥</span> en Venezuela
          </p>
        </div>
      </div>
    </footer>
  );
}
