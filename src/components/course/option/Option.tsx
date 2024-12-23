import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const option = cva(
  'inline-flex items-center justify-center w-full px-4 py-2 rounded-[16px] transition-all duration-150 typography-body font-bold text-center break-words whitespace-normal active:scale-95',
  {
    variants: {
      variant: {
        unselected: [
          'bg-gray-200',
          'hover:bg-gray-300',
          'active:bg-gray-400'
        ],
        incorrect: [
          'bg-danger-500 text-background',
        ],
        correct: [
          'bg-success-500 text-background',
        ],
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  },
);

export interface OptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof option> {}

export const Option = ({
                         className,
                         children,
                         variant,
                         ...props
                       }: OptionProps) => (
  <button className={cn(option({ variant }), className)} {...props}>
    {children}
  </button>
);
