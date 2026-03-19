import type { Metadata } from 'next';
import { ArrowRight, Check, Heart, Star, Gift, QrCode, BarChart3, Sparkles } from 'lucide-react';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { PricingSection } from '@/components/landing/pricing-section';
import { CtaSection } from '@/components/landing/cta-section';
import { FaqSection } from '@/components/landing/faq-section';
import { LandingFooter } from '@/components/landing/landing-footer';
import { WhatsAppFloat } from '@/components/landing/whatsapp-float';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Programa de Lealtad Digital — Sellos y Puntos | woppi',
  description:
    'Fideliza a tus clientes con sellos digitales y puntos canjeables. Sin tarjetas físicas que se pierden. Tu cliente acumula desde su celular y vuelve por sus recompensas.',
  keywords: ['programa de lealtad', 'fidelización clientes', 'sellos digitales', 'puntos canjeables', 'tarjeta fidelidad digital', 'woppi lealtad'],
  alternates: { canonical: 'https://woppi.app/loyalty-program' },
  openGraph: {
    title: 'Programa de Lealtad Digital — Sellos y Puntos | woppi',
    description: 'Sellos digitales, puntos y recompensas. Sin tarjetas físicas. Tus clientes siempre vuelven.',
    type: 'website',
  },
};

const REGISTER_URL = 'https://app.woppi.me/register';

export default function ProgramaDeLealtadPage() {
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
              <Heart className="size-3.5" />
              Programa de Lealtad · woppi
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Tus clientes vienen una vez.<br />
              <span className="text-secondary">
                Con woppi, siempre vuelven.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
              Sellos digitales y puntos canjeables desde el celular.
              Sin tarjetas físicas que se pierden ni apps extra que instalar.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Probar programa de lealtad gratis
                <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Trust bar */}
            <div className="mb-0 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Sin tarjetas físicas</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Incluido en tu plan</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-secondary" /> Configura tus recompensas</span>
            </div>

            {/* Hero image placeholder */}
            <div className="relative -mb-1 mt-14">
              <Image
                src="/screenshots/loyalty-hero.png"
                alt="Programa de lealtad woppi — dashboard de sellos y puntos"
                width={1600}
                height={900}
                className="rounded-t-2xl border-t border-x border-white/10 shadow-2xl shadow-black/50"
                priority
              />
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
                Conseguir un cliente nuevo cuesta 5 veces más que retener uno
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                'Tus clientes compran una vez y no vuelven — y no sabes por qué',
                'Las tarjetas físicas de sello se pierden, se mojan o se quedan en casa',
                'No sabes quiénes son tus mejores clientes ni con qué frecuencia vienen',
                'Haces promociones a ciegas sin saber qué recompensa realmente funciona',
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
                woppi convierte cada compra en un motivo para volver. Tú defines las reglas, el sistema hace el resto.
              </p>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────── */}
        <section className="bg-background px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Así de simple</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Actívalo hoy, fideliza desde mañana</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { n: '1', icon: Sparkles, title: 'Define tus recompensas', body: 'Tú decides: ¿10 sellos = café gratis? ¿100 puntos = 10% de descuento? Lo configuras en minutos.' },
                { n: '2', icon: QrCode, title: 'El cliente escanea su QR', body: 'En cada compra el cliente muestra su QR, tú lo escaneas y el sello o punto se registra automáticamente.' },
                { n: '3', icon: Gift, title: 'Canjea y vuelve', body: 'Cuando acumula suficiente, el cliente canjea su recompensa. Y tiene un motivo para regresar.' },
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
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Un programa completo, sin complicaciones</h2>
            </div>

            {/* Feature 1 — imagen izquierda */}
            <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <Image
                src="/screenshots/loyalty-stamps.png"
                alt="Lista de miembros del programa de lealtad"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <Heart className="size-4" /> Sellos Digitales
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">La tarjeta que nunca se pierde</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Tu cliente acumula sellos desde su celular con cada visita. No necesita descargar nada — solo muestra su QR y listo. Y si cambia de celular, sus sellos siguen ahí.
                </p>
                <ul className="space-y-2">
                  {['Sello automático por compra registrada', 'Acceso desde cualquier celular sin app', 'Nunca se pierde aunque cambie de teléfono', 'Tú configuras cuántos sellos dan la recompensa'].map(i => (
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
                  <Star className="size-4" /> Sistema de Puntos
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Cada dólar gastado es un punto acumulado</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  1 punto por cada $1 gastado. Tu cliente siempre ve su saldo y sabe cuánto le falta para su próxima recompensa. Eso solo genera más visitas.
                </p>
                <ul className="space-y-2">
                  {['Acumulación automática en cada venta', 'Ratio configurable (ej: $1 = 2 puntos)', 'El cliente ve su saldo en tiempo real', 'Historial completo de puntos ganados y canjeados'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-primary" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src="/screenshots/loyalty-points.png"
                alt="Detalle de miembro — puntos y sellos acumulados"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Feature 3 — imagen izquierda */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <Image
                src="/screenshots/loyalty-dashboard.png"
                alt="Dashboard de lealtad — métricas y miembros activos"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg md:order-1"
              />
              <div className="md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
                  <BarChart3 className="size-4" /> Dashboard de Clientes
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Conoce quiénes son tus clientes más fieles</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Ve quién viene más, cuánto gasta y cuándo fue su última visita. Con esos datos puedes tomar decisiones reales sobre tus recompensas y promociones.
                </p>
                <ul className="space-y-2">
                  {['Ranking de clientes por visitas y gasto', 'Frecuencia de visita por cliente', 'Total de canjes y recompensas entregadas', 'Tasa de retención del programa este mes'].map(i => (
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
