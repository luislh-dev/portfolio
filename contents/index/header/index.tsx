import HeaderCta from './HeaderCta';
import HeaderImage from './HeaderImage';
import HeaderTechStack from './HeaderTechStack';
import HeaderTitle from './HeaderTitle';

function Header() {
  return (
    <header className='background-grid background-grid--fade-out pb-20 pt-36 lg:pb-28 lg:pt-52'>
      <div className='content-wrapper'>
        <div className='relative'>
          <div className='relative z-10'>
            <HeaderTitle />
          </div>
          <div className='mt-6 md:mt-8'>
            <HeaderCta />
          </div>
          <div className='mt-20 lg:mt-36'>
            <HeaderTechStack />
          </div>
          <div className='pointer-events-none absolute -top-36 right-0 z-0 -mr-4 hidden select-none lg:block'>
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
