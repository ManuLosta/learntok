import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const messageVariants = cva(
  'flex w-fit min-w-[100px] min-h-[40px] items-center px-4 py-2 rounded-2xl gap-2 transition-all typography-message',
  {
    variants: {
      variant: {
        received: [
          'bg-gray-500 text-background',
          'disabled:bg-gray-300 disabled:text-gray-600',
        ],
        sent: [
          'bg-primary-500 text-background',
          'disabled:bg-gray-300 disabled:text-gray-600',
        ],
      },
    },
    defaultVariants: {
      variant: 'received',
    },
  },
);

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {}

export const Message = ({ className, children, variant, ...props }: MessageProps) => (
  <div className={variant === 'sent' ? 'flex justify-end' : ''}>
    <div className={cn(messageVariants({ variant }), className)} {...props}>
      {children}
    </div>
  </div>
);
