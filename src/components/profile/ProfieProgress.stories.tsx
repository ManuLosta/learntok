import type { Meta, StoryObj } from '@storybook/react';
import { ProfileProgress } from './ProfileProgress';

const meta = {
  title: 'Profile/ProfileProgress',
  component: ProfileProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    completedModules: {
      control: 'number',
      description: 'Number of modules completed',
    },
    totalModules: {
      control: 'number',
      description: 'Total number of modules',
    },
    width: {
      control: 'text',
      description: 'Width of the component',
    },
  },
  args: {
    completedModules: 3,
    totalModules: 5,
    width: '100%', // Default width
  },
} satisfies Meta<typeof ProfileProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    completedModules: 0,
    totalModules: 5,
    width: '364px',
    height: '124px',
  },
};

export const InProgress: Story = {
  args: {
    completedModules: 3,
    totalModules: 5,
    width: '364px',
    height: '124px',
  },
};

export const Complete: Story = {
  args: {
    completedModules: 5,
    totalModules: 5,
    width: '364px',
    height: '124px',
  },
};
