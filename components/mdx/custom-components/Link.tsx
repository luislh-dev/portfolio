'use client';

import { ExternalLink, Mail } from '@components/Icons';
import { urlType } from '@helpers/mdx';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function Link({ children, href }: Props) {
  if (!href) {
    return <span>{children}</span>;
  }

  const type = urlType(href);

  switch (type) {
    case 'external':
      return (
        <a href={href} target='_blank' rel='noreferrer nofollow' className='link'>
          {children}
          <ExternalLink />
        </a>
      );
    case 'mail':
      return (
        <a href={href} className='link'>
          <Mail />
          {children}
        </a>
      );
    case 'hash':
      return (
        <a href={href} className='link'>
          {children}
        </a>
      );
    default:
      return (
        <NextLink href={href} className='link'>
          {children}
        </NextLink>
      );
  }
}
