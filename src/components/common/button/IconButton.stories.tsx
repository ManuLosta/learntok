import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';
import { HomeIcon } from '@/components/common/icon/HomeIcon';

const meta = {
  title: 'Common/IconButton',
  component: IconButton,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <IconButton>
    <HomeIcon size={16} />
  </IconButton>
};