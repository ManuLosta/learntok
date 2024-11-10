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
    <div className="w-96 p-4 shadow-md rounded-3xl bg-slate-50">
      <h2 className="text-2xl font-semibold font-heading text-gray-800 mb-2">Progress</h2>
      <span className="block text-xs text-slate-600 mb-4">
        {finalCompletedModules} of {validTotalModules} modules completed
      </span>
      <ProgressBar progress={progress} />
    </div>
  );
};