import React from 'react';
import { NavBarItem } from './NavBarItem';

export interface NavBarProps {
  items: {
    label: string;
    icon: React.ReactNode;
  }[];
  activeIndex: number;
}

export const NavBar = ({ items, activeIndex }: NavBarProps) => {
  return (
    <div className="flex w-[390px] justify-around rounded-t-lg bg-slate-50 py-4">
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