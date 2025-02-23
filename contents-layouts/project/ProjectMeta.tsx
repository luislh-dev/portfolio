import { Github, Globe, Npm } from '@components/Icons';

interface ProjectMetaProps {
  githubUrl?: string;
  npmUrl?: string;
  demoUrl?: string;
  landingUrl?: string;
}

function ProjectMeta({ githubUrl, npmUrl, demoUrl, landingUrl }: ProjectMetaProps) {
  if (!githubUrl && !npmUrl && !demoUrl && !landingUrl) return null;

  return (
    <div className='content-wrapper mb-10'>
      <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-500'>
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='button button--soft'
          >
            <Github className='h-5 w-5' />
            GitHub
          </a>
        )}
        {npmUrl && (
          <a
            href={npmUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='button button--soft'
          >
            <Npm className='h-5 w-5' />
            NPM
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='button button--soft'
          >
            <Globe className='h-5 w-5' />
            Demo
          </a>
        )}
        {landingUrl && (
          <a
            href={landingUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='button button--soft'
          >
            <Globe className='h-5 w-5' />
            Landing
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectMeta;
