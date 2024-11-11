import React from 'react';
import { cn } from '@/utils/cn';

export interface CategoryLabelProps
  extends React.HTMLAttributes<HTMLDivElement>{
  startContent?: React.ReactNode;
  color?: string;
  endContent?: React.ReactNode;
}

export const CategoryLabel = ({
  className,
  children,
  startContent,
  color,
  endContent,
  ...props
}: CategoryLabelProps) => (
  <div
    style={{ backgroundColor: color }}
    className={cn('flex items-center justify-center px-2 py-1 rounded-full shadow-custom-2xl typography-body-small transition-all duration-150 text-foreground', className)} {...props}>
    {startContent && startContent}
    {children}
    {endContent && endContent}
  </div>
);
