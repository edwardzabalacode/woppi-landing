import type { Metadata } from 'next';
import { ArrowRight, Check, Banknote, Smartphone, BarChart3, Sparkles, ShoppingCart, Zap } from 'lucide-react';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import { ImagePlaceholder } from '@/components/landing/image-placeholder';
import { PuntoDeVentaProblems } from './problems';

export const metadata: Metadata = {
  title: 'Punto de Venta para tu Negocio | woppi',
  description:
    'Sistema de punto de venta completo. Cobra en segundos, cierra la caja sin errores. Funciona en tu celular sin instalar nada.',
  keywords: ['punto de venta', 'POS', 'sistema de ventas', 'cobro rapido', 'woppi POS'],
  alternates: { canonical: 'https://woppi.app/punto-de-venta' },
  openGraph: {
    title: 'Punto de Venta para tu Negocio | woppi',
    description: 'Cobro en segundos, reportes en tiempo real. Desde tu celular.',
    type: 'website',
  },
};

const WHATSAPP_URL = `https://wa.me/584123949884?text=${encodeURIComponent('Hola! Quiero probar woppi para mi negocio.')}`;

export default function PuntoDeVentaPage() {
  return (
    <>
      <LandingNavbar />
      <main className="bg-background">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary px-4 pt-28 pb-0 md:pt-36">
          {/* Glow — secondary color */}
          <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[160px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Zap className="size-3.5" />
              Punto de Venta · woppi
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Cobra más rápido.<br />
              <span className="text-secondary">
                La tasa BCV se actualiza sola.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Sin calculadoras, sin errores de cambio, sin instalaciones.
              Tu punto de venta funciona desde el celular que ya tienes.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Comenzar gratis
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Trust bar */}
            <div className="mb-0 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Sin contrato</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Configuración asistida</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Cancela cuando quieras</span>
            </div>

            {/* Hero image placeholder */}
            <div className="relative -mb-1 mt-14">
              {/*
                IMAGEN: Captura completa de la pantalla del POS mostrando:
                - Barra superior con el logo del negocio y la tasa BCV del día (ej: $1 = Bs. 36.42)
                - Grid de productos con nombres, fotos y precios en USD
                - Panel derecho con el carrito: 3 productos, subtotal $12.50, equivalente Bs. 454.75
                - Botones de método de pago: Efectivo, Transferencia, Punto
                Formato: 1600×900px PNG — Ruta: /public/screenshots/pos-hero.png
              */}
              <ImagePlaceholder
                label="Captura de pantalla del sistema"
                title="Pantalla principal del punto de venta"
                description="Grid de productos + carrito con total en USD/VES + tasa BCV del día en la barra superior. Ancho completo, mockup de browser o pantalla limpia."
                aspectRatio="16/9"
                className="rounded-t-2xl border-t border-x border-white/10 shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────────────────── */}
        <PuntoDeVentaProblems />

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────── */}
        <section className="bg-background px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Así de simple</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Empezar toma 10 minutos</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { n: '1', icon: Sparkles, title: 'Crea tu cuenta', body: 'Regístrate con tu correo. Sin tarjeta de crédito. En 2 minutos tienes acceso.' },
                { n: '2', icon: ShoppingCart, title: 'Carga tus productos', body: 'Agrégalos a mano o sube una foto de tu lista y la IA los extrae automáticamente.' },
                { n: '3', icon: Zap, title: 'Empieza a cobrar', body: 'Abre tu caja desde cualquier dispositivo. La tasa BCV ya está actualizada.' },
              ].map((step) => (
                <div key={step.n} className="relative flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary/10 ring-4 ring-secondary/20">
                      <step.icon className="size-7 text-secondary" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">{step.n}</span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FUNCIONALIDADES ───────────────────────────────────────────── */}
        <section className="bg-muted/30 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Lo que incluye</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Todo lo que necesitas para vender</h2>
            </div>

            {/* Feature 1 — imagen izquierda */}
            <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              {/*
                IMAGEN: Pantalla del POS mostrando la tasa BCV actualizada y
                el mismo producto en USD ($3.50) y su equivalente en Bs. (127.40).
                Ruta: /public/screenshots/pos-doble-moneda.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: Doble moneda"
                title="Tasa BCV del día + precios en USD y VES"
                description="Pantalla mostrando la tasa BCV actualizada automáticamente (ej: $1 = Bs. 36.42) y el precio de un producto en ambas monedas dentro del carrito de cobro."
                aspectRatio="4/3"
                className="md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <Banknote className="size-4" /> Doble Moneda
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">La tasa BCV se actualiza sola, todos los días</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Cada mañana woppi descarga la tasa BCV oficial. Tus precios en USD se convierten automáticamente en cada cobro. Sin calculadoras, sin errores, sin discusiones con el cliente por el vuelto.
                </p>
                <ul className="space-y-2">
                  {['Precios en USD, cobro en VES o mixto', 'Vuelto calculado al centavo', 'Historial de tasas por fecha', 'Múltiples métodos de pago'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-secondary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2 — imagen derecha */}
            <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  <Smartphone className="size-4" /> Cualquier Dispositivo
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Funciona en el celular que ya tienes</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  No necesitas comprar equipo nuevo ni instalar nada. Abre el navegador, entra a woppi y listo. Funciona igual en Android, iPhone, tablet o computador.
                </p>
                <ul className="space-y-2">
                  {['Sin descargas ni instalaciones', 'Funciona offline (guarda ventas sin internet)', 'Varios cajeros al mismo tiempo', 'Sincronización automática entre dispositivos'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-primary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              {/*
                IMAGEN: woppi abierto en 3 dispositivos: iPhone (vertical),
                tablet (horizontal) y laptop — misma pantalla del POS.
                Fondo blanco. Ruta: /public/screenshots/pos-dispositivos.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: Multi-dispositivo"
                title="woppi en iPhone, tablet y laptop"
                description="Collage con 3 dispositivos (celular, tablet, laptop) mostrando la misma pantalla del POS abierta simultáneamente. Fondo blanco limpio."
                aspectRatio="4/3"
              />
            </div>

            {/* Feature 3 — imagen izquierda */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              {/*
                IMAGEN: Dashboard de reportes con gráfico de barras (ventas por hora),
                total del día $347.50 / Bs. 12,640.75, top 3 productos más vendidos.
                Ruta: /public/screenshots/pos-reportes.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: Reportes"
                title="Dashboard de ventas en tiempo real"
                description="Gráfico de barras con ventas por hora, total del día en USD y VES, y top 3 productos más vendidos. Pantalla limpia y moderna."
                aspectRatio="4/3"
                className="md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <BarChart3 className="size-4" /> Reportes
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Sabes exactamente cómo va tu negocio</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Ve en tiempo real cuánto llevas vendido, qué productos se mueven más y en qué horario vendes más. Sin esperar a fin de mes.
                </p>
                <ul className="space-y-2">
                  {['Ventas del día, semana o mes en segundos', 'Top productos por cantidad y monto', 'Cierre de caja con conteo de billetes', 'Exporta a Excel con un clic'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-secondary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIO ────────────────────────────────────────────────── */}
        {/*
          PON AQUÍ un testimonio real de un cliente de woppi.
          Necesitas: foto del cliente (200×200px), nombre completo,
          nombre del negocio, ciudad, y su quote con resultado concreto.
          Ejemplo: "Pasé de 15 minutos de cierre de caja a 3 minutos. Y siempre cuadra."
        */}
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
