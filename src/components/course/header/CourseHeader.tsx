import React from 'react';

export interface CourseHeaderProps {
  courseName: string;
  moduleName: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  children?: React.ReactNode;
}

export const CourseHeader = ({
  courseName,
  moduleName,
  startContent,
  endContent,
  children,
}: CourseHeaderProps) => {
  return (
    <div className="bg-slate-50 rounded-b-2xl py-2 px-4">
      <div className="flex items-center gap-4">
        {startContent && startContent}
        <div className="flex flex-col flex-grow my-2">
          <h1 className="typography-header-5 font-bold text-foreground">{courseName}</h1>
          <p className="typography-body-small font-bold text-gray-500">{moduleName}</p>
        </div>
        {endContent && endContent}
      </div>
      {children}
    </div>
  );
};
