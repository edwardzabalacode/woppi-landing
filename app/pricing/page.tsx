import type { Metadata } from 'next';

import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { FaqSection } from '@/components/landing/faq-section';
import { CtaSection } from '@/components/landing/cta-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';

export const metadata: Metadata = {
  title: 'Precios - woppi | Una solucion simple para tu negocio',
  description:
    'Conoce los planes de woppi. Todo incluido: punto de venta, tienda online, programa de lealtad, doble moneda y mas.',
  keywords: [
    'precios woppi',
    'planes woppi',
    'punto de venta precio',
    'POS Venezuela',
  ],
  openGraph: {
    title: 'Precios - woppi | Una solucion simple para tu negocio',
    description:
      'Todo incluido en un solo plan. Punto de venta, tienda online, lealtad y mas.',
    type: 'website',
  },
};

export default function PreciosPage() {
  return (
    <>
      <LandingNavbar />
      <main>
        {/* Hero header */}
        <section className="bg-gradient-to-b from-[hsl(263,58%,28%)] via-[hsl(263,58%,33%)] to-[hsl(263,58%,40%)] px-4 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Una solucion simple
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Lo que pagas por separado en otros sistemas, woppi lo incluye todo
              en un solo plan.
            </p>
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
