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
  // Expresión regular para detectar emojis
  const emojiRegex =
    /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{1F100}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu;

  return (
    text
      .toLowerCase()
      .normalize('NFD')
      // Primero eliminamos los emojis
      .replace(emojiRegex, '')
      // Eliminamos acentos
      .replace(/[\u0300-\u036f]/g, '')
      // Reemplazamos espacios con guiones
      .replace(/\s+/g, '-')
      // Eliminamos caracteres especiales excepto guiones
      .replace(/[^a-z0-9-]/g, '')
      // Eliminamos guiones múltiples
      .replace(/-+/g, '-')
      // Eliminamos guiones al inicio y final
      .replace(/(?:^-+)|(?:-+$)/g, '')
  );
};
