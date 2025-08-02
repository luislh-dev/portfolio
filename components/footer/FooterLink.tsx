import Link from 'next/link';
import type { FooterLinkProps } from './types';

function FooterLink({ title, href, label, isInternal = true }: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className="footer-link footer-link--soon">
        {title}
        <span className="footer-link__label">{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className="footer-link">
        {title}
        {label && <span className="footer-link__label">{label}</span>}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer nofollow" className="footer-link">
      {title}
      {label && <span className="footer-link__label">{label}</span>}
    </a>
  );
}

export default FooterLink;
