import type { Meta, StoryObj } from '@storybook/react';

import { HomeIcon } from './HomeIcon';

const meta = {
  title: 'Icon/HomeIcon',
  component: HomeIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HomeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
    color: "#000000"
  }
};