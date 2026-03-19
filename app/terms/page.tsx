import type { Metadata } from 'next';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { LandingFooter } from '@/components/landing/landing-footer';
import { FileText, UserPlus, ShieldCheck, CreditCard, Palette, Globe, Heart, Wifi, AlertTriangle, XCircle, RefreshCw, Scale, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos de Servicio | woppi',
  description: 'Términos y condiciones de uso de woppi. Lee las reglas que rigen el uso de nuestra plataforma.',
  alternates: { canonical: 'https://woppi.app/terms' },
};

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground md:text-xl">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <LandingNavbar />
      <main className="bg-gray-50">
        {/* Hero */}
        <section
          className="px-4 pt-28 pb-12 md:pt-36 md:pb-16"
          style={{
            background: 'linear-gradient(180deg, hsl(263, 58%, 33%) 0%, hsl(263, 58%, 25%) 100%)'
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
              <FileText className="size-4 text-secondary" />
              Legal
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Términos de Servicio
            </h1>
            <p className="text-white/60">
              Última actualización: 18 de marzo de 2026
            </p>
          </div>
        </section>

        {/* Intro */}
        <div className="px-4 py-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-6 text-center">
              <p className="text-[15px] leading-relaxed text-foreground">
                Estos son los términos que aplican al usar <strong>woppi</strong>.
                Están escritos de forma clara para que sepas qué esperar de nosotros y qué esperamos de ti.
                Al registrarte, aceptas estos términos.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="px-4 pb-16">
          <div className="mx-auto max-w-3xl space-y-4">

            <Section icon={Globe} title="Qué es woppi">
              <p>
                woppi es una plataforma para gestionar tu negocio. Incluye punto de venta, control de inventario,
                tienda online con pedidos por WhatsApp, programa de lealtad con sellos y puntos, reportes de ventas
                y gestión de clientes. Todo desde tu celular o computadora.
              </p>
            </Section>

            <Section icon={UserPlus} title="Tu cuenta">
              <ul className="ml-4 list-disc space-y-1">
                <li>Necesitas ser mayor de 18 años para crear una cuenta.</li>
                <li>Los datos que pongas deben ser reales y estar actualizados.</li>
                <li>Tu contraseña es tu responsabilidad — no la compartas con nadie.</li>
                <li>Si sospechas que alguien entró a tu cuenta sin permiso, avísanos de inmediato.</li>
              </ul>
            </Section>

            <Section icon={ShieldCheck} title="Reglas de uso">
              <p>Al usar woppi te comprometes a:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Usarlo solo para tu negocio, de forma legal y honesta.</li>
                <li>No subir contenido ilegal, ofensivo o que le pertenezca a otra persona.</li>
                <li>No intentar acceder a cuentas ajenas ni hackear la plataforma.</li>
                <li>No usarlo para actividades fraudulentas o engañosas.</li>
                <li>Cumplir las leyes de tu país en todo lo relacionado con tu negocio.</li>
              </ul>
            </Section>

            <Section icon={CreditCard} title="Planes y pagos">
              <ul className="ml-4 list-disc space-y-1">
                <li>woppi tiene un plan gratuito y planes de pago con más funciones.</li>
                <li>Los pagos son recurrentes (mensual, trimestral o anual) según lo que elijas.</li>
                <li>Puedes cancelar cuando quieras. Tu plan sigue activo hasta el final del período que ya pagaste.</li>
                <li>Si cambiamos los precios, te avisamos con 30 días de anticipación.</li>
              </ul>
            </Section>

            <Section icon={Palette} title="Tu contenido es tuyo">
              <ul className="ml-4 list-disc space-y-1">
                <li><strong className="text-foreground">Lo que subes es tuyo:</strong> tus productos, fotos, datos y todo lo que cargues sigue siendo de tu propiedad. Solo lo usamos para que woppi funcione.</li>
                <li><strong className="text-foreground">woppi es nuestro:</strong> el diseño, código, marca y todo lo que hace que woppi sea woppi es nuestra propiedad intelectual.</li>
              </ul>
            </Section>

            <Section icon={Globe} title="Tu tienda online">
              <p>
                Cuando activas tu tienda online, lo que publiques (nombre del negocio, productos, precios, fotos y logo)
                será visible para cualquier persona que entre a tu enlace. Tú eres responsable de que esa información
                sea correcta y no infrinja derechos de nadie.
              </p>
            </Section>

            <Section icon={Heart} title="Programa de lealtad">
              <p>
                Si activas el programa de sellos o puntos, las recompensas que ofrezcas a tus clientes son tu
                responsabilidad. woppi te da la herramienta, pero tú decides y cumples las promociones.
              </p>
            </Section>

            <Section icon={Wifi} title="Disponibilidad">
              <ul className="ml-4 list-disc space-y-1">
                <li>Hacemos todo lo posible para que woppi esté disponible 24/7.</li>
                <li>A veces necesitamos hacer mantenimiento — te avisamos cuando podamos.</li>
                <li>No somos responsables si hay una caída por cosas fuera de nuestro control (problemas de internet, del servidor, etc.).</li>
              </ul>
            </Section>

            <Section icon={AlertTriangle} title="Limitaciones">
              <p>Somos transparentes contigo:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>woppi se ofrece tal cual está. Nos esforzamos, pero no podemos garantizar que nunca habrá un error.</li>
                <li>No somos responsables por pérdidas indirectas por el uso del servicio.</li>
                <li>En caso de cualquier problema, nuestra responsabilidad máxima es lo que hayas pagado en los últimos 12 meses.</li>
              </ul>
            </Section>

            <Section icon={XCircle} title="Suspensión y cierre de cuenta">
              <ul className="ml-4 list-disc space-y-1">
                <li>Si violas estos términos o detectamos actividad sospechosa, podemos suspender o cerrar tu cuenta.</li>
                <li>Tú puedes eliminar tu cuenta cuando quieras desde la configuración o escribiéndonos.</li>
                <li>Cuando cierras tu cuenta, tus datos se eliminan según nuestra Política de Privacidad.</li>
              </ul>
            </Section>

            <Section icon={RefreshCw} title="Cambios a estos términos">
              <p>
                Si actualizamos estos términos, te avisamos por correo o dentro de la app con al menos 15 días de
                anticipación. Si sigues usando woppi después de los cambios, significa que los aceptas.
              </p>
            </Section>

            <Section icon={Scale} title="Ley aplicable">
              <p>
                Estos términos se rigen por las leyes de la República Bolivariana de Venezuela. Si hay algún
                problema legal, se resuelve en los tribunales de Caracas.
              </p>
            </Section>

            <Section icon={Mail} title="Contacto">
              <p>
                Si tienes dudas sobre estos términos, escríbenos a{' '}
                <a href="mailto:soporte@woppi.me" className="font-medium text-primary underline">soporte@woppi.me</a>.
                Te respondemos lo más pronto posible.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
