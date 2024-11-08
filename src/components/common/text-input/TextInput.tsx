import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textInputVariants = cva(
  'p-2 rounded-lg typography-body transition-colors duration-150 outline-none',
  {
    variants: {
      variant: {
        default: [
          'text-gray-700 border border-slate-200',
          'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
        ],
        filled: [
          'bg-gray-200 text-gray-700 border border-slate-200',
          'focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
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
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const TextInput = ({
                            className,
                            label,
                            description,
                            variant = 'default',
                            isError = false,
                            placeholder,
                            startContent,
                            endContent,
                            ...props
                          }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          className={cn(
            'typography-body',
            isError && 'text-danger-500'
          )}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {startContent && (
          <div className="absolute left-2 flex items-center">{startContent}</div>
        )}
        <input
          className={cn(
            textInputVariants({ variant }),
            className,
            'pl-2 pr-2 outline-none focus:placeholder-transparent',
            startContent && 'pl-8',
            endContent && 'pr-8',
            isError &&
            variant === 'default' &&
            'border-danger-500 bg-background text-danger-500 ring-1 ring-danger-500 focus:border-danger-500 focus:ring-danger-500',
            isError &&
            variant === 'filled' &&
            'border-danger-200 bg-danger-200 focus:border-danger-500 focus:ring-danger-500',
          )}
          placeholder={isError ? '' : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isFocused && endContent && (
          <div className="absolute right-2 flex items-center">{endContent}</div>
        )}
      </div>
      {description && (
        <p
          className={cn(
            'typography-body-small',
            isError && 'text-danger-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
