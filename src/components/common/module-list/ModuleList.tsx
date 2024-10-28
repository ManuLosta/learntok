import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@/components/common/icon/ChevronDownIcon';
import { CheckIcon } from '@/components/common/icon/CheckIcon';
import { Button } from '@/components/common/button/Button';
import { VideoIcon } from '@/components/common/icon/VideoIcon';
import { LockIcon } from '@/components/common/icon/LockIcon';
import { QuestionIcon } from '@/components/common/icon/QuestionIcon';
import { DocumentIcon } from '@/components/common/icon/DocumentIcon';

export interface ModuleListProps {
  variant: 'completed' | 'locked' | 'progress',
  title: string,
  duration: string,
  description: string,
  videos?: number,
  questions?: number,
  documents?: number,
}

export const ModuleList = ({
                             duration,
                             title,
                             description,
                             variant,
                             videos = 0,
                             questions = 0,
                             documents = 0,
                           }: ModuleListProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-2">
      <div
        className="flex min-w-[300px] cursor-pointer items-center gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        {variant == 'completed' && (
          <div className="h-[24px] w-[24px] rounded-full bg-success-500 flex items-center justify-center">
            <CheckIcon size={12} className="text-foreground" />
          </div>
        )}
        {variant == 'progress' && (
          <div className="h-[24px] w-[24px] rounded-full bg-primary-500"></div>
        )}
        {variant == 'locked' && (
          <div className="h-[24px] w-[24px] rounded-full bg-slate-200 flex items-center justify-center">
            <LockIcon size={12} className="text-foreground" />
          </div>
        )}
        <div className="flex flex-grow flex-col">
          <p className="typography-body-bold">{title}</p>
          <p className="typography-body text-slate-500">{duration}</p>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon size={12} className="text-foreground" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2"
          >
            <p className="typography-body">{description}</p>
            <div className="flex items-center justify-end gap-2">
              <div className="flex items-center gap-4 p-2">
                {videos != 0 && (
                  <div className="flex items-center gap-2">
                    <p className="typography-body-small text-slate-500">{videos}</p>
                    <VideoIcon size={16} className="text-slate-500" />
                  </div>
                )}
                {documents != 0 && (
                  <div className="flex items-center gap-2">
                    <p className="typography-body-small text-slate-500">{questions}</p>
                    <DocumentIcon size={16} className="text-slate-500" />
                  </div>
                )}
                {questions != 0 && (
                  <div className="flex items-center gap-2">
                    <p className="typography-body-small text-slate-500">{questions}</p>
                    <QuestionIcon size={16} className="text-slate-500" />
                  </div>
                )}
              </div>
              <Button className="rounded-full ml-auto px-2 py-1" disabled={variant == 'locked'}>Go</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
