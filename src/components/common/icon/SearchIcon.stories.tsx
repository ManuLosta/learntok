import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

const meta = {
  title: 'Icon/SearchIcon',
  component: SearchIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
    color: "#000000"
  }
};