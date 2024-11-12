import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import React from 'react';

const progressBarIconVariants = cva(
  'rounded-full h-4 w-4',
  {
    variants: {
      variant: {
        'default': 'bg-gray-200',
        'progress': 'bg-primary-500',
        'completed': 'bg-success-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ProgressBarIconProps extends VariantProps<typeof progressBarIconVariants> {
  children?: React.ReactNode;
}

export const ProgressBarIcon = ({ variant, children }: ProgressBarIconProps) => {
  return (
    <div className={cn(progressBarIconVariants({ variant }))}>
      {children}
    </div>
  );
};