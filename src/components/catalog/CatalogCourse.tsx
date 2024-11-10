import React from 'react';
import { cn } from '@/utils/cn';

export interface CatalogCourseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  courseName: string;
  courseCategory: string;
  modulesInfo: string;
  width?: string;
  height?: string;
}

export const CatalogCourse = ({
                                className,
                                startContent,
                                endContent,
                                courseName,
                                courseCategory,
                                modulesInfo,
                                width = '100%',
                                height = '100%',
                                ...props
                              }: CatalogCourseProps) => {
  return (
    <div style={{ width, height }}>
      <div
        className={cn(
          'flex items-center gap-4 bg-white rounded-2xl p-4 transition-all duration-150',
          className
        )}
        {...props}
      >
        <div className="w-24 rounded-2xl h-16 flex-shrink-0 bg-gray-200 overflow-hidden">
          {startContent ? (
            startContent
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="font-bold text">{courseName}</h3>
          <p className="text-slate-500">{courseCategory}</p>
          <span className="text-slate-500 text-sm">{modulesInfo}</span>
        </div>

        {endContent && (
          <div className="ml-auto flex-shrink-0">{endContent}</div>
        )}
      </div>
    </div>
  );
};
