import type { Metadata } from 'next';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import { ImagePlaceholder } from '@/components/landing/image-placeholder';
import { PuntoDeVentaProblems } from './problems';
import { PosHero } from './pos-hero';
import { PosSteps, PosFeatures } from './pos-features';

export const metadata: Metadata = {
  title: 'Punto de Venta para tu Negocio | woppi',
  description:
    'Sistema de punto de venta completo. Cobra en segundos, cierra la caja sin errores. Funciona en tu celular sin instalar nada.',
  keywords: ['punto de venta', 'POS', 'sistema de ventas', 'cobro rápido', 'woppi POS'],
  alternates: { canonical: 'https://woppi.app/punto-de-venta' },
  openGraph: {
    title: 'Punto de Venta para tu Negocio | woppi',
    description: 'Cobro en segundos, reportes en tiempo real. Desde tu celular.',
    type: 'website',
  },
};

export default function PuntoDeVentaPage() {
  return (
    <>
      <LandingNavbar />
      <main className="bg-background">

        <PosHero />
        <PuntoDeVentaProblems />
        <PosSteps />
        <PosFeatures />

        {/* ── TESTIMONIO ────────────────────────────────────────────────── */}
        <section className="bg-background px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <ImagePlaceholder
              label="Testimonio real de cliente"
              title="Foto del cliente + quote con resultado concreto"
              description='Foto circular (200×200px) del dueño del negocio. Quote real sobre el resultado obtenido con woppi (ej: tiempo ahorrado, errores eliminados, ventas aumentadas). Nombre, negocio y ciudad.'
              aspectRatio="3/1"
            />
          </div>
        </section>

        <PricingSection />
        <FaqSection />
        <CtaSection />

      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </>
  );
}
