'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const SCREENSHOTS = [
  { src: '/screenshots/pos.png', label: 'Punto de Venta' },
  { src: '/screenshots/mesas.png', label: 'Gestion de Mesas' },
  { src: '/screenshots/dashboard.png', label: 'Dashboard y Reportes' },
];

export function HeroScreenshots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Screenshot display */}
      <div className="relative overflow-hidden rounded-t-xl bg-[hsl(267,45%,12%)] shadow-2xl ring-1 ring-white/10">
        {SCREENSHOTS.map((screenshot, i) => (
          <Image
            key={screenshot.src}
            src={screenshot.src}
            alt={screenshot.label}
            width={1920}
            height={1080}
            className={cn(
              'h-auto w-full transition-opacity duration-700',
              i === active
                ? 'relative opacity-100'
                : 'absolute inset-0 opacity-0'
            )}
            sizes="(max-width: 768px) 100vw, 896px"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Indicator dots + labels */}
      <div className="mt-4 flex items-center justify-center gap-3">
        {SCREENSHOTS.map((screenshot, i) => (
          <button
            key={screenshot.label}
            onClick={() => setActive(i)}
            className={cn(
              'flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all',
              i === active
                ? 'bg-white/20 text-white'
                : 'text-white/40 hover:text-white/60'
            )}
          >
            <span
              className={cn(
                'block size-1.5 rounded-full transition-all',
                i === active ? 'bg-secondary' : 'bg-white/30'
              )}
            />
            {screenshot.label}
          </button>
        ))}
      </div>
    </div>
  );
}
