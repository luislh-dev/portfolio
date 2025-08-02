import { ChevronRightIcon } from '@components/Icons';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import NavLink from './NavLink';

type NavLinkItem = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: NavLinkItem[];
}

export function NavLinkDropdown({ title, items }: Readonly<NavLinkDropdownProps>) {
  return (
    <Popover classNames={{ content: 'bg-white/30 backdrop-blur-sm' }}>
      <PopoverTrigger>
        <button className="nav-link nav-link--label" type="button">
          {title}
          <ChevronRightIcon className="h-3 w-3 rotate-90" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} title={item.title} />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
