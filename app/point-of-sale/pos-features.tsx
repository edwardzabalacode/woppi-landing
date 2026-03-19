'use client';

import { motion, type Easing } from 'framer-motion';
import { Check, Banknote, Smartphone, BarChart3, Sparkles, ShoppingCart, Zap } from 'lucide-react';
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

        {/* Feature 1 — imagen izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div className="relative md:order-1">
            <div
              className="overflow-hidden rounded-2xl border border-border/50"
              style={{
                boxShadow: '0 20px 60px rgba(85, 52, 133, 0.15)'
              }}
            >
              <Image
                src="/screenshots/pos.png"
                alt="Configuración de moneda y precios en woppi"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, hsl(39, 85%, 95%) 0%, hsl(39, 85%, 90%) 100%)',
                  color: 'hsl(39, 85%, 35%)'
                }}
              >
                <Banknote className="size-4" /> {feature1.badge}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">{feature1.title}</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {feature1.description}
              </p>
              <ul className="space-y-3">
                {feature1.bullets.map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div
                      className="flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: 'hsl(39, 85%, 60%)'
                      }}
                    >
                      <Check className="size-3 text-white" />
                    </div>
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature 2 — imagen derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, hsl(263, 58%, 95%) 0%, hsl(263, 58%, 90%) 100%)',
                  color: 'hsl(263, 58%, 40%)'
                }}
              >
                <Smartphone className="size-4" /> Cualquier Dispositivo
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Funciona en el celular que ya tienes</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                No necesitas comprar equipo nuevo ni instalar nada. Abre el navegador, entra a woppi y listo. Funciona igual en Android, iPhone, tablet o computador.
              </p>
              <ul className="space-y-3">
                {['Sin descargas ni instalaciones', 'Funciona offline (guarda ventas sin internet)', 'Varios cajeros al mismo tiempo', 'Sincronización automática entre dispositivos'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div
                      className="flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: 'hsl(263, 58%, 50%)'
                      }}
                    >
                      <Check className="size-3 text-white" />
                    </div>
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl border border-border/50"
              style={{
                boxShadow: '0 20px 60px rgba(85, 52, 133, 0.15)'
              }}
            >
              <Image
                src="/screenshots/mesas.png"
                alt="woppi funcionando en múltiples dispositivos"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 3 — imagen izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div className="relative md:order-1">
            <div
              className="overflow-hidden rounded-2xl border border-border/50"
              style={{
                boxShadow: '0 20px 60px rgba(85, 52, 133, 0.15)'
              }}
            >
              <Image
                src="/screenshots/dashboard.png"
                alt="Dashboard de ventas y reportes en woppi"
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, hsl(39, 85%, 95%) 0%, hsl(39, 85%, 90%) 100%)',
                  color: 'hsl(39, 85%, 35%)'
                }}
              >
                <BarChart3 className="size-4" /> Reportes
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Sabes exactamente cómo va tu negocio</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Ve en tiempo real cuánto llevas vendido, qué productos se mueven más y en qué horario vendes más. Sin esperar a fin de mes.
              </p>
              <ul className="space-y-3">
                {['Ventas del día, semana o mes en segundos', 'Top productos por cantidad y monto', 'Cierre de caja con conteo de billetes', 'Exporta a Excel con un clic'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div
                      className="flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: 'hsl(39, 85%, 60%)'
                      }}
                    >
                      <Check className="size-3 text-white" />
                    </div>
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
