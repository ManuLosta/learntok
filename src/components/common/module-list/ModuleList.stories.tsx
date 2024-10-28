import type { Meta, StoryObj } from '@storybook/react';

import { ModuleList } from './ModuleList';

const meta = {
  title: 'Common/Module List',
  component: ModuleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['progress', 'completed', 'locked']
    }
  }
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
}

export const InProgress: Story = {
  args: {
    variant: 'progress',
    ...defaultProps
  },
};

export const Completed: Story = {
 args: {
   variant: 'completed',
   ...defaultProps
 }
}

export const Locked: Story = {
  args: {
    variant: 'locked',
    ...defaultProps
  }
}
