import React from 'react';
import { cn } from '@/utils/cn';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton  = ({children, className, ...props} : IconButtonProps) => (
  <button className={cn("flex items-center justify-center rounded-full bg-gray-200 p-2 active:bg-gray-300 transition-all", className)} {...props}>
    {children}
  </button>
)