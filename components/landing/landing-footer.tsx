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
    <footer
      className="relative overflow-hidden px-4 py-16 text-white/70"
      style={{
        background: 'linear-gradient(180deg, hsl(263, 58%, 12%) 0%, hsl(263, 58%, 8%) 100%)'
      }}
    >
      {/* Decorative orb */}
      <div
        className="absolute -right-[200px] top-0 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="relative mx-auto max-w-6xl">
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
              El sistema todo-en-uno para tu negocio. Punto de venta,
              tienda online y programa de lealtad.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/20 hover:text-secondary"
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
                    className="text-sm transition-colors hover:text-secondary"
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
                    className="text-sm transition-colors hover:text-secondary"
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
                    className="text-sm transition-colors hover:text-secondary"
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
            Hecho con <span className="text-secondary">♥</span> para tu negocio
          </p>
        </div>
      </div>
    </footer>
  );
}
