import type { Meta, StoryObj } from '@storybook/react';

import { ModuleList, ModuleListProps } from './ModuleList';
import { JSX } from 'react';

const meta = {
  title: 'Common/ModuleList',
  component: ModuleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['progress', 'completed', 'locked'],
    },
  },
} satisfies Meta<typeof ModuleList>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  title: 'Module name',
  duration: '3 min',
  description: 'This is an example description',
  videos: 2,
  documents: 1,
  questions: 3,
};

const RenderComponent = (args: JSX.IntrinsicAttributes & ModuleListProps) => (
  <div className="bg-white min-w-[300px] max-w-lg">
    <ModuleList {...args} />
  </div>
);

export const InProgress: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'progress',
    ...defaultProps
  },
};

export const Completed: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'completed',
    ...defaultProps
  },
};

export const Locked: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'locked',
    ...defaultProps
  },
};
