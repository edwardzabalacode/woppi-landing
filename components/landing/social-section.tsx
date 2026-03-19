'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.55a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.01z" />
    </svg>
  );
}

const SOCIALS = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@woppi.me',
    href: 'https://instagram.com/woppi.me',
    color: 'from-pink-500 to-purple-600',
  },
  {
    icon: TikTokIcon,
    label: 'TikTok',
    handle: '@woppi.me',
    href: 'https://tiktok.com/@woppi.me',
    color: 'from-gray-900 to-gray-700',
  },
];

export function SocialSection() {
  return (
    <section className="bg-white px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-secondary">
          Contenido para tu negocio
        </p>
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          Tips, trucos y novedades en redes
        </h2>

        <div className="flex justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg"
            >
              <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                <social.icon className="size-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{social.label}</p>
                <p className="text-xs text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
