import { ReactNode } from 'react';
import slug from 'slug';

export const getSlug = (children: ReactNode) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};

export const urlType = (url: string) => {
  if (['/'].includes(url[0])) {
    return 'internal';
  }

  if (['#'].includes(url[0])) {
    return 'hash';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};
