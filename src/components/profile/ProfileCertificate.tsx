import React from 'react';
import { cn } from '@/utils/cn';
import { CalendarIcon } from '@/components/common/icon/CalendarIcon';

export interface ProfileCertificateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  startContent?: React.ReactNode;
  courseName: string;
  courseCategory: string;
  date: string;
  width?: string;
  height?: string;
}

export const ProfileCertificate = ({
                                className,
                                startContent,
                                courseName,
                                courseCategory,
                                date,
                                width = '100%',
                                height = '100%',
                                ...props
                              }: ProfileCertificateProps) => {
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
    <span className="text-slate-500 text-sm flex items-center gap-2">
      <CalendarIcon size={12} />
      {date}
    </span>
    </div>
  </div>
  </div>
);
};
