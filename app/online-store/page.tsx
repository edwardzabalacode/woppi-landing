import type { Metadata } from 'next';
import { ArrowRight, Check, Globe, MessageCircle, QrCode, Sparkles } from 'lucide-react';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tienda Online con Pedidos por WhatsApp | WOPPI',
  description:
    'Crea tu catálogo digital sincronizado con tu punto de venta. Tus clientes ven tus productos y piden directo por WhatsApp. Sin comisiones, sin apps, incluido en tu plan.',
  keywords: ['tienda online', 'catálogo digital', 'pedidos por WhatsApp', 'menú digital', 'tienda virtual', 'WOPPI tienda'],
  alternates: { canonical: 'https://woppi.app/online-store' },
  openGraph: {
    title: 'Tienda Online con Pedidos por WhatsApp | WOPPI',
    description: 'Catálogo digital sincronizado con tu POS. Pedidos por WhatsApp, QR y sin comisiones.',
    type: 'website',
  },
};

const REGISTER_URL = 'https://app.woppi.me/register';

export default function TiendaOnlinePage() {
  return (
    <>
      <LandingNavbar />
      <main className="bg-background">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden px-4 pt-28 pb-0 md:pt-36"
          style={{
            background: 'linear-gradient(180deg, hsl(262, 83%, 40%) 0%, hsl(263, 58%, 33%) 30%, hsl(263, 58%, 28%) 70%, hsl(263, 58%, 25%) 100%)'
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full opacity-20"
            style={{
              background: 'hsl(39, 85%, 60%)',
              filter: 'blur(120px)'
            }}
          />
          <div
            className="absolute -right-[100px] top-[40%] h-[400px] w-[400px] rounded-full opacity-15"
            style={{
              background: 'hsl(262, 83%, 58%)',
              filter: 'blur(100px)'
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Globe className="size-3.5" />
              Tienda Online · WOPPI
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Tu catálogo siempre actualizado.<br />
              <span className="text-secondary">
                Pedidos directo a tu WhatsApp.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Sin apps de delivery que se quedan con tu dinero.
              Tu tienda, tus clientes, tus ganancias.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Crear mi tienda gratis
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Trust bar */}
            <div className="mb-0 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Cero comisiones</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Incluido en tu plan</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Lista en minutos</span>
            </div>

            {/* Hero — two phone mockups */}
            <div className="relative -mb-1 mt-14 flex items-end justify-center gap-6 md:gap-10">
              {/* Phone 1 — Catálogo de productos */}
              <div className="w-[180px] md:w-[260px]">
                <div
                  className="overflow-hidden rounded-[28px] border-[3px] border-white/20 bg-muted/30 shadow-2xl shadow-black/40"
                  style={{ aspectRatio: '9/19.5' }}
                >
                  <Image
                    src="/screenshots/store-phone-catalog.png"
                    alt="Catálogo de productos en la tienda online"
                    width={520}
                    height={1128}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Arrow between phones */}
              <div className="flex flex-col items-center gap-1 self-center">
                <ArrowRight className="size-8 text-secondary md:size-10" />
              </div>
              {/* Phone 2 — Pedido por WhatsApp */}
              <div className="w-[180px] md:w-[260px]">
                <div
                  className="overflow-hidden rounded-[28px] border-[3px] border-white/20 bg-muted/30 shadow-2xl shadow-black/40"
                  style={{ aspectRatio: '9/19.5' }}
                >
                  <Image
                    src="/screenshots/store-phone-whatsapp.png"
                    alt="Pedido llegando por WhatsApp"
                    width={520}
                    height={1128}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden px-4 py-16 md:py-24"
          style={{
            background: 'linear-gradient(180deg, hsl(263, 58%, 25%) 0%, hsl(263, 58%, 28%) 50%, hsl(263, 58%, 30%) 100%)'
          }}
        >
          {/* Decorative orbs - continuing from hero */}
          <div
            className="absolute -left-[150px] top-[20%] h-[400px] w-[400px] rounded-full opacity-10"
            style={{
              background: 'hsl(262, 83%, 58%)',
              filter: 'blur(100px)'
            }}
          />
          <div
            className="absolute -right-[100px] bottom-[10%] h-[300px] w-[300px] rounded-full opacity-15"
            style={{
              background: 'hsl(39, 85%, 60%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">¿Te suena familiar?</p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Perdes ventas porque tus clientes no saben qué tienes
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                'Tus clientes preguntan por WhatsApp "¿qué tienen?" y tardas en responder uno a uno',
                'Tu lista de precios en papel o PDF siempre está desactualizada',
                'Pagas comisiones altísimas a apps de delivery que se quedan con tus ganancias',
                'Los pedidos a domicilio son un caos de mensajes sin formato ni orden',
              ].map((pain) => (
                <div
                  key={pain}
                  className="flex items-start gap-3 rounded-xl border border-red-500/20 p-4 backdrop-blur-sm"
                  style={{
                    background: 'rgba(239, 68, 68, 0.08)'
                  }}
                >
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">✕</div>
                  <p className="text-sm leading-relaxed text-white/70">{pain}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-8 rounded-2xl border border-secondary/30 p-6 text-center backdrop-blur-sm"
              style={{
                background: 'rgba(233, 160, 51, 0.1)'
              }}
            >
              <p className="text-lg font-semibold text-white">
                Con WOPPI tu catálogo está siempre actualizado y tus clientes piden solos — sin comisiones.
              </p>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────── */}
        <section className="bg-background px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Así de simple</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Tu tienda lista en minutos</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { n: '1', icon: Sparkles, title: 'Personaliza tu tienda', body: 'Agrega tu logo, nombre y colores. Tu tienda se ve como tu negocio desde el primer día.' },
                { n: '2', icon: Globe, title: 'Comparte el enlace o QR', body: 'Copia el link de tu tienda y compártelo en Instagram, WhatsApp o imprímelo en un QR.' },
                { n: '3', icon: MessageCircle, title: 'Recibe pedidos', body: 'Tus clientes arman su carrito y te escriben por WhatsApp con el pedido formateado.' },
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
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Todo para vender sin intermediarios</h2>
            </div>

            {/* Feature 1 — imagen izquierda */}
            <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <Image
                src="/screenshots/store-sync.png"
                alt="Editor de tienda online sincronizado con el POS"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <Globe className="size-4" /> Catálogo Sincronizado
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Cambias algo en el POS y ya está en tu tienda</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  No necesitas actualizar dos sistemas. Todo lo que haces en tu punto de venta — precios, fotos, disponibilidad — aparece al instante en tu catálogo online.
                </p>
                <ul className="space-y-2">
                  {['Precios siempre actualizados', 'Fotos de productos desde el POS', 'Categorías organizadas automáticamente', 'Disponibilidad en tiempo real'].map(i => (
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
                  <MessageCircle className="size-4" /> Pedidos por WhatsApp
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">El pedido llega formateado a tu WhatsApp</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Tu cliente arma su carrito en la tienda, presiona &ldquo;Pedir por WhatsApp&rdquo; y te llega un mensaje con todos los detalles. Tú solo confirmas y preparas.
                </p>
                <ul className="space-y-2">
                  {['Lista de productos con cantidades y precios', 'Nombre y datos del cliente incluidos', 'Sin comisiones por pedido', 'Funciona con tu WhatsApp actual'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-primary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              {/* WhatsApp chat mockup */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#e5ddd5] shadow-lg" style={{ aspectRatio: '4/3' }}>
                {/* WhatsApp header */}
                <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">C</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Carlos P.</p>
                    <p className="text-xs text-white/70">en línea</p>
                  </div>
                </div>
                {/* Chat bubble */}
                <div className="flex flex-col gap-2 p-4">
                  <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-4 py-3 shadow-sm">
                    <p className="mb-2 text-sm font-semibold text-gray-800">Nuevo pedido de FuegoBurger</p>
                    <div className="mb-2 space-y-0.5 text-sm text-gray-600">
                      <p>Hamburguesa Especial x2 — $6.00</p>
                      <p>Papas Fritas Grandes x1 — $3.00</p>
                      <p>Refresco x2 — $2.00</p>
                    </div>
                    <div className="mb-2 border-t border-gray-100 pt-2">
                      <p className="text-sm font-bold text-gray-800">Total: $17.00</p>
                    </div>
                    <div className="border-t border-gray-100 pt-2 text-xs text-gray-500">
                      <p>Cliente: Carlos Pérez</p>
                      <p>Tel: +58 412-1234567</p>
                      <p>Dirección: Urb. Las Mercedes, Calle 4</p>
                    </div>
                    <p className="mt-1 text-right text-[10px] text-gray-400">2:34 PM</p>
                  </div>
                  <div className="max-w-[60%] self-end rounded-lg rounded-tr-none bg-[#dcf8c6] px-4 py-2 shadow-sm">
                    <p className="text-sm text-gray-700">Recibido! En 25 min está listo 🔥</p>
                    <p className="mt-1 text-right text-[10px] text-gray-400">2:35 PM ✓✓</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 — imagen izquierda */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <Image
                src="/screenshots/store-qr-branding.png"
                alt="Código QR de la tienda online con personalización"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <QrCode className="size-4" /> QR y Tu Marca
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Tu tienda con tu identidad, tu QR listo en segundos</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Genera el código QR de tu tienda e imprímelo en la caja, en la mesa o en tu empaque. Ponle tu logo y tus colores para que se vea como tu negocio.
                </p>
                <ul className="space-y-2">
                  {['QR personalizado con tu logo', 'URL con el nombre de tu negocio', 'Logo, colores y portada propios', 'Ideal para mesas, redes y empaques'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-secondary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
