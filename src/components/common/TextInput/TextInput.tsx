import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textInputVariants = cva(
  'w-80 h-9 rounded-md gap-2 transition-all duration-150 typography-body',
  {
    variants: {
      variant: {
        default: [
          'text-gray-700 border border-slate-200 placeholder-defaultPlaceHolder',
        ],
        focused: [
          'bg-transparent border-2 border-primary-500 text-blue-500',
        ],
        error: [
          'bg-transparent text-danger-500 border border-danger-500',
        ],
        filled: [
          'bg-gray-200 placeholder-filledPlaceHolder',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textInputVariants> {
  label?: string;
  description?: string;
}

export const TextInput = ({
                            className,
                            label,
                            description,
                            variant,
                            ...props
                          }: TextInputProps) => (
  <div className="flex flex-col w-full">
    {label && (
      <label className={cn('text-sm font-medium', variant === 'error' ? 'text-danger-500' : 'text-gray-700')}>
        {label}
      </label>
    )}
    <div className="relative flex items-center w-full">
      <input
        className={cn(textInputVariants({ variant }), className, 'pl-2 pr-2')}
        {...props}
      />
    </div>
    {description && (
      <p className={cn('mt-1 text-xs', variant === 'error' ? 'text-danger-500' : 'text-gray-500')}>
        {description}
      </p>
    )}
  </div>
);