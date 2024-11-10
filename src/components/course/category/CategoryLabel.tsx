import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const categoryLabelVariants = cva(
  'flex items-center justify-center px-2 py-1 rounded-full shadow-custom-2xl typography-body-small transition-all duration-150 text-foreground',
  {
    variants: {
      variant: {
        blue: ['text-foreground bg-primary-100'],
        gray: ['text-foreground bg-slate-100'],
        orange: ['text-foreground bg-orange'],
        green: ['text-foreground bg-green'],
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  }
);

export interface CategoryLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof categoryLabelVariants> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const CategoryLabel = ({
  className,
  children,
  variant,
  startContent,
  endContent,
  ...props
}: CategoryLabelProps) => (
  <div className={cn(categoryLabelVariants({ variant }), className)} {...props}>
    {startContent && startContent}
    {children}
    {endContent && endContent}
  </div>
);
