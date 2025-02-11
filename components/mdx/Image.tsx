import clsx from 'clsx';
import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { PhotoView } from 'react-photo-view';

export type ImageProps = NextImageProps & {
  immersive?: boolean;
};

export default function Image({ immersive = true, className, src, ...props }: ImageProps) {
  return (
    <PhotoView src={src as string}>
      <NextImage
        src={src}
        className={clsx(
          'cursor-pointer rounded-lg border border-divider-light shadow-lg dark:border-divider-dark',
          className
        )}
        {...props}
      />
    </PhotoView>
  );
}
