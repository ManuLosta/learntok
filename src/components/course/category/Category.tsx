import React from 'react';
import { cn } from '@/utils/cn';

export interface CategoryProps extends React.HTMLProps<HTMLDivElement> {
  label: string;
  color: string;
  icon: React.ReactNode;
}

export const Category = ({
                           label,
                           color,
                           icon,
                           className,
                           ...props
                         }: CategoryProps) => (
  <div
    className={cn('flex flex-col items-center gap-1 p-2 rounded-lg w-[80px] h-[80px]', className)}
    style={{ backgroundColor: color }}
    {...props}
  >
    {icon}
    <div className="typography-body-small text-foreground">{label}</div>
  </div>
);

