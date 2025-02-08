import { Code, Shield, Stars } from '@components/Icons';
import FeaturedCard from './FeaturedCard';
import Header from './header';

function FeaturedCardSection() {
  return (
    <div className='content-wrapper'>
      <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
        <FeaturedCard
          icon={
            <div className='rounded-full bg-amber-300 p-3.5 dark:bg-amber-900'>
              <Stars className='h-5 w-5 text-white' fill='white' />
            </div>
          }
          title='Escalable y Eficiente'
          desc='Soluciones optimizadas que mejoran el flujo de trabajo y aumentan la eficiencia.'
        />
        <FeaturedCard
          icon={
            <div className='rounded-full bg-pink-300 p-3.5 dark:bg-pink-900'>
              <Shield className='h-5 w-5 text-white' fill='white' />
            </div>
          }
          title='Robusto & Confiable '
          desc='Sistemas resistentes con alto rendimiento y seguridad.'
        />
        <FeaturedCard
          icon={
            <div className='rounded-full bg-sky-300 p-3.5 dark:bg-sky-900'>
              <Code className='h-5 w-5' fill='white' />
            </div>
          }
          title='Código y Rendimiento'
          desc='Escribir código limpio es una prioridad y mantenerlo lo más optimizado posible.'
        />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className='hidden lg:-mt-16 lg:mb-24 lg:block'>
        <FeaturedCardSection />
      </div>
    </>
  );
}

export default IndexContents;
