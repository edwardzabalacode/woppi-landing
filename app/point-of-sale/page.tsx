import type { Metadata } from 'next';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import { PuntoDeVentaProblems } from './problems';
import { PosHero } from './pos-hero';
import { PosSteps, PosFeatures } from './pos-features';
import { PosTestimonial } from './pos-testimonial';

export const metadata: Metadata = {
  title: 'Punto de Venta para tu Negocio | woppi',
  description:
    'Sistema de punto de venta completo. Cobra en segundos, cierra la caja sin errores. Funciona en tu celular sin instalar nada.',
  keywords: ['punto de venta', 'POS', 'sistema de ventas', 'cobro rápido', 'woppi POS'],
  alternates: { canonical: 'https://woppi.app/point-of-sale' },
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
        <PosTestimonial />
        <PricingSection />
        <FaqSection />
        <CtaSection />

      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </>
  );
}
