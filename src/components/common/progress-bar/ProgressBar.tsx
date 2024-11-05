import React from 'react';
import { cn } from '@/utils/cn';

export interface ProgressBarProps extends React.ComponentProps<'div'> {
  progress: number;
}

export const ProgressBar = ({ progress, ...props }: ProgressBarProps) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="w-full bg-gray-200 h-4 rounded-full overflow-hidden"
      {...props}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          clampedProgress === 100 ? 'bg-success-500' : 'bg-primary-500',
          'h-full transition-all duration-300 ease-out rounded-full'
        )}
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};
