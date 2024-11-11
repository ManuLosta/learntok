import React from 'react';
import { ProgressBar } from '../common/progress-bar/ProgressBar';

interface ProfileProgressProps {
  className?: string;
  completedModules: number;
  totalModules: number;
  width?: string;
  height?: string;
}

export const ProfileProgress = ({
                                  className,
                                  completedModules,
                                  totalModules,
                                }: ProfileProgressProps) => {
  const validCompletedModules = Math.max(0, completedModules);
  const validTotalModules = Math.max(0, totalModules);
  const finalCompletedModules = Math.min(validCompletedModules, validTotalModules);
  const progress = (finalCompletedModules / validTotalModules) * 100;

  return (
    <div className={className}>
      <div className="w-full h-full py-4 px-4 shadow-md rounded-3xl bg-slate-50 flex flex-col gap-2.5 justify-center items-start">
        <h2 className="typography-header-4 text">Progress</h2>
        <span className="typography-body-small text-slate-600">
          {finalCompletedModules} of {validTotalModules} modules completed
        </span>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};