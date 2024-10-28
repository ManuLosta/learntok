import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'flex items-center justify-center px-4 py-2 rounded-2xl gap-2 transition-all duration-150 typography-button',
  {
    variants: {
      variant: {
        default: [
          'bg-primary-500 text-background',
          'disabled:bg-gray-300 disabled:text-gray-600',
          'active:bg-primary-800',
        ],
        ghost: [
          'bg-primary-100 text-primary-700',
          'disabled:bg-gray-200 disabled:text-gray-400',
          'active:bg-primary-300',
        ],
        outlined: [
          'bg-transparent text-primary-500 border-primary-500 border-2 px-3.5 py-1.5',
          'disabled:border-gray-400 disabled:text-gray-400',
          'active:border-primary-800 active:text-primary-800',
        ],
        danger: [
          'bg-danger-500 text-background',
          'disabled:bg-gray-300 disabled:text-gray-600',
          'active:bg-danger-700',
        ],
        'danger-outlined': [
          'bg-transparent border-danger-500 border-2 text-danger-500 px-3.5 py-1.5',
          'disabled:border-gray-400 disabled:text-gray-400',
          'active:border-danger-700 active:text-danger-700',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Button = ({
  className,
  children,
  variant,
  startContent,
  endContent,
  ...props
}: ButtonProps) => (
  <button className={cn(buttonVariants({ variant }), className)} {...props}>
    {startContent && startContent}
    {children}
    {endContent && endContent}
  </button>
);
