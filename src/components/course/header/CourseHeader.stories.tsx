import type { Meta, StoryObj } from '@storybook/react';

import { CourseHeader } from './CourseHeader';
import { ChevronLeft } from '@/components/common/icon/ChevronLeft';
import { MenuIcon } from '@/components/common/icon/MenuIcon';
import { ProgressBar } from '@/components/common/progress-bar/ProgressBar';
import { ProgressBarIcon } from '@/components/common/progress-bar/ProgressBarIcon';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/common/drawer/Drawer';
import { ModuleList } from '@/components/common/module-list/ModuleList';

const meta = {
  title: 'Course/Header',
  component: CourseHeader,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'iphone14' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CourseHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    courseName: 'Course Name',
    moduleName: 'Module Name',
    startContent: <ChevronLeft size={30} className="text-foreground" />,
    endContent: <MenuIcon size={30} className="text-foreground" />,
    children: (
      <div className="flex gap-2">
        <ProgressBar progress={50} />
        <ProgressBarIcon></ProgressBarIcon>
        <ProgressBarIcon></ProgressBarIcon>
        <ProgressBarIcon></ProgressBarIcon>
      </div>
    ),
  },
};

export const WithDrawer: Story = {
  args: {
    courseName: 'Course Name',
    moduleName: 'Module Name',
    startContent: <ChevronLeft size={30} className="text-foreground" />,
    endContent: (
      <Drawer>
        <DrawerTrigger>
          <MenuIcon size={30} className="text-foreground" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <div className="flex flex-col px-2">
              <h1 className="typography-header-4">Modules</h1>
              <p className="typography-body-bold text-gray-500">
                17 of 53 completed
              </p>
            </div>
          </DrawerHeader>
          <div className="flex flex-col px-4">
            <ModuleList
              description="This is an example description"
              documents={1}
              duration="3 min"
              questions={3}
              title="Module name"
              variant="completed"
              videos={2}
            />
            <ModuleList
              description="This is an example description"
              documents={1}
              duration="3 min"
              questions={3}
              title="Module name"
              variant="completed"
              videos={2}
            />
            <ModuleList
              description="This is an example description"
              documents={1}
              duration="3 min"
              questions={3}
              title="Module name"
              variant="progress"
              videos={2}
            />
            <ModuleList
              description="This is an example description"
              documents={1}
              duration="3 min"
              questions={3}
              title="Module name"
              variant="locked"
              videos={2}
            />
            <ModuleList
              description="This is an example description"
              documents={1}
              duration="3 min"
              questions={3}
              title="Module name"
              variant="locked"
              videos={2}
            />
          </div>
        </DrawerContent>
      </Drawer>
    ),
    children: (
      <div className="flex gap-2">
        <ProgressBar progress={50} />
        <ProgressBarIcon></ProgressBarIcon>
        <ProgressBarIcon></ProgressBarIcon>
        <ProgressBarIcon></ProgressBarIcon>
      </div>
    ),
  },
};
