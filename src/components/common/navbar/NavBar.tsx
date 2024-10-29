import React from 'react';
import { NavBarItem } from './NavBarItem';
import { cn } from '@/utils/cn';

export interface NavBarProps extends React.HTMLProps<HTMLDivElement> {
  items: {
    label: string;
    icon: React.ReactNode;
  }[];
  activeIndex: number;
}

export const NavBar = ({ items, activeIndex, className, ...props }: NavBarProps) => {
  return (
    <div className={cn("flex justify-around rounded-t-lg bg-slate-50 py-4", className)} {...props}>
      {items.map((item, index) => (
        <NavBarItem
          key={index}
          label={item.label}
          icon={item.icon}
          activeTab={index === activeIndex ? 'active' : 'none'}
        />
      ))}
    </div>
  );
};