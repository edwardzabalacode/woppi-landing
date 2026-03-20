'use client';

import { motion, type Easing } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export function PosTestimonial() {
  return (
    <section
      className="relative overflow-hidden px-4 py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, hsl(263, 58%, 97%) 0%, hsl(39, 85%, 97%) 50%, hsl(263, 58%, 97%) 100%)'
      }}
    >
      {/* Subtle decorative elements */}
      <div
        className="absolute left-[5%] top-[20%] h-[200px] w-[200px] rounded-full opacity-30"
        style={{
          background: 'hsl(39, 85%, 60%)',
          filter: 'blur(80px)'
        }}
      />
      <div
        className="absolute right-[10%] bottom-[20%] h-[150px] w-[150px] rounded-full opacity-20"
        style={{
          background: 'hsl(263, 58%, 50%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center"
        >
          {/* Quote icon */}
          <div
            className="mx-auto mb-8 flex size-16 items-center justify-center rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(263, 58%, 33%) 0%, hsl(262, 83%, 45%) 100%)',
              boxShadow: '0 10px 40px hsl(263, 58%, 33%, 0.3)'
            }}
          >
            <Quote className="size-8 text-white" />
          </div>

          {/* Stars */}
          <div className="mb-6 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-current text-secondary"
              />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
            &ldquo;Es un sistema que ayuda mucho en los procesos y a llevar
            <span className="font-semibold text-primary"> mayor control en ventas e inventario</span>,
            tenemos tres semanas usando y ha sido de mucha ayuda.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div
              className="flex size-14 items-center justify-center rounded-full text-xl font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, hsl(39, 85%, 60%) 0%, hsl(39, 85%, 50%) 100%)'
              }}
            >
              CM
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">Carlos Marín</p>
              <p className="text-sm text-muted-foreground">Dueño de La Ensenada, Margarita</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
