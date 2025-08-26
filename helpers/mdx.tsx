import type { ReactNode } from 'react';
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

  if (url.startsWith('mailto')) {
    return 'mail';
  }

  return 'external';
};

export const generateSlug = (text: string) => {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF]|[\u{1F300}-\u{1FAFF}]/gu;

  let processed = text
    .toLowerCase()
    .normalize('NFD')
    .replace(emojiRegex, '')
    .replace(/[\u0300-\u036f]/g, '');

  processed = processed.replace(/[^a-z0-9\s]/g, '');
  processed = processed.replace(/\s+/g, '-');
  processed = processed.replace(/-{2,}/g, '-');
  processed = processed.replace(/(^-)|(-$)/g, '');

  return processed;
};
