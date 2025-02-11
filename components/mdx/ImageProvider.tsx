import { PropsWithChildren } from 'react';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type ImageProviderProps = {
  className?: string;
};

export function ImageProvider({ children, className }: PropsWithChildren<ImageProviderProps>) {
  return (
    <PhotoProvider bannerVisible={false} maskOpacity={0.6}>
      <div className={className}>{children}</div>
    </PhotoProvider>
  );
}
