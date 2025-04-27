import { formatDate } from '@utils/formatDate';
import { CompanyAvatar } from './CompanyAvatar';

interface TimeLineSideInfoProps {
  src: string;
  alt: string;
  website?: string;
  job: string;
  company: string;
  startDate: string;
  endDate: string;
  isReversed?: boolean;
}

export function TimeLineSideInfo(props: TimeLineSideInfoProps) {
  const { src, website, alt, job, company, startDate, endDate, isReversed } = props;

  return (
    <div
      className={`flex items-center gap-6 text-slate-700 dark:text-gray-300 ${isReversed ? 'lg:flex-row-reverse' : 'xl:flex-row'}`}
    >
      {website ? (
        <div className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full shadow-[0_0_60px_10px_rgba(37,99,235,0.4)] dark:bg-slate-800 dark:shadow-[0_0_60px_10px_rgba(96,165,250,0.6)]'>
          <a
            href={website}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block overflow-hidden rounded-full'
          >
            <img src={src} alt={alt} className='h-20 w-20 rounded-full' />
          </a>
        </div>
      ) : (
        <div className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full shadow-[0_0_60px_10px_rgba(37,99,235,0.4)] dark:bg-slate-800 dark:shadow-[0_0_60px_10px_rgba(96,165,250,0.6)]'>
          <CompanyAvatar company={company} />
        </div>
      )}

      <div className='flex flex-col gap-1'>
        <p className='text-sm'>{company}</p>
        <h3 className='text-lg font-semibold'>{job}</h3>
        <p className='text-sm'>
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>
    </div>
  );
}
