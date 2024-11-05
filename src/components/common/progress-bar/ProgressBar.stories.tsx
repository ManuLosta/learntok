import React from 'react';
import { ProgressBar, ProgressBarProps } from '@/components/common/progress-bar/ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      description: 'Progress value between 0 and 100',
    },
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template= (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    progress: 50,
  }
}

export const Completed: Story = {
  render: Template,
  args: {
    progress: 100,
  }
}




