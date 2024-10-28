import type { Meta, StoryObj } from '@storybook/react';

import { ChevronUpIcon } from './ChevronUpIcon';

const meta = {
  title: 'icon/ChevronUpIcon',
  component: ChevronUpIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChevronUpIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
    color: '#000000',
  },
};
