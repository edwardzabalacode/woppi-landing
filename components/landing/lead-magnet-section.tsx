'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LeadMagnetSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un email valido');
      return;
    }

    setIsLoading(true);

    // Simular envio - aqui conectarias con tu servicio de email
    // (Mailchimp, Resend, ConvertKit, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);

    // En produccion, aqui iria el fetch a tu API:
    // await fetch('/api/lead-magnet', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });
  };

  const BENEFITS = [
    'Como elegir el sistema correcto para tu negocio',
    'Los 5 errores que arruinan tu punto de venta',
    'Checklist de digitalizacion completo',
    'Plantilla de proyeccion de ahorros',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 px-4 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-primary/10 blur-[60px]" />
      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-secondary/10 blur-[80px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-sm font-medium text-secondary">
              <Download className="mr-2 size-4" />
              Guia Gratuita
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Digitaliza tu Negocio en 2025
            </h2>

            <p className="mb-6 text-muted-foreground">
              Descarga nuestra guia gratuita con todo lo que necesitas saber
              para modernizar tu punto de venta y empezar a vender online.
            </p>

            <ul className="space-y-3">
              {BENEFITS.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-lg md:p-8">
              {isSuccess ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="size-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Revisa tu email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Te enviamos la guia a <strong>{email}</strong>.
                    <br />
                    Revisa tu bandeja de spam si no la encuentras.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Sparkles className="size-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Guia PDF Gratis
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        12 paginas de contenido practico
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12 pl-10"
                          disabled={isLoading}
                        />
                      </div>
                      {error && (
                        <p className="mt-2 text-xs text-destructive">{error}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="h-12 w-full gap-2 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Download className="size-4" />
                          Descargar Gratis
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Sin spam. Puedes darte de baja cuando quieras.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
