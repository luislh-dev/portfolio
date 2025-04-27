import { dataExperience } from '@data/DataExperience';
import { calculateDuration } from '@utils/calculateDuration';
import { TimeLineContent } from './TimeLineContent';
import { TimeLineSideInfo } from './TimeLineSideInfo';

export function TimeLine() {
  return (
    <section className='content-wrapper relative flex-shrink-0 overflow-visible py-20'>
      {/* Línea central - En móvil está a la izquierda, en desktop al centro */}
      <div className='absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-blue-600 via-5% dark:via-blue-800 dark:via-10% lg:left-1/2 lg:-translate-x-1/2' />

      <div className='space-y-20 pl-8 sm:pl-6 md:pl-8 lg:pl-0'>
        {dataExperience.map((ex, index) => (
          <article
            key={index.toString()}
            className={`relative flex flex-col gap-8 lg:gap-24 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
          >
            {/* Bloque Izquierda / Derecha */}
            <div className='sticky top-16 z-10 max-h-max w-full bg-gradient-to-b from-white/90 to-white/95 py-2 fm:relative fm:top-0 lg:top-24 lg:z-auto lg:w-1/2 lg:py-0'>
              {/* Línea que conecta desde la línea vertical al contenido */}
              <div
                className={`absolute -left-8 top-12 h-0.5 w-8 bg-blue-600/50 dark:bg-blue-800/50 sm:-left-14 sm:w-14 lg:w-12 ${
                  index % 2 === 0 ? 'lg:-right-12 lg:left-auto' : 'lg:-left-12'
                }`}
              />

              <TimeLineSideInfo
                src={ex.company.logo}
                website={ex.company.website}
                alt={`Logo de ${ex.company.name}`}
                job={ex.role}
                company={ex.company.name}
                startDate={ex.startDate}
                endDate={ex.endDate}
                isReversed={index % 2 === 0}
              />
            </div>

            {/* Bloque de contenido */}
            <div className='w-full lg:mt-12 lg:w-1/2'>
              <TimeLineContent
                duration={calculateDuration(ex.startDate, ex.endDate)}
                workModel={ex.workModel}
                employmentType={ex.employmentType}
                responsibilities={ex.responsibilities}
                tools={ex.tools}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
