import React from 'react';
import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ProgressBar } from '@/components/common/progress-bar/ProgressBar';
import { CategoryLabel } from '@/components/course/category/CategoryLabel';

const courseItemVariants = cva(
  'flex flex-col items-center justify-between rounded-xl w-[221px] typography-body-small transition-all duration-150 bg-background',
  {
    variants: {
      variant: {
        default: ['text-foreground bg-slate-50'],
        on_progress: ['text-foreground bg-slate-50'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CourseItemProps extends
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof courseItemVariants> {
  courseName: string;
  labelName: string;
  labelColor: string;
  path: string;
  completedModules?: number;
  totalModules?: number;
}

export const CourseItem = ({
                             className,
                             courseName,
                             labelName,
                             labelColor,
                             path,
                             completedModules = 0,
                             totalModules = 1,
                             variant,
                             ...props
                           }: CourseItemProps) => {
  const progress = (completedModules / totalModules) * 100;

  return (
    <div className={cn(courseItemVariants({ variant }), className)} {...props}>
      <div
        style={{
          backgroundImage: `url(${path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="flex flex-col items-start gap-2 p-2 w-full h-[106px] rounded-t-xl">
        <CategoryLabel color={labelColor}>{labelName}</CategoryLabel>
      </div>
      <div className="flex flex-col items-start w-full gap-[2px] p-2">
        <span className="typography-body font-semibold text-foreground">{courseName}</span>
        {variant == 'on_progress' && (
          <>
            <span className="typography-body-small text-slate-600">{completedModules} of {totalModules} modules completed</span>
            <ProgressBar progress={progress}/>
          </>
        )}
      </div>
    </div>
  );
};
