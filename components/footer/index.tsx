import dayjs from '@utils/dayjs';
import FooterDescription from './FooterDescription';
import FooterGroup from './FooterGroup';
import LastUpdate from './LastUpdate';

function Footer() {
  return (
    <footer className='background-grid background-grid--fade-in mt-24 border-divider-light pt-16 text-sm text-slate-900 dark:border-divider-dark dark:text-slate-200'>
      <div className='content-wrapper'>
        <div className='py-10 font-semibold'>
          <div className='flex flex-col-reverse gap-16 lg:flex-row'>
            <div className='flex-1'>
              <FooterDescription />
            </div>
            <div className='-mx-2 flex flex-1 flex-col gap-8 sm:flex-row sm:gap-16 lg:mx-0'>
              <div className='flex sm:gap-16'>
                <FooterGroup
                  title='Trabajo'
                  links={[
                    {
                      title: 'Contacto',
                      href: '/contact',
                    },
                    {
                      title: 'Experiencia',
                      href: '/experience'
                    },
                  ]}
                />
                <FooterGroup
                  title='Proyectos'
                  links={[
                    {
                      title: 'Proyectos',
                      href: '/projects'
                    },
                    {
                      title: 'Contribuciones',
                      href: '/contributions',
                      label: 'new',
                    },
                  ]}
                />
              </div>
              <div className='flex sm:gap-16'>
                <FooterGroup
                  title='Este Sitio'
                  links={[
                    {
                      title: 'Código fuente',
                      href: 'https://github.com/luislh-dev/portfolio',
                      isInternal: false,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between border-t border-divider-light py-6 text-xs dark:border-divider-dark'>
          <div>&copy; {dayjs().format('YYYY')}, Luis Lopez</div>
          <div className='text-slate-500 dark:text-slate-400'>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
