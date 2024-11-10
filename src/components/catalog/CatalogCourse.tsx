import React from 'react';
import { cn } from '@/utils/cn';

export interface CatalogCourseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  courseName: string;
  courseCategory: string;
  modulesInfo: string;
}

export const CatalogCourse = ({
  className,
  startContent,
  endContent,
  courseName,
  courseCategory,
  modulesInfo,
  ...props
}: CatalogCourseProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-2xl bg-white p-4 transition-all duration-150 w-full',
        className,
      )}
      {...props}
    >
      <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-200">
        {startContent ? (
          startContent
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      <div className="flex flex-grow flex-col">
        <h3 className="font-bold text">{courseName}</h3>
        <p className="text-slate-500">{courseCategory}</p>
        <span className="text-sm text-slate-500">{modulesInfo}</span>
      </div>

      {endContent && <div className="ml-auto flex-shrink-0">{endContent}</div>}
    </div>
  );
};
