import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface SkeletonProps {
  /*
   * Ancho en píxeles del componente.
   */
  w?: number;
  /*
   * Altura en píxeles del componente.
   */
  h?: number;
  /*
   * Tamaño del skeleton. Puede ser 'sm' (pequeño) o 'md' (mediano).
   */
  size?: 'sm' | 'md';
  /*
   * Forma del skeleton. Puede ser 'default' (rectangular) o 'circle' (redondo).
   */
  shape?: 'default' | 'circle';
  /*
   * Clases personalizadas para el skeleton.
   */
  className?: string;

  /*
   * Indica si el skeleton debe tener una animación de carga.
   */
  isLoading?: boolean;
}

export function Skeleton({
  w,
  h,
  size = 'sm',
  shape = 'default',
  className = '',
  children = null,
  isLoading = false,
}: PropsWithChildren<SkeletonProps>) {
  // Definir estilos base según el tamaño si no se pasan valores explícitos
  const defaultHeight = size === 'sm' ? 16 : 24; // Altura en píxeles
  const height = h || defaultHeight;
  const borderRadius =
    shape === 'circle' ? 'rounded-full' : size === 'sm' ? 'rounded-md' : 'rounded-lg'; // Radio de borde

  // Si es un círculo, el ancho y la altura deben ser iguales
  const finalWidth = shape === 'circle' ? height : w;

  // Combinar clases base con clases personalizadas
  const combinedClassName = clsx(
    'flex items-center bg-slate-200/80 dark:bg-slate-100/5',
    borderRadius,
    className,
    isLoading && 'animate-pulse'
  );

  return (
    <div className={combinedClassName} style={{ width: finalWidth, height }}>
      {children}
    </div>
  );
}
