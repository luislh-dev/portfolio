'use client';

import { Github, Globe } from '@components/Icons';
import { SectionButton } from '@components/SectionButton';
import SectionContent from '@components/SectionContent';
import SectionTitle from '@components/SectionTitle';
import AppWindow from '@components/wireframes/AppWindow';
import GenericLandingWireframe from '@components/wireframes/GenericLandingWireframe';
import GitHubWireframe from '@components/wireframes/GitHub';
import { useState } from 'react';

function TodoAppProject() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'github'>('landing');

  return (
    <>
      <SectionTitle
        title='Todo App'
        caption='todo-app'
        description='Aplicación web para la gestión de tareas, diseñada para permitir a los usuarios crear, editar y eliminar tareas.'
        button={{ title: 'Ver proyecto', href: '/projects/todo-app' }}
      />
      <SectionContent>
        <div>
          <div className='flex lg:gap-12'>
            <div className='hidden flex-1 flex-col gap-3 pt-8 lg:flex'>
              <div className='flex flex-col gap-3'>
                <SectionButton
                  title='Landing Page'
                  icon={<Globe className='my-2 h-16 w-16' />}
                  description='Puedes ver la landing page del proyecto.'
                  active={currentTab === 'landing'}
                  onClick={() => setCurrentTab('landing')}
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
                        title: 'https://todo-app.luislh.dev',
                        isActive: currentTab === 'landing',
                        onClick: () => setCurrentTab('landing'),
                      },
                      {
                        icon: <Github className='h-4 w-4' />,
                        title: 'luislh-dev/todo-app',
                        isActive: currentTab === 'github',
                        onClick: () => setCurrentTab('github'),
                      },
                    ]}
                  >
                    {currentTab === 'landing' && <GenericLandingWireframe name='TodoApp' />}
                    {currentTab === 'github' && (
                      <GitHubWireframe
                        author='luislh-dev'
                        license='MIT'
                        repository='Todo-App'
                        description='Aplicación web para la gestión de tareas, diseñada para permitir a los usuarios crear, editar y eliminar tareas.'
                      />
                    )}
                  </AppWindow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default TodoAppProject;
