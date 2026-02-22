'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const BUSINESS_TYPES = [
  { name: 'Cafes', gradient: 'from-amber-900/80 to-amber-700/60' },
  { name: 'Restaurantes', gradient: 'from-rose-900/80 to-rose-700/60' },
  { name: 'Comida rápida', gradient: 'from-orange-900/80 to-orange-700/60' },
  { name: 'Panaderías', gradient: 'from-yellow-900/80 to-yellow-700/60' },
  { name: 'Licorerías', gradient: 'from-purple-900/80 to-purple-700/60' },
  { name: 'Minimarkets', gradient: 'from-emerald-900/80 to-emerald-700/60' },
  { name: 'Peluquerías', gradient: 'from-pink-900/80 to-pink-700/60' },
  { name: 'Ferreterías', gradient: 'from-slate-900/80 to-slate-700/60' },
];

export function SocialProofBar() {
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
      }, 2000);
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
    }, 2000);
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
        {/* Navigation arrows */}
        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/30 bg-white shadow-md transition-all hover:border-secondary hover:shadow-lg md:left-6 md:size-12"
          aria-label="Anterior"
        >
          <ChevronLeft className="size-5 text-secondary md:size-6" />
        </button>
        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/30 bg-white shadow-md transition-all hover:border-secondary hover:shadow-lg md:right-6 md:size-12"
          aria-label="Siguiente"
        >
          <ChevronRight className="size-5 text-secondary md:size-6" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden px-6 pb-4 snap-x snap-mandatory md:gap-6 md:px-16 lg:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {BUSINESS_TYPES.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-[320px] w-[240px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl md:h-[400px] md:w-[280px]"
            >
              {/* Placeholder background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient}`} />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Bottom overlay with text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-16">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    {business.name}
                  </h3>
                  <ArrowUpRight className="size-4 text-white opacity-0 transition-all group-hover:opacity-100" />
                </div>
                <p className="text-sm text-white/70">Todos los servicios</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
