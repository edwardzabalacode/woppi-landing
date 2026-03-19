import type { Metadata } from 'next';
import { LandingNavbar } from '@/components/landing/landing-navbar';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Shield, Eye, Share2, Lock, UserCheck, Clock, Cookie, Users, Bell, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad | woppi',
  description: 'Política de privacidad de woppi. Conoce cómo recopilamos, usamos y protegemos tu información personal.',
  alternates: { canonical: 'https://woppi.app/privacy' },
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

export default function PrivacyPage() {
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
              <Shield className="size-4 text-secondary" />
              Privacidad
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Política de Privacidad
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
                En <strong>woppi</strong> tu privacidad es importante. Aquí te explicamos de forma clara
                qué información guardamos, para qué la usamos y cómo la protegemos.
                <strong> No vendemos tu información. Nunca.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="px-4 pb-16">
          <div className="mx-auto max-w-3xl space-y-4">

            <Section icon={Eye} title="Qué información guardamos">
              <p><strong className="text-foreground">Lo que tú nos das al registrarte:</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Tu nombre, correo, teléfono y contraseña.</li>
                <li>Los datos de tu negocio: nombre, dirección, logo, tipo de negocio.</li>
                <li>Los productos que cargues: nombres, fotos, precios, categorías.</li>
                <li>Los datos de tus clientes que registres (nombre, teléfono, email).</li>
              </ul>
              <p><strong className="text-foreground">Lo que se guarda automáticamente:</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Qué funciones usas y con qué frecuencia (para mejorar el servicio).</li>
                <li>Tu navegador y tipo de dispositivo.</li>
                <li>Cookies para mantener tu sesión abierta.</li>
              </ul>
            </Section>

            <Section icon={Share2} title="Para qué usamos tu información">
              <ul className="ml-4 list-disc space-y-1">
                <li>Para que woppi funcione: procesar ventas, mostrar reportes, gestionar tu tienda.</li>
                <li>Para enviarte notificaciones sobre tu cuenta o cambios importantes.</li>
                <li>Para mejorar el servicio basándonos en cómo lo usas.</li>
                <li>Para proteger tu cuenta y prevenir fraude.</li>
              </ul>
            </Section>

            <Section icon={Users} title="Con quién compartimos tu información">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold text-green-800">No vendemos tu información personal a nadie.</p>
              </div>
              <p>Solo compartimos datos en estos casos:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong className="text-foreground">Servicios que usamos:</strong> servidores, pagos y análisis — todos bajo acuerdos de confidencialidad.</li>
                <li><strong className="text-foreground">Tu tienda online:</strong> lo que publiques (productos, precios, logo) lo verán tus clientes. Eso es lo que quieres.</li>
                <li><strong className="text-foreground">Si la ley lo exige:</strong> solo por orden judicial o requerimiento legal.</li>
              </ul>
            </Section>

            <Section icon={Lock} title="Cómo protegemos tus datos">
              <ul className="ml-4 list-disc space-y-1">
                <li>Toda tu información viaja cifrada (como cuando haces una compra online).</li>
                <li>Tu contraseña se guarda encriptada — ni nosotros podemos verla.</li>
                <li>Los datos de tu negocio están completamente separados de los de otros negocios.</li>
                <li>Hacemos respaldos automáticos para que no pierdas nada.</li>
              </ul>
            </Section>

            <Section icon={UserCheck} title="Tus derechos">
              <p>Tú tienes el control de tu información. Puedes:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong className="text-foreground">Ver</strong> toda la información que tenemos sobre ti.</li>
                <li><strong className="text-foreground">Corregir</strong> cualquier dato que esté mal.</li>
                <li><strong className="text-foreground">Eliminar</strong> tu cuenta y todos tus datos.</li>
                <li><strong className="text-foreground">Exportar</strong> tus datos para llevarlos a otro lado.</li>
                <li><strong className="text-foreground">Dejar de recibir</strong> correos promocionales cuando quieras.</li>
              </ul>
              <p>
                Para cualquiera de estas cosas, escríbenos a{' '}
                <a href="mailto:soporte@woppi.me" className="font-medium text-primary underline">soporte@woppi.me</a>.
              </p>
            </Section>

            <Section icon={Clock} title="Cuánto tiempo guardamos tus datos">
              <p>
                Mientras tengas tu cuenta activa, guardamos tu información. Si decides irte y eliminas tu cuenta,
                borramos tus datos personales en máximo 30 días.
              </p>
            </Section>

            <Section icon={Cookie} title="Cookies">
              <p>Usamos cookies solo para lo esencial:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Mantener tu sesión abierta para que no tengas que iniciar sesión cada vez.</li>
                <li>Recordar tus preferencias (como el tema claro u oscuro).</li>
                <li>Entender cómo se usa woppi para mejorarlo (de forma anónima).</li>
              </ul>
            </Section>

            <Section icon={Bell} title="Cambios a esta política">
              <p>
                Si cambiamos algo importante, te avisamos por correo o dentro de la app con al menos 15 días
                de anticipación. No hacemos cambios a escondidas.
              </p>
            </Section>

            <Section icon={Mail} title="Contacto">
              <p>
                Si tienes dudas sobre tu privacidad en woppi, escríbenos a{' '}
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
