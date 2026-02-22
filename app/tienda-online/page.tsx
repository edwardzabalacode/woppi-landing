import type { Metadata } from 'next';
import { ArrowRight, Check, Globe, MessageCircle, QrCode, Sparkles } from 'lucide-react';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import { ImagePlaceholder } from '@/components/landing/image-placeholder';

export const metadata: Metadata = {
  title: 'Tienda Online con Pedidos por WhatsApp | woppi',
  description:
    'Crea tu catálogo digital sincronizado con tu punto de venta. Tus clientes ven tus productos y piden directo por WhatsApp. Sin comisiones, sin apps, incluido en tu plan.',
  keywords: ['tienda online', 'catálogo digital', 'pedidos por WhatsApp', 'menú digital', 'tienda virtual', 'woppi tienda'],
  alternates: { canonical: 'https://woppi.app/tienda-online' },
  openGraph: {
    title: 'Tienda Online con Pedidos por WhatsApp | woppi',
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
        <section className="relative overflow-hidden bg-primary px-4 pt-28 pb-0 md:pt-36">
          {/* Glow — secondary color */}
          <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[160px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              <Globe className="size-3.5" />
              Tienda Online · woppi
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

            {/* Hero image placeholder */}
            <div className="relative -mb-1 mt-14">
              {/*
                IMAGEN: Vista del catálogo online en celular (mockup de iPhone).
                Muestra: portada con logo del negocio, barra de categorías,
                grid de productos con fotos y precios en USD.
                Formato: 1600×900px PNG — Ruta: /public/screenshots/store-hero.png
              */}
              <ImagePlaceholder
                label="Captura: Tienda online en celular"
                title="Catálogo de productos con fotos y precios"
                description="Vista del cliente: portada con logo del negocio, categorías filtrables y grid de productos con fotos y precios en USD. Mockup de iPhone o pantalla limpia."
                aspectRatio="16/9"
                className="rounded-t-2xl border-t border-x border-white/10 shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────────────────── */}
        <section className="bg-primary/95 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
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
                <div key={pain} className="flex items-start gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">✕</div>
                  <p className="text-sm leading-relaxed text-white/70">{pain}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 text-center">
              <p className="text-lg font-semibold text-white">
                Con woppi tu catálogo está siempre actualizado y tus clientes piden solos — sin comisiones.
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
              {/*
                IMAGEN: Vista lado a lado del POS y la tienda online mostrando
                el mismo producto actualizado en ambas pantallas simultáneamente.
                Ruta: /public/screenshots/store-sync.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: Sincronización automática"
                title="POS y tienda online actualizados en tiempo real"
                description="Dos pantallas: izquierda el POS con un producto editado, derecha la tienda online mostrando el mismo producto ya actualizado. Visualmente conectados con una flecha o animación."
                aspectRatio="4/3"
                className="md:order-1"
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
              {/*
                IMAGEN: Captura de un chat de WhatsApp mostrando el mensaje
                automático del pedido: "🛒 Pedido de Carlos P. — Pizza Margarita x2 ($8.00),
                Agua x1 ($1.00) — Total: $17.00. Dirección: Urb. Las Mercedes..."
                Ruta: /public/screenshots/store-whatsapp.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: Pedido en WhatsApp"
                title="Mensaje formateado con el detalle del pedido"
                description='Chat de WhatsApp con el mensaje automático del cliente: lista de productos, cantidades, precios, total y datos de entrega. Muestra que llega completo y ordenado.'
                aspectRatio="4/3"
              />
            </div>

            {/* Feature 3 — imagen izquierda */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              {/*
                IMAGEN: Código QR grande generado para la tienda, junto al panel
                de personalización con el logo del negocio subido y la URL custom visible.
                Ruta: /public/screenshots/store-qr-branding.png — 800×600px
              */}
              <ImagePlaceholder
                label="Captura: QR y personalización"
                title="QR listo para imprimir + logo y colores del negocio"
                description="Panel de personalización con el QR generado a la izquierda (listo para imprimir) y el formulario de branding a la derecha: logo subido, color de marca y URL personalizada."
                aspectRatio="4/3"
                className="md:order-1"
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

        {/* ── TESTIMONIO ────────────────────────────────────────────────── */}
        {/*
          PON AQUÍ un testimonio real de un cliente que use la tienda online.
          Ideal: alguien que reciba pedidos por WhatsApp y pueda dar un número
          concreto (ej: "mis ventas a domicilio subieron 40%" o "recibo 20 pedidos
          al día por WhatsApp sin tener que responder preguntas").
        */}
        <section className="bg-background px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <ImagePlaceholder
              label="Testimonio real de cliente"
              title="Foto del cliente + resultado concreto de su tienda online"
              description="Foto circular del dueño del negocio. Quote sobre el impacto de la tienda online: pedidos recibidos, ventas aumentadas o tiempo ahorrado. Nombre, negocio y ciudad."
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
