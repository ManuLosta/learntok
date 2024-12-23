import type { Meta, StoryObj } from '@storybook/react';

import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from './Drawer';
import { ModuleList } from '@/components/common/module-list/ModuleList';
import { Button } from '@/components/common/button/Button';
import { PathVariants } from '@/components/common/ModulesPathKids/PathVariants';

const meta = {
  title: 'Common/ModuleDrawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    viewport: { defaultViewport: 'iphone14' },
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderComponent = () => (
  <Drawer>
    <DrawerTrigger>
      <Button>Open drawer</Button>
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
);

const RenderComponentKids = () => (
  <Drawer>
    <DrawerTrigger>
      <Button>Open drawer</Button>
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
      <div className="px-6 pt-2">
        <PathVariants variant="green" moduleName="Module Name" />
        <PathVariants variant="green" moduleName="Module Name" />
        <PathVariants variant="green" moduleName="Module Name" />
        <PathVariants variant="blue" moduleName="Module Name" />
        <PathVariants variant="grey" moduleName="Module Name" />
        <PathVariants variant="grey" moduleName="Module Name" />
        <PathVariants variant="grey" moduleName="Module Name" />
      </div>
    </DrawerContent>
  </Drawer>
);

export const Default: Story = {
  render: RenderComponent,
};

export const Kids: Story = {
  render: RenderComponentKids,
};
