import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const optionVariants = cva(
  'flex items-center justify-center flex-col rounded-xl gap-2 transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        correct: 'bg-success-500',
        incorrect: 'bg-danger-500',
        neutral: 'bg-slate-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ChoiceOptionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof optionVariants> {
  children: React.ReactNode;
}

export const ChoiceOption = ({
                               className,
                               children,
                               ...props
                             }: ChoiceOptionProps) => {
  const [variant, setVariant] = useState('default');

  const handleClick = () => {
    // Cambiar a `correct` o `incorrect` de forma aleatoria
    const newVariant = Math.random() > 0.5 ? 'correct' : 'incorrect';
    setVariant(newVariant);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        optionVariants({ variant }),
        'w-[135px] max-h-[200px] p-[57px_43px] text-center font-bold text-lg leading-[130%] text-[var(--text,#152951)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
