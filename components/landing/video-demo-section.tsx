'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface VideoDemoSectionProps {
  videoId?: string; // YouTube video ID
  thumbnailSrc?: string;
}

export function VideoDemoSection({
  videoId = 'dQw4w9WgXcQ', // Placeholder - reemplazar con tu video real
  thumbnailSrc = '/screenshots/demo-thumbnail.png',
}: VideoDemoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const HIGHLIGHTS = [
    { icon: Clock, text: 'Demo de 2 minutos' },
    { icon: Sparkles, text: 'Importacion con IA en vivo' },
    { icon: CheckCircle2, text: 'Flujo de venta completo' },
  ];

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Play className="mr-2 size-4" />
            Video Demo
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Mira woppi en accion
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            En 2 minutos vas a ver como woppi puede transformar la gestion de tu negocio
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-black shadow-2xl">
            {/* Aspect ratio container */}
            <div className="relative aspect-video">
              {isPlaying ? (
                <>
                  {/* YouTube Embed */}
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="Demo de woppi"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                  {/* Close button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                  >
                    <X className="size-5" />
                  </button>
                </>
              ) : (
                <>
                  {/* Thumbnail */}
                  <Image
                    src={thumbnailSrc}
                    alt="Demo de woppi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110 md:size-24">
                      <Play className="size-8 fill-primary text-primary md:size-10" />
                    </div>
                  </button>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    2:15
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Highlights below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {HIGHLIGHTS.map((highlight) => (
              <div
                key={highlight.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <highlight.icon className="size-4 text-primary" />
                {highlight.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA after video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm text-muted-foreground">
            Quieres verlo funcionando con tu negocio?
          </p>
          <Button asChild size="lg" className="gap-2">
            <a
              href="https://wa.me/584123949884?text=Hola!%20Vi%20el%20video%20demo%20y%20quiero%20probarlo%20con%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
            >
              Comenzar
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
