'use client';

// TODO: Descomentar cuando tengamos testimonios reales de clientes
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// type Testimonial = {
//   type: 'quote' | 'image' | 'stat' | 'testimonial';
//   quote?: string;
//   subtext?: string;
//   color?: string;
//   size?: string;
//   image?: string;
//   value?: string;
//   label?: string;
//   textColor?: string;
//   emoji?: string;
//   name?: string;
//   business?: string;
//   initials?: string;
// };

// const TESTIMONIALS: Testimonial[] = [
  // {
  //   type: 'quote',
  //   quote: 'Wow, $1k a week',
  //   subtext: 'en ventas procesadas',
  //   color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  //   size: 'small',
  // },
  // {
  //   type: 'image',
  //   image: '/screenshots/pos.png',
  //   size: 'large',
  // },
  // {
  //   type: 'stat',
  //   value: '$8,086.38',
  //   label: 'Ventas del mes',
  //   color: 'bg-white',
  //   size: 'medium',
  // },
  // {
  //   type: 'quote',
  //   quote: 'Wowww $2k in a week!',
  //   subtext: 'sin comisiones',
  //   emoji: '🎉',
  //   color: 'bg-gradient-to-br from-green-400 to-emerald-500',
  //   size: 'small',
  // },
  // {
  //   type: 'image',
  //   image: '/screenshots/mesas.png',
  //   size: 'medium',
  // },
  // {
  //   type: 'testimonial',
  //   name: 'Maria G.',
  //   business: 'Panaderia La Esquina',
  //   quote: 'Ya no tengo que calcular cambios manualmente. woppi me salvo la vida.',
  //   initials: 'MG',
  //   size: 'large',
  // },
  // {
  //   type: 'stat',
  //   value: '+240%',
  //   label: 'Aumento en eficiencia',
  //   color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  //   textColor: 'text-white',
  //   size: 'small',
  // },
  // {
  //   type: 'image',
  //   image: '/screenshots/dashboard.png',
  //   size: 'medium',
  // },
  // {
  //   type: 'testimonial',
  //   name: 'Carlos R.',
  //   business: 'Pizzeria Don Carlo',
  //   quote: 'Importe 100 productos con una foto en 5 minutos. Increible.',
  //   initials: 'CR',
  //   size: 'medium',
  // },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: 'spring' as const,
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

export function TestimonialsSection() {
  // TODO: Descomentar cuando tengamos testimonios reales de clientes
  return null;

  /* return (
    <section className="bg-gray-50 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Mira Lo Que Dicen{' '}
            <span className="text-secondary">++</span>
          </h2>
          <p className="text-muted-foreground">
            woppi es la forma mas facil de empezar a vender online
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4 break-inside-avoid"
            >
              {item.type === 'quote' && (
                <div
                  className={`rounded-2xl ${item.color} p-6 text-white shadow-lg`}
                >
                  {item.emoji && (
                    <span className="mb-2 block text-3xl">{item.emoji}</span>
                  )}
                  <p className="text-xl font-bold">{item.quote}</p>
                  <p className="mt-1 text-sm opacity-90">{item.subtext}</p>
                </div>
              )}

              {item.type === 'image' && (
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={item.image!}
                    alt="Screenshot"
                    width={400}
                    height={300}
                    className="h-auto w-full"
                  />
                </div>
              )}

              {item.type === 'stat' && (
                <div
                  className={`rounded-2xl ${item.color} p-6 shadow-lg ${
                    item.textColor || 'text-foreground'
                  }`}
                >
                  <p
                    className={`text-4xl font-bold ${
                      item.textColor || 'text-primary'
                    }`}
                  >
                    {item.value}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      item.textColor ? 'opacity-90' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              )}

              {item.type === 'testimonial' && (
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 text-sm font-bold text-white">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.business}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/80">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-4 flex gap-0.5 text-secondary">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <svg
                        key={n}
                        className="size-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  ); */
}
