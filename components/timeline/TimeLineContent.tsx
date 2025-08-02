import { BriefcaseBussiness, Calendar, Clock } from '@components/Icons';
import { dataTools } from '@data/DataTools';
import type { ToolId } from '@types';

interface TimeLineContentProps {
  duration: string;
  workModel: string;
  employmentType: string;
  responsibilities: string[];
  tools: ToolId[];
}

export function TimeLineContent(props: Readonly<TimeLineContentProps>) {
  const { duration, workModel, employmentType, responsibilities, tools } = props;

  const usedTools = dataTools.filter((tool) => tools.includes(tool.id));

  const groupedTools = Object.groupBy(usedTools, ({ category }) => category);

  return (
    <div className="space-y-2 text-slate-700 dark:text-gray-300">
      <div className="flex justify-around gap-4 divide-x-2 divide-slate-200 rounded-t-3xl border-x-2 border-t-2 border-slate-200 p-4 dark:divide-slate-700 dark:border-slate-700">
        <div className="flex w-1/3 flex-col items-center gap-1">
          <div className="button button--soft">
            <Clock />
          </div>
          <span className="text-xs font-semibold">DURACIÓN</span>
          <span className="font-bold">{duration}</span>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-1">
          <div className="button button--soft">
            <Calendar />
          </div>
          <span className="text-xs font-semibold">EMPLEO</span>
          <span className="font-bold">{employmentType}</span>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-1">
          <div className="button button--soft">
            <BriefcaseBussiness />
          </div>
          <span className="text-xs font-semibold">MODALIDAD</span>
          <span className="font-bold">{workModel}</span>
        </div>
      </div>
      <div>
        <ul className="custom-list text-sm">
          {responsibilities.map((item, index) => (
            <li
              key={index.toString()}
              className={`relative bg-blue-600/[0.08] p-2 text-slate-700 dark:text-gray-300 ${index === 0 ? 'rounded-t-lg' : ''} ${index === responsibilities.length - 1 ? 'rounded-b-3xl' : ''} `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center">
        {Object.entries(groupedTools).map(([category, toolsInCategory], index, array) => (
          <div key={category} className="flex items-center">
            <div className="flex gap-2">
              {toolsInCategory?.map((tool) => (
                <div key={tool.id} className="rounded-lg bg-blue-600/[0.08] p-2" title={tool.name}>
                  <tool.logo className="h-6 w-6" />
                </div>
              ))}
            </div>
            {/* Añadir separador visual entre grupos */}
            {index < array.length - 1 && (
              <div className="mx-2 h-6 w-px bg-gray-300 dark:bg-gray-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
