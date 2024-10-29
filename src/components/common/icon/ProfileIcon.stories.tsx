import type { Meta, StoryObj } from '@storybook/react';

import { ProfileIcon } from './ProfileIcon';

const meta = {
  title: 'Icon/ProfileIcon',
  component: ProfileIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProfileIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
    color: "#000000"
  }
};