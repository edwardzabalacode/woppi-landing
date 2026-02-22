'use client';

import { useCountry } from '@/hooks/use-country';
import { isVenezuela } from '@/lib/geo';

/**
 * Returns geo-conditional text for the punto-de-venta page.
 * VE users see BCV/doble moneda messaging, INTL users see generic POS messaging.
 */
export function useGeoContent() {
  const country = useCountry();
  const isVE = isVenezuela(country);

  return {
    isVE,
    hero: {
      headline: isVE ? 'La tasa BCV se actualiza sola.' : 'Todo tu negocio en un solo lugar.',
      subtitle: isVE
        ? 'Sin calculadoras, sin errores de cambio, sin instalaciones. Tu punto de venta funciona desde el celular que ya tienes.'
        : 'Sin instalaciones, sin complicaciones. Tu punto de venta funciona desde el celular que ya tienes.',
    },
    step3: {
      body: isVE
        ? 'Abre tu caja desde cualquier dispositivo. La tasa BCV ya está actualizada.'
        : 'Abre tu caja desde cualquier dispositivo. Todo listo para cobrar.',
    },
    feature1: {
      badge: isVE ? 'Doble Moneda' : 'Multi-moneda',
      title: isVE
        ? 'La tasa BCV se actualiza sola, todos los días'
        : 'Configura la moneda de tu país fácilmente',
      description: isVE
        ? 'Cada mañana woppi descarga la tasa BCV oficial. Tus precios en USD se convierten automáticamente en cada cobro. Sin calculadoras, sin errores, sin discusiones con el cliente por el vuelto.'
        : 'Configura tu moneda local y woppi se encarga del resto. Precios claros, cobros rápidos y sin errores de cálculo.',
      bullets: isVE
        ? ['Precios en USD, cobro en VES o mixto', 'Vuelto calculado al centavo', 'Historial de tasas por fecha', 'Múltiples métodos de pago']
        : ['Configura tu moneda local', 'Cálculos automáticos sin errores', 'Historial de ventas completo', 'Múltiples métodos de pago'],
    },
  };
}
