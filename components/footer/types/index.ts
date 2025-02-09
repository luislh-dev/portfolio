export interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

export interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}
