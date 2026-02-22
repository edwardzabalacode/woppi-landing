import { ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  /** Etiqueta corta tipo chip: ej. "CAPTURA DE PANTALLA" */
  label: string;
  /** Qué muestra la imagen: ej. "Pantalla de cobro con doble moneda" */
  title: string;
  /** Descripción detallada de la imagen ideal */
  description: string;
  /** CSS aspect-ratio. Default: "16/9" */
  aspectRatio?: string;
  className?: string;
}

/**
 * Placeholder visual para espacios donde irán imágenes/capturas de pantalla.
 * Muestra claramente qué imagen debe ir ahí y cómo debe ser.
 */
export function ImagePlaceholder({
  label,
  title,
  description,
  aspectRatio = '16/9',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white">
          <ImageIcon className="size-7 text-slate-400" />
        </div>
        <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {label}
        </span>
        <h3 className="mb-2 text-sm font-bold text-slate-600">{title}</h3>
        <p className="max-w-[300px] text-xs leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}
