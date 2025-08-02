import { ChevronRightIcon } from "@components/Icons";
import NavLink, { NavLinkProps } from "./NavLink";
import React from "react";

interface NavLinkExpandedProps {
  title: string;
  items: NavLinkProps[];
}

export function NavLinkExpanded({ title, items }: Readonly<NavLinkExpandedProps>) {
  return (
    <div className='flex'>
      <div className='nav-link nav-link--label pointer-events-none ml-2 mr-2'>
        {title}
        <ChevronRightIcon className='h-3 w-3' />
      </div>
      <ul className='flex items-center'>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink title={item.title} href={item.href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator">&middot;</div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}