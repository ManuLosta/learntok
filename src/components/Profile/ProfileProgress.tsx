import React from 'react';
import { ProgressBar } from '../common/progress-bar/ProgressBar';

interface ProfileProgressProps {
  completedModules: number;
  totalModules: number;
}

export const ProfileProgress = ({
                                  completedModules,
                                  totalModules,
                                }: ProfileProgressProps) => {
  const validCompletedModules = Math.max(0, completedModules);

  const validTotalModules = Math.max(0, totalModules);

  const finalCompletedModules = Math.min(validCompletedModules, validTotalModules);

  const progress = (finalCompletedModules / validTotalModules) * 100;

  return (
    <div className="w-[364px] h-[124px] py-2 px-4 shadow-md rounded-3xl bg-slate-50 flex flex-col gap-2.5 justify-center items-start">
      <h2 className="text-2xl font-semibold font-heading text-gray-800">Progress</h2>
      <span className="block font-sans text-xs text-slate-600">
        {finalCompletedModules} of {validTotalModules} modules completed
      </span>
      <ProgressBar progress={progress} />
    </div>
  );
};