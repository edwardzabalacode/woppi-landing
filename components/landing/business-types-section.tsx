'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';

const BUSINESS_TYPES = [
  { name: 'Cafés', image: '/business/cafe-coffee-shop.png', tag: 'Popular' },
  { name: 'Restaurantes', image: '/business/restaurante-comida-latina.png', tag: 'Top' },
  { name: 'Comida rápida', image: '/business/comida-rapida-hamburguesas.png' },
  { name: 'Panaderías', image: '/business/panaderia-pan-dulce-artesanal.png' },
  { name: 'Licorerías', image: '/business/licoreria-vinos-licores.png' },
  { name: 'Minimarkets', image: '/business/minimarket-tienda-conveniencia.png', tag: 'Nuevo' },
  { name: 'Peluquerías', image: '/business/peluqueria-barberia-moderna.png' },
  { name: 'Ferreterías', image: '/business/ferreteria-herramientas.png' },
];

export function BusinessTypesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovering = useRef(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === 'right') {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({
          left: container.scrollWidth - container.clientWidth,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isHovering.current) {
          scroll('right');
        }
      }, 3000);
    };

    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [scroll]);

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    scroll(direction);
    autoPlayRef.current = setInterval(() => {
      if (!isHovering.current) {
        scroll('right');
      }
    }, 3000);
  };

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-12 max-w-7xl px-6 text-center md:mb-16"
      >
        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-5xl">
          Los mejores negocios utilizan woppi
        </h2>
        <p className="text-lg text-muted-foreground">
          Adaptado a todo tipo de negocio
        </p>
      </motion.div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Navigation arrows - glassmorphic style */}
        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg md:left-6 md:size-12"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 20px hsl(263, 58%, 33%, 0.1)'
          }}
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5 text-primary md:size-6" />
        </button>
        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg md:right-6 md:size-12"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 20px hsl(263, 58%, 33%, 0.1)'
          }}
          aria-label="Siguiente"
        >
          <ChevronRight className="size-5 text-primary md:size-6" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-4 overflow-x-auto overflow-y-hidden px-6 pb-4 snap-x snap-mandatory md:gap-6 md:px-16 lg:px-24"
        >
          {BUSINESS_TYPES.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-[320px] w-[240px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border border-primary/10 md:h-[400px] md:w-[280px]"
              style={{
                boxShadow: '0 8px 30px hsl(263, 58%, 33%, 0.12)'
              }}
            >
              {/* Background image */}
              <Image
                src={business.image}
                alt={`woppi para ${business.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 240px, 280px"
              />

              {/* Gradient overlay - with brand tint */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background: 'linear-gradient(to top, hsl(263, 58%, 20%, 0.85) 0%, hsl(263, 58%, 33%, 0.3) 40%, transparent 70%)'
                }}
              />

              {/* Tag badge */}
              {business.tag && (
                <div
                  className="absolute top-4 left-4 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, hsl(39, 85%, 60%) 0%, hsl(39, 85%, 50%) 100%)',
                    boxShadow: '0 2px 10px hsl(39, 85%, 50%, 0.4)'
                  }}
                >
                  <Check className="size-3" />
                  {business.tag}
                </div>
              )}

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    {business.name}
                  </h3>
                  <ArrowUpRight className="size-4 text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm text-white/70">Todos los servicios</p>
              </div>

              {/* Hover overlay - brand color */}
              <div
                className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, hsl(263, 58%, 33%, 0.1) 0%, hsl(39, 85%, 60%, 0.1) 100%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
