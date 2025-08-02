import FooterLink from './FooterLink';
import type { FooterGroupProps } from './types';

function FooterGroup({ title, links }: Readonly<FooterGroupProps>) {
  return (
    <div className="flex-1">
      <div className="mb-2 px-2 text-[13px] text-slate-600 dark:text-slate-400">{title}</div>
      <ul className="flex flex-col">
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink title={linkTitle} href={href} label={label} isInternal={isInternal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterGroup;
