import type { Meta, StoryObj } from '@storybook/react';

import { CheckIcon } from './CheckIcon';

const meta = {
  title: 'Icon/CheckIcon',
  component: CheckIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
    color: "#000000"
  }
};