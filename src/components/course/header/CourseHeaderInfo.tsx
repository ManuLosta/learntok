'use client';

import React, { useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { IconButton } from '@/components/common/button/IconButton';
import { ChevronLeft } from '@/components/common/icon/ChevronLeft';
import { SupergroupIcon } from '@/components/common/icon/SupergroupIcon';
import { cn } from '@/utils/cn';

export interface CourseHeaderInfoProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}

export default function CourseHeaderInfo({
  title,
  children,
  imageUrl,
}: CourseHeaderInfoProps) {
  const { scrollY } = useScroll();
  const [isAbsolute, setIsAbsolute] = useState(true);

  const headerHeight = useTransform(scrollY, [0, 200], ['285px', '56px']);
  const backgroundOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const titleY = useTransform(scrollY, [0, 200], ['278px', '0px']);
  const titleX = useTransform(scrollY, [0, 200], ['-8px', '46px']);
  const headerPadding = useTransform(scrollY, [0, 200], ['24px', '16px']);
  const childrenPadding = useTransform(scrollY, [0, 200], ['342px', '72px']);
  const childrenY = useTransform(scrollY, [0, 200], ['0px', '200px']);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsAbsolute(latest < 200);
  });

  return (
    <div className="relative">
      <motion.header
        className="fixed left-0 right-0 top-0 z-10 flex flex-col rounded-b-2xl bg-gray-200 bg-cover bg-center transition-all duration-300"
        style={{
          height: headerHeight,
          padding: headerPadding,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-b-2xl bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            opacity: backgroundOpacity,
          }}
        />
        <div
          className={cn(
            'z-10 flex h-full w-full items-start justify-between text-foreground',
            !isAbsolute && 'items-center justify-center',
          )}
        >
          <IconButton>
            <ChevronLeft size={24} />
          </IconButton>
          <motion.h1
            className={cn(
              'typography-header-3 absolute transform text-foreground',
              isAbsolute
                ? 'absolute'
                : 'typography-header-5 relative flex-grow',
            )}
            style={{
              y: isAbsolute ? titleY : 0,
              x: isAbsolute ? titleX : 0,
            }}
          >
            {title}
          </motion.h1>
          <IconButton>
            <SupergroupIcon size={24} />
          </IconButton>
        </div>
      </motion.header>
      <motion.div
        className="relative z-0"
        style={{
          y: childrenY,
          paddingTop: childrenPadding,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
