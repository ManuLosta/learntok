import type { Meta, StoryObj } from '@storybook/react';

import { LockIcon } from './LockIcon';

const meta = {
  title: 'Icon/LockIcon',
  component: LockIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LockIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
    color: "#000000"
  }
};