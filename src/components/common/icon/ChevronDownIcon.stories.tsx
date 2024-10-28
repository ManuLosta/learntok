import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDownIcon } from './ChevronDownIcon';

const meta = {
  title: 'icon/ChevronDownIcon',
  component: ChevronDownIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChevronDownIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
    color: '#000000',
  },
};
