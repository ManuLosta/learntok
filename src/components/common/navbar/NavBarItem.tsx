import { cn } from '@/utils/cn';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const navButtonVariants = cva(
  'flex flex-col items-center justify-center px-4 py-2 gap-1 transition-all duration-150',
  {
    variants: {
      activeTab: {
        none: ['text-slate-300'],
        active: ['text-primary-500'],
      },
    },
    defaultVariants: {
      activeTab: 'none',
    },
  },
);

export interface NavButtonProps extends VariantProps<typeof navButtonVariants> {
  label: string;
  icon: React.ReactNode;
}

export const NavBarItem = ({ label, icon, activeTab }: NavButtonProps) => (
  <div className={cn(navButtonVariants({ activeTab }))}>
    {icon}
    <span className="typography-body-small">{label}</span>
  </div>
);