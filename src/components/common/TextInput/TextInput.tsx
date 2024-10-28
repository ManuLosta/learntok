import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textInputVariants = cva(
  'w-80 h-9 rounded-lg typography-body transition-colors duration-150 outline-none', // outline-none added
  {
    variants: {
      variant: {
        default: [
          'text-gray-700 border border-slate-200',
          'focus:border-primary-500 focus:ring-1 focus:ring-primary-500', // Set focus styles explicitly for default variant
        ],
        filled: [
          'bg-gray-200 text-gray-700 border border-slate-200',
          'focus:border-primary-500 focus:ring-1 focus:ring-primary-500', // Set focus styles explicitly for filled variant
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
  isError?: boolean;
}

export const TextInput = ({
                            className,
                            label,
                            description,
                            variant = 'default',
                            isError = false,
                            placeholder,
                            ...props
                          }: TextInputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className={cn('text-sm font-medium', isError ? 'text-danger-500' : 'text-gray-700')}>
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        <input
          className={cn(
            textInputVariants({ variant }),
            className,
            'pl-2 pr-2 outline-none focus:placeholder-transparent', // Ensure no default focus outline
            isError && variant === 'default' && 'bg-background border-danger-500 ring-1 ring-danger-500 text-danger-500 focus:border-danger-500 focus:ring-danger-500', // Error styles for default variant
            isError && variant === 'filled' && 'bg-danger-200 border-danger-200 focus:border-danger-500 focus:ring-danger-500' // Error styles for filled variant
          )}
          placeholder={isError ? '' : placeholder}
          {...props}
        />
      </div>
      {description && (
        <p className={cn('mt-1 text-xs', isError ? 'text-danger-500' : 'text-gray-500')}>
          {description}
        </p>
      )}
    </div>
  );
};