import React from 'react';
import { cn } from '@/utils/cn';
import { CalendarIcon } from '@/components/common/icon/CalendarIcon';

export interface ProfileCertificateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startContent?: React.ReactNode;
  courseName: string;
  courseCategory: string;
  date: string;
}

export const ProfileCertificate = ({
                                className,
                                startContent,
                                courseName,
                                courseCategory,
                                date,
                                ...props
                              }: ProfileCertificateProps) => {
  return (
    <div className={className} >
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
  <h3 className="typography-body-bold text">{courseName}</h3>
    <p className="typography-body text-slate-500">{courseCategory}</p>
    <span className="text-slate-500 typography-body-small flex items-center gap-2">
      <CalendarIcon size={12} />
      {date}
    </span>
    </div>
  </div>
  </div>
);
};
