'use client';

import { Github, Globe } from '@components/Icons';
import { SectionButton } from '@components/SectionButton';
import SectionContent from '@components/SectionContent';
import SectionTitle from '@components/SectionTitle';
import AppWindow from '@components/wireframes/AppWindow';
import GitHubWireframe from '@components/wireframes/GitHub';
import MedicalRecordWireframe from '@components/wireframes/MedicalRecordWireframe';
import { useState } from 'react';

function HistorialProject() {
  const [currentTab, setCurrentTab] = useState<'demo' | 'github'>('demo');

  return (
    <>
      <SectionTitle
        title='Historial'
        caption='historial-plus'
        description='Sistema web para la gestión de historiales médicos, diseñado para permitir a los pacientes
acceder a sus registros clínicos, incluyendo imágenes y documentos médicos.'
        button={{ title: 'Ver proyecto', href: '/projects/historial' }}
      />
      <SectionContent>
        <div className='flex lg:gap-12'>
          <div className='hidden flex-1 flex-col gap-3 pt-8 lg:flex'>
            <div className='flex flex-col gap-3'>
              <SectionButton
                title='Live Demo'
                icon={<Globe className='my-2 h-16 w-16' />}
                description='Puedes probar el sistema en vivo y ver cómo funciona.'
                active={currentTab === 'demo'}
                onClick={() => setCurrentTab('demo')}
              />
              <SectionButton
                title='Disponible en GitHub'
                icon={<Github className='my-2 h-16 w-16' />}
                description='El código fuente está disponible en GitHub para que puedas contribuir y analizarlo.'
                active={currentTab === 'github'}
                onClick={() => setCurrentTab('github')}
              />
            </div>
          </div>
          <div className='w-full lg:w-auto'>
            <div className='-mt-[41px]'>
              <div className='h-[400px] w-full lg:h-[400px] lg:w-[600px]'>
                <AppWindow
                  type='browser'
                  browserTabs={[
                    {
                      icon: <Globe className='h-4 w-4' />,
                      title: 'https://historial.luislh.dev',
                      isActive: currentTab === 'demo',
                      onClick: () => setCurrentTab('demo'),
                    },
                    {
                      icon: <Github className='h-4 w-4' />,
                      title: 'luislh-dev/HistorialPlus',
                      isActive: currentTab === 'github',
                      onClick: () => setCurrentTab('github'),
                    },
                  ]}
                >
                  {currentTab === 'demo' && <MedicalRecordWireframe />}
                  {currentTab === 'github' && (
                    <GitHubWireframe
                      author='luislh-dev'
                      license='MIT'
                      repository='HistorialPlus'
                      description='Sistema web para la gestión de historiales médicos, diseñado para permitir a los pacientes acceder a sus registros clínicos, incluyendo imágenes y documentos médicos.'
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default HistorialProject;
