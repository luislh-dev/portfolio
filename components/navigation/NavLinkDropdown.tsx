import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover';
import NavLink from './NavLink';
import { ChevronRightIcon } from '@components/Icons';

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: NavLink[];
}

export function NavLinkDropdown({ title, items }: Readonly<NavLinkDropdownProps>) {
  return (
    <Popover classNames={{content: 'bg-white/30 backdrop-blur-sm'}}>
        <PopoverTrigger>
            <button className='nav-link nav-link--label'>
                  {title}
                  <ChevronRightIcon className='h-3 w-3 rotate-90'/>
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