import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Poppins } from 'next/font/google';
import { PostHogProvider } from '@/components/posthog-provider';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'woppi - Punto de Venta + Tienda Online + Programa de Lealtad',
  description:
    'El sistema todo-en-uno para negocios. Punto de venta, tienda online con pedidos por WhatsApp, y programa de lealtad.',
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased min-h-screen bg-white text-foreground`}>
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
