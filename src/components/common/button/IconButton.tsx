import React from 'react';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton  = ({children, ...props} : IconButtonProps) => (
  <button className="flex items-center justify-center rounded-full bg-gray-200 p-2 active:bg-gray-300 transition-all" {...props}>
    {children}
  </button>
)