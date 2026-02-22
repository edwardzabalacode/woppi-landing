import type { Metadata } from 'next';

import { LandingNavbar } from '@/components/landing/landing-navbar';
import { HeroSection } from '@/components/landing/hero-section';
import { SocialProofBar } from '@/components/landing/social-proof-bar';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { BigStatementSection } from '@/components/landing/big-statement-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FeatureCardsSection } from '@/components/landing/feature-cards-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';

export const metadata: Metadata = {
  title: 'woppi - Punto de Venta + Tienda Online + Programa de Lealtad',
  description:
    'El sistema todo-en-uno para tu negocio. Punto de venta, tienda online con pedidos por WhatsApp, y programa de lealtad con sellos y puntos.',
  keywords: [
    'punto de venta',
    'POS',
    'sistema de ventas',
    'tienda online',
    'programa de lealtad',
    'restaurante',
    'comercio',
    'inventario',
    'facturacion',
    'reportes de ventas',
  ],
  openGraph: {
    title: 'woppi - Punto de Venta + Tienda Online + Programa de Lealtad',
    description:
      'El sistema todo-en-uno para tu negocio. Punto de venta, tienda online e importacion con IA.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <TestimonialsSection />
        <BigStatementSection />
        <FeaturesSection />
        <PricingSection />
        <FeatureCardsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </>
  );
}
