'use client';

import { motion, type Easing } from 'framer-motion';
import { Check, Banknote, BarChart3, Sparkles, ShoppingCart, Zap, UtensilsCrossed, Package, Wallet, Monitor } from 'lucide-react';
import Image from 'next/image';
import { useGeoContent } from './geo-content';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

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

function FeatureBlock({
  imageLeft,
  imageSrc,
  imageAlt,
  icon: Icon,
  badge,
  badgeBg,
  badgeColor,
  dotColor,
  title,
  description,
  bullets,
  className = 'mb-20',
  imageContent,
}: {
  imageLeft: boolean;
  imageSrc?: string;
  imageAlt: string;
  icon: React.ElementType;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  dotColor: string;
  title: string;
  description: string;
  bullets: string[];
  className?: string;
  imageContent?: React.ReactNode;
}) {
  const imageBlock = (
    <div className={imageLeft ? 'relative md:order-1' : 'relative'}>
      {imageContent ?? (
        <div
          className="overflow-hidden rounded-2xl border border-border/50"
          style={{ boxShadow: '0 20px 60px rgba(85, 52, 133, 0.15)' }}
        >
          <Image src={imageSrc!} alt={imageAlt} width={800} height={600} className="h-auto w-full" />
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div className={imageLeft ? 'md:order-2' : ''}>
      <motion.div
        initial={{ opacity: 0, x: imageLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: badgeBg, color: badgeColor }}
        >
          <Icon className="size-4" /> {badge}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground">{description}</p>
        <ul className="space-y-3">
          {bullets.map(i => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full" style={{ background: dotColor }}>
                <Check className="size-3 text-white" />
              </div>
              {i}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${className}`}
    >
      {imageLeft ? imageBlock : textBlock}
      {imageLeft ? textBlock : imageBlock}
    </motion.div>
  );
}

const amber = {
  badgeBg: 'linear-gradient(135deg, hsl(39, 85%, 95%) 0%, hsl(39, 85%, 90%) 100%)',
  badgeColor: 'hsl(39, 85%, 35%)',
  dotColor: 'hsl(39, 85%, 60%)',
};

const purple = {
  badgeBg: 'linear-gradient(135deg, hsl(263, 58%, 95%) 0%, hsl(263, 58%, 90%) 100%)',
  badgeColor: 'hsl(263, 58%, 40%)',
  dotColor: 'hsl(263, 58%, 50%)',
};

const green = {
  badgeBg: 'linear-gradient(135deg, hsl(152, 60%, 93%) 0%, hsl(152, 60%, 87%) 100%)',
  badgeColor: 'hsl(152, 60%, 30%)',
  dotColor: 'hsl(152, 60%, 42%)',
};

const blue = {
  badgeBg: 'linear-gradient(135deg, hsl(210, 70%, 94%) 0%, hsl(210, 70%, 88%) 100%)',
  badgeColor: 'hsl(210, 70%, 35%)',
  dotColor: 'hsl(210, 70%, 50%)',
};

const rose = {
  badgeBg: 'linear-gradient(135deg, hsl(350, 70%, 95%) 0%, hsl(350, 70%, 89%) 100%)',
  badgeColor: 'hsl(350, 70%, 35%)',
  dotColor: 'hsl(350, 70%, 50%)',
};

export function PosFeatures() {
  const { feature1 } = useGeoContent();

  return (
    <section className="bg-muted/30 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">Lo que incluye</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Todo lo que necesitas para vender</h2>
        </motion.div>

        {/* Feature 1 — Multimoneda */}
        <FeatureBlock
          imageLeft
          imageSrc="/screenshots/pos-carrito.png"
          imageAlt="Punto de venta con precios en USD y bolívares"
          icon={Banknote}
          badge={feature1.badge}
          title={feature1.title}
          description={feature1.description}
          bullets={feature1.bullets}
          {...amber}
        />

        {/* Feature 2 — Control de Mesas */}
        <FeatureBlock
          imageLeft={false}
          imageSrc="/screenshots/mesas.png"
          imageAlt="Control de mesas y cuentas abiertas en woppi"
          icon={UtensilsCrossed}
          badge="Mesas"
          title="Control de mesas y cuentas abiertas"
          description="Organiza tu restaurante con un mapa visual de mesas. Abre cuentas por mesa, transfiere productos entre mesas y lleva el control de cada pedido sin confusiones."
          bullets={[
            'Mapa visual con estado de cada mesa',
            'Cuentas abiertas por mesa o por cliente',
            'Ideal para restaurantes, bares y cafés',
          ]}
          {...purple}
        />

        {/* Feature 3 — Manejo de Inventario */}
        <FeatureBlock
          imageLeft
          imageSrc="/screenshots/inventario.png"
          imageAlt="Manejo de inventario e ingredientes en woppi"
          icon={Package}
          badge="Inventario"
          title="Control total de tu inventario"
          description="Registra ingredientes, ajusta stock automáticamente con cada venta y recibe alertas cuando un producto está por agotarse. Nunca más pierdas una venta por falta de insumos."
          bullets={[
            'Descuento automático de ingredientes por venta',
            'Alertas de stock bajo',
            'Órdenes de compra a proveedores',
            'Conteo físico y ajustes de inventario',
          ]}
          {...green}
        />

        {/* Feature 4 — Apertura de Cajas */}
        <FeatureBlock
          imageLeft={false}
          imageSrc="/screenshots/caja.png"
          imageAlt="Apertura y cierre de caja registradora en woppi"
          icon={Wallet}
          badge="Caja Registradora"
          title="Aperturas y cierres de caja sin errores"
          description="Abre tu caja con un monto inicial, registra cada movimiento y al final del día cierra con un resumen completo. Todo cuadra, siempre."
          bullets={[
            'Apertura con monto inicial en efectivo',
            'Resumen automático del día',
            'Conteo de efectivo en USD y bolívares',
            'Historial completo de aperturas y cierres',
          ]}
          {...rose}
        />

        {/* Feature 5 — Reportes en Tiempo Real */}
        <FeatureBlock
          imageLeft
          imageSrc="/screenshots/reportes.png"
          imageAlt="Reportes de ventas en tiempo real en woppi"
          icon={BarChart3}
          badge="Reportes"
          title="Reportes en tiempo real para tu día a día"
          description="Ve en tiempo real cuánto llevas vendido, qué productos se mueven más y en qué horario vendes más. Sin esperar a fin de mes."
          bullets={[
            'Ventas del día, semana o mes en segundos',
            'Top productos por cantidad y monto',
            'Reporte de delivery y métodos de pago',
            'Exporta a Excel con un clic',
          ]}
          {...amber}
        />

        {/* Feature 6 — Multidispositivo */}
        <FeatureBlock
          imageLeft={false}
          imageSrc=""
          imageAlt="woppi en desktop y móvil"
          icon={Monitor}
          badge="Multidispositivo"
          title="Funciona en el celular que ya tienes"
          description="No necesitas comprar equipo nuevo ni instalar nada. Abre el navegador, entra a WOPPI y listo. Funciona igual en Android, iPhone, tablet o computador."
          bullets={[
            'Sin descargas ni instalaciones',
            'Varios cajeros al mismo tiempo',
            'Sincronización automática entre dispositivos',
          ]}
          className=""
          imageContent={
            <div className="flex items-end gap-4">
              {/* Desktop mockup */}
              <div className="flex-1">
                <div
                  className="overflow-hidden rounded-xl border border-border/50"
                  style={{ boxShadow: '0 20px 60px rgba(85, 52, 133, 0.15)' }}
                >
                  <div className="flex h-6 items-center gap-1.5 bg-muted/60 px-3">
                    <div className="size-2 rounded-full bg-red-400" />
                    <div className="size-2 rounded-full bg-yellow-400" />
                    <div className="size-2 rounded-full bg-green-400" />
                  </div>
                  <Image
                    src="/screenshots/dashboard.png"
                    alt="woppi dashboard en desktop"
                    width={800}
                    height={600}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              {/* Mobile mockup */}
              <div className="w-[120px] shrink-0 md:w-[160px]">
                <div
                  className="overflow-hidden rounded-2xl border-2 border-foreground/20"
                  style={{ boxShadow: '0 10px 40px rgba(85, 52, 133, 0.12)' }}
                >
                  <Image
                    src="/screenshots/movil-view.png"
                    alt="WOPPI en vista móvil"
                    width={320}
                    height={693}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          }
          {...blue}
        />
      </div>
    </section>
  );
}
