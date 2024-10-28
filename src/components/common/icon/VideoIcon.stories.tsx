import type { Meta, StoryObj } from '@storybook/react';

import { VideoIcon } from './VideoIcon';

const meta = {
  title: 'Icon/VideoIcon',
  component: VideoIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VideoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#000000",
    size: 16
  }
};