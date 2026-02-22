'use client';

import { Check, Banknote, Smartphone, BarChart3, Sparkles, ShoppingCart, Zap } from 'lucide-react';
import { ImagePlaceholder } from '@/components/landing/image-placeholder';
import { useGeoContent } from './geo-content';

export function PosSteps() {
  const { step3 } = useGeoContent();

  return (
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
            { n: '3', icon: Zap, title: 'Empieza a cobrar', body: step3.body },
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
  );
}

export function PosFeatures() {
  const { feature1 } = useGeoContent();

  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Lo que incluye</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Todo lo que necesitas para vender</h2>
        </div>

        {/* Feature 1 — imagen izquierda */}
        <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder
            label="Captura: Moneda"
            title="Configuración de moneda y precios"
            description="Pantalla mostrando la configuración de moneda y el precio de un producto dentro del carrito de cobro."
            aspectRatio="4/3"
            className="md:order-1"
          />
          <div className="md:order-2">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-semibold text-secondary">
              <Banknote className="size-4" /> {feature1.badge}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">{feature1.title}</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {feature1.description}
            </p>
            <ul className="space-y-2">
              {feature1.bullets.map(i => (
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
          <ImagePlaceholder
            label="Captura: Multi-dispositivo"
            title="woppi en iPhone, tablet y laptop"
            description="Collage con 3 dispositivos (celular, tablet, laptop) mostrando la misma pantalla del POS abierta simultáneamente. Fondo blanco limpio."
            aspectRatio="4/3"
          />
        </div>

        {/* Feature 3 — imagen izquierda */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder
            label="Captura: Reportes"
            title="Dashboard de ventas en tiempo real"
            description="Gráfico de barras con ventas por hora, total del día y top 3 productos más vendidos. Pantalla limpia y moderna."
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
  );
}
