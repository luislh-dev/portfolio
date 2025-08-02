'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Github, LinkedIn } from './Icons';
import NavIcon from './navigation/NavIcon';
import NavIconQuickAccess from './navigation/NavIconQuickAccess';
import NavLink from './navigation/NavLink';
import { NavLinkDropdown } from './navigation/NavLinkDropdown';
import { NavLinkExpanded } from './navigation/NavLinkExpanded';
import NavLogo from './navigation/NavLogo';

const workLinks = [
  { title: 'Experiencia', href: '/experience' },
  { title: 'Contacto', href: '/contact' },
];

function NavBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 fm:absolute">
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolling && [
              'border-b border-divider-light bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolling && ['-mt-2']])} />
      <div className="content-wrapper-max">
        <div className="relative z-50 flex h-16 items-center justify-between text-sm md:px-4">
          <nav className="flex">
            <NavLogo href="/" title="Home" />
            <ul className="flex items-center">
              <li>
                <NavLink title="Proyectos" href="/projects" />
              </li>
              <li>
                <NavLink title="Contribuciones" href="/contributions" />
              </li>
              <li className="lg:hidden">
                <NavLinkDropdown title="Trabajo" items={workLinks} />
              </li>
              <li className={clsx('hidden lg:block')} data-accent="blue">
                <NavLinkExpanded title="Trabajo" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className="flex items-center">
            <li className="hidden sm:block">
              <NavIcon
                href="https://linkedin.com/in/luislh-dev/"
                icon={<LinkedIn className="h-5 w-5" />}
                title="Linkedin"
              />
            </li>
            <li className="hidden sm:block">
              <NavIcon
                href="https://github.com/luislh-dev"
                icon={<Github className="h-5 w-5 dark:fill-white" />}
                title="GitHub"
              />
            </li>
            <li className="hidden sm:block">
              <div className="ml-2 mr-4 h-3 w-[1px] bg-slate-200 dark:bg-slate-700" />
            </li>
            <li className="mr-2">
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
