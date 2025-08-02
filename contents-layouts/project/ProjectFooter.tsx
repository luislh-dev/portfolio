interface ProjectFooterProps {
  githubUrl?: string;
}

function ProjectFooter({ githubUrl }: Readonly<ProjectFooterProps>) {
  if (!githubUrl) return null;

  return (
    <div className="mt-24 flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-500 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        <div>
          ¿Tienes algún comentario?
          <div>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link">
              Abre un issue/PR aquí.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFooter;
